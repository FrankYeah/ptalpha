(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{101:function(t,n,e){},102:function(t,n,e){"use strict";e(101)},103:function(t,n,e){"use strict";e.r(n);var o={components:{contentBox:e(21).default},props:{text:String},data:function(){return{}},computed:{},methods:{},watch:{}},r=(e(102),e(6)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"head-title"},[n("contentBox",{staticClass:"head-title-box"},[n("div",[this._v(this._s(this.text))])])],1)}),[],!1,null,null,null);n.default=component.exports},104:function(t,n,e){},105:function(t,n,e){},106:function(t,n,e){"use strict";e(104)},107:function(t,n,e){"use strict";e.r(n);var o={components:{},props:{link:String,text:String,isLeft:Boolean},data:function(){return{}},computed:{},methods:{},watch:{}},r=(e(106),e(6)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["bread",{"bread-left":t.isLeft}]},[e("router-link",{staticClass:"bread-href",attrs:{to:"/products"}},[t._v("Products")]),t._v(" "),e("div",{staticClass:"bread-arrow"},[t._v(">")]),t._v(" "),e("router-link",{staticClass:"bread-href",attrs:{to:"/"+t.link}},[t._v(t._s(t.text))])],1)}),[],!1,null,null,null);n.default=component.exports},109:function(t,n,e){var map={"./copper/BTC866.5CR-J.png":110,"./copper/BTR8XX5.5.png":111,"./copper/L6N02ASU24XX-J.png":112,"./copper/PL4588C6U3TR5.png":113,"./copper/PL4588C6U3TR6.png":114,"./copper/PLMN-060ROHS.png":115,"./copper/PLMN-070ROHS.png":116,"./copper/PP248PMNWBKD.png":117,"./copper/SMB-1-W-EM.png":118,"./copper/SMB-2-W-EM.png":119,"./copper/TUL23046XX.png":120,"./copper/TUM24046XX.png":121,"./copper/TUM2404XX.png":122,"./copper/WKJA85EUAABXXD.png":123,"./copper/WKJA8C6UAABXXD.png":124,"./copper/WKJE85EUAKYXX.png":125,"./copper/WKJE8C6UAKYXX.png":126,"./copper/port86x86mm.png":127,"./wifi/ACControllerAP.png":128,"./wifi/DualBand.png":129,"./wifi/WiFi6_1E.png":130,"./wifi/WiFi6_4E.png":131};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=109},110:function(t,n,e){t.exports=e.p+"img/1f7483c.png"},111:function(t,n,e){t.exports=e.p+"img/07bfcab.png"},112:function(t,n,e){t.exports=e.p+"img/11ba09f.png"},113:function(t,n,e){t.exports=e.p+"img/4a4e2c8.png"},114:function(t,n,e){t.exports=e.p+"img/6aaf4ad.png"},115:function(t,n,e){t.exports=e.p+"img/6ab0735.png"},116:function(t,n,e){t.exports=e.p+"img/3236371.png"},117:function(t,n,e){t.exports=e.p+"img/cbf14fb.png"},118:function(t,n,e){t.exports=e.p+"img/6fb01ac.png"},119:function(t,n,e){t.exports=e.p+"img/1c9c80d.png"},120:function(t,n,e){t.exports=e.p+"img/7190f62.png"},121:function(t,n,e){t.exports=e.p+"img/4750aef.png"},122:function(t,n,e){t.exports=e.p+"img/b300da3.png"},123:function(t,n,e){t.exports=e.p+"img/0e09a1e.png"},124:function(t,n,e){t.exports=e.p+"img/a10baa0.png"},125:function(t,n,e){t.exports=e.p+"img/231799b.png"},126:function(t,n,e){t.exports=e.p+"img/9daa572.png"},127:function(t,n,e){t.exports=e.p+"img/a86f1a7.png"},128:function(t,n,e){t.exports=e.p+"img/4785903.png"},129:function(t,n,e){t.exports=e.p+"img/3821d8f.png"},130:function(t,n,e){t.exports=e.p+"img/ec50bb5.png"},131:function(t,n,e){t.exports=e.p+"img/58952de.png"},132:function(t,n,e){"use strict";e(105)},133:function(t,n,e){"use strict";e.r(n);var o={components:{},props:{product:Object},data:function(){return{test:"copper/TUM2404XX"}},computed:{},methods:{},watch:{}},r=(e(132),e(6)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"productlist"},[o("div",{staticClass:"productlist-img-box"},[o("img",{staticClass:"productlist-img",attrs:{src:e(109)("./"+t.product.img+".png"),alt:"product"}})]),t._v(" "),o("div",{staticClass:"productlist-head"},[t._v(t._s(t.product.head))]),t._v(" "),t.product.sub?o("div",{staticClass:"productlist-sub"},[t._v(t._s(t.product.sub))]):t._e(),t._v(" "),o("div",{staticClass:"productlist-text"},[t._v(t._s(t.product.text))])])}),[],!1,null,null,null);n.default=component.exports},147:function(t,n,e){},162:function(t,n,e){"use strict";e(147)},174:function(t,n,e){"use strict";e.r(n);var o={components:{contentBox:e(21).default,headTitle:e(103).default,breadCrumb:e(107).default,productlistContent:e(133).default},props:{},data:function(){return{cable:[{head:"WiFi6_4E",sub:"",text:"Wi-Fi6 (11AX)",img:"wifi/WiFi6_4E"},{head:"WiFi6_1E",sub:"",text:"Wi-Fi6 (11AX)",img:"wifi/WiFi6_1E"},{head:"1200Mbps Dual Band Wall Mount Wireless AP",sub:"",text:"WiFi5 (AC)",img:"wifi/DualBand"},{head:"AC Controller for Wireless AP",sub:"",text:"AC1300B",img:"wifi/ACControllerAP"}]}},computed:{},methods:{},watch:{}},r=(e(162),e(6)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"wifi"},[n("headTitle",{attrs:{text:"Products - Wifi"}}),this._v(" "),n("contentBox",{staticClass:"wifi-outer"},[n("breadCrumb",{attrs:{link:"product/product-wifi",text:"Wifi",isLeft:!0}}),this._v(" "),n("div",{staticClass:"wifi-box"},this._l(this.cable,(function(t,e){return n("productlistContent",{key:e,attrs:{product:t}})})),1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);