require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{17:function(t,e,n){"use strict";var i=s(n(4)),o=s(n(18));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(20),o=n.n(i),s=n(24);var c=function(t){n(19)},a=n(0)(o.a,s.a,c,null,null);e.default=a.exports},19:function(t,e){},20:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i,o=n(8),s=(i=o)&&i.__esModule?i:{default:i};e.default={data:function(){return{title:"icon",activeIndex:-1}},onLoad:function(){t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#007AFF",splitLine:null}),t.getSystemInfo({success:function(t){console.log(t.windowHeight)}})},components:{uniIcon:s.default},methods:{switchActive:function(t){this.activeIndex=t}}}}).call(e,n(5).default)},24:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"page"},[e("view",{staticClass:"topBar"},[e("view",{staticClass:"icon-item"},[e("uni-icon",{attrs:{size:"40",type:"scan",color:"#fff",mpcomid:"mHX-0"}}),this._v("\n\t\t\t\t扫一扫\n            ")],1),e("view",{staticClass:"icon-item"},[e("uni-icon",{attrs:{size:"40",type:"help",color:"#fff",mpcomid:"1fl-1"}}),this._v("\n\t\t\t\t诊断\n\t\t\t")],1),e("view",{staticClass:"icon-item"},[e("uni-icon",{attrs:{size:"40",type:"gear-filled",color:"#fff",mpcomid:"mk1-2"}}),this._v("\n\t\t\t\t设置\n\t\t\t")],1)])])},staticRenderFns:[]};e.a=i}},[17]);