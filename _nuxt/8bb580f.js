(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{234:function(t,e,n){"use strict";n.r(e);var r=n(26),o=n(5),c=(n(49),n(34),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,r=t.env,e.next=3,n.$get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR&api_key=".concat(r.API_CRYPTO));case 3:return data=e.sent,e.abrupt("return",{data:data});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{data:"default",forms:[],api:"bb247d330f92212852dc26e5cceba436b87caee1e83ec909a15bd9dbec8b69d2"}},created:function(){for(var t in this.data)this.forms.push(Object(r.a)({USD:0},t,0));setInterval(this.getCourse,1e4)},destroyed:function(){clearInterval(this.getCourse)},methods:{getCourse:function(){var t=this;this.$axios.$get("https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR&api_key=".concat(api)).then((function(e){t.data=e}))},convrtR:function(i,t){this.forms[i].USD=Math.floor(this.forms[i][t]/this.data[t])},convrtL:function(i,t){this.forms[i][t]=Math.floor(this.data[t]*this.forms[i].USD*1e5)/1e5}}}),d=n(47),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex min-h-screen bg-white items-center justify-center"},[n("ul",t._l(t.data,(function(e,label,r){return n("li",{key:r,staticClass:"pb-6"},[n("div",{staticClass:"text-center pb-4"},[n("span",{staticClass:"font-bold"},[t._v("\n          "+t._s("USD — "+label+": ")+"\n        ")]),t._v(" "),n("span",[t._v("\n          "+t._s(e)+"\n        ")])]),t._v(" "),n("div",{staticClass:"grid grid-cols-2 gap-5"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.forms[r].USD,expression:"forms[index].USD"}],staticClass:"\n            col-span-1\n            rounded\n            shadow\n            border border-color-gray-600\n            text-gray-700\n            py-1\n            px-4\n          ",attrs:{type:"text"},domProps:{value:t.forms[r].USD},on:{input:[function(e){e.target.composing||t.$set(t.forms[r],"USD",e.target.value)},function(e){return t.convrtL(r,label)}]}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.forms[r][label],expression:"forms[index][label]"}],staticClass:"\n            col-span-1\n            rounded\n            shadow\n            border border-color-gray-600\n            text-gray-700\n            py-1\n            px-4\n          ",attrs:{type:"text"},domProps:{value:t.forms[r][label]},on:{input:[function(e){e.target.composing||t.$set(t.forms[r],label,e.target.value)},function(e){return t.convrtR(r,label)}]}})])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);