(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"P+5C":function(e,a,t){"use strict";t.r(a);t("pIFo"),t("f3/d");var n=t("q1tI"),l=t.n(n),c=(t("Wbzz"),t("vDqi")),o=t.n(c),r=t("r5vi"),i=t("Bl7J"),s=t("vrFN"),u=t("GTfE"),m=(t("o0eb"),t("xPX6")),p=(m.a.SOCKET_URL,m.a.API_URL);a.default=function(){var e=Object(r.a)(["name","token"]),a=e[0],t=e[1];Object(n.useEffect)((function(){console.log(a),t("name","",{path:"/chat"}),t("token","",{path:"/chat"})}),[]);return l.a.createElement(i.a,null,l.a.createElement(s.a,{title:"Chat Login"}),l.a.createElement(u.a,null,l.a.createElement("h3",null," Welcome back! Sign into Living Water Chat "),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target[0].value,n=e.target[1].value;o.a.post(p+"login",{username:a,password:n}).then((function(e){"success"===e.data.status?(t("name",e.data.name,{path:"/chat"}),t("token",e.data.token,{path:"/chat"}),"undefined"!=typeof window&&("no"!==e.data.admin?window.location.replace("/chat/admin"):"undefined"!=typeof window&&window.location.replace("/chat"))):console.log("Login failed")})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{className:"text-input",type:"text",id:"name",name:"name",placeholder:"username"}),l.a.createElement("br",null),l.a.createElement("input",{className:"text-input",type:"password",name:"password",placeholder:"password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"button-box"},l.a.createElement("input",{className:"cred-button",type:"submit",value:"login"}))),l.a.createElement("span",{className:"here-before"}," Never been here before? ",l.a.createElement("a",{href:"/chat/register"},"Register")," "),l.a.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-chat-login-js-a333582c4376396ba996.js.map