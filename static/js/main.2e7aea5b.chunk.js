(this["webpackJsonpair-freshener"]=this["webpackJsonpair-freshener"]||[]).push([[0],{12:function(e,t,a){e.exports={mainGrid:"styles_mainGrid__1mR3b",card:"styles_card__4jqsg",cardMainContent:"styles_cardMainContent__16FlH",cardBottomText:"styles_cardBottomText__2q2-n",clickable:"styles_clickable__14Tnt",totalGrid:"styles_totalGrid__dD4zH",totalRow:"styles_totalRow__1kBP_",totalTitle:"styles_totalTitle__1Du8w",totalValue:"styles_totalValue__3XFFk"}},130:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),s=a(50),c=a.n(s),i=(a(59),a(5)),o=a(38),l=a.n(o),u=a(20),d=a(17),j=a(18),b=a.n(j),f=a(51),v=a.n(f),p=6.3,h=8.4,m=[6.6,7.2,7.5,8.4],O=a(15),x=a(6),g=a.n(x),y=a(13),w=a(52),_=a.n(w),k=a(19),N={apiKey:"AIzaSyBLrODZWuYHlBeJIUwaNh6QDTkmhbxLcjE",authDomain:"air-freshener-iot.firebaseapp.com",databaseURL:"https://air-freshener-iot-default-rtdb.europe-west1.firebasedatabase.app",projectId:"air-freshener-iot",storageBucket:"air-freshener-iot.appspot.com",messagingSenderId:"369342205741",appId:"1:369342205741:web:d2ca55ee0fa251c5418da4"},T=_.a.create({baseURL:"https://air-freshener-iot-default-rtdb.europe-west1.firebasedatabase.app/",withCredentials:!1}),C=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("data/battery.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.get("data/trigger.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){return T.get("settings.json").then((function(e){return e.data}))},F=function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.auth().currentUser.getIdToken();case 2:return a=e.sent,e.next=5,A();case 5:return n=e.sent,e.abrupt("return",T.put("settings.json?auth="+a,Object(i.a)(Object(i.a)({},n),t)));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",k.a.auth().signInWithEmailAndPassword("labtorie@gmail.com",t).then((function(e){e.user})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.auth().signOut();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(y.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k.a.auth().currentUser,e.abrupt("return",a.updatePassword(t).then((function(){})).catch((function(e){return e})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=new Array(24).fill(0).map((function(e,t){return{hour:t,value:0}}));return e.forEach((function(e){var a=e.time,n=e.value,r=P(a);t[r]=Object(i.a)(Object(i.a)({},t[r]),{},{value:t[r].value+n})})),t},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"day",a=e.filter((function(e){var a=e.time;return b()(a).isSame(b()(),t)}));return a.reduce((function(e,t){return e+t.value}),0)},P=function(e){return+b()(e).format("H")},V={data:{plots:{voltage:{data:[]},activations:{data:[]}},currentState:{voltage:{value:0,lastPush:b()()},recentActivity:{day:0,week:0,month:0}},settings:{activeTime:0,sleepTime:0,sprayInterval:0}},startService:function(){},fetchData:function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fetchSettings:function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),saveSettings:function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),isFetching:!0},z=r.a.createContext(V),G=a(2),H=function(){var e,t=Object(n.useContext)(z).data.currentState.voltage,a=t.value,r=t.lastPush,s=(e=a)<m[0]?[d.a,"#eb3f33"]:e<m[1]?[d.d,"#ffce5c"]:e<m[2]?[d.c,"#5fd393"]:e<m[3]?[d.e,"#5fd393"]:[d.b,"#5fd393"];return Object(G.jsxs)("div",{className:v.a.battery,children:[Object(G.jsx)(u.a,{icon:s[0],color:s[1]}),Object(G.jsx)("div",{children:a+"V"}),Object(G.jsx)("div",{style:{color:"#888"},children:function(){var e=b()(),t="seconds",a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"s";return e.diff(b()(r),t)},n=a("s");return n>=60&&(t="minutes",(n=a("m"))>=60&&(t="hours",(n=a("h"))>=24&&(t="days",n=a("d")))),[n,t]}().join(" ")+" ago"})]})},R=function(){return Object(G.jsxs)("div",{className:l.a.bar,children:[Object(G.jsx)("div",{className:l.a.barTitle,children:"AirPshicker"}),Object(G.jsx)(H,{})]})},E=a(32),L=a.n(E),U=a(54),Y=a(12),J=a.n(Y),q=a(30),K=a.n(q),Z=a(31),Q=a.n(Z),X=function(e){var t=e.data,a=void 0===t?[]:t,n={colors:["#5fd393"],chart:{type:"area",stacked:!1,height:350,zoom:{type:"x",enabled:!0,autoScaleYaxis:!0},toolbar:{autoSelected:"zoom",tools:{download:!1,selection:!0,zoom:!0,zoomin:!1,zoomout:!1,pan:!0,reset:1,customIcons:[]}}},dataLabels:{enabled:!1},markers:{size:0},title:{text:"Battery Voltage",align:"left",style:{fontFamily:"Montserrat, sans-serif",fontWeight:700}},fill:{colors:["#5fd393"]},yaxis:{max:h,min:p,type:"numeric",title:{text:"Volts",style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}},labels:{formatter:function(e){return e.toFixed(1)},style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}}},xaxis:{type:"numeric",categories:a.map((function(e){return e.time})),labels:{formatter:function(e){return b()(e).format("DD.MM HH:mm")},style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}}},tooltip:{shared:!1,style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}}},r=[{name:"Battery",data:a.map((function(e,t){var a=e.value;e.time;return a}))}];return Object(G.jsx)("div",{className:Q.a.graphContainer,children:Object(G.jsx)(K.a,{options:n,series:r,type:"area",height:350,style:{width:"100%"}})})},$=function(e){var t=e.data,a=void 0===t?[]:t,n=[{data:a.map((function(e){return e.value})),name:"Activations"}],r={chart:{width:380,type:"radar",toolbar:{tools:{download:!1}}},title:{text:"Daily usage",align:"left",style:{fontFamily:"Montserrat, sans-serif",fontWeight:700}},plotOptions:{radar:{polygons:{strokeColor:"transparent",fill:{colors:["#fff"]}}}},labels:a.map((function(e){return e.hour})),fill:{opacity:.4},stroke:{show:!1,width:2,colors:[],dashArray:0},markers:{size:3},yaxis:{show:!1,labels:{formatter:function(e){return e+" times"}}},xaxis:{show:!0,categories:a.map((function(e){return e.hour+":00"})),labels:{show:!0,style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}}},legend:{show:!1},tooltip:{style:{fontFamily:"Montserrat, sans-serif",fontWeight:500}}};return Object(G.jsx)("div",{className:Q.a.graphContainer,children:Object(G.jsx)(K.a,{type:"radar",options:r,series:n,height:350,style:{width:"100%"}})})},ee=a(23),te=a.n(ee),ae=a(7),ne=a.n(ae),re=a(24),se=function(e){var t=e.isVisible,a=e.onClose,r=void 0===a?function(){}:a,s=(e.user,e.isSignedIn),c=void 0!==s&&s,o=Object(n.useContext)(z),l=o.data.settings,j=o.fetchSettings,b=o.saveSettings,f=Object(n.useState)(l),v=Object(O.a)(f,2),p=v[0],h=v[1],m=Object(n.useState)(!1),x=Object(O.a)(m,2),w=x[0],_=x[1],k=Object(n.useState)(""),N=Object(O.a)(k,2),T=N[0],C=N[1],S=Object(n.useState)(!1),A=Object(O.a)(S,2),F=A[0],W=A[1],D=Object(n.useState)(!1),P=Object(O.a)(D,2),V=P[0],H=P[1],R=Object(n.useState)({one:"",two:""}),E=Object(O.a)(R,2),L=E[0],U=E[1],Y=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(L.one.length<8||L.two.length<8)){e.next=2;break}return e.abrupt("return",H("Must be at least 8 characters"));case 2:if(L.one===L.two){e.next=4;break}return e.abrupt("return",H("Passwords don't match"));case 4:return e.next=6,B(L.one);case 6:if(!(null===(t=e.sent)||void 0===t?void 0:t.message)){e.next=9;break}return e.abrupt("return",H(t.message));case 9:H(!1),_(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(T);case 2:(null===(t=e.sent)||void 0===t?void 0:t.message)?W(t.message):W(!1),C("");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(p);case 2:r();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j(),h(l)}),[t]),w?Object(G.jsxs)("div",{className:te()(ne.a.wrapper,t&&ne.a.show),children:[Object(G.jsxs)("div",{className:ne.a.settingsHeader,children:[Object(G.jsx)("h1",{children:"Change password"}),Object(G.jsx)("div",{className:ne.a.controllers,onClick:function(){return _(!1)},children:Object(G.jsx)("div",{className:ne.a.signOut,children:Object(G.jsx)(u.a,{icon:d.i})})})]}),Object(G.jsx)("div",{className:ne.a.section,children:Object(G.jsx)("div",{className:ne.a.inputArea,children:Object(G.jsx)("input",{value:L.one,type:"password",style:{flex:1},placeholder:"New password",onChange:function(e){return U((function(t){return Object(i.a)(Object(i.a)({},t),{},{one:e.target.value})}))}})})}),Object(G.jsx)("div",{className:ne.a.section,children:Object(G.jsx)("div",{className:ne.a.inputArea,children:Object(G.jsx)("input",{value:L.two,type:"password",style:{flex:1},placeholder:"Repeat new password",onChange:function(e){return U((function(t){return Object(i.a)(Object(i.a)({},t),{},{two:e.target.value})}))}})})}),Object(G.jsx)("button",{onClick:Y,children:"Change"}),V&&Object(G.jsx)("span",{className:ne.a.error,children:V})]}):c?Object(G.jsxs)("div",{className:te()(ne.a.wrapper,t&&ne.a.show),children:[Object(G.jsxs)("div",{className:ne.a.settingsHeader,children:[Object(G.jsx)("h1",{children:"Settings"}),Object(G.jsxs)("div",{className:ne.a.controllers,children:[Object(G.jsx)("div",{className:ne.a.signOut,onClick:function(){return _(!0)},children:Object(G.jsx)(u.a,{icon:d.g,color:"#888"})}),Object(G.jsx)("div",{className:ne.a.signOut,onClick:M,children:Object(G.jsx)(u.a,{icon:d.h,color:"#888"})})]})]}),Object(G.jsxs)("div",{className:ne.a.section,children:[Object(G.jsx)("span",{children:"Waiting time before sleep"}),Object(G.jsxs)("div",{className:ne.a.inputArea,children:[Object(G.jsx)("input",{value:p.activeTime,onChange:function(e){return h((function(t){return Object(i.a)(Object(i.a)({},t),{},{activeTime:e.target.value})}))},type:"number"}),"seconds"]})]}),Object(G.jsxs)("div",{className:ne.a.section,children:[Object(G.jsx)("span",{children:"Sleep time"}),Object(G.jsxs)("div",{className:ne.a.inputArea,children:[Object(G.jsx)("input",{value:p.sleepTime,onChange:function(e){return h((function(t){return Object(i.a)(Object(i.a)({},t),{},{sleepTime:e.target.value})}))},type:"number"}),"seconds"]})]}),Object(G.jsxs)("div",{className:ne.a.section,style:{opacity:.7},children:[Object(G.jsx)("span",{children:"Spray interval (in development)"}),Object(G.jsxs)("div",{className:ne.a.inputArea,children:[Object(G.jsx)("input",{type:"number",disabled:!0}),"minutes"]})]}),Object(G.jsx)("button",{onClick:q,disabled:!((null===l||void 0===l?void 0:l.sleepTime)!=(null===p||void 0===p?void 0:p.sleepTime)||(null===l||void 0===l?void 0:l.activeTime)!=(null===p||void 0===p?void 0:p.activeTime)),children:"Apply changes"}),Object(G.jsx)("div",{onClick:r,className:ne.a.goBack,children:"< Back to home screen"})]}):Object(G.jsxs)("div",{className:te()(ne.a.wrapper,t&&ne.a.show),children:[Object(G.jsx)("h1",{children:"What's the password?"}),Object(G.jsxs)("div",{className:ne.a.section,children:[Object(G.jsx)("span",{children:"You need to sign in to modify settings"}),Object(G.jsx)("div",{className:ne.a.inputArea,children:Object(G.jsx)("input",{value:T,type:"password",style:{flex:1},placeholder:"Password",onChange:function(e){return C(e.target.value)}})}),Object(G.jsx)("button",{onClick:J,children:"Sign in"}),F&&Object(G.jsx)("span",{className:ne.a.error,children:F}),Object(G.jsx)("div",{onClick:r,className:ne.a.goBack,children:"< Back to home screen"})]})]})},ce=function(e){var t=e.gridArea,a=void 0===t?"":t,n=e.mainComponent,r=void 0===n?"":n,s=e.bottomText,c=void 0===s?"":s,i=e.onCLick;return Object(G.jsxs)("div",{className:te()(J.a.card,i&&J.a.clickable),onClick:function(){i&&i()},style:{gridArea:a},children:[Object(G.jsx)("div",{className:J.a.cardMainContent,children:r}),Object(G.jsx)("div",{className:J.a.cardBottomText,children:c})]})},ie=function(e){var t=e.gridArea,a=void 0===t?"":t,n=Object(U.a)(e,["gridArea"]);return Object(G.jsx)("div",{className:J.a.card,style:{gridArea:a},children:n.children})},oe=function(){var e,t,a,r,s,c,i=Object(n.useState)(!1),o=Object(O.a)(i,2),l=o[0],j=o[1],b=Object(n.useContext)(z),f=b.data,v=b.startService;Object(n.useEffect)((function(){v()}),[]);var p=Object(G.jsxs)("div",{className:J.a.totalGrid,children:[Object(G.jsxs)("div",{className:J.a.totalRow,children:[Object(G.jsx)("div",{className:J.a.totalTitle,children:"Today"}),Object(G.jsx)("div",{className:J.a.totalValue,children:null===(e=f.currentState)||void 0===e||null===(t=e.recentActivity)||void 0===t?void 0:t.day})]}),Object(G.jsxs)("div",{className:J.a.totalRow,children:[Object(G.jsx)("div",{className:J.a.totalTitle,children:"Week"}),Object(G.jsx)("div",{className:J.a.totalValue,children:null===(a=f.currentState)||void 0===a||null===(r=a.recentActivity)||void 0===r?void 0:r.week})]}),Object(G.jsxs)("div",{className:J.a.totalRow,children:[Object(G.jsx)("div",{className:J.a.totalTitle,children:"Month"}),Object(G.jsx)("div",{className:J.a.totalValue,children:null===(s=f.currentState)||void 0===s||null===(c=s.recentActivity)||void 0===c?void 0:c.month})]})]});return Object(G.jsx)(re.a,{children:function(e){var t,a,n,r,s,c,i,o,b,v=e.isSignedIn,h=e.user;e.providerId;return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(se,{isSignedIn:v,user:h,isVisible:l,onClose:function(){return j(!1)}}),Object(G.jsxs)("div",{className:J.a.mainGrid,children:[Object(G.jsx)(ce,{mainComponent:Object(G.jsxs)("div",{className:J.a.totalRow,children:[Object(G.jsx)("div",{className:J.a.totalTitle,children:"Volts"}),Object(G.jsx)("div",{className:J.a.totalValue,children:(null===(t=f.currentState)||void 0===t||null===(a=t.voltage)||void 0===a?void 0:a.value)||"0.0"})]}),bottomText:(b=null===(n=f.currentState)||void 0===n||null===(r=n.voltage)||void 0===r?void 0:r.value,b<m[0]?"Too low. Needs charging":b<m[1]?"Running low":b<m[2]?"Enough to work":b<m[3]?"Good":"Fully charged"),gridArea:"volt"}),Object(G.jsx)(ce,{gridArea:"today",mainComponent:p,bottomText:"Activations"}),Object(G.jsx)(ce,{gridArea:"sets",mainComponent:Object(G.jsx)(u.a,{icon:d.f}),bottomText:"Settings",onCLick:function(){return j((function(e){return!e}))}}),Object(G.jsx)(ie,{gridArea:"graph1",children:Object(G.jsx)(X,{data:null===(s=f.plots)||void 0===s||null===(c=s.voltage)||void 0===c?void 0:c.data})}),Object(G.jsx)(ie,{gridArea:"graph2",children:Object(G.jsx)($,{data:null===(i=f.plots)||void 0===i||null===(o=i.activations)||void 0===o?void 0:o.data})})]})]})}})};var le=function(){var e=function(){var e=Object(n.useState)(V),t=Object(O.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){console.log(a)}),[a]);var s=function(){var e=Object(y.a)(g.a.mark((function e(){var t,a,n,s,c,o,l,u,d,j,b,f,v;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,a=t.data,e.next=6,S();case 6:n=e.sent,s=n.data,c=Object.entries(a||{}).filter((function(e){return"last_id"!==Object(O.a)(e,1)[0]})).map((function(e){var t=Object(O.a)(e,2),a=(t[0],t[1]);return Object(i.a)(Object(i.a)({},a),{},{value:(a.value/1e3).toFixed(1),time:null===a||void 0===a?void 0:a.timestamp})})),o=c.slice(-1)[0],l=o.value,u=o.time,d=Object.entries(s||{}).filter((function(e){return"last_id"!==Object(O.a)(e,1)[0]})).map((function(e){var t=Object(O.a)(e,2),a=(t[0],t[1]);return Object(i.a)(Object(i.a)({},a),{},{time:null===a||void 0===a?void 0:a.timestamp})})),j=W(d),b=D(d,"day"),f=D(d,"week"),v=D(d,"month"),r((function(e){return Object(i.a)(Object(i.a)({},e),{},{isFetching:!1,data:Object(i.a)(Object(i.a)({},e.data),{},{plots:{voltage:{data:c},activations:{data:j}},currentState:{voltage:{value:l,lastPush:u},recentActivity:{day:b,week:f,month:v}}})})}));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(y.a)(g.a.mark((function e(){var t,a,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,a=t.activeTime,n=t.sleepTime,r((function(e){return Object(i.a)(Object(i.a)({},e),{},{data:Object(i.a)(Object(i.a)({},e.data),{},{settings:{activeTime:a,sleepTime:n,sprayInterval:0}})})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(y.a)(g.a.mark((function e(t){var a,n,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.activeTime,n=void 0===a?0:a,r=t.sleepTime,s=void 0===r?0:r,e.next=3,F({activeTime:Number(n),sleepTime:Number(s)});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.a)(Object(i.a)({},a),{},{startService:function(){setInterval((function(){s()}),5e3)},fetchData:s,fetchSettings:c,saveSettings:o})}();return Object(n.useEffect)((function(){k.a.apps.length?k.a.app():k.a.initializeApp({}),e.fetchData()}),[]),Object(G.jsx)(re.b,Object(i.a)(Object(i.a)({firebase:k.a},N),{},{children:Object(G.jsxs)(z.Provider,{value:e,children:[Object(G.jsx)("div",{className:L.a.loadingOverlay,style:{opacity:Number(e.isFetching)}}),Object(G.jsx)("div",{className:L.a.contentWrapper,children:Object(G.jsxs)("div",{className:L.a.body,children:[Object(G.jsx)(R,{}),Object(G.jsx)(oe,{})]})})]})}))},ue=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,131)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(G.jsx)(r.a.StrictMode,{children:Object(G.jsx)(le,{})}),document.getElementById("root")),ue()},31:function(e,t,a){e.exports={graphContainer:"styles_graphContainer__rvnP9"}},32:function(e,t,a){e.exports={loadingOverlay:"styles_loadingOverlay__25Hxt",body:"styles_body__32Flv",contentWrapper:"styles_contentWrapper__fzvAO"}},38:function(e,t,a){e.exports={bar:"style_bar__3UGFG",barTitle:"style_barTitle__2GbdM"}},51:function(e,t,a){e.exports={battery:"styles_battery__b2nck"}},59:function(e,t,a){},7:function(e,t,a){e.exports={container:"styles_container__3un5n",wrapper:"styles_wrapper__2GKub",show:"styles_show__eYaCF",section:"styles_section__k8e-n",inputArea:"styles_inputArea__2nZMU",settingsHeader:"styles_settingsHeader__2DDi6",controllers:"styles_controllers__2mTw3",signOut:"styles_signOut__34wIp",goBack:"styles_goBack__3jVWD",error:"styles_error__2gPIw"}}},[[130,1,2]]]);
//# sourceMappingURL=main.2e7aea5b.chunk.js.map