(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa22f"],{1071:function(e,t,o){"use strict";o.r(t);var m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor"},[o("h1",[e._v("Edit Memo")]),o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.memo.body,expression:"memo.body"}],attrs:{name:"memo"},domProps:{value:e.memo.body},on:{input:function(t){t.target.composing||e.$set(e.memo,"body",t.target.value)}}}),o("button",[e._v("保存")])])},n=[],i=(o("7db0"),{name:"edit",computed:{memo:function(){var e=this.$route.params["id"];return this.$store.state.memos.find((function(t){return t.id==e}))}},methods:{save:function(){this.$store.commit("update",{id:this.memo.id,body:this.memo.body}),this.$router.push("/")}}}),s=i,a=o("2877"),r=Object(a["a"])(s,m,n,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0aa22f.d8fd61da.js.map