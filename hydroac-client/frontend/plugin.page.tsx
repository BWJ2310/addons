import {
        _ as c,
        ActionDialog as d,
        ConfirmDialog as f,
        InfoDialog as s,
        request as a,
        tpl as e,
      } from "@hydrooj/ui-default";
      Object.assign(window.externalModules, {
        "monaco-c@lsp": `${UiContext.cdn_prefix}lsp-a2f6d0c5.js`,
        "monaco-cpp@lsp": `${UiContext.cdn_prefix}lsp-a2f6d0c5.js`,
        "monaco-java@lsp": `${UiContext.cdn_prefix}lsp-a2f6d0c5.js`,
        "monaco-python@lsp": `${UiContext.cdn_prefix}lsp-a2f6d0c5.js`,
      });
      var i = `https://hydro.ac/lsp-subscription?host=${encodeURIComponent(
        'https://hydro.ac/p/H1001'
      )}`;
      async function y(n = !1) {
        let o = {
                "_id": "hydro.ac",
                "plan": "standard",
                "end": "2099-01-01T00:00:00.000Z",
                "maxUsers": 100,
                "version": 1
            };
        console.log(o);
        let p = o.plan && new Date(o.end) > new Date(),
          l = !o.plan;
        if (+o.version > 1)
          return (
            new s({
              $body:
                e.typoMsg(`\u5F53\u524D Hydro \u5B9E\u4F8B\u4F7F\u7528\u7684\u7EC4\u4EF6\u7248\u672C\u8FC7\u4F4E\uFF0C\u8BF7\u4F7F\u7528\u4E0B\u8FF0\u547D\u4EE4\u5347\u7EA7\u540E\u91CD\u542F\uFF1A
      hydrooj install https://hydro.ac/hydroac-client-0.0.${o.version}.tgz`),
            }).open(),
            !1
          );
        if (p) return localStorage.setItem("lsp-ignore", "0"), !0;
        if (!n) return !1;
        if (l) {
          let t =
            `Hydro \u5B98\u65B9\u63D0\u4F9B\u4E86\u53EF\u516C\u5F00\u4F7F\u7528\u7684\u5728\u7EBF IDE \u4EE3\u7801\u8865\u5168\u529F\u80FD\uFF08\u6682\u4EC5\u652F\u6301 C/C++/Python/Java\uFF09
      \u5F53\u524D API \u53EF\u63D0\u4F9B\u7ED9\u5176\u4ED6 Hydro \u5B9E\u4F8B\u3002\u5982\u679C\u60A8\u5E0C\u671B\u514D\u8D39\u8BD5\u7528\u6B64\u529F\u80FD\uFF0C\u8BF7\u70B9\u51FB\u4E0B\u65B9 \u201C\u662F\u201D \u6309\u94AE\u6FC0\u6D3B\u8BD5\u7528\u3002
      \u8BD5\u7528\u671F\u4E3A\u56DB\u5468\uFF0C\u4E4B\u540E\u82E5\u9700\u8981\u7EED\u8BA2\uFF0C\u5219\u6536\u53D6\u76F8\u5E94\u8D39\u7528\u3002
      \u5982\u679C\u60A8\u4E0D\u9700\u8981\u6B64\u529F\u80FD\uFF0C\u8BF7\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u5173\u95ED\u3002
      \u6B64\u6D88\u606F\u4EC5\u8D85\u7EA7\u7BA1\u7406\u5458\u53EF\u89C1\u3002`
              .split(`
      `);
          (await new f({
            $body: `<div class="typo">
              ${t.map((r) => `<p>${c.escape(r)}</p>`).join(`
      `)}
              <img src="/intro1.png" />
            </div>`,
            canCancel: !0,
          }).open()) === "yes" &&
            (a.post("/lsp-set", 'hydro.ac'),
            window.open(i),
            new s({
              $body: e.typoMsg(
                "\u8BF7\u5728\u65B0\u6253\u5F00\u7684\u9875\u9762\u5185\u64CD\u4F5C\u3002"
              ),
            }).open());
        } else {
          let t = await new d({
            $body:
              e.typoMsg(`\u6B64\u670D\u52A1\u5668\u4E0A\u7684\u5728\u7EBF IDE \u81EA\u52A8\u8865\u5168\u529F\u80FD\u7684${
                o.plan === "trial" ? "\u8BD5\u7528" : "\u8BA2\u9605"
              }\u5DF2\u5230\u671F\u3002\u70B9\u51FB\u201C\u786E\u5B9A\u201D\u4EE5\u6253\u5F00${
                o.plan === "trial" ? "\u8BA2\u9605" : "\u7EED\u8BA2"
              }\u94FE\u63A5\u3002\u60A8\u9700\u8981\u62E5\u6709\u4E00\u4E2A HydroOJ \u8D26\u53F7\u4EE5\u8FDB\u884C\u4ED8\u6B3E\u64CD\u4F5C\u3002
      \u5982\u60A8\u4E0D\u518D\u9700\u8981\u6B64\u529F\u80FD\uFF0C\u8BF7\u5728\u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u5173\u95ED\u3002`),
          }).open();
          t === "ok"
            ? (window.open(i),
              new s({
                $body: e.typoMsg(
                  "\u8BF7\u5728\u65B0\u6253\u5F00\u7684\u9875\u9762\u5185\u64CD\u4F5C\u3002"
                ),
              }).open())
            : t === "no" && localStorage.setItem("lsp-ignore", "1");
        }
        return !1;
      }
      (UiContext.hydroacFeatures || []).includes("lsp") &&
        ((UiContext.lspHost = UiContext.blspHost),
        localStorage.getItem("lsp-ignore") !== "1" &&
          window.location.pathname.match(/^(\/d\/[a-z]+)?\/p\/[^/]+$/g) &&
          y(!!(UserContext.priv & 1)).then((n) => {
            !n && UserContext.priv !== -1 && delete UiContext.lspHost;
          }));
      