(this.webpackJsonpconsultingbot=this.webpackJsonpconsultingbot||[]).push([[0],{125:function(e,t){},143:function(e,t){},145:function(e,t){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(21),o=a.n(r),l=a(3),u=a(15),i=a(16),s=a.n(i),m=a(34),p=a(67),d=a.n(p),E=a(68),b=a.n(E),_=a(69),O=a.n(_),v=a(7),f=a(22),S=a.n(f),g=a(23),T=a(1),j="modeRow",C="modeModalHeader",M="modeModalSection",N="modeModalFooter",h="Write your nickname.",k="Write your email.",R="Camera",A="Voice",I="\uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2c9\ub124\uc784\uc785\ub2c8\ub2e4.",y="\ub2c9\ub124\uc784\uacfc \uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc2dc\uace0, \uc0ac\uc6a9\uac00\ub2a5\ud55c\uc9c0 \ud655\uc778\ud574\uc8fc\uc138\uc694!",w="\uce74\uba54\ub77c, \ub9c8\uc774\ud06c \uc811\uadfc \uad8c\ud55c\uc744 \ud5c8\ub77d\ud574\uc8fc\uc138\uc694!";var W=function(e){var t=e.onSubmit,a=Object(n.useState)({nickname:"",email:""}),r=Object(u.a)(a,2),o=r[0],l=r[1],i=o.nickname,s=o.email,m=function(e){var t=e.target,a=t.name,n=t.value;l(Object(T.a)(Object(T.a)({},o),{},Object(g.a)({},a,n)))};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(o)}},c.a.createElement("div",null,c.a.createElement("label",null,"Nickname"),c.a.createElement("input",{name:"nickname",placeholder:h,onChange:m,value:i})),c.a.createElement("div",null,c.a.createElement("label",null,"Email"),c.a.createElement("input",{name:"email",placeholder:k,onChange:m,value:s})),c.a.createElement("button",{type:"submit"},"Check"))};function x(e){return{type:"CONNECT_CUSTOMER_STREAM",customerStream:e}}function U(e){return{type:"GET_PEER",peer:e}}function G(e){return{type:"GET_CUSTOMER_NAME",nickname:e}}function K(e){return{type:"GET_CUSTOMER_MODE",mode:e}}function L(e){return{type:"SET_REQUEST",isRequest:e}}var P=a(2),q=a.n(P),F=S.a.bind(q.a);var z=function(e){var t=e.onToggleSelectMode,a=e.onToggleConsulting,n=Object(l.b)(),r=Object(l.c)((function(e){return e.customer.nickname})),o=Object(l.c)((function(e){return e.customer.isRequest})),u=localStorage.getItem("consultantId"),i=!0,p=function(){var e=Object(m.a)(s.a.mark((function e(c){var l,m,p,d,E;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=2;break}return e.abrupt("return",alert(y));case 2:return l=c.currentTarget.value,m="Voice"===l,e.prev=4,e.next=7,navigator.mediaDevices.getUserMedia({video:!m,audio:!0});case 7:p=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),alert(w);case 13:d=new O.a({initiator:!0,trickle:!1,stream:p}),E=b()("http://localhost:5000"),d.on("signal",(function(e){i&&E.emit("joinCustomer",{nickname:r,mode:l,consultantId:u,signal:e},(function(e){alert(e),i=!1}))})),d.on("stream",(function(e){n({type:"CONNECT_CONSULTANT_STREAM",consultantStream:e})})),E.on("acceptConsultant",(function(e){d.signal(e)})),t(),a(),n({type:"CONNECT_SOCKET",socket:E}),n(x(p)),n(U(d)),n(K(l));case 24:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(s.a.mark((function e(t){var a,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.nickname,c=t.email,r={nickname:a,email:c,consultantId:u},e.next=5,d()({method:"post",url:"".concat("http://localhost:5000/api/customers"),headers:{"Content-Type":"application/json"},data:r});case 5:return n(G(a)),n(L(!0)),e.abrupt("return",alert(I));case 10:e.prev=10,e.t0=e.catch(0),alert(e.t0.response.data.errMessage);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:q.a.modeSelectWrapper},c.a.createElement("button",{onClick:t,className:q.a.closeButton},c.a.createElement(v.c,{size:20,color:"white"})),c.a.createElement("header",{className:F(j,C)},c.a.createElement("div",null,"\uc0c1\ub2f4 \ud488\uc9c8 \ud5a5\uc0c1\uc744 \uc704\ud574,"),c.a.createElement("div",null,"\ubaa8\ub4e0 \uc0c1\ub2f4\uc740 \ub179\uc74c(\ub179\ud654)\ub429\ub2c8\ub2e4.")),c.a.createElement("section",{className:F(j,M)},c.a.createElement(W,{onSubmit:E})),c.a.createElement("footer",{className:F(j,N)},c.a.createElement("div",null,c.a.createElement(v.b,null),c.a.createElement("button",{onClick:p,value:R},R)),c.a.createElement("div",null,c.a.createElement(v.a,null),c.a.createElement("button",{onClick:p,value:A},A))))},B=S.a.bind(q.a);var D=function(e){var t=e.onToggleConsulting,a=Object(l.b)(),r=Object(l.c)((function(e){return e.socket.socket})),o=Object(l.c)((function(e){return e.customer.nickname})),u=Object(l.c)((function(e){return e.customer.mode})),i=Object(l.c)((function(e){return e.stream.customerStream})),s=Object(l.c)((function(e){return e.stream.consultantStream})),m=Object(l.c)((function(e){return e.stream.peer})),p=localStorage.getItem("consultantName"),d="Voice"===u,E=Object(n.useRef)(null),b=Object(n.useRef)(null);return Object(n.useEffect)((function(){E.current&&(E.current.srcObject=s)}),[s]),Object(n.useEffect)((function(){b.current&&(b.current.srcObject=i)}),[i]),c.a.createElement("div",{className:q.a.consultingWrapper},c.a.createElement("button",{onClick:function(){t();var e=localStorage.getItem("consultantId");r.emit("leaveCustomer",o,e,(function(e){alert(e),r.disconnect(),m&&m.destroy(),a({type:"INITIAL_CUSTOMER"}),a({type:"INITAIL_STREAM_PEER"}),a({type:"INITAIL_SOCKET"}),a(L(!1))}))},className:q.a.consultingClose},c.a.createElement(v.c,{size:20,color:"white"})),c.a.createElement("section",{className:q.a.screenWrapper},c.a.createElement("div",{className:q.a.text},"".concat(p,"\ub2d8")),c.a.createElement("div",{className:q.a.videoWrapper},d&&c.a.createElement(v.a,{size:150,color:"rgb(79, 91, 255)"}),c.a.createElement("video",{playsInline:!0,autoPlay:!0,ref:E,className:B({voiceMode:d,cameraMode:!d})})),c.a.createElement("div",{className:q.a.text},"".concat(o,"\ub2d8")),c.a.createElement("div",{className:q.a.videoWrapper},d&&c.a.createElement(v.a,{size:150,color:"rgb(79, 91, 255)"}),c.a.createElement("video",{playsInline:!0,autoPlay:!0,muted:!0,ref:b,className:B({voiceMode:d,cameraMode:!d})}))))};var H=function(e){var t=e.onClick;return c.a.createElement("button",{onClick:t,className:q.a.chatbot},c.a.createElement("img",{src:"https://img.icons8.com/nolan/96/chat.png",alt:"chatBot"}))};var V=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),l=Object(u.a)(o,2),i=l[0],s=l[1],m=function(){return r(!a)},p=function(){return s(!i)};return c.a.createElement(n.Fragment,null,!i&&c.a.createElement(D,{onToggleConsulting:p}),!a&&c.a.createElement(z,{onToggleSelectMode:m,onToggleConsulting:p}),c.a.createElement(H,{onClick:m}))},J=a(9),Q=(a(152),{socket:null});var X={nickname:"",mode:"",isRequest:!1};var Y={customerStream:null,consultantStream:null,peer:null};var Z=Object(J.c)({socket:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_SOCKET":return Object(T.a)(Object(T.a)({},e),{},{socket:t.socket});case"INITAIL_SOCKET":return Object(T.a)(Object(T.a)({},e),{},{socket:null});default:return e}},customer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CUSTOMER_NAME":return Object(T.a)(Object(T.a)({},e),{},{nickname:t.nickname});case"GET_CUSTOMER_MODE":return Object(T.a)(Object(T.a)({},e),{},{mode:t.mode});case"INITIAL_CUSTOMER":return Object(T.a)(Object(T.a)({},e),{},{nickname:"",mode:""});case"SET_REQUEST":return Object(T.a)(Object(T.a)({},e),{},{isRequest:t.isRequest});default:return e}},stream:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECT_CUSTOMER_STREAM":return Object(T.a)(Object(T.a)({},e),{},{customerStream:t.customerStream});case"CONNECT_CONSULTANT_STREAM":return Object(T.a)(Object(T.a)({},e),{},{consultantStream:t.consultantStream});case"GET_PEER":return Object(T.a)(Object(T.a)({},e),{},{peer:t.peer});case"INITAIL_STREAM_PEER":return Object(T.a)(Object(T.a)({},e),{},{customerStream:null,consultantStream:null,peer:null});default:return e}}});var $=Object(J.d)(Z,J.a.apply(void 0,[]));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:$},c.a.createElement(V,null))),document.getElementById("peer-root"))},2:function(e,t,a){e.exports={chatbot:"App_chatbot__3K986",consultingWrapper:"App_consultingWrapper__13GKR",modeSelectWrapper:"App_modeSelectWrapper__3ixIn",screenWrapper:"App_screenWrapper__2K3e_",videoWrapper:"App_videoWrapper__3Scof",consultingClose:"App_consultingClose__qFtzx",voiceMode:"App_voiceMode__5iPnZ",cameraMode:"App_cameraMode__31KX4",text:"App_text__r7O9V",ready:"App_ready__iuMDc",closeButton:"App_closeButton__1ee0W",modeRow:"App_modeRow__n58wG",modeModalHeader:"App_modeModalHeader__3oYRa",modeModalSection:"App_modeModalSection__1JFRU",modeModalFooter:"App_modeModalFooter__2h6HG"}},70:function(e,t,a){e.exports=a(153)}},[[70,1,2]]]);
//# sourceMappingURL=main.4ffd6cd2.chunk.js.map