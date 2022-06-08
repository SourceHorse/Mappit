"use strict";(self["webpackChunkmappitweb"]=self["webpackChunkmappitweb"]||[]).push([[5295],{95175:function(t,e,n){n.d(e,{Q:function(){return h}});var i=n(15055),s=n(8693),r=n(88071),o=n(79162);class h{constructor(t=9,e){this.compareMinX=c,this.compareMinY=d,this._toBBox=function(t){return t},this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),y.prune(),B.prune(),M.prune(),b.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const i=this._toBBox;if(p(t,n))for(y.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;p(t,o)&&(n.leaf?e(r):g(t,o)?this._all(r,e):y.push(r))}n=y.pop()}}collides(t){let e=this.data;const n=this._toBBox;if(!p(t,e))return!1;for(y.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(p(t,r)){if(e.leaf||g(t,r))return!0;y.push(s)}}e=y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const t=this.data;this.data=e,e=t}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new X([]),this}remove(t){if(!t)return this;let e,n=this.data,r=null,o=0,h=!1;const a=this._toBBox(t);for(M.clear(),b.clear();n||M.length>0;){var l;if(n||(n=(0,s.j0)(M.pop()),r=M.data[M.length-1],o=null!=(l=b.pop())?l:0,h=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),M.push(n),this._condense(M),this;h||n.leaf||!g(n,a)?r?(o++,n=r.children[o],h=!1):n=null:(M.push(n),b.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){let n=t;for(B.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else B.pushArray(n.children);n=null!=(i=B.pop())?i:null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new X(t.slice(e,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new N([]);o.height=i;const h=Math.ceil(s/r),l=h*Math.ceil(Math.sqrt(r));I(t,e,n,l,this.compareMinX);for(let a=e;a<=n;a+=l){const e=Math.min(a+l-1,n);I(t,a,e,h,this.compareMinY);for(let n=a;n<=e;n+=h){const s=Math.min(n+h-1,e);o.children.push(this._build(t,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],h=m(o),a=_(t,o)-h;a<s?(s=a,i=h<i?h:i,n=o):a===s&&h<i&&(i=h,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,s=n?t:i(t);M.clear();const r=this._chooseSubtree(s,this.data,e,M);for(r.children.push(t),u(r,s);e>=0&&M.data[e].children.length>this._maxEntries;)this._split(M,e),e--;this._adjustParentBBoxes(s,M,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),h=n.leaf?new X(o):new N(o);h.height=n.height,a(n,this._toBBox),a(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this.data=new N([t,e]),this.data.height=t.height+1,a(this.data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=l(t,0,o,this._toBBox),h=l(t,o,n,this._toBBox),a=x(e,h),u=m(e)+m(h);a<i?(i=a,r=o,s=u<s?u:s):a===i&&u<s&&(s=u,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this.compareMinX:c,s=t.leaf?this.compareMinY:d;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this._toBBox,r=l(t,0,e,s),o=l(t,n-e,n,s);let h=f(r)+f(o);for(let a=e;a<n-e;a++){const e=t.children[a];u(r,t.leaf?s(e):e),h+=f(r)}for(let a=n-e-1;a>=e;a--){const e=t.children[a];u(o,t.leaf?s(e):e),h+=f(o)}return h}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)u(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){l(t,0,t.children.length,e,t)}function l(t,e,n,i,s){s||(s=new X([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],u(s,t.leaf?i(r):r);return s}function u(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function d(t,e){return t.minY-e.minY}function m(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function f(t){return t.maxX-t.minX+(t.maxY-t.minY)}function _(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function x(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function p(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function I(t,e,n,i,r){const h=[e,n];for(;h.length;){const e=(0,s.j0)(h.pop()),n=(0,s.j0)(h.pop());if(e-n<=i)continue;const a=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,a,n,e,r),h.push(n,a,a,e)}}const y=new r.Z,B=new r.Z,M=new r.Z,b=new r.Z({deallocator:void 0});class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class Y extends v{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class X extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class N extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},5312:function(t,e,n){n.d(e,{N:function(){return i}});const i={convertToGEGeometry:s,exportPoint:o,exportPolygon:a,exportPolyline:u,exportMultipoint:d,exportExtent:f};function s(t,e){return null==e?null:t.convertJSONToGeometry(e)}class r{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}function o(t,e,n){const i=new r(t.getPointX(e),t.getPointY(e),n),s=t.hasZ(e),o=t.hasM(e);return s&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i}class h{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function a(t,e,n){return new h(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))}class l{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function u(t,e,n){return new l(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))}class c{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function d(t,e,n){return new c(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))}class m{constructor(t,e,n,i,s){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function f(t,e,n){const i=t.hasZ(e),s=t.hasM(e),r=new m(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);r.zmin=n.vmin,r.zmax=n.vmax}if(s){const n=t.getMExtent(e);r.mmin=n.vmin,r.mmax=n.vmax}return r}},6884:function(t,e,n){n.d(e,{Y:function(){return r}});var i=n(8693);function s(t,e){return t?e?4:3:e?3:2}function r(t,e,n,r,a){if((0,i.Wi)(e)||!e.lengths.length)return null;const l="upperLeft"===(null==a?void 0:a.originPosition)?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const u=t.coords,c=[],d=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:m,coords:f}=e,_=s(n,r);let x=0;for(const i of m){const t=o(d,f,x,i,n,r,l);t&&c.push(t),x+=i*_}if(c.sort(((t,e)=>{let i=l*t[2]-l*e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),c.length){let t=6*c[0][2];u[0]=c[0][0]/t,u[1]=c[0][1]/t,n&&(t=6*c[0][4],u[2]=0!==t?c[0][3]/t:0),(u[0]<d[0]||u[0]>d[1]||u[1]<d[2]||u[1]>d[3]||n&&(u[2]<d[4]||u[2]>d[5]))&&(u.length=0)}if(!u.length){const t=e.lengths[0]?h(f,0,m[0],n,r):null;if(!t)return null;u[0]=t[0],u[1]=t[1],n&&t.length>2&&(u[2]=t[2])}return t}function o(t,e,n,i,r,o,h=1){const a=s(r,o);let l=n,u=n+a,c=0,d=0,m=0,f=0,_=0;for(let s=0,g=i-1;s<g;s++,l+=a,u+=a){const n=e[l],i=e[l+1],s=e[l+2],o=e[u],h=e[u+1],a=e[u+2];let x=n*h-o*i;f+=x,c+=(n+o)*x,d+=(i+h)*x,r&&(x=n*a-o*s,m+=(s+a)*x,_+=x),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(f*h>0&&(f*=-1),_*h>0&&(_*=-1),!f)return null;const x=[c,d,.5*f];return r&&(x[3]=m,x[4]=.5*_),x}function h(t,e,n,i,r){const o=s(i,r);let h=e,d=e+o,m=0,f=0,_=0,x=0;for(let s=0,g=n-1;s<g;s++,h+=o,d+=o){const e=t[h],n=t[h+1],s=t[h+2],r=t[d],o=t[d+1],g=t[d+2],p=i?l(e,n,s,r,o,g):a(e,n,r,o);if(p)if(m+=p,i){const t=c(e,n,s,r,o,g);f+=p*t[0],_+=p*t[1],x+=p*t[2]}else{const t=u(e,n,r,o);f+=p*t[0],_+=p*t[1]}}return m>0?i?[f/m,_/m,x/m]:[f/m,_/m]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,i){const s=n-t,r=i-e;return Math.sqrt(s*s+r*r)}function l(t,e,n,i,s,r){const o=i-t,h=s-e,a=r-n;return Math.sqrt(o*o+h*h+a*a)}function u(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function c(t,e,n,i,s,r){return[t+.5*(i-t),e+.5*(s-e),n+.5*(r-n)]}},75305:function(t,e,n){n.d(e,{H:function(){return a}});var i=n(81653),s=n(95175);const r=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function h(t,e,n){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3],t.search(o,n)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),h(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>r&&this._loadIndex()))}}},85875:function(t,e,n){n.d(e,{Z:function(){return _}});var i=n(22130),s=n(96545),r=n(93622),o=n(8693),h=n(37740),a=n(74440),l=n(76338),u=n(75305),c=n(6884),d=n(38969),m=n(10297);const f={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new d.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,o.Wi)(t.centroid)&&(t.centroid=(0,c.Y)(new m.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)};class _{constructor(t){this.geometryInfo=t,this._boundsStore=new u.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=f}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const t=(0,a.Ue)(a.Gv);return this._featuresById.forEach((e=>{const n=this._boundsStore.get(e.objectId);n&&(t[0]=Math.min(n[0],t[0]),t[1]=Math.min(n[1],t[1]),t[2]=Math.max(n[2],t[2]),t[3]=Math.max(n[3],t[3]))})),t}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e,n){for(const i of t){const t=this._boundsStore.get(i.objectId);t&&e((0,h.JR)(n,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let s;if(this._markedIds.add(e),n?(t.displayId=n.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,l.$)((0,o.pC)(s)?s:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t),this._markedIds.delete(t.objectId),this._boundsStore.delete(t.objectId),this._featuresById.delete(t.objectId),t}}},65341:function(t,e,n){n.d(e,{_W:function(){return d},iV:function(){return _},oj:function(){return p}});var i=n(8693),s=n(59053),r=n(5312),o=n(54597),h=n(31957);const a=[0,0];function l(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,a),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,a),[n.xmax,n.ymax]=t(e.xmax,e.ymax,a),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:u(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:u(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:c(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:void 0}function u(t,e){const n=[];for(const i of t)n.push(c(i,e));return n}function c(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function d(t,e){if(!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)&&t.geometry.spatialReference)):[t];await(0,s.iQ)(n.map((t=>({source:t,dest:e}))))}const m=l.bind(null,h.hG),f=l.bind(null,h.R6);function _(t,e,n){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,h.Q8)(e,n)){const e=(0,o.sS)(n)?m(t):f(t);return e.spatialReference=n,e}return(0,s.oj)(r.N,[t],e,n,null)[0]}class x{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:a}=t;(0,h.Q8)(n,i)?(0,o.sS)(i)?a(e.map(m)):a(e.map(f)):a((0,s.oj)(r.N,e,n,i,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const g=new x;function p(t,e,n){return g.push(t,e,n)}}}]);
//# sourceMappingURL=5295.10992712.js.map