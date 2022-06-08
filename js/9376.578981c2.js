"use strict";(self["webpackChunkmappitweb"]=self["webpackChunkmappitweb"]||[]).push([[9376],{89376:function(e,t,o){o.r(t),o.d(t,{default:function(){return pe}});var r=o(61445),i=o(22130),s=o(50816),n=o(8693),p=o(74823),a=o(92454),l=o(18105),c=o(58006),y=(o(15055),o(81653),o(94315),o(62269)),u=o(77623),d=o(47604),f=o(99659),h=o(72158),m=o(39177),v=o(60549);function g(e){return C[b(e)]||S}function b(e){return e instanceof Blob?e.type:_(e.url)}function _(e){const t=(0,f.Ml)(e);return x[t]||w}const C={},w="text/plain",S=C[w],x={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip"};for(const ae in x)C[x[ae]]=ae;var I=o(36067);function T(e){const t=(0,n.pC)(e)&&e.origins?e.origins:[void 0];return(o,r)=>{const i=j(e,o,r);for(const e of t){const t=(0,c.CJ)(o,e,r);for(const e in i)t[e]=i[e]}}}function j(e,t,o){if((0,n.pC)(e)&&"resource"===e.type)return N(e,t,o);switch((0,n.pC)(e)&&e.type?e.type:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=I.p;return{read:e,write:t}}}}function N(e,t,o){const r=(0,m.VZ)(t,o);return{type:String,read:(e,t,o)=>{const i=(0,I.r)(e,t,o);return r.type===String?i:"function"==typeof r.type?new r.type({url:i}):void 0},write:{writer(t,i,s,p){if(!p||!p.resources)return"string"==typeof t?void(i[s]=(0,I.t)(t,p)):void(i[s]=t.write({},p));const a=J(t),l=a?(0,I.t)(a,{...p,verifyItemRelativeUrls:p&&p.verifyItemRelativeUrls?{writtenUrls:p.verifyItemRelativeUrls.writtenUrls,rootPath:null}:null},I.M.NO):null,c=r.type!==String&&(!(0,d.l)(this)||p&&p.origin&&this.originIdOf(o)>(0,v.M9)(p.origin));p&&p.portalItem&&(0,n.pC)(l)&&!(0,f.YP)(l)?c?U(this,o,t,l,i,s,p,e):R(l,i,s,p):p&&p.portalItem&&((0,n.Wi)(l)||(0,n.pC)((0,I.i)(l))||(0,f.jc)(l)||c)?M(this,o,t,l,i,s,p,e):i[s]=l}}}}function M(e,t,o,r,i,s,p,a){const l=(0,h.D)(),c=P(o,r,p),y=(0,f.v_)((0,n.U2)(a,"prefix"),l),u=`${y}.${g(c)}`,d=p.portalItem.resourceFromPath(u);(0,f.jc)(r)&&p.resources.pendingOperations.push(F(r).then((e=>{d.path=`${y}.${g(e)}`,i[s]=d.itemRelativeUrl})).catch((()=>{}))),O(e,t,d,c,p.resources.toAdd),i[s]=d.itemRelativeUrl}function U(e,t,o,r,i,s,n,p){const a=n.portalItem.resourceFromPath(r),l=P(o,r,n);g(l)===(0,f.Ml)(a.path)?(O(e,t,a,l,n.resources.toUpdate),i[s]=r):M(e,t,o,r,i,s,n,p)}function R(e,t,o,r){r.resources.toKeep.push({resource:r.portalItem.resourceFromPath(e)}),t[o]=e}function O(e,t,o,r,i){i.push({resource:o,content:r,finish:o=>{q(e,t,o)}})}function P(e,t,o){return"string"==typeof e?{url:t}:new Blob([JSON.stringify(e.toJSON(o))],{type:"application/json"})}async function F(e){const t=(await Promise.resolve().then(o.bind(o,94848))).default,{data:r}=await t(e,{responseType:"blob"});return r}function J(e){return(0,n.Wi)(e)?null:"string"==typeof e?e:e.url}function q(e,t,o){"string"==typeof e[t]?e[t]=o.url:e[t].url=o.url}var k,A=o(29222),D=o(45181),L=o(20694),Z=o(35894),V=o(44283),B=o(23706),z=o(20482),G=o(12799),K=o(21965),$=o(94848),W=o(88208),Y=o(60931),E=(o(80388),o(86232)),H=o(81431),Q=o(73261),X=o(59053),ee=o(91407);let te=k=class extends Y.wq{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,t,o,r){if(r.layer&&r.layer.spatialReference&&!r.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,X.Up)(e.spatialReference,r.layer.spatialReference))return void(r&&r.messages&&r.messages.push(new H.Z("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:r.layer.spatialReference,context:r})));const i=new ee.Z;(0,X.Wt)(e,i,r.layer.spatialReference),t[o]=i.toJSON(r)}else t[o]=e.toJSON(r);delete t[o].spatialReference}clone(){return new k({geometry:(0,E.d9)(this.geometry),type:this.type})}};(0,r._)([(0,c.Cb)({type:ee.Z}),T()],te.prototype,"geometry",void 0),(0,r._)([(0,Q.c)(["web-scene","portal-item"],"geometry")],te.prototype,"writeGeometry",null),(0,r._)([(0,c.Cb)({type:["clip","mask","replace"],nonNullable:!0}),T()],te.prototype,"type",void 0),te=k=(0,r._)([(0,u.j)("esri.layers.support.SceneModification")],te);const oe=te;var re;let ie=re=class extends((0,Y.eC)(W.Z.ofType(oe))){constructor(e){super(e),this.url=null}toJSON(e){return this.toArray().map((t=>t.toJSON(e))).filter((e=>!!e.geometry))}clone(){return new re({url:this.url,items:this.items.map((e=>e.clone()))})}_readModifications(e,t){for(const o of e)this.add(oe.fromJSON(o,t))}static fromJSON(e,t){const o=new re;return o._readModifications(e,t),o}static async fromUrl(e,t,o){const r={url:(0,f.mN)(e),origin:"service"},i=await(0,$["default"])(e,{responseType:"json",signal:(0,n.U2)(o,"signal")}),s=t.toJSON(),p=[];for(const n of i.data)p.push(oe.fromJSON({...n,geometry:{...n.geometry,spatialReference:s}},r));return new re({url:e,items:p})}};(0,r._)([(0,c.Cb)({type:String})],ie.prototype,"url",void 0),ie=re=(0,r._)([(0,u.j)("esri.layers.support.SceneModifications")],ie);const se=ie;let ne=class extends((0,z.Vt)((0,L.Y)((0,Z.q)((0,V.I)((0,B.M)((0,p.R)((0,D.V)(A.Z)))))))){constructor(...e){super(...e),this.handles=new s.Z,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this.handles.destroy()}initialize(){this.handles.add((0,l.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),l.Z_))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,I.f)(e,o),context:o}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=(0,n.U2)(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,a.r9)(o)}if(await this._fetchService(t),(0,n.pC)(this._modificationsSource)){const t=await se.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(!(0,n.Wi)(this._modificationsSource))return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(z.xp.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(z.xp.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new i.Z("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new i.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new i.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};(0,r._)([(0,c.Cb)({type:String,readOnly:!0})],ne.prototype,"geometryType",void 0),(0,r._)([(0,c.Cb)({type:["show","hide"]})],ne.prototype,"listMode",void 0),(0,r._)([(0,c.Cb)({type:["IntegratedMeshLayer"]})],ne.prototype,"operationalLayerType",void 0),(0,r._)([(0,c.Cb)({json:{read:!1},readOnly:!0})],ne.prototype,"type",void 0),(0,r._)([(0,c.Cb)({type:K.U4,readOnly:!0})],ne.prototype,"nodePages",void 0),(0,r._)([(0,c.Cb)({type:[K.QI],readOnly:!0})],ne.prototype,"materialDefinitions",void 0),(0,r._)([(0,c.Cb)({type:[K.Yh],readOnly:!0})],ne.prototype,"textureSetDefinitions",void 0),(0,r._)([(0,c.Cb)({type:[K.H3],readOnly:!0})],ne.prototype,"geometryDefinitions",void 0),(0,r._)([(0,c.Cb)({readOnly:!0})],ne.prototype,"serviceUpdateTimeStamp",void 0),(0,r._)([(0,c.Cb)({type:se}),T({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],ne.prototype,"modifications",void 0),(0,r._)([(0,y.r)(["web-scene","portal-item"],"modifications")],ne.prototype,"readModifications",null),(0,r._)([(0,c.Cb)(G.PV)],ne.prototype,"elevationInfo",void 0),(0,r._)([(0,c.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],ne.prototype,"path",void 0),ne=(0,r._)([(0,u.j)("esri.layers.IntegratedMeshLayer")],ne);const pe=ne},21965:function(e,t,o){o.d(t,{H3:function(){return v},QI:function(){return y},U4:function(){return a},Yh:function(){return d}});var r=o(61445),i=o(60931),s=o(58006),n=(o(15055),o(81653),o(94315),o(56667)),p=o(77623);let a=class extends i.wq{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,r._)([(0,s.Cb)({type:Number})],a.prototype,"nodesPerPage",void 0),(0,r._)([(0,s.Cb)({type:Number})],a.prototype,"rootIndex",void 0),(0,r._)([(0,s.Cb)({type:String})],a.prototype,"lodSelectionMetricType",void 0),a=(0,r._)([(0,p.j)("esri.layer.support.I3SNodePageDefinition")],a);let l=class extends i.wq{constructor(){super(...arguments),this.factor=1}};(0,r._)([(0,s.Cb)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],l.prototype,"id",void 0),(0,r._)([(0,s.Cb)({type:Number})],l.prototype,"factor",void 0),l=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialTexture")],l);let c=class extends i.wq{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,r._)([(0,s.Cb)({type:[Number]})],c.prototype,"baseColorFactor",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"baseColorTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],c.prototype,"metallicRoughnessTexture",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"metallicFactor",void 0),(0,r._)([(0,s.Cb)({type:Number})],c.prototype,"roughnessFactor",void 0),c=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialPBRMetallicRoughness")],c);let y=class extends i.wq{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,r._)([(0,n.J)({opaque:"opaque",mask:"mask",blend:"blend"})],y.prototype,"alphaMode",void 0),(0,r._)([(0,s.Cb)({type:Number})],y.prototype,"alphaCutoff",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],y.prototype,"doubleSided",void 0),(0,r._)([(0,n.J)({none:"none",back:"back",front:"front"})],y.prototype,"cullFace",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"normalTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"occlusionTexture",void 0),(0,r._)([(0,s.Cb)({type:l})],y.prototype,"emissiveTexture",void 0),(0,r._)([(0,s.Cb)({type:[Number]})],y.prototype,"emissiveFactor",void 0),(0,r._)([(0,s.Cb)({type:c})],y.prototype,"pbrMetallicRoughness",void 0),y=(0,r._)([(0,p.j)("esri.layer.support.I3SMaterialDefinition")],y);let u=class extends i.wq{};(0,r._)([(0,s.Cb)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],u.prototype,"name",void 0),(0,r._)([(0,n.J)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],u.prototype,"format",void 0),u=(0,r._)([(0,p.j)("esri.layer.support.I3STextureFormat")],u);let d=class extends i.wq{constructor(){super(...arguments),this.atlas=!1}};(0,r._)([(0,s.Cb)({type:[u]})],d.prototype,"formats",void 0),(0,r._)([(0,s.Cb)({type:Boolean})],d.prototype,"atlas",void 0),d=(0,r._)([(0,p.j)("esri.layer.support.I3STextureSetDefinition")],d);let f=class extends i.wq{};(0,r._)([(0,n.J)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],f.prototype,"type",void 0),(0,r._)([(0,s.Cb)({type:Number})],f.prototype,"component",void 0),f=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryAttribute")],f);let h=class extends i.wq{};(0,r._)([(0,n.J)({draco:"draco"})],h.prototype,"encoding",void 0),(0,r._)([(0,s.Cb)({type:[String]})],h.prototype,"attributes",void 0),h=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryCompressedAttributes")],h);let m=class extends i.wq{constructor(){super(...arguments),this.offset=0}};(0,r._)([(0,s.Cb)({type:Number})],m.prototype,"offset",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"position",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"normal",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"uv0",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"color",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"uvRegion",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"featureId",void 0),(0,r._)([(0,s.Cb)({type:f})],m.prototype,"faceRange",void 0),(0,r._)([(0,s.Cb)({type:h})],m.prototype,"compressedAttributes",void 0),m=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryBuffer")],m);let v=class extends i.wq{};(0,r._)([(0,n.J)({triangle:"triangle"})],v.prototype,"topology",void 0),(0,r._)([(0,s.Cb)()],v.prototype,"geometryBuffers",void 0),v=(0,r._)([(0,p.j)("esri.layer.support.I3SGeometryDefinition")],v)}}]);
//# sourceMappingURL=9376.578981c2.js.map