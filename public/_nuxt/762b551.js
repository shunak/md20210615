(window.webpackJsonp=window.webpackJsonp||[]).push([[12,7],{330:function(t,e,n){"use strict";n.r(e);n(10),n(76);var r={data:function(){return{newid:Math.random().toString(32).substring(2)}},methods:{add:function(){var path="/"+this.newid;this.$router.push(path)}}},o=n(75),c=n(96),l=n.n(c),m=n(329),d=n(301),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{dark:"",color:"blue",height:"20vh",ripple:""},on:{click:t.add}},[n("v-card-title",{staticClass:"headline"},[t._v(" 新しいテキストを追加＋ ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VCardTitle:d.b})},331:function(t,e,n){"use strict";n.r(e);var r={props:{memo:{type:Object,required:!0}},computed:{memos:function(){return this.$store.state.memos.list}},methods:{edit:function(t){var path="/"+t;this.$router.push(path)},remove:function(t){confirm("削除しますか？")&&this.$store.dispatch("memos/removeDB",t)}}},o=n(75),c=n(96),l=n.n(c),m=n(353),d=n(329),v=n(301),h=n(295),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{height:"20vh",ripple:""},on:{click:function(e){return t.edit(t.memo.id)}}},[n("v-card-title",{staticClass:"headline"},[t._v("\n    "+t._s(t.memo.data.title)+"\n  ")]),t._v(" "),n("div",{staticClass:"ma-2",staticStyle:{position:"absolute",bottom:"0",right:"0"}},[n("v-btn",{attrs:{icon:"",color:"red"},on:{click:function(e){return t.remove(t.memo.id)}}},[n("v-icon",[t._v("mdi-trash-can-outline")])],1)],1),t._v(" "),n("div",{staticStyle:{position:"absolute",bottom:"0"}},[n("v-card-subtitle",[t._v(t._s(t.memo.data.timestamp))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:m.a,VCard:d.a,VCardSubtitle:v.a,VCardTitle:v.b,VIcon:h.a})},352:function(t,e,n){"use strict";n.r(e);var r=n(5),o=(n(49),{fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("memos/readDB");case 2:t.$store.dispatch("memos/listenDB");case 3:case"end":return e.stop()}}),e)})))()},computed:{memos:function(){return this.$store.state.memos.list}}}),c=n(75),l=n(96),m=n.n(l),d=n(349),v=n(350),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{cols:"12",sm:"3"}},[n("NewCardComponent")],1),t._v(" "),t._l(t.memos,(function(t){return n("v-col",{key:t.id,attrs:{cols:"12",sm:"3"}},[n("CardComponent",{attrs:{memo:t}})],1)}))],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{NewCardComponent:n(330).default,CardComponent:n(331).default}),m()(component,{VCol:d.a,VRow:v.a})}}]);