(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{zzPt:function(e,t,a){"use strict";a.r(t);a("pIFo"),a("f3/d");var n=a("q1tI"),r=a.n(n),s=a("r5vi"),c=a("Bl7J"),u=a("vrFN"),l=a("GTfE"),o=(a("oBF0"),function(e){var t=e.message,a=t.message,n="admin"===t.sender?"otherMessage":"userMessage";return r.a.createElement("div",{className:"messageWrapper "+n},a)}),m=a("AlIK");a("o0eb"),t.default=function(){var e=Object(n.useState)([]),t=e[0],a=e[1],i=Object(n.useState)(0),f=(i[0],i[1]),p=Object(n.useState)(""),b=p[0],d=p[1],g=Object(s.a)(["name","token"]),v=g[0];g[1];Object(n.useEffect)((function(){var e=v.name,t=v.token;if(e&&t)return Object(m.b)({name:e,token:t,setMessages:a,setNumMessages:f}),Object(m.d)(E),function(){return Object(m.c)()};window.location.replace("/chat/login")}),[]);var E=function(e){a((function(t){return t.concat(e)}))};return r.a.createElement(c.a,null,r.a.createElement(u.a,{title:"Chat"}),r.a.createElement(l.a,null,r.a.createElement("h2",null,v.name),r.a.createElement("div",{className:"messagesWrapper"},t.map((function(e,t){return r.a.createElement(o,{message:e,key:t})}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(m.f)(b)}},r.a.createElement("input",{type:"text",placeholder:"send message",value:b,onChange:function(e){d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"send"}))))}}}]);
//# sourceMappingURL=component---src-pages-chat-index-js-722131c519d11a64a8bb.js.map