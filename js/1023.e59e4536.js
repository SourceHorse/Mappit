"use strict";(self["webpackChunkmappitweb"]=self["webpackChunkmappitweb"]||[]).push([[1023],{14647:function(e,t,r){r.d(t,{D:function(){return D},b:function(){return L}});var i=r(53838),n=r(14539),o=r(98290),a=r(15626),s=r(36315),l=r(26616),c=r(87307),u=r(55372),d=r(8943),h=r(49120),f=r(37011),m=r(14009),p=r(49193),v=r(89145),g=r(49475),x=r(9804),T=r(84367),_=r(67662),b=r(11494),A=r(97195),S=r(59260),C=r(78895),M=r(30382),O=r(70046),y=r(9664),E=r(72322),w=r(96985),R=r(76161),P=r(65982),I=r(63914),N=r(30150);function L(e){const t=new I.kG,r=t.vertex.code,L=t.fragment.code;t.include(w.a,{name:"Default Material Shader",output:e.output}),t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3");const D=e.hasModelTransformation;return D&&t.vertex.uniforms.add("model","mat4"),t.include(d.f),t.varyings.add("vpos","vec3"),t.include(y.kl,e),t.include(c.fQ,e),t.include(v.LC,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||(t.include(u.O,e),t.include(l.w,{linearDepth:!1,hasModelTransformation:D}),e.normalType===u.h.Attribute&&e.offsetBackfaces&&t.include(o.w),t.include(T.Q,e),t.include(p.B,e),e.instancedColor&&t.attributes.add(N.T.INSTANCECOLOR,"vec4"),t.varyings.add("localvpos","vec3"),t.include(f.D,e),t.include(n.q,e),t.include(h.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),r.add(P.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${P.H.float(E.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===u.h.Attribute?P.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.vertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${D?"model,":""} vpos);
          ${e.normalType===u.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassTerrainEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),e.output===a.H.Alpha&&(t.include(s.p2,e),t.include(E.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(A.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(R.y),L.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(s.p2,e),t.include(b.X,e),t.include(_.K,e),t.include(E.sj,e),e.receiveShadows&&t.include(O.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(x.S),t.include(A.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(M.jV,e),t.include(C.T,e),t.fragment.include(R.y),t.include(S.k,e),L.add(P.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?P.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:P.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.h.ScreenDerivative?P.H`
        vec3 normal = screenDerivativeNormal(localvpos);`:P.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===M.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===i.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?P.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:P.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${e.hasNormalTexture?P.H`
              mat3 tangentSpace = ${e.vertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`:"vec3 shadedNormal = normal;"}
        ${e.pbrMode===M.f7.Normal||e.pbrMode===M.f7.Schematic?e.viewingMode===i.JY.Global?P.H`vec3 normalGround = normalize(vpos + localOrigin);`:P.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:P.H``}
        ${e.pbrMode===M.f7.Normal||e.pbrMode===M.f7.Schematic?P.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(g.s,e),t}const D=Object.freeze({__proto__:null,build:L})},51931:function(e,t,r){r.d(t,{R:function(){return P},b:function(){return R}});var i=r(53838),n=r(14539),o=r(98290),a=r(15626),s=r(36315),l=r(26616),c=r(87307),u=r(55372),d=r(8943),h=r(49120),f=r(37011),m=r(14009),p=r(89145),v=r(49475),g=r(9804),x=r(67662),T=r(11494),_=r(97195),b=r(78895),A=r(30382),S=r(70046),C=r(9664),M=r(72322),O=r(76161),y=r(65982),E=r(63914),w=r(30150);function R(e){const t=new E.kG,r=t.vertex.code,R=t.fragment.code;return t.vertex.uniforms.add("proj","mat4").add("view","mat4").add("cameraPosition","vec3").add("localOrigin","vec3"),t.include(d.f),t.varyings.add("vpos","vec3"),t.include(C.kl,e),t.include(c.fQ,e),t.include(p.LC,e),e.output!==a.H.Color&&e.output!==a.H.Alpha||(t.include(u.O,e),t.include(l.w,{linearDepth:!1}),e.offsetBackfaces&&t.include(o.w),e.instancedColor&&t.attributes.add(w.T.INSTANCECOLOR,"vec4"),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("localvpos","vec3"),e.multipassTerrainEnabled&&t.varyings.add("depth","float"),t.include(f.D,e),t.include(n.q,e),t.include(h.R,e),t.include(m.c,e),t.vertex.uniforms.add("externalColor","vec4"),t.varyings.add("vcolorExt","vec4"),r.add(y.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${y.H.float(M.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassTerrainEnabled?y.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===a.H.Alpha&&(t.include(s.p2,e),t.include(M.sj,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(_.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.fragment.include(O.y),R.add(y.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?y.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?y.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:y.H`vec4 texColor = vec4(1.0);`}
        ${e.attributeColor?y.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:y.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===a.H.Color&&(t.include(s.p2,e),t.include(T.X,e),t.include(x.K,e),t.include(M.sj,e),e.receiveShadows&&t.include(S.hX,e),e.multipassTerrainEnabled&&(t.fragment.include(g.S),t.include(_.l,e)),t.fragment.uniforms.add("cameraPosition","vec3").add("localOrigin","vec3").add("ambient","vec3").add("diffuse","vec3").add("opacity","float").add("layerOpacity","float"),t.fragment.uniforms.add("view","mat4"),e.hasColorTexture&&t.fragment.uniforms.add("tex","sampler2D"),t.include(A.jV,e),t.include(b.T,e),t.fragment.include(O.y),R.add(y.H`
      void main() {
        discardBySlice(vpos);
        ${e.multipassTerrainEnabled?y.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?y.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
        discardOrAdjustAlpha(texColor);`:y.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===A.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.viewingMode===i.JY.Global?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.attributeColor?y.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:y.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `}
        ${y.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${e.pbrMode===A.f7.Normal||e.pbrMode===A.f7.Schematic?e.viewingMode===i.JY.Global?y.H`vec3 normalGround = normalize(vpos + localOrigin);`:y.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:y.H``}
        ${e.pbrMode===A.f7.Normal||e.pbrMode===A.f7.Schematic?y.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:"vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);"}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
      }
    `)),t.include(v.s,e),t}const P=Object.freeze({__proto__:null,build:R})},26114:function(e,t,r){r.d(t,{a:function(){return a},c:function(){return i}});r(48675),r(3462);function i(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function o(e,t,r,i,n,o,a,s,l){return[e,t,r,i,n,o,a,s,l]}function a(e,t){return new Float64Array(e,t,9)}Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a})},94370:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return a},b:function(){return n},c:function(){return i}});r(48675),r(3462);function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t,r,i,n,o,a,s,l,c,u,d,h,f,m,p){return[e,t,r,i,n,o,a,s,l,c,u,d,h,f,m,p]}function a(e,t){return new Float64Array(e,t,16)}const s=i();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,IDENTITY:s})},44420:function(e,t,r){r.d(t,{c:function(){return _},g:function(){return d},j:function(){return H},k:function(){return A},m:function(){return h},s:function(){return u}});var i=r(26114),n=r(45263),o=r(74674),a=r(73288),s=r(65554),l=r(97848);function c(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e}function u(e,t,r){r*=.5;const i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e}function d(e,t){const r=2*Math.acos(t[3]),i=Math.sin(r/2);return i>a.E?(e[0]=t[0]/i,e[1]=t[1]/i,e[2]=t[2]/i):(e[0]=1,e[1]=0,e[2]=0),r}function h(e,t,r){const i=t[0],n=t[1],o=t[2],a=t[3],s=r[0],l=r[1],c=r[2],u=r[3];return e[0]=i*u+a*s+n*c-o*l,e[1]=n*u+a*l+o*s-i*c,e[2]=o*u+a*c+i*l-n*s,e[3]=a*u-i*s-n*l-o*c,e}function f(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=o*l-n*s,e[3]=a*l-i*s,e}function m(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-o*s,e[1]=n*l+a*s,e[2]=o*l+i*s,e[3]=a*l-n*s,e}function p(e,t,r){r*=.5;const i=t[0],n=t[1],o=t[2],a=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=o*l+a*s,e[3]=a*l-o*s,e}function v(e,t){const r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e}function g(e,t,r,i){const n=t[0],o=t[1],s=t[2],l=t[3];let c,u,d,h,f,m=r[0],p=r[1],v=r[2],g=r[3];return u=n*m+o*p+s*v+l*g,u<0&&(u=-u,m=-m,p=-p,v=-v,g=-g),1-u>a.E?(c=Math.acos(u),d=Math.sin(c),h=Math.sin((1-i)*c)/d,f=Math.sin(i*c)/d):(h=1-i,f=i),e[0]=h*n+f*m,e[1]=h*o+f*p,e[2]=h*s+f*v,e[3]=h*l+f*g,e}function x(e){const t=(0,a.R)(),r=(0,a.R)(),i=(0,a.R)(),n=Math.sqrt(1-t),o=Math.sqrt(t);return e[0]=n*Math.sin(2*Math.PI*r),e[1]=n*Math.cos(2*Math.PI*r),e[2]=o*Math.sin(2*Math.PI*i),e[3]=o*Math.cos(2*Math.PI*i),e}function T(e,t){const r=t[0],i=t[1],n=t[2],o=t[3],a=r*r+i*i+n*n+o*o,s=a?1/a:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=o*s,e}function _(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function b(e,t){const r=t[0]+t[4]+t[8];let i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const n=(r+1)%3,o=(r+2)%3;i=Math.sqrt(t[3*r+r]-t[3*n+n]-t[3*o+o]+1),e[r]=.5*i,i=.5/i,e[3]=(t[3*n+o]-t[3*o+n])*i,e[n]=(t[3*n+r]+t[3*r+n])*i,e[o]=(t[3*o+r]+t[3*r+o])*i}return e}function A(e,t,r,i){const n=.5*Math.PI/180;t*=n,r*=n,i*=n;const o=Math.sin(t),a=Math.cos(t),s=Math.sin(r),l=Math.cos(r),c=Math.sin(i),u=Math.cos(i);return e[0]=o*l*u-a*s*c,e[1]=a*s*u+o*l*c,e[2]=a*l*c-o*s*u,e[3]=a*l*u+o*s*c,e}function S(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}const C=l.c,M=l.s,O=l.a,y=h,E=l.b,w=l.d,R=l.l,P=l.e,I=P,N=l.f,L=N,D=l.n,H=l.g,F=l.h;function B(e,t,r){const i=(0,s.d)(t,r);return i<-.999999?((0,s.c)(z,U,t),(0,s.u)(z)<1e-6&&(0,s.c)(z,G,t),(0,s.n)(z,z),u(e,z,Math.PI),e):i>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,s.c)(z,t,r),e[0]=z[0],e[1]=z[1],e[2]=z[2],e[3]=1+i,D(e,e))}const z=(0,o.c)(),U=(0,o.f)(1,0,0),G=(0,o.f)(0,1,0);function V(e,t,r,i,n,o){return g(W,t,n,o),g(q,r,i,o),g(e,W,q,2*o*(1-o)),e}const W=(0,n.a)(),q=(0,n.a)();function k(e,t,r,i){const n=$;return n[0]=r[0],n[3]=r[1],n[6]=r[2],n[1]=i[0],n[4]=i[1],n[7]=i[2],n[2]=-t[0],n[5]=-t[1],n[8]=-t[2],D(e,b(e,n))}const $=(0,i.c)();Object.freeze({__proto__:null,identity:c,setAxisAngle:u,getAxisAngle:d,multiply:h,rotateX:f,rotateY:m,rotateZ:p,calculateW:v,slerp:g,random:x,invert:T,conjugate:_,fromMat3:b,fromEuler:A,str:S,copy:C,set:M,add:O,mul:y,scale:E,dot:w,lerp:R,length:P,len:I,squaredLength:N,sqrLen:L,normalize:D,exactEquals:H,equals:F,rotationTo:B,sqlerp:V,setAxes:k})},45263:function(e,t,r){r.d(t,{I:function(){return s},a:function(){return i},b:function(){return n},c:function(){return a}});r(48675),r(3462);function i(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function o(e,t,r,i){return[e,t,r,i]}function a(e,t){return new Float64Array(e,t,4)}const s=i();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,IDENTITY:s})},84121:function(e,t,r){r.d(t,{a:function(){return o},b:function(){return l},n:function(){return s},s:function(){return a},t:function(){return n}});var i=r(49448);function n(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const n=e.count,o=r[0],a=r[1],s=r[2],l=r[4],c=r[5],u=r[6],d=r[8],h=r[9],f=r[10],m=r[12],p=r[13],v=r[14],g=e.typedBuffer,x=e.typedBufferStride,T=t.typedBuffer,_=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*x,t=i*_,r=T[t],n=T[t+1],b=T[t+2];g[e]=o*r+l*n+d*b+m,g[e+1]=a*r+c*n+h*b+p,g[e+2]=s*r+u*n+f*b+v}}function o(e,t,r){if(e.count!==t.count)return void i.c.error("source and destination buffers need to have the same number of elements");const n=e.count,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],m=e.typedBuffer,p=e.typedBufferStride,v=t.typedBuffer,g=t.typedBufferStride;for(let i=0;i<n;i++){const e=i*p,t=i*g,r=v[t],n=v[t+1],x=v[t+2];m[e]=o*r+l*n+d*x,m[e+1]=a*r+c*n+h*x,m[e+2]=s*r+u*n+f*x}}function a(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*o,t=l*s;n[e]=r*a[t],n[e+1]=r*a[t+1],n[e+2]=r*a[t+2]}}function s(e,t){const r=Math.min(e.count,t.count),i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*a,r=o[t],l=o[t+1],c=o[t+2],u=Math.sqrt(r*r+l*l+c*c);if(u>0){const t=1/u;i[e]=t*r,i[e+1]=t*l,i[e+2]=t*c}}}function l(e,t,r){const i=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,a=t.typedBuffer,s=t.typedBufferStride;for(let l=0;l<i;l++){const e=l*o,t=l*s;n[e]=a[t]>>r,n[e+1]=a[t+1]>>r,n[e+2]=a[t+2]>>r}}Object.freeze({__proto__:null,transformMat4:n,transformMat3:o,scale:a,normalize:s,shiftRight:l})},34305:function(e,t,r){function i(e,t,r){const i=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,a=t.typedBufferStride,s=r?r.count:t.count;let l=(r&&r.dstIndex?r.dstIndex:0)*n,c=(r&&r.srcIndex?r.srcIndex:0)*a;for(let u=0;u<s;++u)i[l]=o[c],i[l+1]=o[c+1],i[l+2]=o[c+2],l+=n,c+=a}function n(e,t,r,i,n){var o,a;const s=e.typedBuffer,l=e.typedBufferStride,c=null!=(o=null==n?void 0:n.count)?o:e.count;let u=(null!=(a=null==n?void 0:n.dstIndex)?a:0)*l;for(let d=0;d<c;++d)s[u]=t,s[u+1]=r,s[u+2]=i,u+=l}r.d(t,{c:function(){return i},f:function(){return n}});Object.freeze({__proto__:null,copy:i,fill:n})},64680:function(e,t,r){r.d(t,{c:function(){return i},f:function(){return o}});r(48675),r(3462);function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function a(e,t){return new Float32Array(e,t,3)}function s(){return i()}function l(){return o(1,1,1)}function c(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}const h=s(),f=l(),m=c(),p=u(),v=d();Object.freeze({__proto__:null,create:i,clone:n,fromValues:o,createView:a,zeros:s,ones:l,unitX:c,unitY:u,unitZ:d,ZEROS:h,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:v})},98203:function(e,t,r){function i(e){return e=e||globalThis.location.hostname,c.some((t=>{var r;return null!=(null==(r=e)?void 0:r.match(t))}))}function n(e,t){return e&&(t=t||globalThis.location.hostname)?null!=t.match(o)||null!=t.match(s)?e.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(a)||null!=t.match(l)?e.replace("static.arcgis.com","staticqa.arcgis.com"):e:e}r.d(t,{XO:function(){return i},pJ:function(){return n}});const o=/^devext.arcgis.com$/,a=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,l=/^[\w-]*\.mapsqa.arcgis.com$/,c=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,o,a,/^jsapps.esri.com$/,s,l]},49448:function(e,t,r){r.d(t,{c:function(){return n}});var i=r(93622);const n=i.Z.getLogger("esri.views.3d.support.buffer.math")},50740:function(e,t,r){r.d(t,{t:function(){return n}});var i=r(94848);async function n(e,t){const{data:r}=await(0,i["default"])(e,{responseType:"image",...t});return r}},81023:function(e,t,r){r.r(t),r.d(t,{fetch:function(){return si},gltfToEngineResources:function(){return ci},parseUrl:function(){return li}});var i=r(98203),n=r(8693),o=r(18037),a=r(26114),s=r(51802),l=r(94370),c=r(65554),u=r(74674),d=r(37740),h=r(76180),f=r(84121),m=r(46510),p=r(5434),v=r(65470),g=r(31031),x=r(52709),T=(r(48675),r(3462),r(94848)),_=r(49724),b=r(22130),A=r(93622),S=r(92454),C=r(86201),M=r(50740),O=r(81789),y=r(88071),E=r(54131);class w{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,u.c)(),(0,E.hu)(e.length>=1),(0,E.hu)(r.length%this._numIndexPerPrimitive==0),(0,E.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,E.hu)(3===i.size||4===i.size);const{data:n,size:o}=i,a=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];R.clear(),R.push(s),this.bbMin=(0,u.f)(n[s],n[s+1],n[s+2]),this.bbMax=(0,u.a)(this.bbMin);for(let c=0;c<a;++c){const t=this._numIndexPerPrimitive*e[c];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],R.push(s);let i=n[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,c.e)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let l=this.radius*this.radius;for(let c=0;c<R.length;++c){s=R.getItemAt(c);const e=n[s]-this.center[0],t=n[s+1]-this.center[1],r=n[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=l)continue;const o=Math.sqrt(i),a=.5*(o-this.radius);this.radius=this.radius+a,l=this.radius*this.radius;const u=a/o;this.center[0]+=e*u,this.center[1]+=t*u,this.center[2]+=r*u}R.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,c.h)(this.bbMin,this.bbMax)>1){const e=(0,c.e)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let l=0;l<8;++l)i[l]=0;const{data:n,size:o}=this.position;for(let l=0;l<t;++l){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[l];let s=o*this.indices[a],c=n[s],u=n[s+1],d=n[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[a+e];const t=n[s],r=n[s+1],i=n[s+2];t<c&&(c=t),r<u&&(u=r),i<d&&(d=i)}c<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[l]=t,++i[t]}let a=0;for(let l=0;l<8;++l)i[l]>0&&++a;if(a<2)return;const s=new Array(8);for(let l=0;l<8;++l)s[l]=i[l]>0?new Uint32Array(i[l]):void 0;for(let l=0;l<8;++l)i[l]=0;for(let l=0;l<t;++l){const e=r[l];s[e][i[e]++]=this.primitiveIndices[l]}this._children=new Array(8);for(let l=0;l<8;++l)void 0!==s[l]&&(this._children[l]=new w(s[l],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){R.prune()}}const R=new y.Z({deallocator:null});var P,I=r(24586);class N{constructor(){this.id=(0,I.D)()}unload(){}}!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(P||(P={}));var L=r(16879),D=r(30150);class H extends N{constructor(e,t=[],r=O.MX.Triangle,i=-1){super(),this._primitiveType=r,this.edgeIndicesLength=i,this.type=P.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[n,o]of e)o&&this._vertexAttributes.set(n,{...o});if(null==t||0===t.length){const e=F(this._vertexAttributes),t=(0,L.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[n,o]of t)o&&(this._indices.set(n,B(o)),n===D.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(n).length:this.edgeIndicesLength))}cloneShallow(){const e=new H([],void 0,this._primitiveType,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>{t.set(r,e)})),this._indices.forEach(((e,t)=>{r.set(t,e)})),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,n.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===O.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(D.T.POSITION),r=this.vertexAttributes.get(D.T.POSITION);return(0,L.cM)(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(D.T.POSITION),r=this.vertexAttributes.get(D.T.POSITION);return(0,L.NO)(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(D.T.POSITION);if(0===e.length)return null;const t=this.primitiveType===O.MX.Triangle?3:1;(0,E.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,L.p)(e.length/t),i=this.vertexAttributes.get(D.T.POSITION);return new w(r,t,e,i)}}function F(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}function B(e){if(e.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT)return e;for(const t of e)if(t>=65536)return e;return new Uint16Array(e)}var z=r(56616),U=r(96545),G=r(67752),V=r(928),W=r(99659),q=r(52430),k=r(27123);function $(){if((0,n.Wi)(j)){const e=e=>(0,k.V)(`esri/libs/basisu/${e}`);j=r.e(1900).then(r.bind(r,51900)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return j}let j;var X;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(X||(X={}));var J=r(17923),K=r(29964),Y=r(33900);let Z=null,Q=null;async function ee(){return(0,n.Wi)(Q)&&(Q=$(),Z=await Q),Q}function te(e,t){if((0,n.Wi)(Z))return e.byteLength;const r=new Z.BasisFile(new Uint8Array(e)),i=ne(r)?ie(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function re(e,t){if((0,n.Wi)(Z))return e.byteLength;const r=new Z.KTX2File(new Uint8Array(e)),i=oe(r)?ie(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function ie(e,t,r,i,n){const o=(0,Y.RG)(t?J.q_.COMPRESSED_RGBA8_ETC2_EAC:J.q_.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function ne(e){return e.getNumImages()>=1&&!e.isUASTC()}function oe(e){return e.getFaces()>=1&&e.isETC1S()}async function ae(e,t,r){(0,n.Wi)(Z)&&(Z=await ee());const i=new Z.BasisFile(new Uint8Array(r));if(!ne(i))return null;i.startTranscoding();const o=le(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}async function se(e,t,r){(0,n.Wi)(Z)&&(Z=await ee());const i=new Z.KTX2File(new Uint8Array(r));if(!oe(i))return null;i.startTranscoding();const o=le(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function le(e,t,r,i,n,o,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,d]=l?i?[X.ETC2_RGBA,J.q_.COMPRESSED_RGBA8_ETC2_EAC]:[X.ETC1_RGB,J.q_.COMPRESSED_RGB8_ETC2]:c?i?[X.BC3_RGBA,J.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[X.BC1_RGB,J.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[X.RGBA32,J.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,u))),s(g,u,f[g]);const m=f.length>1,p=m?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,v={...t,samplingMode:p,hasMipmap:m,internalFormat:d,width:n,height:o};return new K.x(e,v,{type:"compressed",levels:f})}const ce=A.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ue=542327876,de=131072,he=4;function fe(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function me(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const pe=fe("DXT1"),ve=fe("DXT3"),ge=fe("DXT5"),xe=31,Te=0,_e=1,be=2,Ae=3,Se=4,Ce=7,Me=20,Oe=21;function ye(e,t,r){const{textureData:i,internalFormat:n,width:o,height:a}=Ee(r,t.hasMipmap);return t.samplingMode=i.levels.length>1?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=n,t.width=o,t.height=a,new K.x(e,t,i)}function Ee(e,t){const r=new Int32Array(e,0,xe);if(r[Te]!==ue)return ce.error("Invalid magic number in DDS header"),null;if(!(r[Me]&he))return ce.error("Unsupported format, must contain a FourCC code"),null;const i=r[Oe];let n,o;switch(i){case pe:n=8,o=J.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case ve:n=16,o=J.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case ge:n=16,o=J.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return ce.error("Unsupported FourCC code:",me(i)),null}let a=1,s=r[Se],l=r[Ae];0==(3&s)&&0==(3&l)||(ce.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let d,h;r[be]&de&&!1!==t&&(a=Math.max(1,r[Ce])),1===a||(0,G.wt)(s)&&(0,G.wt)(l)||(ce.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[_e]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(l+3>>2)*n,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:c,height:u}}const we=new Map([[D.T.POSITION,0],[D.T.NORMAL,1],[D.T.UV0,2],[D.T.COLOR,3],[D.T.SIZE,4],[D.T.TANGENT,4],[D.T.AUXPOS1,5],[D.T.SYMBOLCOLOR,5],[D.T.AUXPOS2,6],[D.T.FEATUREATTRIBUTE,6],[D.T.INSTANCEFEATUREATTRIBUTE,6],[D.T.INSTANCECOLOR,7],[D.T.MODEL,8],[D.T.MODELNORMAL,12],[D.T.MODELORIGINHI,11],[D.T.MODELORIGINLO,15]]);var Re=r(64816);new Re.G(D.T.POSITION,3,J.g.FLOAT,0,12),new Re.G(D.T.POSITION,3,J.g.FLOAT,0,20),new Re.G(D.T.UV0,2,J.g.FLOAT,12,20),new Re.G(D.T.POSITION,3,J.g.FLOAT,0,32),new Re.G(D.T.NORMAL,3,J.g.FLOAT,12,32),new Re.G(D.T.UV0,2,J.g.FLOAT,24,32),new Re.G(D.T.POSITION,3,J.g.FLOAT,0,16),new Re.G(D.T.COLOR,4,J.g.UNSIGNED_BYTE,12,16);const Pe=[new Re.G(D.T.POSITION,2,J.g.FLOAT,0,8)],Ie=[new Re.G(D.T.POSITION,2,J.g.FLOAT,0,16),new Re.G(D.T.UV0,2,J.g.FLOAT,8,16)];var Ne=r(15625),Le=r(50659);function De(e,t=Pe,r=we,i=-1,n=1){let o=null;return o=t===Ie?new Float32Array([i,i,0,0,n,i,1,0,i,n,0,1,n,n,1,1]):new Float32Array([i,i,n,i,i,n,n,n]),new Le.U(e,r,{geometry:t},{geometry:Ne.f.createVertex(e,J.l1.STATIC_DRAW,o)})}var He,Fe=r(98473),Be=r(79235);class ze extends N{constructor(e,t){super(),this.data=e,this.type=P.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new U.Z,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:J.e8.REPEAT,t:J.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||O.CE.STRETCH,this.estimatedTexMemRequired=ze._estimateTexMemRequired(this.data,this.params),this._startPreload()}_startPreload(){const e=this.data;(0,n.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){(0,W.jc)(e.src)||"auto"===e.preload&&e.crossOrigin||(e.preload="auto",e.crossOrigin="anonymous",e.src=e.src)}_startPreloadImageElement(e){(0,W.HK)(e.src)||(0,W.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,n.Wi)(e))return 0;if((0,V.eP)(e)||(0,V.lq)(e))return t.encoding===ze.KTX2_ENCODING?re(e,t.mipmap):t.encoding===ze.BASIS_ENCODING?te(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?ze._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this.data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){var t;return{target:J.No.TEXTURE_2D,pixelFormat:J.VI.RGBA,dataType:J.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?J.cw.LINEAR_MIPMAP_LINEAR:J.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:null!=(t=this.params.maxAnisotropy)?t:this.params.mipmap?e.parameters.maxMaxAnisotropy:1}}get glTexture(){return this._glTexture}load(e,t){if((0,n.pC)(this._glTexture))return this._glTexture;if((0,n.pC)(this._loadingPromise))return this._loadingPromise;const r=this.data;return(0,n.Wi)(r)?(this._glTexture=new K.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===ze.DDS_ENCODING?(this.data=void 0,this._loadFromDDSData(e,r)):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===ze.KTX2_ENCODING?(this.data=void 0,this._loadFromKTX2(e,r)):((0,V.eP)(r)||(0,V.lq)(r))&&this.params.encoding===ze.BASIS_ENCODING?(this.data=void 0,this._loadFromBasis(e,r)):(0,V.lq)(r)?this._loadFromPixelData(e,r):(0,V.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this.data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this.data instanceof HTMLVideoElement)||(0,n.Wi)(this._glTexture))return r;if(this.data.readyState<He.HAVE_CURRENT_DATA||r===this.data.currentTime)return r;if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this.data),this._drawStretchedTexture(e,t,r,i,n,this._glTexture)}else{const{width:e,height:t}=this.data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this.data):this._glTexture.setData(this.data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.data.currentTime}_loadFromDDSData(e,t){return this._glTexture=ye(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>se(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>ae(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,E.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?J.VI.LUMINANCE:3===this.params.components?J.VI.RGB:J.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new K.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const n=await(0,M.t)(r,{signal:i});return(0,S.k_)(i),this._loadFromImage(e,n,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const n=await(0,q.f)(r,r.src,!1,i);return(0,S.k_)(i),this._loadFromImage(e,n,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=He.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",l),r.removeEventListener("error",c),(0,n.hw)(u)},l=()=>{r.readyState>=He.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,r,t)))},c=e=>{s(),a(e||new b.Z("Failed to load video"))};r.addEventListener("loadeddata",l),r.addEventListener("error",c);const u=(0,S.fu)(i,(()=>c((0,S.zE)())))}))))}_loadFromImage(e,t,r){const i=ze._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this.params.components?J.VI.RGB:J.VI.RGBA,!this._requiresPowerOfTwo(e,n)||(0,G.wt)(i.width)&&(0,G.wt)(i.height)?(n.width=i.width,n.height=i.height,this._glTexture=new K.x(e,n,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,n,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=J.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,Be.Z)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=(0,G.Sf)(o),l=(0,G.Sf)(a);let c;switch(i.width=s,i.height=l,this.params.powerOfTwoResizeMode){case O.CE.PAD:i.textureCoordinateScaleFactor=[o/s,a/l],c=new K.x(e,i),c.updateData(0,0,0,o,a,t);break;case O.CE.STRETCH:case null:case void 0:c=this._stretchToPowerOfTwo(e,t,i,n());break;default:(0,z.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&c.generateMipmap(),c}_stretchToPowerOfTwo(e,t,r,i){const n=new K.x(e,r),o=new Fe.X(e,{colorTarget:J.Lm.TEXTURE,depthStencilTarget:J.OU.NONE},n),a=new K.x(e,{target:J.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:J.Br.UNSIGNED_BYTE,wrapMode:J.e8.CLAMP_TO_EDGE,samplingMode:J.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=De(e),l=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(l),n}_drawStretchedTexture(e,t,r,i,n,o){e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height);const s=e.useTechnique(t);s.setUniform4f("uColor",1,1,1,1),s.bindTexture(n,"tex"),e.bindVAO(i),e.drawArrays(J.MX.TRIANGLE_STRIP,0,(0,Y._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height)}unload(){if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,n.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,n.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}ze.DDS_ENCODING="image/vnd-ms.dds",ze.KTX2_ENCODING="image/ktx2",ze.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(He||(He={}));var Ue=r(53838),Ge=r(96884),Ve=r(15626),We=r(59260),qe=r(72322);class ke{constructor(e){this._material=e.material,this._techniqueRep=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRep.release(this._technique)}get technique(){return this._technique}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRep.releaseAndAcquire(e,this._material.getTechniqueConfig(r,t),this._technique),this._technique}ensureResources(e){return O.Rw.LOADED}}class $e extends ke{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,n.RY)(this._texture),this._textureNormal=(0,n.RY)(this._textureNormal),this._textureEmissive=(0,n.RY)(this._textureEmissive),this._textureOcclusion=(0,n.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,n.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?O.Rw.LOADED:O.Rw.LOADING}updateTexture(e){((0,n.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,n.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}bindTextures(e){(0,n.pC)(this._texture)&&e.bindTexture(this._texture.glTexture,"tex"),(0,n.pC)(this._textureNormal)&&e.bindTexture(this._textureNormal.glTexture,"normalTexture"),(0,n.pC)(this._textureEmissive)&&e.bindTexture(this._textureEmissive.glTexture,"texEmission"),(0,n.pC)(this._textureOcclusion)&&e.bindTexture(this._textureOcclusion.glTexture,"texOcclusion"),(0,n.pC)(this._textureMetallicRoughness)&&e.bindTexture(this._textureMetallicRoughness.glTexture,"texMetallicRoughness")}bindTextureScale(e){const t=(0,n.pC)(this._texture)?this._texture.glTexture:null;(0,n.pC)(t)&&t.descriptor.textureCoordinateScaleFactor?e.setUniform2fv("textureCoordinateScaleFactor",t.descriptor.textureCoordinateScaleFactor):e.setUniform2f("textureCoordinateScaleFactor",1,1)}_acquire(e,t){if((0,n.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,S.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,n.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}var je,Xe=r(37403);class Je extends N{constructor(e,t){super(),this.type=P.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=we,this._parameters=(0,Xe.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e){(0,Xe.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleInPass(e.pass)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleInPass(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(je||(je={}));const Ke={renderOccluded:je.Occlude};var Ye,Ze=r(25749),Qe=r(38727),et=r(75633),tt=r(44420),rt=r(45263),it=r(64680),nt=r(85381),ot=(r(81653),r(97848));!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(Ye||(Ye={}));r(15055);var at=r(97257),st=r(62069);function lt(e,t,r){const i=(0,c.d)(e.direction,(0,c.f)(r,t,e.origin));return(0,c.b)(r,e.origin,(0,c.a)(r,e.direction,i)),r}function ct(){return{origin:null,direction:null}}new at.x(ct);function ut(e,t){const r=(0,c.d)(e,t)/((0,c.l)(e)*(0,c.l)(t));return-(0,G.ZF)(r)}(0,u.c)(),(0,u.c)();const dt=A.Z.getLogger("esri.geometry.support.sphere");function ht(){return(0,nt.c)()}function ft(e,t=ht()){return(0,ot.c)(t,e)}function mt(e,t){return(0,nt.f)(e[0],e[1],e[2],t)}function pt(e){return e}function vt(e){e[0]=e[1]=e[2]=e[3]=0}function gt(e){return e}function xt(e){return Array.isArray(e)?e[3]:e}function Tt(e){return Array.isArray(e)?e:Ht}function _t(e,t,r,i){return(0,nt.f)(e,t,r,i)}function bt(e,t,r){return e!==r&&(0,c.g)(r,e),r[3]=e[3]+t,r}function At(e,t,r){return dt.error("sphere.setExtent is not yet supported"),e===r?r:ft(e,r)}function St(e,t,r){if((0,n.Wi)(t))return!1;const{origin:i,direction:o}=t,a=Ct;a[0]=i[0]-e[0],a[1]=i[1]-e[1],a[2]=i[2]-e[2];const s=o[0]*o[0]+o[1]*o[1]+o[2]*o[2],l=2*(o[0]*a[0]+o[1]*a[1]+o[2]*a[2]),c=l*l-4*s*(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]-e[3]*e[3]);if(c<0)return!1;const u=Math.sqrt(c);let d=(-l-u)/(2*s);const h=(-l+u)/(2*s);return(d<0||h<d&&h>0)&&(d=h),!(d<0)&&(r&&(r[0]=i[0]+o[0]*d,r[1]=i[1]+o[1]*d,r[2]=i[2]+o[2]*d),!0)}const Ct=(0,u.c)();function Mt(e,t){return St(e,t,null)}function Ot(e,t,r){if(St(e,t,r))return r;const i=yt(e,t,st.WM.get());return(0,c.b)(r,t.origin,(0,c.a)(st.WM.get(),t.direction,(0,c.i)(t.origin,i)/(0,c.l)(t.direction))),r}function yt(e,t,r){const i=st.WM.get(),n=st.MP.get();(0,c.c)(i,t.origin,t.direction);const o=xt(e);(0,c.c)(r,i,t.origin),(0,c.a)(r,r,1/(0,c.l)(r)*o);const a=Pt(e,t.origin),l=ut(t.origin,r);return(0,s.d)(n,l+a,i),(0,c.m)(r,r,n),r}function Et(e,t,r){return St(e,t,r)?r:(lt(t,Tt(e),r),wt(e,r,r))}function wt(e,t,r){const i=(0,c.f)(st.WM.get(),t,Tt(e)),n=(0,c.a)(st.WM.get(),i,e[3]/(0,c.l)(i));return(0,c.b)(r,n,Tt(e))}function Rt(e,t){const r=(0,c.f)(st.WM.get(),t,Tt(e)),i=(0,c.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))}function Pt(e,t){const r=(0,c.f)(st.WM.get(),t,Tt(e)),i=(0,c.l)(r),n=xt(e),o=n+Math.abs(n-i);return(0,G.ZF)(n/o)}const It=(0,u.c)();function Nt(e,t,r,i){const n=(0,c.f)(It,t,Tt(e));switch(r){case Ye.X:{const e=(0,G.jE)(n,It)[2];return(0,c.s)(i,-Math.sin(e),Math.cos(e),0)}case Ye.Y:{const e=(0,G.jE)(n,It),t=e[1],r=e[2],o=Math.sin(t);return(0,c.s)(i,-o*Math.cos(r),-o*Math.sin(r),Math.cos(t))}case Ye.Z:return(0,c.n)(i,n);default:return}}function Lt(e,t){const r=(0,c.f)(Ft,t,Tt(e));return(0,c.l)(r)-e[3]}function Dt(e,t,r,i){const n=Lt(e,t),o=Nt(e,t,Ye.Z,Ft),a=(0,c.a)(Ft,o,r-n);return(0,c.b)(i,t,a)}const Ht=(0,u.c)(),Ft=(0,u.c)();Object.freeze({__proto__:null,create:ht,copy:ft,fromCenterAndRadius:mt,wrap:pt,clear:vt,fromRadius:gt,getRadius:xt,getCenter:Tt,fromValues:_t,elevate:bt,setExtent:At,intersectRay:St,intersectsRay:Mt,intersectRayClosestSilhouette:Ot,closestPointOnSilhouette:yt,closestPoint:Et,projectPoint:wt,distanceToSilhouette:Rt,angleToSilhouette:Pt,axisAt:Nt,altitudeAt:Lt,setAltitudeAt:Dt});class Bt{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0]+this.localOrigin[0],r=e[1]+this.localOrigin[1],i=e[2]+this.localOrigin[2],n=e[3]+this.localOrigin[0],o=e[4]+this.localOrigin[1],a=e[5]+this.localOrigin[2],s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*l,e[4]+=o*l,e[5]+=a*l,e}}class zt{constructor(e=0){this.offset=e,this.componentLocalOriginLength=0,this.tmpVertex=(0,u.c)(),this.mbs=(0,nt.c)(),this.obb={center:(0,u.c)(),halfSize:(0,it.c)(),quaternion:null}}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=this.offset/Math.sqrt(t*t+r*r+i*i);e[0]+=t*s,e[1]+=r*s,e[2]+=i*s;const l=this.offset/Math.sqrt(n*n+o*o+a*a);return e[3]+=n*l,e[4]+=o*l,e[5]+=a*l,e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.mbs[0]=e[0]+e[0]*r,this.mbs[1]=e[1]+e[1]*r,this.mbs[2]=e[2]+e[2]*r,this.mbs[3]=e[3]+e[3]*this.offset/t,this.mbs}applyToObb(e){const t=e.center,r=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this.obb.center[0]=t[0]+t[0]*r,this.obb.center[1]=t[1]+t[1]*r,this.obb.center[2]=t[2]+t[2]*r,(0,c.q)(this.obb.halfSize,e.halfSize,e.quaternion),(0,c.b)(this.obb.halfSize,this.obb.halfSize,e.center);const i=this.offset/Math.sqrt(this.obb.halfSize[0]*this.obb.halfSize[0]+this.obb.halfSize[1]*this.obb.halfSize[1]+this.obb.halfSize[2]*this.obb.halfSize[2]);return this.obb.halfSize[0]+=this.obb.halfSize[0]*i,this.obb.halfSize[1]+=this.obb.halfSize[1]*i,this.obb.halfSize[2]+=this.obb.halfSize[2]*i,(0,c.f)(this.obb.halfSize,this.obb.halfSize,e.center),(0,tt.c)(Wt,e.quaternion),(0,c.q)(this.obb.halfSize,this.obb.halfSize,Wt),this.obb.halfSize[0]*=this.obb.halfSize[0]<0?-1:1,this.obb.halfSize[1]*=this.obb.halfSize[1]<0?-1:1,this.obb.halfSize[2]*=this.obb.halfSize[2]<0?-1:1,this.obb.quaternion=e.quaternion,this.obb}}class Ut{constructor(e=0){this.offset=e,this.sphere=ht(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*n+l[4]*o+l[8]*a+l[12],this.tmpVertex[1]=l[1]*n+l[5]*o+l[9]*a+l[13],this.tmpVertex[2]=l[2]*n+l[6]*o+l[10]*a+l[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Gt=new Ut;function Vt(e){return(0,n.pC)(e)?(Gt.offset=e,Gt):null}new zt;new Bt;const Wt=(0,rt.a)();function qt(e,t,r,i){const n=r.typedBuffer,o=r.typedBufferStride,a=e.length;i*=o;for(let s=0;s<a;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=o}}function kt(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let l=0;l<s;++l){const r=3*e[l];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}else for(let l=0;l<s;++l){const r=3*e[l];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}}function $t(e,t,r,i,n=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===n)for(let l=0;l<s;++l){const r=4*e[l];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}else for(let l=0;l<s;++l){const r=4*e[l];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}}function jt(e,t,r,i,n,o=1){if(!r)return void kt(e,t,i,n,o);const a=i.typedBuffer,s=i.typedBufferStride,l=e.length,c=r[0],u=r[1],d=r[2],h=r[4],f=r[5],m=r[6],p=r[8],v=r[9],g=r[10],x=r[12],T=r[13],_=r[14];if(n*=s,1===o)for(let b=0;b<l;++b){const r=3*e[b],i=t[r],o=t[r+1],l=t[r+2];a[n]=c*i+h*o+p*l+x,a[n+1]=u*i+f*o+v*l+T,a[n+2]=d*i+m*o+g*l+_,n+=s}else for(let b=0;b<l;++b){const r=3*e[b],i=t[r],l=t[r+1],A=t[r+2],S=c*i+h*l+p*A+x,C=u*i+f*l+v*A+T,M=d*i+m*l+g*A+_;for(let e=0;e<o;++e)a[n]=S,a[n+1]=C,a[n+2]=M,n+=s}}function Xt(e,t,r,i,n,o=1){if(!r)return void kt(e,t,i,n,o);const a=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],x=a[9],T=a[10],_=!(0,s.p)(a),b=1e-6,A=1-b;if(n*=c,1===o)for(let s=0;s<u;++s){const r=3*e[s],i=t[r],o=t[r+1],a=t[r+2];let u=d*i+m*o+g*a,S=h*i+p*o+x*a,C=f*i+v*o+T*a;if(_){const e=u*u+S*S+C*C;if(e<A&&e>b){const t=1/Math.sqrt(e);u*=t,S*=t,C*=t}}l[n+0]=u,l[n+1]=S,l[n+2]=C,n+=c}else for(let s=0;s<u;++s){const r=3*e[s],i=t[r],a=t[r+1],u=t[r+2];let S=d*i+m*a+g*u,C=h*i+p*a+x*u,M=f*i+v*a+T*u;if(_){const e=S*S+C*C+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}for(let e=0;e<o;++e)l[n+0]=S,l[n+1]=C,l[n+2]=M,n+=c}}function Jt(e,t,r,i,n,o=1){if(!r)return void $t(e,t,i,n,o);const a=r,l=i.typedBuffer,c=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],x=a[9],T=a[10],_=!(0,s.p)(a),b=1e-6,A=1-b;if(n*=c,1===o)for(let s=0;s<u;++s){const r=4*e[s],i=t[r],o=t[r+1],a=t[r+2],u=t[r+3];let S=d*i+m*o+g*a,C=h*i+p*o+x*a,M=f*i+v*o+T*a;if(_){const e=S*S+C*C+M*M;if(e<A&&e>b){const t=1/Math.sqrt(e);S*=t,C*=t,M*=t}}l[n+0]=S,l[n+1]=C,l[n+2]=M,l[n+3]=u,n+=c}else for(let s=0;s<u;++s){const r=4*e[s],i=t[r],a=t[r+1],u=t[r+2],S=t[r+3];let C=d*i+m*a+g*u,M=h*i+p*a+x*u,O=f*i+v*a+T*u;if(_){const e=C*C+M*M+O*O;if(e<A&&e>b){const t=1/Math.sqrt(e);C*=t,M*=t,O*=t}}for(let e=0;e<o;++e)l[n+0]=C,l[n+1]=M,l[n+2]=O,l[n+3]=S,n+=c}}function Kt(e,t,r,i,n,o=1){const a=i.typedBuffer,s=i.typedBufferStride,l=e.length;if(n*=s,1===o){if(4===r)for(let c=0;c<l;++c){const r=4*e[c];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}else if(4===r)for(let c=0;c<l;++c){const r=4*e[c];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else if(3===r)for(let c=0;c<l;++c){const r=3*e[c];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}}function Yt(e,t,r,i,n,o){for(const a of t.fieldNames){const t=e.vertexAttributes.get(a),s=e.indices.get(a);if(t&&s)switch(a){case D.T.POSITION:{(0,E.hu)(3===t.size);const e=n.getField(a,h.ct);e&&jt(s,t.data,r,e,o);break}case D.T.NORMAL:{(0,E.hu)(3===t.size);const e=n.getField(a,h.ct);e&&Xt(s,t.data,i,e,o);break}case D.T.UV0:{(0,E.hu)(2===t.size);const e=n.getField(a,h.Eu);e&&qt(s,t.data,e,o);break}case D.T.COLOR:{(0,E.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&Kt(s,t.data,t.size,e,o);break}case D.T.SYMBOLCOLOR:{(0,E.hu)(3===t.size||4===t.size);const e=n.getField(a,h.mc);e&&Kt(s,t.data,t.size,e,o);break}case D.T.TANGENT:{(0,E.hu)(4===t.size);const e=n.getField(a,h.ek);e&&Jt(s,t.data,i,e,o);break}}}}var Zt=r(61445),Qt=r(36315),er=r(87307),tr=r(55372),rr=r(37011),ir=r(89145),nr=r(99490),or=r(97195),ar=r(30382),sr=r(70046),lr=r(9664),cr=r(7158),ur=r(22947);function dr(e,t,r){e.setUniform3f("cameraPosition",r[3]-t[0],r[7]-t[1],r[11]-t[2])}function hr(e,t){e.setUniformMatrix4fv("proj",t)}function fr(e,t,r){(0,s.j)(mr,r,t),e.setUniform3fv("localOrigin",t),e.setUniformMatrix4fv("view",mr)}const mr=(0,ur.c)();class pr{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class vr{constructor(e,t,r){this.release=r,t&&(this._config=t.snapshot()),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=(0,n.O3)(this._program),this._pipeline=this._config=null}reload(e){(0,n.O3)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get key(){return this._config.key}get configuration(){return this._config}bindPass(e,t){}bindMaterial(e,t){}bindDraw(e){}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return J.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}}class gr{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function xr(e={}){return(t,r)=>{var i,n;t._parameterNames=null!=(i=t._parameterNames)?i:[],t._parameterNames.push(r);const o=t._parameterNames.length-1,a=e.count||2,s=Math.ceil(Math.log2(a)),l=null!=(n=t._parameterBits)?n:[0];let c=0;for(;l[c]+s>16;)c++,c>=l.length&&l.push(0);t._parameterBits=l;const u=l[c],d=(1<<s)-1<<u;l[c]+=s,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[c]=this._parameterBits[c]&~d|+e<<u&d,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}r(21703);var Tr=r(58523);class _r{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new y.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generateSource("vertex"),t.generateSource("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this._fragmentUniforms=(0,Tr.hZ)()?t.fragmentUniforms.entries:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2f(e,t,r){this._glProgram.setUniform2f(e,t,r)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3f(e,t,r,i){this._glProgram.setUniform3f(e,t,r,i)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4f(e,t,r,i,n){this._glProgram.setUniform4f(e,t,r,i,n)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,n.Wi)(e)||null==e.glName){const e=this._textures.get(t);return e&&(this._context.bindTexture(null,e.unit),this._freeTextureUnit(e),this._textures.delete(t)),null}let r=this._textures.get(t);return null==r?(r=this._allocTextureUnit(e),this._textures.set(t,r)):r.texture=e,this._context.useProgram(this),this.setUniform1i(t,r.unit),this._context.bindTexture(e,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,n.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{if(("sampler2D"===e.type||"samplerCube"===e.type)&&!this._textures.has(e.name))throw new Error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}J.wb.LESS,J.wb.ALWAYS;const br={mask:255},Ar={function:{func:J.wb.ALWAYS,ref:O.hU.OutlineVisualElementMask,mask:O.hU.OutlineVisualElementMask},operation:{fail:J.xS.KEEP,zFail:J.xS.KEEP,zPass:J.xS.ZERO}},Sr={function:{func:J.wb.ALWAYS,ref:O.hU.OutlineVisualElementMask,mask:O.hU.OutlineVisualElementMask},operation:{fail:J.xS.KEEP,zFail:J.xS.KEEP,zPass:J.xS.REPLACE}};J.wb.EQUAL,O.hU.OutlineVisualElementMask,O.hU.OutlineVisualElementMask,J.xS.KEEP,J.xS.KEEP,J.xS.KEEP,J.wb.NOTEQUAL,O.hU.OutlineVisualElementMask,O.hU.OutlineVisualElementMask,J.xS.KEEP,J.xS.KEEP,J.xS.KEEP;var Cr=r(14647),Mr=r(9408);const Or=A.Z.getLogger("esri.views.3d.webgl-engine.shaders.DefaultTechnique");class yr extends vr{initializeProgram(e){const t=yr.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===O.Am.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?r.isSchematic?ar.f7.Schematic:ar.f7.Normal:ar.f7.Disabled,hasMetalnessAndRoughnessTexture:r.hasMetalnessAndRoughnessTexture,hasEmissionTexture:r.hasEmissionTexture,hasOcclusionTexture:r.hasOcclusionTexture,hasNormalTexture:r.hasNormalTexture,hasColorTexture:r.hasColorTexture,hasModelTransformation:r.hasModelTransformation,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:r.normalsTypeDerivate?tr.h.ScreenDerivative:tr.h.Attribute,doubleSidedMode:r.doubleSidedMode,vertexTangents:r.vertexTangents,attributeTextureCoordinates:r.hasMetalnessAndRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture||r.hasNormalTexture||r.hasColorTexture?rr.N.Default:rr.N.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,cr.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new _r(e.rctx,i,we)}bindPass(e,t){var r,i;hr(this.program,t.camera.projectionMatrix);const o=this.configuration.output;this.configuration.hasModelTransformation&&((0,n.pC)(e.modelTransformation)?this.program.setUniformMatrix4fv("model",e.modelTransformation):Or.warnOnce("hasModelTransformation true, but no modelTransformation found.")),(this.configuration.output===Ve.H.Depth||t.multipassTerrainEnabled||o===Ve.H.Shadow)&&this.program.setUniform2fv("nearFar",t.camera.nearFar),t.multipassTerrainEnabled&&(this.program.setUniform2fv("inverseViewport",t.inverseViewport),(0,or.p)(this.program,t)),o===Ve.H.Alpha&&(this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Xe.FZ[e.colorMixMode])),o===Ve.H.Color?(t.lighting.setUniforms(this.program,!1,t.hasFillLights),this.program.setUniform3fv("ambient",e.ambient),this.program.setUniform3fv("diffuse",e.diffuse),this.program.setUniform4fv("externalColor",e.externalColor),this.program.setUniform1i("colorMixMode",Xe.FZ[e.colorMixMode]),this.program.setUniform1f("opacity",e.opacity),this.program.setUniform1f("layerOpacity",e.layerOpacity),this.configuration.usePBR&&(0,ar.nW)(this.program,e,this.configuration.isSchematic)):o===Ve.H.Highlight&&(0,nr.wW)(this.program,t),(0,lr.uj)(this.program,e),(0,ir.Mo)(this.program,e,t),(0,Xe.bj)(e.screenSizePerspective,this.program,"screenSizePerspectiveAlignment"),e.textureAlphaMode!==O.JJ.Mask&&e.textureAlphaMode!==O.JJ.MaskBlend||this.program.setUniform1f("textureAlphaCutoff",e.textureAlphaCutoff),null==(r=t.shadowMap)||r.bind(this.program),null==(i=t.ssaoHelper)||i.bind(this.program,t.camera)}bindDraw(e){const t=this.configuration.instancedDoublePrecision?(0,u.f)(e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]):e.origin;fr(this.program,t,e.camera.viewMatrix),this.program.rebindTextures(),(this.configuration.output===Ve.H.Color||this.configuration.output===Ve.H.Alpha||this.configuration.output===Ve.H.Depth&&this.configuration.screenSizePerspective||this.configuration.output===Ve.H.Normal&&this.configuration.screenSizePerspective||this.configuration.output===Ve.H.Highlight&&this.configuration.screenSizePerspective)&&dr(this.program,t,e.camera.viewInverseTransposeMatrix),this.configuration.output===Ve.H.Normal&&this.program.setUniformMatrix4fv("viewNormal",e.camera.viewInverseTransposeMatrix),this.configuration.instancedDoublePrecision&&(0,er.d3)(this.program,t),(0,Qt.Vv)(this.program,this.configuration,e.slicePlane,{origin:t}),this.configuration.output===Ve.H.Color&&(0,sr.vL)(this.program,e,t)}_convertDepthTestFunction(e){return e===O.Gv.Lequal?J.wb.LEQUAL:J.wb.LESS}_setPipeline(e,t){const r=this.configuration,i=e===O.Am.NONE,n=e===O.Am.FrontFace;return(0,Mr.sm)({blending:r.output!==Ve.H.Color&&r.output!==Ve.H.Alpha||!r.transparent?null:i?Ze.wu:(0,Ze.j7)(e),culling:Er(r)&&(0,Mr.zp)(r.cullFace),depthTest:{func:(0,Ze.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||n?r.writeDepth&&Mr.LZ:null,colorWrite:Mr.BK,stencilWrite:r.sceneHasOcludees?br:null,stencilTest:r.sceneHasOcludees?t?Sr:Ar:null,polygonOffset:i||n?null:(0,Ze.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipeline(this.configuration.transparencyPassType,!0),this._setPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function Er(e){return e.cullFace?e.cullFace!==O.Vr.None:!e.slicePlaneEnabled&&!e.transparent&&!e.doubleSidedMode}yr.shader=new pr(Cr.D,(()=>r.e(8981).then(r.bind(r,8981))));class wr extends gr{constructor(){super(...arguments),this.output=Ve.H.Color,this.alphaDiscardMode=O.JJ.Opaque,this.doubleSidedMode=We.q.None,this.isSchematic=!1,this.vertexColors=!1,this.offsetBackfaces=!1,this.symbolColors=!1,this.vvSize=!1,this.vvColor=!1,this.verticalOffset=!1,this.receiveShadows=!1,this.slicePlaneEnabled=!1,this.sliceHighlightDisabled=!1,this.receiveAmbientOcclusion=!1,this.screenSizePerspective=!1,this.textureAlphaPremultiplied=!1,this.hasColorTexture=!1,this.usePBR=!1,this.hasMetalnessAndRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.instanced=!1,this.instancedColor=!1,this.instancedDoublePrecision=!1,this.vertexTangents=!1,this.normalsTypeDerivate=!1,this.writeDepth=!0,this.sceneHasOcludees=!1,this.transparent=!1,this.enableOffset=!0,this.cullFace=O.Vr.None,this.transparencyPassType=O.Am.NONE,this.multipassTerrainEnabled=!1,this.cullAboveGround=!1,this.hasModelTransformation=!1,this.customDepthTest=O.Gv.Less}}(0,Zt._)([xr({count:Ve.H.COUNT})],wr.prototype,"output",void 0),(0,Zt._)([xr({count:O.JJ.COUNT})],wr.prototype,"alphaDiscardMode",void 0),(0,Zt._)([xr({count:We.q.COUNT})],wr.prototype,"doubleSidedMode",void 0),(0,Zt._)([xr()],wr.prototype,"isSchematic",void 0),(0,Zt._)([xr()],wr.prototype,"vertexColors",void 0),(0,Zt._)([xr()],wr.prototype,"offsetBackfaces",void 0),(0,Zt._)([xr()],wr.prototype,"symbolColors",void 0),(0,Zt._)([xr()],wr.prototype,"vvSize",void 0),(0,Zt._)([xr()],wr.prototype,"vvColor",void 0),(0,Zt._)([xr()],wr.prototype,"verticalOffset",void 0),(0,Zt._)([xr()],wr.prototype,"receiveShadows",void 0),(0,Zt._)([xr()],wr.prototype,"slicePlaneEnabled",void 0),(0,Zt._)([xr()],wr.prototype,"sliceHighlightDisabled",void 0),(0,Zt._)([xr()],wr.prototype,"receiveAmbientOcclusion",void 0),(0,Zt._)([xr()],wr.prototype,"screenSizePerspective",void 0),(0,Zt._)([xr()],wr.prototype,"textureAlphaPremultiplied",void 0),(0,Zt._)([xr()],wr.prototype,"hasColorTexture",void 0),(0,Zt._)([xr()],wr.prototype,"usePBR",void 0),(0,Zt._)([xr()],wr.prototype,"hasMetalnessAndRoughnessTexture",void 0),(0,Zt._)([xr()],wr.prototype,"hasEmissionTexture",void 0),(0,Zt._)([xr()],wr.prototype,"hasOcclusionTexture",void 0),(0,Zt._)([xr()],wr.prototype,"hasNormalTexture",void 0),(0,Zt._)([xr()],wr.prototype,"instanced",void 0),(0,Zt._)([xr()],wr.prototype,"instancedColor",void 0),(0,Zt._)([xr()],wr.prototype,"instancedDoublePrecision",void 0),(0,Zt._)([xr()],wr.prototype,"vertexTangents",void 0),(0,Zt._)([xr()],wr.prototype,"normalsTypeDerivate",void 0),(0,Zt._)([xr()],wr.prototype,"writeDepth",void 0),(0,Zt._)([xr()],wr.prototype,"sceneHasOcludees",void 0),(0,Zt._)([xr()],wr.prototype,"transparent",void 0),(0,Zt._)([xr()],wr.prototype,"enableOffset",void 0),(0,Zt._)([xr({count:O.Vr.COUNT})],wr.prototype,"cullFace",void 0),(0,Zt._)([xr({count:O.Am.COUNT})],wr.prototype,"transparencyPassType",void 0),(0,Zt._)([xr()],wr.prototype,"multipassTerrainEnabled",void 0),(0,Zt._)([xr()],wr.prototype,"cullAboveGround",void 0),(0,Zt._)([xr()],wr.prototype,"hasModelTransformation",void 0),(0,Zt._)([xr({count:O.Gv.COUNT})],wr.prototype,"customDepthTest",void 0);var Rr=r(51931);class Pr extends yr{initializeProgram(e){const t=Pr.shader.get(),r=this.configuration,i=t.build({oitEnabled:r.transparencyPassType===O.Am.Color,output:r.output,viewingMode:e.viewingMode,receiveShadows:r.receiveShadows,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,symbolColor:r.symbolColors,vvSize:r.vvSize,vvColor:r.vvColor,vvInstancingEnabled:!0,instanced:r.instanced,instancedColor:r.instancedColor,instancedDoublePrecision:r.instancedDoublePrecision,pbrMode:r.usePBR?ar.f7.Normal:ar.f7.Disabled,hasMetalnessAndRoughnessTexture:!1,hasEmissionTexture:!1,hasOcclusionTexture:!1,hasNormalTexture:!1,hasColorTexture:r.hasColorTexture,hasModelTransformation:!1,receiveAmbientOcclusion:r.receiveAmbientOcclusion,useCustomDTRExponentForWater:!1,normalType:tr.h.Attribute,doubleSidedMode:We.q.WindingOrder,vertexTangents:!1,attributeTextureCoordinates:r.hasColorTexture?rr.N.Default:rr.N.None,textureAlphaPremultiplied:r.textureAlphaPremultiplied,attributeColor:r.vertexColors,screenSizePerspectiveEnabled:r.screenSizePerspective,verticalOffsetEnabled:r.verticalOffset,offsetBackfaces:r.offsetBackfaces,doublePrecisionRequiresObfuscation:(0,cr.I)(e.rctx),alphaDiscardMode:r.alphaDiscardMode,supportsTextureAtlas:!1,multipassTerrainEnabled:r.multipassTerrainEnabled,cullAboveGround:r.cullAboveGround});return new _r(e.rctx,i,we)}}Pr.shader=new pr(Rr.R,(()=>r.e(9360).then(r.bind(r,69360))));class Ir extends Je{constructor(e){super(e,Lr),this.supportsEdges=!0,this.techniqueConfig=new wr,this.vertexBufferLayout=Hr(this.parameters),this.instanceBufferLayout=e.instanced?Fr(this.parameters):null}isVisibleInPass(e){return e!==Qe.C.MATERIAL_DEPTH_SHADOWMAP_ALL&&e!==Qe.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT&&e!==Qe.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const t=e.instanced,r=e.vertexColors,i=e.symbolColors,n=!!t&&t.indexOf("color")>-1,o=e.vvColorEnabled,a="replace"===e.colorMixMode,s=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(n||o||i)?!!a||s:r?a?l:s:n||o||i?!!a||s:a?l:s}getTechniqueConfig(e,t){return this.techniqueConfig.output=e,this.techniqueConfig.hasNormalTexture=!!this.parameters.normalTextureId,this.techniqueConfig.hasColorTexture=!!this.parameters.textureId,this.techniqueConfig.vertexTangents=this.parameters.vertexTangents,this.techniqueConfig.instanced=!!this.parameters.instanced,this.techniqueConfig.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this.techniqueConfig.vvSize=this.parameters.vvSizeEnabled,this.techniqueConfig.verticalOffset=null!==this.parameters.verticalOffset,this.techniqueConfig.screenSizePerspective=null!==this.parameters.screenSizePerspective,this.techniqueConfig.slicePlaneEnabled=this.parameters.slicePlaneEnabled,this.techniqueConfig.sliceHighlightDisabled=this.parameters.sliceHighlightDisabled,this.techniqueConfig.alphaDiscardMode=this.parameters.textureAlphaMode,this.techniqueConfig.normalsTypeDerivate="screenDerivative"===this.parameters.normals,this.techniqueConfig.transparent=this.parameters.transparent,this.techniqueConfig.writeDepth=this.parameters.writeDepth,(0,n.pC)(this.parameters.customDepthTest)&&(this.techniqueConfig.customDepthTest=this.parameters.customDepthTest),this.techniqueConfig.sceneHasOcludees=this.parameters.sceneHasOcludees,this.techniqueConfig.cullFace=this.parameters.slicePlaneEnabled?O.Vr.None:this.parameters.cullFace,this.techniqueConfig.multipassTerrainEnabled=t.multipassTerrainEnabled,this.techniqueConfig.cullAboveGround=t.cullAboveGround,this.techniqueConfig.hasModelTransformation=(0,n.pC)(this.parameters.modelTransformation),e!==Ve.H.Color&&e!==Ve.H.Alpha||(this.techniqueConfig.vertexColors=this.parameters.vertexColors,this.techniqueConfig.symbolColors=this.parameters.symbolColors,this.parameters.treeRendering?this.techniqueConfig.doubleSidedMode=We.q.WindingOrder:this.techniqueConfig.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?We.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?We.q.WindingOrder:We.q.None,this.techniqueConfig.instancedColor=!!this.parameters.instanced&&this.parameters.instanced.indexOf("color")>-1,this.techniqueConfig.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this.techniqueConfig.receiveAmbientOcclusion=!!t.ssaoEnabled&&this.parameters.receiveSSAO,this.techniqueConfig.vvColor=this.parameters.vvColorEnabled,this.techniqueConfig.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this.techniqueConfig.usePBR=this.parameters.usePBR,this.techniqueConfig.hasMetalnessAndRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this.techniqueConfig.hasEmissionTexture=!!this.parameters.emissiveTextureId,this.techniqueConfig.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this.techniqueConfig.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this.techniqueConfig.isSchematic=this.parameters.usePBR&&this.parameters.isSchematic,this.techniqueConfig.transparencyPassType=t.transparencyPassType,this.techniqueConfig.enableOffset=t.camera.relativeElevation<Ze.ve),this.techniqueConfig}intersect(e,t,r,i,n,o,a){if(null!==this.parameters.verticalOffset){const e=i.camera;(0,c.s)(Wr,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case Ue.JY.Global:t=(0,c.n)(Gr,Wr);break;case Ue.JY.Local:t=(0,c.g)(Gr,Ur)}let a=0;if(null!==this.parameters.verticalOffset){const r=(0,c.f)(qr,Wr,e.eye),i=(0,c.l)(r),n=(0,c.a)(r,r,1/i);let o=null;this.parameters.screenSizePerspective&&(o=(0,c.d)(t,n)),a+=(0,Xe.Hx)(e,i,this.parameters.verticalOffset,o,this.parameters.screenSizePerspective)}(0,c.a)(t,t,a),(0,c.t)(Vr,t,i.transform.inverseRotation),n=(0,c.f)(Br,n,Vr),o=(0,c.f)(zr,o,Vr)}(0,Xe.Bw)(e,t,i,n,o,Vt(i.verticalOffset),a)}requiresSlot(e){return e===(this.parameters.transparent?this.parameters.writeDepth?et.r.TRANSPARENT_MATERIAL:et.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:et.r.OPAQUE_MATERIAL)||e===et.r.DRAPED_MATERIAL}createGLMaterial(e){return e.output===Ve.H.Color||e.output===Ve.H.Alpha||e.output===Ve.H.Depth||e.output===Ve.H.Normal||e.output===Ve.H.Shadow||e.output===Ve.H.Highlight?new Nr(e):null}createBufferWriter(){return new Dr(this.vertexBufferLayout,this.instanceBufferLayout)}}class Nr extends $e{constructor(e){super({...e,...e.material.parameters})}updateParameters(e){const t=this._material.parameters;return this.updateTexture(t.textureId),this.ensureTechnique(t.treeRendering?Pr:yr,e)}_updateShadowState(e){e.shadowMappingEnabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMappingEnabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.sceneHasOcludees&&this._material.setParameters({sceneHasOcludees:e.hasOccludees})}beginSlot(e){return this._output!==Ve.H.Color&&this._output!==Ve.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this.updateParameters(e)}bind(e,t){t.bindPass(this._material.parameters,e),this.bindTextures(t.program)}}const Lr={textureId:void 0,initTextureTransparent:!1,isSchematic:!1,usePBR:!1,normalTextureId:void 0,vertexTangents:!1,occlusionTextureId:void 0,emissiveTextureId:void 0,metallicRoughnessTextureId:void 0,emissiveFactor:[0,0,0],mrrFactors:[0,1,.5],ambient:[.2,.2,.2],diffuse:[.8,.8,.8],externalColor:[1,1,1,1],colorMixMode:"multiply",opacity:1,layerOpacity:1,vertexColors:!1,symbolColors:!1,doubleSided:!1,doubleSidedType:"normal",cullFace:O.Vr.Back,instanced:void 0,instancedDoublePrecision:!1,normals:"default",receiveSSAO:!0,fillLightsEnabled:!0,receiveShadows:!0,castShadows:!0,shadowMappingEnabled:!1,verticalOffset:null,screenSizePerspective:null,slicePlaneEnabled:!1,sliceHighlightDisabled:!1,offsetTransparentBackfaces:!1,vvSizeEnabled:!1,vvSizeMinSize:[1,1,1],vvSizeMaxSize:[100,100,100],vvSizeOffset:[0,0,0],vvSizeFactor:[1,1,1],vvSizeValue:[1,1,1],vvColorEnabled:!1,vvColorValues:[0,0,0,0,0,0,0,0],vvColorColors:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],vvSymbolAnchor:[0,0,0],vvSymbolRotationMatrix:(0,a.c)(),modelTransformation:null,transparent:!1,writeDepth:!0,customDepthTest:O.Gv.Less,textureAlphaMode:O.JJ.Blend,textureAlphaCutoff:qe.F,textureAlphaPremultiplied:!1,sceneHasOcludees:!1,...Ke};class Dr{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(D.T.POSITION).length}write(e,t,r,i){Yt(t,this.vertexBufferLayout,e.transformation,e.invTranspTransformation,r,i)}}function Hr(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,Ge.U$)().vec3f(D.T.POSITION).vec3f(D.T.NORMAL);return e.vertexTangents&&r.vec4f(D.T.TANGENT),t&&r.vec2f(D.T.UV0),e.vertexColors&&r.vec4u8(D.T.COLOR),e.symbolColors&&r.vec4u8(D.T.SYMBOLCOLOR),r}function Fr(e){let t=(0,Ge.U$)();return t=e.instancedDoublePrecision?t.vec3f(D.T.MODELORIGINHI).vec3f(D.T.MODELORIGINLO).mat3f(D.T.MODEL).mat3f(D.T.MODELNORMAL):t.mat4f(D.T.MODEL).mat4f(D.T.MODELNORMAL),e.instanced&&e.instanced.indexOf("color")>-1&&(t=t.vec4f(D.T.INSTANCECOLOR)),e.instanced&&e.instanced.indexOf("featureAttribute")>-1&&(t=t.vec4f(D.T.INSTANCEFEATUREATTRIBUTE)),t}const Br=(0,u.c)(),zr=(0,u.c)(),Ur=(0,u.f)(0,0,1),Gr=(0,u.c)(),Vr=(0,u.c)(),Wr=(0,u.c)(),qr=(0,u.c)(),kr=A.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function $r(e,t){const r=await jr(e,t);return{resource:r,textures:await Qr(r.textureDefinitions,t)}}async function jr(e,t){const r=(0,n.pC)(t)&&t.streamDataRequester;if(r)return Xr(e,r,t);const i=await(0,_.q6)((0,T["default"])(e,(0,n.Wg)(t)));if(!0===i.ok)return i.value.data;(0,S.r9)(i.error),Jr(i.error)}async function Xr(e,t,r){const i=await(0,_.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,S.r9)(i.error),Jr(i.error.details.url)}function Jr(e){throw new b.Z("",`Request for object resource failed: ${e}`)}function Kr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(kr.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(kr.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(kr.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(kr.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else kr.warn("Indexed geometries must specify faces"),i=!1;break}default:kr.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(kr.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(kr.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Yr(e,t){const r=[],i=[],o=[],a=[],s=e.resource,l=C.G.parse(s.version||"1.0","wosr");ri.validate(l);const c=s.model.name,d=s.model.geometries,h=s.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!Kr(e))continue;const s=ti(e),l=e.params.vertexAttributes,c=[];for(const t in l){const e=l[t],r=e.values;c.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,new Uint32Array(t[e].values)])}const x=f&&f[s.texture];if(x&&!p.has(s.texture)){const{image:e,params:t}=x,r=new ze(e,t);a.push(r),p.set(s.texture,r)}const T=p.get(s.texture),_=T?T.id:void 0;let b=o[s.material]?o[s.material][s.texture]:null;if(!b){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?ei(x.alphaChannelUsage):void 0,l={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:_,initTextureTransparent:!0,doubleSided:!0,cullFace:O.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,n.pC)(t)&&t.materialParamsMixin&&Object.assign(l,t.materialParamsMixin),b=new Ir(l),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=b}i.push(b);const A=new H(c,g);m+=g.position?g.position.length:0,r.push(A)}return{name:c,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,boundingBox:Zr(r),numberOfVertices:m,lodThreshold:null}}function Zr(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,n.pC)(r)&&((0,d.pp)(t,r.getBBMin()),(0,d.pp)(t,r.getBBMax()))})),t}async function Qr(e,t){const r=[];for(const a in e){const i=e[a],o=i.images[0].data;if(!o){kr.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,l="/textureDefinitions/"+a,c="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:J.e8.REPEAT,t:J.e8.REPEAT},preMultiplyAlpha:ei(c)!==O.JJ.Opaque},d=(0,n.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,M.t)(s,t);r.push(d.then((e=>({refId:l,image:e,params:u,alphaChannelUsage:c}))))}const i=await Promise.all(r),o={};for(const n of i)o[n.refId]=n;return o}function ei(e){switch(e){case"mask":return O.JJ.Mask;case"maskAndTransparency":return O.JJ.MaskBlend;case"none":return O.JJ.Opaque;default:return O.JJ.Blend}}function ti(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const ri=new C.G(1,2,"wosr");var ii=r(27368),ni=r(81770),oi=r(55620),ai=r(34305);async function si(e,t){const r=li((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):$r(r.url,t)),i=Yr(e,t);return{lods:[i],referenceBoundingBox:i.boundingBox,isEsriSymbolResource:!1,isWosr:!0,remove:e.remove}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,g.z)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,n.U2)(o.model.meta,"ESRI_proxyEllipsoid");o.meta.isEsriSymbolResource&&(0,n.pC)(a)&&-1!==o.meta.uri.indexOf("/RealisticTrees/")&&hi(o,a);const s=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:o.customMeta.esriTreeRendering,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,mrrFactors:[0,1,.5]},l={...t.materialParamsMixin,treeRendering:o.customMeta.esriTreeRendering};if(null!=r.specifiedLodIndex){const e=ci(o,s,l,r.specifiedLodIndex);let t=e[0].boundingBox;return 0!==r.specifiedLodIndex&&(t=ci(o,s,l,0)[0].boundingBox),{lods:e,referenceBoundingBox:t,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}const c=ci(o,s,l);return{lods:c,referenceBoundingBox:c[0].boundingBox,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1,remove:o.remove}}function li(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function ci(e,t,r,i){const s=e.model,l=(0,a.c)(),c=new Array,u=new Map,v=new Map;return s.lods.forEach(((e,a)=>{if(void 0!==i&&a!==i)return;const g={name:e.name,stageResources:{textures:new Array,materials:new Array,geometries:new Array},lodThreshold:(0,n.pC)(e.lodThreshold)?e.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:(0,d.cS)()};c.push(g),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=s.materials.get(e.material),c=(0,n.pC)(e.attributes.texCoord0),x=(0,n.pC)(e.attributes.normal),T=ui(a.alphaMode);if(!u.has(i)){if(c){if((0,n.pC)(a.textureColor)&&!v.has(a.textureColor)){const e=s.textures.get(a.textureColor),t={...e.parameters,preMultiplyAlpha:T!==O.JJ.Opaque};v.set(a.textureColor,new ze(e.data,t))}if((0,n.pC)(a.textureNormal)&&!v.has(a.textureNormal)){const e=s.textures.get(a.textureNormal);v.set(a.textureNormal,new ze(e.data,e.parameters))}if((0,n.pC)(a.textureOcclusion)&&!v.has(a.textureOcclusion)){const e=s.textures.get(a.textureOcclusion);v.set(a.textureOcclusion,new ze(e.data,e.parameters))}if((0,n.pC)(a.textureEmissive)&&!v.has(a.textureEmissive)){const e=s.textures.get(a.textureEmissive);v.set(a.textureEmissive,new ze(e.data,e.parameters))}if((0,n.pC)(a.textureMetallicRoughness)&&!v.has(a.textureMetallicRoughness)){const e=s.textures.get(a.textureMetallicRoughness);v.set(a.textureMetallicRoughness,new ze(e.data,e.parameters))}}const o=a.color[0]**(1/ii.K),l=a.color[1]**(1/ii.K),d=a.color[2]**(1/ii.K),h=a.emissiveFactor[0]**(1/ii.K),f=a.emissiveFactor[1]**(1/ii.K),m=a.emissiveFactor[2]**(1/ii.K),p=(0,n.pC)(a.textureColor)&&c?v.get(a.textureColor):null;u.set(i,new Ir({...t,transparent:T===O.JJ.Blend,customDepthTest:O.Gv.Lequal,textureAlphaMode:T,textureAlphaCutoff:a.alphaCutoff,diffuse:[o,l,d],ambient:[o,l,d],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?O.Vr.None:O.Vr.Back,vertexColors:!!e.attributes.color,vertexTangents:!!e.attributes.tangent,normals:x?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,fillLightsEnabled:!0,textureId:(0,n.pC)(p)?p.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,n.pC)(a.textureNormal)&&c?v.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,n.pC)(p)&&!!p.params.preMultiplyAlpha,occlusionTextureId:(0,n.pC)(a.textureOcclusion)&&c?v.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,n.pC)(a.textureEmissive)&&c?v.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,n.pC)(a.textureMetallicRoughness)&&c?v.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[h,f,m],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,...r}))}const _=di(e.indices||e.attributes.position.count,e.primitiveType),b=e.attributes.position.count,A=(0,p.gS)(h.ct,b);(0,f.t)(A,e.attributes.position,e.transform);const S=[[D.T.POSITION,{data:A.typedBuffer,size:A.elementCount,exclusive:!0}]],C=[[D.T.POSITION,_]];if((0,n.pC)(e.attributes.normal)){const t=(0,p.gS)(h.ct,b);(0,o.a)(l,e.transform),(0,f.a)(t,e.attributes.normal,l),S.push([D.T.NORMAL,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.T.NORMAL,_])}if((0,n.pC)(e.attributes.tangent)){const t=(0,p.gS)(h.ek,b);(0,o.a)(l,e.transform),(0,m.t)(t,e.attributes.tangent,l),S.push([D.T.TANGENT,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.T.TANGENT,_])}if((0,n.pC)(e.attributes.texCoord0)){const t=(0,p.gS)(h.Eu,b);(0,ni.n)(t,e.attributes.texCoord0),S.push([D.T.UV0,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.T.UV0,_])}if((0,n.pC)(e.attributes.color)){const t=(0,p.gS)(h.mc,b);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(t,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,oi.c)(t,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(t,e.attributes.color,1/256);else{(0,oi.f)(t,255,255,255,255);const r=new h.ne(t.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(r,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,ai.c)(r,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(r,e.attributes.color,1/256)}S.push([D.T.COLOR,{data:t.typedBuffer,size:t.elementCount,exclusive:!0}]),C.push([D.T.COLOR,_])}const M=new H(S,C);g.stageResources.geometries.push(M),g.stageResources.materials.push(u.get(i)),c&&((0,n.pC)(a.textureColor)&&g.stageResources.textures.push(v.get(a.textureColor)),(0,n.pC)(a.textureNormal)&&g.stageResources.textures.push(v.get(a.textureNormal)),(0,n.pC)(a.textureOcclusion)&&g.stageResources.textures.push(v.get(a.textureOcclusion)),(0,n.pC)(a.textureEmissive)&&g.stageResources.textures.push(v.get(a.textureEmissive)),(0,n.pC)(a.textureMetallicRoughness)&&g.stageResources.textures.push(v.get(a.textureMetallicRoughness))),g.numberOfVertices+=b;const y=M.boundingInfo;(0,n.pC)(y)&&((0,d.pp)(g.boundingBox,y.getBBMin()),(0,d.pp)(g.boundingBox,y.getBBMax()))}))})),c}function ui(e){switch(e){case"BLEND":return O.JJ.Blend;case"MASK":return O.JJ.Mask;case"OPAQUE":case null:case void 0:return O.JJ.Opaque}}function di(e,t){switch(t){case J.MX.TRIANGLES:return(0,x.nh)(e);case J.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case J.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}function hi(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];e.customMeta.esriTreeRendering=!0;for(const o of i.parts){const i=o.attributes.normal;if((0,n.Wi)(i))return;const a=o.attributes.position,d=a.count,f=(0,u.c)(),m=(0,u.c)(),v=(0,u.c)(),g=(0,p.gS)(h.mc,d),x=(0,p.gS)(h.ct,d),T=(0,s.a)((0,l.c)(),o.transform);for(let n=0;n<d;n++){a.getVec(n,m),i.getVec(n,f),(0,c.m)(m,m,o.transform),(0,c.f)(v,m,t.center),(0,c.E)(v,v,t.radius);const s=v[2],l=(0,c.l)(v),u=Math.min(.45+.55*l*l,1);(0,c.E)(v,v,t.radius),(0,c.m)(v,v,T),(0,c.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,c.e)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(n,v),g.set(n,0,255*u),g.set(n,1,255*u),g.set(n,2,255*u),g.set(n,3,255)}o.attributes.normal=x,o.attributes.color=g}}}},7738:function(e,t,r){r.d(t,{a9:function(){return i}});var i;r(67752),r(8693);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},96884:function(e,t,r){r.d(t,{U$:function(){return s}});r(48675),r(3462);var i=r(76180),n=r(71946);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,n.n1)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.indexOf(e)>=0}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},14539:function(e,t,r){r.d(t,{q:function(){return o}});var i=r(15626),n=r(65982);function o(e,t){t.output===i.H.Color&&t.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`)):t.output===i.H.Depth||t.output===i.H.Shadow?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("nearFar","vec2"),e.vertex.code.add(n.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)):e.vertex.code.add(n.H`void forwardLinearDepth() {}`)}},98290:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(65982);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},15626:function(e,t,r){var i;r.d(t,{H:function(){return i}}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.Highlight=4]="Highlight",e[e.Draped=5]="Draped",e[e.Occlusion=6]="Occlusion",e[e.Alpha=7]="Alpha",e[e.COUNT=8]="COUNT"}(i||(i={}))},36315:function(e,t,r){r.d(t,{Vv:function(){return u},p2:function(){return c}});var i=r(8693),n=r(51802),o=r(94370),a=r(65554),s=r(74674),l=r(65982);function c(e,t){if(t.slicePlaneEnabled){e.extensions.add("GL_OES_standard_derivatives"),t.sliceEnabledForVertexPrograms&&(e.vertex.uniforms.add("slicePlaneOrigin","vec3"),e.vertex.uniforms.add("slicePlaneBasis1","vec3"),e.vertex.uniforms.add("slicePlaneBasis2","vec3")),e.fragment.uniforms.add("slicePlaneOrigin","vec3"),e.fragment.uniforms.add("slicePlaneBasis1","vec3"),e.fragment.uniforms.add("slicePlaneBasis2","vec3");const r=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,n=t.sliceHighlightDisabled?l.H`#define highlightSlice(_color_, _pos_) (_color_)`:l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r),e.fragment.code.add(n)}else{const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;t.sliceEnabledForVertexPrograms&&e.vertex.code.add(r),e.fragment.code.add(r)}}function u(e,t,r,o){if(t.slicePlaneEnabled)if((0,i.pC)(r)){if((0,a.g)(d,r.origin),(0,a.g)(h,r.basis1),(0,a.g)(f,r.basis2),(0,i.pC)(o)&&(0,i.pC)(o.origin)&&(0,a.f)(d,r.origin,o.origin),(0,i.pC)(o)&&(0,i.pC)(o.view)){const e=(0,i.pC)(o.origin)?(0,n.j)(m,o.view,o.origin):o.view;(0,a.b)(h,h,d),(0,a.b)(f,f,d),(0,a.m)(d,d,e),(0,a.m)(h,h,e),(0,a.m)(f,f,e),(0,a.f)(h,h,d),(0,a.f)(f,f,d)}e.setUniform3fv("slicePlaneOrigin",d),e.setUniform3fv("slicePlaneBasis1",h),e.setUniform3fv("slicePlaneBasis2",f)}else e.setUniform3fv("slicePlaneBasis1",s.Z),e.setUniform3fv("slicePlaneBasis2",s.Z),e.setUniform3fv("slicePlaneOrigin",s.Z)}const d=(0,s.c)(),h=(0,s.c)(),f=(0,s.c)(),m=(0,o.c)()},26616:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(65982);function n(e,t){const r={hasModelTransformation:!1,...t};if(r.hasModelTransformation)return r.linearDepth?void e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):void e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);r.linearDepth?e.vertex.code.add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`):e.vertex.code.add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},87307:function(e,t,r){r.d(t,{d3:function(){return u},fQ:function(){return c}});var i=r(74674),n=r(15626),o=r(7158),a=r(65982),s=r(30150),l=r(12470);function c(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(s.T.MODELORIGINHI,"vec3"),e.attributes.add(s.T.MODELORIGINLO,"vec3"),e.attributes.add(s.T.MODEL,"mat3"),e.attributes.add(s.T.MODELNORMAL,"mat3")),t.instancedDoublePrecision&&(e.vertex.include(o.$,t),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));const r=[a.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `,a.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `,a.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `,a.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `,t.vertexTangents?a.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `:a.H``];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),t.output===n.H.Normal&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}function u(e,t){(0,l.po)(t,d,h,3),e.setUniform3fv("viewOriginHi",d),e.setUniform3fv("viewOriginLo",h)}const d=(0,i.c)(),h=(0,i.c)()},55372:function(e,t,r){r.d(t,{O:function(){return s},h:function(){return o}});var i=r(65982);function n(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.fragment.code.add(t),e.vertex.code.add(t)}var o,a=r(30150);function s(e,t){t.normalType===o.Attribute&&(e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(n),e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},8943:function(e,t,r){r.d(t,{f:function(){return o}});var i=r(65982),n=r(30150);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},49120:function(e,t,r){r.d(t,{R:function(){return s}});var i=r(7738),n=r(65982);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(30150);function s(e,t){t.symbolColor?(e.include(o),e.attributes.add(a.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float")):e.fragment.uniforms.add("colorMixMode","int"),t.symbolColor?e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`):e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`)}},37011:function(e,t,r){r.d(t,{D:function(){return a},N:function(){return i}});var i,n=r(65982),o=r(30150);function a(e,t){t.attributeTextureCoordinates===i.Default&&(e.attributes.add(o.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),t.attributeTextureCoordinates===i.Atlas&&(e.attributes.add(o.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(o.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),t.attributeTextureCoordinates===i.None&&e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`)}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.COUNT=3]="COUNT"}(i||(i={}))},14009:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(65982),n=r(30150);function o(e,t){t.attributeColor?(e.attributes.add(n.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},49193:function(e,t,r){r.d(t,{B:function(){return c}});var i=r(53838),n=r(55372),o=(r(26114),r(94370),r(74674),r(8943)),a=r(7158),s=r(65982);function l(e,t){e.include(o.f),e.vertex.include(a.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),e.vertex.uniforms.add("transformWorldFromModelRS","mat3"),e.vertex.uniforms.add("transformWorldFromModelTH","vec3"),e.vertex.uniforms.add("transformWorldFromModelTL","vec3"),e.vertex.uniforms.add("transformWorldFromViewTH","vec3"),e.vertex.uniforms.add("transformWorldFromViewTL","vec3"),e.vertex.uniforms.add("transformViewFromCameraRelativeRS","mat3"),e.vertex.uniforms.add("transformProjFromView","mat4"),e.vertex.code.add(s.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.uniforms.add("transformWorldFromViewTL","vec3"),e.fragment.code.add(s.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}function c(e,t){t.normalType===n.h.Attribute||t.normalType===n.h.CompressedAttribute?(e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add("transformNormalGlobalFromModel","mat3"),e.vertex.uniforms.add("transformNormalViewFromGlobal","mat3"),e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===n.h.Ground?(e.include(l,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s.H`
    void forwardNormal() {
      vNormalWorld = ${t.viewingMode===i.JY.Global?s.H`normalize(vPositionWorldCameraRelative);`:s.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(s.H`void forwardNormal() {}`)}},69813:function(e,t,r){r.d(t,{i:function(){return a}});var i=r(37011),n=r(65982);function o(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(n.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function a(e,t){e.include(i.D,t),e.fragment.code.add(n.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.attributeTextureCoordinates===i.N.Default&&e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),t.attributeTextureCoordinates===i.N.Atlas&&(e.include(o),e.fragment.code.add(n.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`))}},89145:function(e,t,r){r.d(t,{LC:function(){return a},Mo:function(){return s}});var i=r(53838),n=r(65982);r(37403);function o(e){e.vertex.code.add(n.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(n.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(n.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(n.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(n.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(n.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(n.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function a(e,t){const r=e.vertex.code;t.verticalOffsetEnabled?(e.vertex.uniforms.add("verticalOffset","vec4"),t.screenSizePerspectiveEnabled&&(e.include(o),e.vertex.uniforms.add("screenSizePerspectiveAlignment","vec4")),r.add(n.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${t.viewingMode===i.JY.Global?n.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:n.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
      ${t.screenSizePerspectiveEnabled?n.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:n.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`}
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `)):r.add(n.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}function s(e,t,r){if(!t.verticalOffset)return;const i=l(t.verticalOffset,r.camera.fovY,r.camera.fullViewport[3]),n=r.camera.pixelRatio||1;e.setUniform4f("verticalOffset",i.screenLength*n,i.perDistance,i.minWorldLength,i.maxWorldLength)}function l(e,t,r,i=c){return i.screenLength=e.screenLength,i.perDistance=Math.tan(.5*t)/(.5*r),i.minWorldLength=e.minWorldLength,i.maxWorldLength=e.maxWorldLength,i}const c={screenLength:0,perDistance:0,minWorldLength:0,maxWorldLength:0}},49475:function(e,t,r){r.d(t,{s:function(){return p}});var i=r(15626),n=r(36315),o=r(26616),a=r(55372),s=r(37011),l=r(49193),c=r(33451),u=r(65982);function d(e,t){e.fragment.include(c.n),t.output===i.H.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):t.output===i.H.Depth&&e.fragment.code.add(u.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}var h=r(99490),f=r(9664),m=r(72322);function p(e,t){const r=e.vertex.code,c=e.fragment.code,p=t.hasModelTransformation;t.output!==i.H.Depth&&t.output!==i.H.Shadow||(e.include(o.w,{linearDepth:!0,hasModelTransformation:p}),e.include(s.D,t),e.include(f.kl,t),e.include(d,t),e.include(n.p2,t),e.vertex.uniforms.add("nearFar","vec2"),e.varyings.add("depth","float"),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),e.include(m.sj,t),c.add(u.H`
      void main(void) {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputDepth(depth);
      }
    `)),t.output===i.H.Normal&&(e.include(o.w,{linearDepth:!1,hasModelTransformation:p}),e.include(a.O,t),e.include(l.B,t),e.include(s.D,t),e.include(f.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),e.vertex.uniforms.add("viewNormal","mat4"),e.varyings.add("vPositionView","vec3"),r.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${t.normalType===a.h.Attribute?u.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.p2,t),e.include(m.sj,t),c.add(u.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}

        ${t.normalType===a.h.ScreenDerivative?u.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`:u.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`}
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),t.output===i.H.Highlight&&(e.include(o.w,{linearDepth:!1,hasModelTransformation:p}),e.include(s.D,t),e.include(f.kl,t),t.hasColorTexture&&e.fragment.uniforms.add("tex","sampler2D"),r.add(u.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
        forwardTextureCoordinates();
      }
    `),e.include(n.p2,t),e.include(m.sj,t),e.include(h.bA),c.add(u.H`
      void main() {
        discardBySlice(vpos);
        ${t.hasColorTexture?u.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`:""}
        outputHighlight();
      }
    `))}},99490:function(e,t,r){r.d(t,{bA:function(){return s},wW:function(){return l}});var i=r(85381),n=r(65982);const o=(0,i.f)(1,1,0,1),a=(0,i.f)(1,0,1,1);function s(e){e.fragment.uniforms.add("depthTex","sampler2D"),e.fragment.uniforms.add("highlightViewportPixelSz","vec4"),e.fragment.constants.add("occludedHighlightFlag","vec4",o).add("unoccludedHighlightFlag","vec4",a),e.fragment.code.add(n.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}function l(e,t){e.bindTexture(t.highlightDepthTexture,"depthTex"),e.setUniform4f("highlightViewportPixelSz",0,0,t.inverseViewport[0],t.inverseViewport[1])}},9804:function(e,t,r){r.d(t,{S:function(){return o}});var i=r(33451),n=r(65982);function o(e){e.include(i.n),e.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},84367:function(e,t,r){r.d(t,{Q:function(){return l}});var i=r(37011),n=r(69813),o=r(59260),a=r(65982),s=r(30150);function l(e,t){const r=e.fragment;t.vertexTangents?(e.attributes.add(s.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===o.q.WindingOrder?r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.attributeTextureCoordinates!==i.N.None&&(e.include(n.i,t),r.uniforms.add("normalTexture","sampler2D"),r.uniforms.add("normalTextureSize","vec2"),r.code.add(a.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}},67662:function(e,t,r){r.d(t,{K:function(){return n}});var i=r(65982);function n(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add("ssaoTex","sampler2D"),r.uniforms.add("viewportPixelSz","vec4"),r.code.add(i.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`)):r.code.add(i.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}},11494:function(e,t,r){r.d(t,{X:function(){return h}});var i=r(53838),n=r(30382),o=r(65982);function a(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add("lightingAmbientSH0","vec3"),r.code.add(o.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add("lightingAmbientSH_R","vec4"),r.uniforms.add("lightingAmbientSH_G","vec4"),r.uniforms.add("lightingAmbientSH_B","vec4"),r.code.add(o.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add("lightingAmbientSH0","vec3"),r.uniforms.add("lightingAmbientSH_R1","vec4"),r.uniforms.add("lightingAmbientSH_G1","vec4"),r.uniforms.add("lightingAmbientSH_B1","vec4"),r.uniforms.add("lightingAmbientSH_R2","vec4"),r.uniforms.add("lightingAmbientSH_G2","vec4"),r.uniforms.add("lightingAmbientSH_B2","vec4"),r.code.add(o.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||r.code.add(o.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var s=r(67662);function l(e){const t=e.fragment;t.uniforms.add("lightingMainDirection","vec3"),t.uniforms.add("lightingMainIntensity","vec3"),t.uniforms.add("lightingFixedFactor","float"),t.uniforms.add("lightingSpecularStrength","float"),t.uniforms.add("lightingEnvironmentStrength","float"),t.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`)}var c=r(78895),u=r(53949),d=r(70046);function h(e,t){const r=e.fragment;e.include(l),e.include(s.K,t),t.pbrMode!==n.f7.Disabled&&e.include(c.T,t),e.include(a,t),t.receiveShadows&&e.include(d.hX,t),r.uniforms.add("lightingGlobalFactor","float"),r.uniforms.add("ambientBoostFactor","float"),r.uniforms.add("hasFillLights","bool"),e.include(u.e),r.code.add(o.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===n.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),r.code.add(o.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.viewingMode===i.JY.Global?o.H`normalize(vPosWorld)`:o.H`vec3(0.0, 0.0, 1.0)`}, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),r.code.add(o.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),t.pbrMode===n.f7.Disabled||t.pbrMode===n.f7.WaterOnIntegratedMesh?r.code.add(o.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`):t.pbrMode!==n.f7.Normal&&t.pbrMode!==n.f7.Schematic||(r.code.add(o.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(o.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),r.code.add(o.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.code.add(o.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(o.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===n.f7.Schematic?o.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:o.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `))}},97195:function(e,t,r){r.d(t,{l:function(){return n},p:function(){return o}});var i=r(65982);function n(e,t){e.fragment.uniforms.add("terrainDepthTexture","sampler2D"),e.fragment.uniforms.add("nearFar","vec2"),e.fragment.uniforms.add("inverseViewport","vec2"),e.fragment.code.add(i.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `)}function o(e,t){t.multipassTerrainEnabled&&t.terrainLinearDepthTexture&&e.bindTexture(t.terrainLinearDepthTexture,"terrainDepthTexture")}},59260:function(e,t,r){r.d(t,{k:function(){return a},q:function(){return i}});var i,n=r(56616),o=r(65982);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},78895:function(e,t,r){r.d(t,{T:function(){return s}});var i=r(65982);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(30382),a=r(53949);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode===o.f7.Water||t.pbrMode===o.f7.WaterOnIntegratedMesh?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},30382:function(e,t,r){r.d(t,{f7:function(){return a},jV:function(){return s},nW:function(){return l}});var i=r(64680),n=r(69813),o=r(65982);(0,i.f)(0,.6,.2);var a;function s(e,t){const r=e.fragment,i=t.hasMetalnessAndRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;t.pbrMode===a.Normal&&i&&e.include(n.i,t),t.pbrMode!==a.Schematic?(t.pbrMode===a.Disabled&&r.code.add(o.H`float getBakedOcclusion() { return 1.0; }`),t.pbrMode===a.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(o.H`vec3 mrr;
vec3 emission;
float occlusion;`),t.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(o.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(o.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),t.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(o.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(o.H`float getBakedOcclusion() { return 1.0; }`),r.code.add(o.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${t.hasMetalnessAndRoughnessTexture?t.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(o.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function l(e,t,r=!1){r||(e.setUniform3fv("mrrFactors",t.mrrFactors),e.setUniform3fv("emissionFactor",t.emissiveFactor))}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(a||(a={}))},53949:function(e,t,r){r.d(t,{e:function(){return n}});var i=r(65982);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},70046:function(e,t,r){r.d(t,{hX:function(){return o},vL:function(){return a}});var i=r(33451),n=r(65982);function o(e){e.fragment.include(i.n),e.fragment.uniforms.add("shadowMapTex","sampler2D"),e.fragment.uniforms.add("numCascades","int"),e.fragment.uniforms.add("cascadeDistances","vec4"),e.fragment.uniforms.add("shadowMapMatrix","mat4",4),e.fragment.uniforms.add("depthHalfPixelSz","float"),e.fragment.code.add(n.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`)}function a(e,t,r){t.shadowMappingEnabled&&t.shadowMap.bindView(e,r)}},9664:function(e,t,r){r.d(t,{kl:function(){return o},uj:function(){return s}});var i=r(65982),n=r(30150);function o(e,t){t.vvInstancingEnabled&&(t.vvSize||t.vvColor)&&e.attributes.add(n.T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(e.vertex.uniforms.add("vvSizeMinSize","vec3"),e.vertex.uniforms.add("vvSizeMaxSize","vec3"),e.vertex.uniforms.add("vvSizeOffset","vec3"),e.vertex.uniforms.add("vvSizeFactor","vec3"),e.vertex.uniforms.add("vvSymbolRotationMatrix","mat3"),e.vertex.uniforms.add("vvSymbolAnchor","vec3"),e.vertex.code.add(i.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(e.vertex.constants.add("vvColorNumber","int",8),e.vertex.code.add(i.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.vvInstancingEnabled?i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):e.vertex.code.add(i.H`vec4 vvColor() { return vec4(1.0); }`)}function a(e,t){t.vvSizeEnabled&&(e.setUniform3fv("vvSizeMinSize",t.vvSizeMinSize),e.setUniform3fv("vvSizeMaxSize",t.vvSizeMaxSize),e.setUniform3fv("vvSizeOffset",t.vvSizeOffset),e.setUniform3fv("vvSizeFactor",t.vvSizeFactor)),t.vvColorEnabled&&(e.setUniform1fv("vvColorValues",t.vvColorValues),e.setUniform4fv("vvColorColors",t.vvColorColors))}function s(e,t){a(e,t),t.vvSizeEnabled&&(e.setUniform3fv("vvSymbolAnchor",t.vvSymbolAnchor),e.setUniformMatrix3fv("vvSymbolRotationMatrix",t.vvSymbolRotationMatrix))}},72322:function(e,t,r){r.d(t,{F:function(){return o},bf:function(){return a},sj:function(){return s}});var i=r(65982),n=r(81789);const o=.1,a=.001;function s(e,t){const r=e.fragment;switch(t.alphaDiscardMode){case n.JJ.Blend:r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(a)}) { discard; } }
      `);break;case n.JJ.Opaque:r.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case n.JJ.Mask:r.uniforms.add("textureAlphaCutoff","float"),r.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case n.JJ.MaskBlend:e.fragment.uniforms.add("textureAlphaCutoff","float"),e.fragment.code.add(i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},7158:function(e,t,r){r.d(t,{$:function(){return o},I:function(){return a}});var i=r(81653),n=r(65982);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function a(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},96985:function(e,t,r){r.d(t,{a:function(){return a}});var i=r(15626),n=r(65982),o=r(58523);function a(e,t){const r=n.H`
  /*
  *  ${t.name}
  *  ${t.output===i.H.Color?"RenderOutput: Color":t.output===i.H.Depth?"RenderOutput: Depth":t.output===i.H.Shadow?"RenderOutput: Shadow":t.output===i.H.Normal?"RenderOutput: Normal":t.output===i.H.Highlight?"RenderOutput: Highlight":""}
  */
  `;(0,o.CG)()&&(e.fragment.code.add(r),e.vertex.code.add(r))}},76161:function(e,t,r){r.d(t,{y:function(){return a}});var i=r(7738),n=r(65982);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `)}},33451:function(e,t,r){r.d(t,{n:function(){return n}});var i=r(65982);function n(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},63914:function(e,t,r){r.d(t,{kG:function(){return a}});r(26699);var i=r(93622);const n=i.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class o{constructor(){this.includedModules=new Map}include(e,t){this.includedModules.has(e)?this.includedModules.get(e)!==t&&n.error("Trying to include shader module multiple times with different sets of options."):(this.includedModules.set(e,t),e(this.builder,t))}}class a extends o{constructor(){super(...arguments),this.vertex=new c,this.fragment=new c,this.attributes=new u,this.varyings=new d,this.extensions=new h,this.constants=new f}get fragmentUniforms(){return this.fragment.uniforms}get builder(){return this}generateSource(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?p:m,l=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}}class s{constructor(){this._entries=new Map}add(e,t,r){const i=`${e}_${t}_${r}`;return this._entries.set(i,{name:e,type:t,arraySize:r}),this}generateSource(){const e=e=>e?`[${e}]`:"";return Array.from(this._entries.values()).map((t=>`uniform ${t.type} ${t.name}${e(t.arraySize)};`))}get entries(){return Array.from(this._entries.values())}}class l{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class c extends o{constructor(){super(...arguments),this.uniforms=new s,this.code=new l,this.constants=new f}get builder(){return this}}class u{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class d{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}h.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],h.ALLOWLIST_VERTEX=[];class f{constructor(){this._entries=[]}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=f._numberToFloatStr(r);break;case"int":i=f._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${f._numberToFloatStr(r[0])},                            ${f._numberToFloatStr(r[1])},                            ${f._numberToFloatStr(r[2])},                            ${f._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${f._numberToIntStr(r[0])},                             ${f._numberToIntStr(r[1])},                             ${f._numberToIntStr(r[2])},                             ${f._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>f._numberToFloatStr(e))).join(", ")})`}return this._entries.push(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const m="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",p="precision highp float;\nprecision highp sampler2D;"},65982:function(e,t,r){function i(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}r.d(t,{H:function(){return i}}),function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r}(i||(i={}))},25749:function(e,t,r){r.d(t,{Bh:function(){return f},IB:function(){return l},j7:function(){return c},je:function(){return h},ve:function(){return u},wu:function(){return a}});var i=r(81789),n=r(17923),o=r(9408);const a=(0,o.wK)(n.zi.SRC_ALPHA,n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA,n.zi.ONE_MINUS_SRC_ALPHA),s=(0,o["if"])(n.zi.ONE,n.zi.ONE),l=(0,o["if"])(n.zi.ZERO,n.zi.ONE_MINUS_SRC_ALPHA);function c(e){return e===i.Am.FrontFace?null:e===i.Am.Alpha?l:s}const u=5e5,d={factor:-1,units:-2};function h(e){return e?d:null}function f(e,t=n.wb.LESS){return e===i.Am.NONE||e===i.Am.FrontFace?t:n.wb.LEQUAL}},38727:function(e,t,r){var i;r.d(t,{C:function(){return i}}),function(e){e[e.MATERIAL=0]="MATERIAL",e[e.MATERIAL_ALPHA=1]="MATERIAL_ALPHA",e[e.MATERIAL_DEPTH=2]="MATERIAL_DEPTH",e[e.MATERIAL_NORMAL=3]="MATERIAL_NORMAL",e[e.MATERIAL_DEPTH_SHADOWMAP_ALL=4]="MATERIAL_DEPTH_SHADOWMAP_ALL",e[e.MATERIAL_HIGHLIGHT=5]="MATERIAL_HIGHLIGHT",e[e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT=6]="MATERIAL_DEPTH_SHADOWMAP_DEFAULT",e[e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT=7]="MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT",e[e.MAX_PASS=8]="MAX_PASS"}(i||(i={}))},75633:function(e,t,r){var i;r.d(t,{r:function(){return i}}),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_PLUGIN=3]="OPAQUE_PLUGIN",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_PLUGIN=5]="TRANSPARENT_PLUGIN",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=12]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=13]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VOXEL=22]="VOXEL",e[e.MAX_SLOTS=23]="MAX_SLOTS"}(i||(i={}))},54131:function(e,t,r){r.d(t,{hu:function(){return o}});r(21703),r(47001),r(12686),r(97848);var i=r(85381);(0,i.c)();class n{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new n(t)}},30150:function(e,t,r){var i;r.d(t,{T:function(){return i}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude"}(i||(i={}))},81789:function(e,t,r){var i,n,o,a,s,l,c,u,d,h,f,m,p,v;r.d(t,{Am:function(){return a},CE:function(){return f},Gv:function(){return n},JJ:function(){return p},MX:function(){return h},Rw:function(){return l},Vr:function(){return i},hU:function(){return c}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.NONE=0]="NONE",e[e.SMAA=1]="SMAA"}(o||(o={})),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(a||(a={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(s||(s={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(l||(l={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(c||(c={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(u||(u={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(d||(d={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(h||(h={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(f||(f={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(m||(m={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(p||(p={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(v||(v={}))},37403:function(e,t,r){r.d(t,{bj:function(){return N},FZ:function(){return F},Uf:function(){return L},Bw:function(){return _},LO:function(){return D},Hx:function(){return I}});var i=r(67752),n=r(8693),o=r(65554),a=r(74674),s=r(37740),l=r(81789);r(53838);function c(e){return Math.abs(e*e*e)}function u(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return m.scale=Math.min(i.divisor/(t-i.offset),1),m.factor=c(e),m.minPixelSize=i.minPixelSize,m.paddingPixels=n,m}function d(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function h(e,t){return Math.max((0,i.t7)(e*t.scale,e,t.factor),d(e,t))}function f(e,t,r,i){return h(e,u(t,r,i))}(0,i.Vl)(10),(0,i.Vl)(12),(0,i.Vl)(70),(0,i.Vl)(40);const m={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var p=r(54131),v=r(30150),g=(r(48675),r(3462),r(51802),r(94370));r(12470);function x(e){return!!(0,n.pC)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),(0,g.c)();const T=(0,s.Ue)();function _(e,t,r,i,n,o,a){if(!x(t))if(e.boundingInfo){(0,p.hu)(e.primitiveType===l.MX.Triangle);const t=r.tolerance;A(e.boundingInfo,i,n,t,o,a)}else{const t=e.indices.get(v.T.POSITION),r=e.vertexAttributes.get(v.T.POSITION);C(i,n,0,t.length/3,t,r,void 0,o,a)}}const b=(0,a.c)();function A(e,t,r,i,o,a){if((0,n.Wi)(e))return;const l=w(t,r,b);if((0,s.op)(T,e.getBBMin()),(0,s.Tn)(T,e.getBBMax()),(0,n.pC)(o)&&o.applyToAabb(T),R(T,t,l,i)){const{primitiveIndices:n,indices:s,position:l}=e,c=n?n.length:s.length/3;if(c>B){const n=e.getChildren();if(void 0!==n){for(let e=0;e<8;++e)void 0!==n[e]&&A(n[e],t,r,i,o,a);return}}C(t,r,0,c,s,l,n,o,a)}}const S=(0,a.c)();function C(e,t,r,i,o,a,s,l,c){if(s)return M(e,t,r,i,o,a,s,l,c);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let x=r,T=3*r;x<i;++x){let e=d*o[T++],t=u[e++],r=u[e++],i=u[e];e=d*o[T++];let a=u[e++],s=u[e++],_=u[e];e=d*o[T++];let b=u[e++],A=u[e++],C=u[e];(0,n.pC)(l)&&([t,r,i]=l.applyToVertex(t,r,i,x),[a,s,_]=l.applyToVertex(a,s,_,x),[b,A,C]=l.applyToVertex(b,A,C,x));const M=a-t,O=s-r,y=_-i,w=b-t,R=A-r,P=C-i,I=v*P-R*g,N=g*w-P*p,L=p*R-w*v,D=M*I+O*N+y*L;if(Math.abs(D)<=Number.EPSILON)continue;const H=h-t,F=f-r,B=m-i,z=H*I+F*N+B*L;if(D>0){if(z<0||z>D)continue}else if(z>0||z<D)continue;const U=F*y-O*B,G=B*M-y*H,V=H*O-M*F,W=p*U+v*G+g*V;if(D>0){if(W<0||z+W>D)continue}else if(W>0||z+W<D)continue;const q=(w*U+R*G+P*V)/D;q>=0&&c(q,E(M,O,y,w,R,P,S),x,!1)}}function M(e,t,r,i,o,a,s,l,c){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=d*o[t++],i=u[r++],a=u[r++],T=u[r];r=d*o[t++];let _=u[r++],b=u[r++],A=u[r];r=d*o[t];let C=u[r++],M=u[r++],O=u[r];(0,n.pC)(l)&&([i,a,T]=l.applyToVertex(i,a,T,x),[_,b,A]=l.applyToVertex(_,b,A,x),[C,M,O]=l.applyToVertex(C,M,O,x));const y=_-i,w=b-a,R=A-T,P=C-i,I=M-a,N=O-T,L=v*N-I*g,D=g*P-N*p,H=p*I-P*v,F=y*L+w*D+R*H;if(Math.abs(F)<=Number.EPSILON)continue;const B=h-i,z=f-a,U=m-T,G=B*L+z*D+U*H;if(F>0){if(G<0||G>F)continue}else if(G>0||G<F)continue;const V=z*R-w*U,W=U*y-R*B,q=B*w-y*z,k=p*V+v*W+g*q;if(F>0){if(k<0||G+k>F)continue}else if(k>0||G+k<F)continue;const $=(P*V+I*W+N*q)/F;$>=0&&c($,E(y,w,R,P,I,N,S),e,!1)}}const O=(0,a.c)(),y=(0,a.c)();function E(e,t,r,i,n,a,s){return(0,o.s)(O,e,t,r),(0,o.s)(y,i,n,a),(0,o.c)(s,O,y),(0,o.n)(s,s),s}function w(e,t,r){return(0,o.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function R(e,t,r,i){return P(e,t,r,i,1/0)}function P(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),l=Math.max(o,a);const c=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return l=Math.min(l,Math.max(d,h)),!(l<0)&&(s=Math.max(s,Math.min(d,h)),!(s>l)&&s<n)}function I(e,t,r,n,o){let a=(r.screenLength||0)*e.pixelRatio;o&&(a=f(a,n,t,o));const s=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,i.uZ)(s*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function N(e,t,r){if(!e)return;const i=e.parameters,n=e.paddingPixelsOverride;t.setUniform4f(r,i.divisor,i.offset,i.minPixelSize,n)}function L(e,t){const r=t?L(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=H(t)),null==t&&i in r||(r[i]=t)}return r}function D(e,t){let r=!1;for(const i in t){const n=t[i];void 0!==n&&(r=!0,Array.isArray(n)?e[i]=n.slice():e[i]=n)}return r}function H(e){const t=[];return e.forEach((e=>t.push(e))),t}const F={multiply:1,ignore:2,replace:3,tint:4},B=1e3},64816:function(e,t,r){r.d(t,{G:function(){return i}});class i{constructor(e,t,r,i,n,o=!1,a=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=n,this.normalized=o,this.divisor=a}}},12470:function(e,t,r){r.d(t,{LF:function(){return i},po:function(){return n}});r(48675),r(3462);function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t,r,n){for(let s=0;s<n;++s)o[0]=e[s],i(o,a,1),t[s]=a[0],r[s]=a[1]}const o=new Float64Array(1),a=new Float32Array(2)},9408:function(e,t,r){r.d(t,{BK:function(){return d},LZ:function(){return u},if:function(){return o},jp:function(){return G},sm:function(){return _},wK:function(){return a},zp:function(){return c}});var i=r(81789),n=r(17923);function o(e,t,r=n.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.db.ADD,a=n.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.LR.BACK,mode:n.Wf.CCW},l={face:n.LR.FRONT,mode:n.Wf.CCW},c=e=>e===i.Vr.Back?s:e===i.Vr.Front?l:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return S.intern(e)}function f(e){return M.intern(e)}function m(e){return y.intern(e)}function p(e){return w.intern(e)}function v(e){return P.intern(e)}function g(e){return N.intern(e)}function x(e){return D.intern(e)}function T(e){return F.intern(e)}function _(e){return z.intern(e)}class b{constructor(e,t){this.makeKey=e,this.makeRef=t,this.interns=new Map}intern(e){if(!e)return null;const t=this.makeKey(e),r=this.interns;return r.has(t)||r.set(t,this.makeRef(e)),r.get(t)}}function A(e){return"["+e.join(",")+"]"}const S=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?A([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const M=new b(O,(e=>({__tag:"Culling",...e})));function O(e){return e?A([e.face,e.mode]):null}const y=new b(E,(e=>({__tag:"PolygonOffset",...e})));function E(e){return e?A([e.factor,e.units]):null}const w=new b(R,(e=>({__tag:"DepthTest",...e})));function R(e){return e?A([e.func]):null}const P=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?A([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?A([e.zNear,e.zFar]):null}const D=new b(H,(e=>({__tag:"ColorWrite",...e})));function H(e){return e?A([e.r,e.g,e.b,e.a]):null}const F=new b(B,(e=>({__tag:"StencilWrite",...e})));function B(e){return e?A([e.mask]):null}const z=new b(U,(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:T(e.stencilWrite)})));function U(e){return e?A([C(e.blending),O(e.culling),E(e.polygonOffset),R(e.depthTest),I(e.stencilTest),L(e.depthWrite),H(e.colorWrite),B(e.stencilWrite)]):null}class G{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=1023.e59e4536.js.map