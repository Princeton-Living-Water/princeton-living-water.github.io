(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/Sq3":function(e,a,t){},rPtv:function(e,a,t){"use strict";t.r(a);t("pIFo"),t("f3/d");var n=t("q1tI"),r=t.n(n),l=(t("Wbzz"),t("vDqi")),o=t.n(l),c=t("r5vi"),s=t("Bl7J"),i=t("vrFN"),u=t("GTfE"),m=(t("o0eb"),t("/Sq3"),t("xPX6")),d=(m.a.SOCKET_URL,m.a.API_URL);a.default=function(){var e=Object(c.a)(["name","token"]),a=(e[0],e[1]);return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Chat Register"}),r.a.createElement(u.a,null,r.a.createElement("h3",null," Register for Living Water Chat "),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target[0].value,n=e.target[1].value;o.a.post(d+"createUser",{username:t,password:n}).then((function(e){"success"===e.data.status?(a("name",e.data.name),a("token",e.data.token),"no"!==e.data.admin&&("undefined"!=typeof window?window.location.replace("/chat/admin"):"undefined"!=typeof window&&window.location.replace("/chat"))):console.log(e.data)})).catch((function(e){console.log(e)}))},className:"cred-box"},r.a.createElement("input",{className:"text-input",type:"text",name:"name",placeholder:"username"}),r.a.createElement("br",null),r.a.createElement("input",{className:"text-input",type:"password",name:"password",placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"button-box"},r.a.createElement("input",{className:"cred-button",type:"submit",value:"register"}))),r.a.createElement("span",{className:"here-before"}," Been here before? ",r.a.createElement("a",{href:"/chat/login"},"Log in")," ")))}}}]);
//# sourceMappingURL=component---src-pages-chat-register-js-64578cd64d99f482d514.js.map