// 请不要在此处粘贴来历不明的代码。
// 否则可能导致用户界面异常或是账户信息泄露。
// Use at your own risk.
const a = document.createElement('style');
const htmlElement = document.documentElement;
if(htmlElement.dataset.page != 'user_login') {
	a.innerHTML = `

.row::after{
	opacity: 0.5;
	 background-image: url("https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/5594016-e1656071131636.jpg?resize=150150&ssl=1");
	}
`;
}
else {
	a.innerHTML = `
`;
}
document.head.append(a);
