(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"P+5C":function(e,a,t){"use strict";t.r(a);t("f3/d");var n=t("q1tI"),c=t.n(n),r=t("vDqi"),s=t.n(r),l=t("r5vi"),o=t("Bl7J"),m=t("vrFN"),u=t("GTfE"),i=t("xPX6"),p=t("mUSF"),d=(t("o0eb"),i.a.SERVER_URL);a.default=function(){var e=Object(l.a)(["name","token"]),a=(e[0],e[1]),t=Object(n.useState)(""),r=t[0],i=t[1];Object(n.useEffect)((function(){a("name","",{path:"/chat"}),a("token","",{path:"/chat"})}),[]);return c.a.createElement(o.a,null,c.a.createElement(m.a,{title:"Chat Login"}),c.a.createElement(u.a,null,c.a.createElement("h3",null," Welcome back! Sign into Living Water Chat "),c.a.createElement("br",null),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,n,c=e.target[0].value,r=e.target[1].value;t=c,n=r,s.a.post(d+"login",{username:t,password:n}).then((function(e){"success"===e.data.status?(a("name",e.data.name,{path:"/chat"}),a("token",e.data.token,{path:"/chat"}),"yes"===e.data.admin?Object(p.a)("/chat/admin"):Object(p.a)("/chat")):i(e.data.status)})).catch((function(e){console.log(e)}))},className:"cred-box"},c.a.createElement("input",{className:"text-input",type:"text",id:"name",name:"name",placeholder:"username"}),c.a.createElement("input",{className:"text-input",type:"password",name:"password",placeholder:"password"}),r&&c.a.createElement("div",{className:"error-message"},r),c.a.createElement("div",{className:"button-box"},c.a.createElement("input",{className:"cred-button",type:"submit",value:"login"}))),c.a.createElement("span",{className:"here-before"}," Never been here before? ",c.a.createElement("a",{href:"/chat/register"},"Register")," ")))}}}]);
//# sourceMappingURL=component---src-pages-chat-login-js-450a29cc2516b191004d.js.map