(this.webpackJsonpcms_demo=this.webpackJsonpcms_demo||[]).push([[2],{30:function(e,t,n){e.exports=n(64)},62:function(e,t,n){},63:function(e,t,n){var a={"./Text":[29,0,1],"./Text.js":[29,0,1]};function c(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],c=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(c)}))}c.keys=function(){return Object.keys(a)},c.id=63,e.exports=c},64:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(4),r=n.n(o),i=n(26),u=n(6),l=n(9),s=n.n(l),d=function(e){return s.a.get("".concat("/api/pages","/").concat(e)).then((function(e){return e.data}))},f=function(e,t){return s.a.put("".concat("/api/pages","/").concat(e),t).then((function(e){return e.data}))};var p=function(e){var t=e.type,n=e.handleClick,a=e.text,o={background:"success"===t?"#4caf50":"aliceblue"};return c.a.createElement("button",{type:"button",style:o,onClick:n},a)},m=n(10),b=n.n(m);n(62);var g=function(e){var t=e.id,o=e.content,r=e.blockType,i=e.updateContent,l=c.a.lazy((function(){return n(63)("./".concat(r))})),s=Object(a.useState)({}),d=Object(u.a)(s,2),f=d[0],p=d[1];return c.a.createElement(a.Suspense,{fallback:c.a.createElement(c.a.Fragment,null)},c.a.createElement("div",{className:"overlay",style:f,onDoubleClick:function(e){p({backgroundColor:"transparent",zIndex:0,border:"1px solid blue"})}}),c.a.createElement(l,{id:t,content:o,blockType:r,updateContent:i}))};var h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){d(1).then((function(e){o(e.components),console.log(e.components)}))}),[]);var r=function(e,t){n.find((function(t){return t.id===e})).content=t},l=function(e){},s=Object(m.WidthProvider)(b.a);return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{text:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442",type:"normal",handleClick:function(){var e={grid:{x:4,y:1,w:1,h:2},content:null,blockType:"Text",id:n.length+1};o([].concat(Object(i.a)(n),[e]))}}),c.a.createElement(p,{text:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",type:"success",handleClick:function(){f(1,{id:1,components:n}).then((function(e){})).catch((function(){console.log("somethingHappened")}))}}),c.a.createElement(s,{autoSize:!0,verticalCompact:!1,className:"layout",cols:12,rowHeight:30,onLayoutChange:function(e){e.forEach((function(e){n.find((function(t){return t.id===Number(e.i)})).grid=e}))},draggableCancel:".demo-wrapper"},n.map((function(e){return c.a.createElement("div",{className:"blockWrapper",key:e.id,"data-id":e.id,"data-grid":e.grid,onClick:l},c.a.createElement(g,Object.assign({},e,{updateContent:r})))}))))};r.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[30,3,4]]]);
//# sourceMappingURL=main.62914a19.chunk.js.map