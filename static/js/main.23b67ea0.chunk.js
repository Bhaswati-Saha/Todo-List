(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,a){e.exports=a(29)},19:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},21:function(e,t,a){},22:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(2),c=a.n(i),o=(a(19),a(11)),s=a(6),l=a(7),u=a(13),m=a(12),d=(a(20),a(21),a(22),a(8)),h=a(9),f=function(e){var t=e.items1,a=e.deleteItem,n=e.setUpdate,i=t.map((function(e){return r.a.createElement("div",{className:"list",key:e.key},r.a.createElement("p",null,r.a.createElement("input",{type:"text",id:e.key,value:e.text,onChange:function(t){return n(t.target.value,e.key)}}),r.a.createElement("span",null,r.a.createElement(d.a,{className:"faicons",icon:"trash",onClick:function(){return a(e.key)}}))))}));return r.a.createElement("div",null,r.a.createElement(h.a,{duration:300,easing:"ease-in-out"},i))},p=a(3),v=a(10),E=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"ph5"},r.a.createElement("input",{type:"search",placeholder:"Search Items",onChange:t}))};p.b.add(v.a);var g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleInput=function(e){n.setState({currentItem:{text:e.target.value,key:Date.now()}})},n.addItem=function(e){e.preventDefault();var t=n.state.currentItem;if(console.log(t),""!==t.text){var a=[].concat(Object(o.a)(n.state.items),[t]);n.setState({items:a,currentItem:{text:"",key:""}})}},n.deleteItem=function(e){var t=n.state.items.filter((function(t){return t.key!==e}));n.setState({items:t})},n.setUpdate=function(e,t){var a=n.state.items;a.map((function(a){a.key===t&&(a.text=e)})),n.setState({items:a})},n.onSearchChange=function(e){n.setState({searchfield:e.target.value})},n.state={items:[],currentItem:{text:"",key:""},searchfield:""},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.items,a=e.searchfield,n=t.filter((function(e){return e.text.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Todo List"),r.a.createElement("form",{id:"to-do-list",onSubmit:this.addItem},r.a.createElement("input",{type:"text",placeholder:"Enter text",required:!0,value:this.state.currentItem.text,onChange:this.handleInput}),r.a.createElement("button",{type:"submit"},"Add"),r.a.createElement(E,{searchChange:this.onSearchChange}))),r.a.createElement(f,{items1:n,deleteItem:this.deleteItem,setUpdate:this.setUpdate}))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);c.a.render(r.a.createElement(g,{name:"Bhaswati"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.23b67ea0.chunk.js.map