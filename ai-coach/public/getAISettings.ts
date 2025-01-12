import { db, ObjectId, Context, Handler, PRIV, param, Types,  PERM, } from 'hydrooj';
const coll = db.collection('ai_coach_settings');
db.ensureIndexes(coll, { key: { domainId: 1 }, unique: true });

 async function initializeCollection() {
    try {
        await coll.dropIndex('uid_1');
    } catch (e) {
        // Index might not exist, ignore error
    }
    await db.ensureIndexes(coll, { key: { domainId: 1 }, unique: true });
}

initializeCollection().catch(console.error);


// Helper functions similar to swiper addon
export async function getAISettings(domainId: string) {
    const data = await coll.findOne({ domainId });
    if (!data) {
        // Create new settings document with domainId
        const _id = new ObjectId(); // Explicitly create new ObjectId
        const settings = {
            _id,
            domainId,
            useAI: true,
            count: 10,
            key: '',
            url: '',
            model: '',
        };
        
        await coll.insertOne(settings);
        return settings;
    }
    
    return {
        useAI: data.useAI,
        count: data.count,
        key: data.key,
        url: data.url,
        model: data.model
    };
}

export async function setAICredential(domainId: string, useAI: Boolean, count: number, key: string, url: string, model: string) {
    await coll.updateOne(
        {  domainId  }, 
        {
            $set: {
                useAI,
                count,
                key,
                url, 
                model
            }
        },
        { upsert: true }
    );
}