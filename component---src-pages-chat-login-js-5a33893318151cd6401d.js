(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"P+5C":function(e,a,t){"use strict";t.r(a);t("f3/d");var n=t("q1tI"),l=t.n(n),c=t("Wbzz"),r=t("vDqi"),o=t.n(r),s=t("r5vi"),m=t("Bl7J"),i=t("vrFN"),u=t("GTfE"),p=(t("o0eb"),t("xPX6")),b=(p.a.SOCKET_URL,p.a.API_URL);a.default=function(){var e=Object(s.a)(["name","token"]),a=e[0],t=e[1];Object(n.useEffect)((function(){console.log(a),t("name","",{path:"/chat"}),t("token","",{path:"/chat"})}),[]);return l.a.createElement(m.a,null,l.a.createElement(i.a,{title:"Chat Login"}),l.a.createElement(u.a,null,l.a.createElement("h3",null," Welcome back! Sign into Living Water Chat "),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target[0].value,n=e.target[1].value;o.a.post(b+"login",{username:a,password:n}).then((function(e){"success"===e.data.status?(t("name",e.data.name,{path:"/chat"}),t("token",e.data.token,{path:"/chat"}),"no"!==e.data.admin?Object(c.navigate)("/chat/admin"):Object(c.navigate)("/chat")):console.log("Login failed")})).catch((function(e){console.log(e)}))}},l.a.createElement("input",{className:"text-input",type:"text",id:"name",name:"name",placeholder:"username"}),l.a.createElement("br",null),l.a.createElement("input",{className:"text-input",type:"password",name:"password",placeholder:"password"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"button-box"},l.a.createElement("input",{className:"cred-button",type:"submit",value:"login"}))),l.a.createElement("span",{className:"here-before"}," Never been here before? ",l.a.createElement("a",{href:"/chat/register"},"Register")," "),l.a.createElement("br",null)))}}}]);
//# sourceMappingURL=component---src-pages-chat-login-js-5a33893318151cd6401d.js.map