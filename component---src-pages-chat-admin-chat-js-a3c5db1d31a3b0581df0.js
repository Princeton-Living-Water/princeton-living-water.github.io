(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Sq3":function(e,t,a){},"88fu":function(e,t,a){"use strict";a.r(t);a("pIFo"),a("f3/d"),a("OG14");var n=a("q1tI"),r=a.n(n),c=(a("Wbzz"),a("r5vi")),s=a("Bl7J"),u=a("vrFN"),o=a("GTfE"),i=(a("oBF0"),function(e){var t=e.message,a=t.message,n="admin"===t.sender?"userMessage":"otherMessage";return r.a.createElement("div",{className:"messageWrapper "+n},a)}),l=a("AlIK"),m=(a("o0eb"),a("/Sq3"),a("xPX6"));m.a.SOCKET_URL,m.a.API_URL,t.default=function(e){e.location;var t=Object(c.a)(["name","token"]),a=t[0],m=(t[1],Object(n.useState)("")),f=m[0],d=m[1],p=Object(n.useState)([]),b=p[0],w=p[1],g=Object(n.useState)(0),v=(g[0],g[1]),E=Object(n.useState)(""),h=E[0],O=E[1];Object(n.useEffect)((function(){if("undefined"!=typeof window)window.location.search;var e=new URLSearchParams(queryString).get("user"),t=a.name,n=a.token;if(t&&n)return Object(l.a)({name:t,token:n,chatUser:e,setMessages:w,setNumMessages:v}),Object(l.d)(j),d(e),function(){return Object(l.c)()};"undefined"!=typeof window&&window.location.replace("/chat/login")}),[]);var j=function(e){w((function(t){return t.concat(e)}))};return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Admin Chat"}),r.a.createElement(o.a,null,r.a.createElement("h2",null,"Chat with ",f),r.a.createElement("div",{className:"messagesWrapper"},b.map((function(e,t){return r.a.createElement(i,{message:e,key:t})}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(l.e)(h)}},r.a.createElement("input",{type:"text",placeholder:"send message",value:h,onChange:function(e){O(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"send"}))))}}}]);
//# sourceMappingURL=component---src-pages-chat-admin-chat-js-a3c5db1d31a3b0581df0.js.map