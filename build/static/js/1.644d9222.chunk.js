(this.webpackJsonpcms_demo=this.webpackJsonpcms_demo||[]).push([[1],{29:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(6),c=a(142),d=a(103);a(237);var i=function(t){var e=t.id,a=t.content,i=t.updateContent,s=Object(n.useState)({editorState:a?d.EditorState.createWithContent(Object(d.convertFromRaw)(JSON.parse(a))):d.EditorState.createEmpty()}),m=Object(o.a)(s,2),l=m[0],p=m[1];return r.a.createElement("div",null,r.a.createElement(c.Editor,{toolbarHidden:!0,editorState:l.editorState,wrapperClassName:"demo-wrapper",editorClassName:"demo-editor",onEditorStateChange:function(t){var a=t.getCurrentContent();i(e,JSON.stringify(Object(d.convertToRaw)(a))),p({editorState:t})}}))};e.default=function(t){var e=t.id,a=t.content,n=t.blockType,o=t.updateContent;return r.a.createElement("div",{className:"block","data-block-type":n},r.a.createElement("div",{className:"content"},r.a.createElement(i,{id:e,content:a,updateContent:o})))}}}]);
//# sourceMappingURL=1.644d9222.chunk.js.map