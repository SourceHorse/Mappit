"use strict";(self["webpackChunkmappitweb"]=self["webpackChunkmappitweb"]||[]).push([[4178],{84178:function(e,t,r){r.r(t),r.d(t,{getGeometryServiceURL:function(){return u},projectGeometry:function(){return c}});var n=r(21383),o=r(22130),i=r(53262),a=r(58011),s=r(66281);async function u(e=null,t){var r,a;if(n.Z.geometryServiceUrl)return n.Z.geometryServiceUrl;if(!e)throw new o.Z("internal:geometry-service-url-not-configured");let s;s="portal"in e?e.portal||i.Z.getDefault():e,await s.load({signal:t});const u=null==(r=s.helperServices)||null==(a=r.geometry)?void 0:a.url;if(!u)throw new o.Z("internal:geometry-service-url-not-configured");return u}async function c(e,t,r=null,n){const i=await u(r,n),c=new s.Z;c.geometries=[e],c.outSpatialReference=t;const f=await(0,a.i)(i,c,{signal:n});if(f&&Array.isArray(f)&&1===f.length)return f[0];throw new o.Z("internal:geometry-service-projection-failed")}},58011:function(e,t,r){r.d(t,{i:function(){return f}});var n=r(94848),o=r(94315),i=r(90421),a=r(16829),s=r(26173),u=r(66281);const c=(0,o.se)(u.Z);async function f(e,t,r){t=c(t);const o=(0,a.en)(e),u={...o.query,f:"json",...t.toJSON()},f=t.outSpatialReference,l=(0,i.Ji)(t.geometries[0]),p=(0,a.lA)(u,r);return(0,n["default"])(o.path+"/project",p).then((({data:{geometries:e}})=>(0,s.o)(e,l,f)))}},26173:function(e,t,r){r.d(t,{F:function(){return o},o:function(){return i}});var n=r(90421);function o(e){return{geometryType:(0,n.Ji)(e[0]),geometries:e.map((e=>e.toJSON()))}}function i(e,t,r){const o=(0,n.q9)(t);return e.map((e=>{const t=o.fromJSON(e);return t.spatialReference=r,t}))}},66281:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(61445),o=r(60931),i=r(58006),a=(r(15055),r(81653),r(94315),r(77623)),s=r(90421);let u=class extends o.wq{constructor(e){super(e),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:(0,s.Ji)(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};(0,n._)([(0,i.Cb)()],u.prototype,"geometries",void 0),(0,n._)([(0,i.Cb)({json:{read:{source:"outSR"}}})],u.prototype,"outSpatialReference",void 0),(0,n._)([(0,i.Cb)()],u.prototype,"transformation",void 0),(0,n._)([(0,i.Cb)()],u.prototype,"transformForward",void 0),u=(0,n._)([(0,a.j)("esri.rest.support.ProjectParameters")],u);const c=u}}]);
//# sourceMappingURL=4178.8a30e7af.js.map