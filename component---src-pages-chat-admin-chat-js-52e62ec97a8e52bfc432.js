(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/Sq3":function(e,t,a){},"88fu":function(e,t,a){"use strict";a.r(t);a("pIFo"),a("f3/d"),a("OG14");var n=a("q1tI"),c=a.n(n),r=(a("Wbzz"),a("r5vi")),s=a("Bl7J"),u=a("vrFN"),o=a("GTfE"),i=(a("oBF0"),function(e){var t=e.message,a=t.message,n="admin"===t.sender?"userMessage":"otherMessage";return c.a.createElement("div",{className:"messageWrapper "+n},a)}),l=a("AlIK"),m=(a("o0eb"),a("/Sq3"),a("xPX6"));m.a.SOCKET_URL,m.a.API_URL,t.default=function(e){e.location;var t=Object(r.a)(["name","token"]),a=t[0],m=(t[1],Object(n.useState)("")),f=m[0],d=m[1],p=Object(n.useState)([]),b=p[0],g=p[1],v=Object(n.useState)(0),w=(v[0],v[1]),E=Object(n.useState)(""),h=E[0],O=E[1];Object(n.useEffect)((function(){if("undefined"!=typeof window){var e=window.location.search,t=new URLSearchParams(e).get("user"),n=a.name,c=a.token;return n&&c?(Object(l.a)({name:n,token:c,chatUser:t,setMessages:g,setNumMessages:w}),Object(l.d)(j),d(t),function(){return Object(l.c)()}):void window.location.replace("/chat/login")}}),[]);var j=function(e){g((function(t){return t.concat(e)}))};return c.a.createElement(s.a,null,c.a.createElement(u.a,{title:"Admin Chat"}),c.a.createElement(o.a,null,c.a.createElement("h2",null,"Chat with ",f),c.a.createElement("div",{className:"messagesWrapper"},b.map((function(e,t){return c.a.createElement(i,{message:e,key:t})}))),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(l.e)(h)}},c.a.createElement("input",{type:"text",placeholder:"send message",value:h,onChange:function(e){O(e.target.value)}}),c.a.createElement("input",{type:"submit",value:"send"}))))}}}]);
//# sourceMappingURL=component---src-pages-chat-admin-chat-js-52e62ec97a8e52bfc432.js.map