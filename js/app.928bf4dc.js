(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/Mappit/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"2bc5":function(e,t,n){},"2d6e":function(e,t,n){},"6be5":function(e,t,n){"use strict";n("78ba")},"78ba":function(e,t,n){},"8e0b":function(e,t,n){"use strict";n("b27c")},b27c:function(e,t,n){},b606:function(e,t,n){"use strict";n("2bc5")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"};function o(e,t,n,o,c,i){var s=Object(r["n"])("Map");return Object(r["j"])(),Object(r["d"])("div",a,[Object(r["f"])(s)])}Object(r["l"])("data-v-0689d11d");var c=Object(r["e"])("div",{id:"mapDiv",class:"map-div"},null,-1),i={class:"create-btn-container"},s=Object(r["e"])("span",null,"Create Post",-1),l=[s];function u(e,t,n,a,o,s){var u=Object(r["n"])("PlotPanel");return Object(r["j"])(),Object(r["d"])("div",null,[c,Object(r["q"])(Object(r["f"])(u,{onClose:s.cancelCreate},null,8,["onClose"]),[[r["o"],o.showPlotPanel]]),Object(r["e"])("div",i,[o.showCreate?(Object(r["j"])(),Object(r["d"])("button",{key:0,class:"primary post-create-btn",onClick:t[0]||(t[0]=function(){return s.openCreate&&s.openCreate.apply(s,arguments)})},l)):Object(r["c"])("",!0)])])}Object(r["k"])();n("d81d");var p=n("e11e"),d=n.n(p);Object(r["l"])("data-v-8ee58370");var f={class:"backdrop"},b={id:"plotPanel",class:"plot-panel"},h={class:"header"};function m(e,t,n,a,o,c){var i=Object(r["n"])("font-awesome-icon");return Object(r["j"])(),Object(r["d"])("div",f,[Object(r["e"])("div",b,[Object(r["e"])("div",h,[Object(r["e"])("button",{class:"close",onClick:t[0]||(t[0]=function(){return c.onClickClose&&c.onClickClose.apply(c,arguments)})},[Object(r["f"])(i,{icon:"times"})])])])])}Object(r["k"])();var v={name:"PlotPanel",methods:{onClickClose:function(){this.$emit("close")}}};n("8e0b");v.render=m,v.__scopeId="data-v-8ee58370";var j=v,O={name:"Map",components:{PlotPanel:j},data:function(){return{map:null,markerLayer:null,showPlotPanel:!1,showCreate:!1,currentLatLng:null}},mounted:function(){this.map=this.createMap(),this.map.on("click",this.mapClick),this.map.on("dragstart",this.dragStart),this.map.on("dragend",this.dragEnd)},watch:{},methods:{createMap:function(){var e=d.a.map("mapDiv").setView([35.85,-78.8],11);return d.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(e),this.markerLayer=(new d.a.LayerGroup).addTo(e),e},mapClick:function(e){this.clearMarkers(),this.currentLatLng=e.latlng,this.addMarker(e.latlng),this.showPlotPanel||(this.showCreate=!0)},dragStart:function(){document.getElementById("mapDiv").classList.add("drag")},dragEnd:function(){document.getElementById("mapDiv").classList.remove("drag")},addMarker:function(e){d.a.marker(e).addTo(this.markerLayer)},clearMarkers:function(){this.markerLayer.clearLayers()},centerZoomOffset:function(e,t,n){var r,a;t=null!==(r=t)&&void 0!==r?r:this.map.getZoom(),n=null!==(a=n)&&void 0!==a?a:0;var o=this.map.project(e,t).subtract(n),c=this.map.unproject(o,t);this.map.setView(c,t)},cancelCreate:function(){this.clearMarkers(),this.showPlotPanel=!1},openCreate:function(){var e=this.isMobile()?0:-195;this.centerZoomOffset(this.currentLatLng,this.map.getZoom(),[e,0]),this.showCreate=!1,this.showPlotPanel=!0}}};n("e961"),n("b606");O.render=u,O.__scopeId="data-v-0689d11d";var g=O,y={name:"App",components:{Map:g}};n("6be5");y.render=o;var w=y,P=n("5502"),k=Object(P["a"])({state:{},mutations:{},actions:{},modules:{}}),C=n("ecee"),M=n("c074"),L=n("ad3d"),_=(n("ac1f"),n("466d"),function(){var e=[/Android/i,/webOS/i,/iPhone/i,/BlackBerry/i,/Windows Phone/i];return e.some((function(e){return navigator.userAgent.match(e)}))}),S=_,x={isMobile:S},T=x;C["c"].add(M["a"]),Object(r["b"])(w).use(k).component("font-awesome-icon",L["a"]).mixin({methods:T}).mount("#app")},e961:function(e,t,n){"use strict";n("2d6e")}});
//# sourceMappingURL=app.928bf4dc.js.map