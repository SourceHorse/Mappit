"use strict";(self["webpackChunkmappitweb"]=self["webpackChunkmappitweb"]||[]).push([[6684],{8526:function(t,e,n){function i(t){return"r"in t&&"g"in t&&"b"in t}function r(t){return"h"in t&&"s"in t&&"v"in t}function o(t){return"l"in t&&"a"in t&&"b"in t}function a(t){return"l"in t&&"c"in t&&"h"in t}function l(t){return"x"in t&&"y"in t&&"z"in t}n.d(e,{Y3:function(){return z},_Y:function(){return j},sJ:function(){return $},xr:function(){return v}});const s=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function h(t,e){const n=[];let i,r;if(t[0].length!==e.length)throw"dimensions do not match";const o=t.length,a=t[0].length;let l=0;for(i=0;i<o;i++){for(l=0,r=0;r<a;r++)l+=t[i][r]*e[r];n.push(l)}return n}function u(t){const e=[t.r/255,t.g/255,t.b/255].map((t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4)),n=h(s,e);return{x:100*n[0],y:100*n[1],z:100*n[2]}}function f(t){const e=h(c,[t.x/100,t.y/100,t.z/100]).map((t=>{const e=t<=.0031308?12.92*t:1.055*t**(1/2.4)-.055;return Math.min(1,Math.max(e,0))}));return{r:Math.round(255*e[0]),g:Math.round(255*e[1]),b:Math.round(255*e[2])}}function d(t){const e=[t.x/95.047,t.y/100,t.z/108.883].map((t=>t>(6/29)**3?t**(1/3):1/3*(29/6)**2*t+4/29));return{l:116*e[1]-16,a:500*(e[0]-e[1]),b:200*(e[1]-e[2])}}function g(t){const e=t.l,n=[(e+16)/116+t.a/500,(e+16)/116,(e+16)/116-t.b/200].map((t=>t>6/29?t**3:3*(6/29)**2*(t-4/29)));return{x:95.047*n[0],y:100*n[1],z:108.883*n[2]}}function y(t){const e=t.l,n=t.a,i=t.b,r=Math.sqrt(n*n+i*i);let o=Math.atan2(i,n);return o=o>0?o:o+2*Math.PI,{l:e,c:r,h:o}}function p(t){const e=t.l,n=t.c,i=t.h;return{l:e,a:n*Math.cos(i),b:n*Math.sin(i)}}function m(t){return d(u(t))}function x(t){return f(g(t))}function w(t){return y(d(u(t)))}function b(t){return f(g(p(t)))}function k(t){const e=t.r,n=t.g,i=t.b,r=Math.max(e,n,i),o=r-Math.min(e,n,i);let a=r,l=0===o?0:r===e?(n-i)/o%6:r===n?(i-e)/o+2:(e-n)/o+4,s=0===o?0:o/a;return l<0&&(l+=6),l*=60,s*=100,a*=100/255,{h:l,s:s,v:a}}function M(t){const e=(t.h+360)%360/60,n=t.s/100,i=t.v/100*255,r=i*n,o=r*(1-Math.abs(e%2-1));let a;switch(Math.floor(e)){case 0:a={r:r,g:o,b:0};break;case 1:a={r:o,g:r,b:0};break;case 2:a={r:0,g:r,b:o};break;case 3:a={r:0,g:o,b:r};break;case 4:a={r:o,g:0,b:r};break;case 5:case 6:a={r:r,g:0,b:o};break;default:a={r:0,g:0,b:0}}return a.r=Math.round(a.r+i-r),a.g=Math.round(a.g+i-r),a.b=Math.round(a.b+i-r),a}function v(t){return i(t)?t:a(t)?b(t):o(t)?x(t):l(t)?f(t):r(t)?M(t):t}function j(t){return r(t)?t:k(v(t))}function z(t){return o(t)?t:m(v(t))}function $(t){return a(t)?t:w(v(t))}},6684:function(t,e,n){n.d(e,{w:function(){return P},r:function(){return K}});var i=n(65677),r=n(94848),o=n(8526),a=n(22130),l=n(81653),s=(n(58972),n(36284)),c=n(36945),h=n(97382),u=n(90675),f=(n(64879),n(93622),n(1475));const d="http://www.w3.org/2000/svg";let g=0,y=0;const p=(0,l.Z)("android"),m=(0,l.Z)("chrome")||p&&p>=4?"auto":"optimizeLegibility",x={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},w=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g;let b={},k={};const M={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]},v=Math.PI;let j=1;function z(t,e){const n=t*(v/180);return Math.abs(e*Math.sin(n))+Math.abs(e*Math.cos(n))}function $(t){return t.map((t=>`${t.command} ${t.values.join(" ")}`)).join(" ").trim()}function I(t,e,n,i){if(t){if("circle"===t.type)return(0,f.u)("circle",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,r:t.r});if("ellipse"===t.type)return(0,f.u)("ellipse",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",cx:t.cx,cy:t.cy,rx:t.rx,ry:t.ry});if("rect"===t.type)return(0,f.u)("rect",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",x:t.x,y:t.y,width:t.width,height:t.height});if("image"===t.type)return(0,f.u)("image",{href:t.src,x:t.x,y:t.y,width:t.width,height:t.height,preserveAspectRatio:"none"});if("path"===t.type){const i="string"!=typeof t.path?$(t.path):t.path;return(0,f.u)("path",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4",d:i})}if("text"===t.type)return(0,f.u)("text",{fill:e,"fill-rule":"evenodd",stroke:n.color,"stroke-width":n.width,"stroke-linecap":n.cap,"stroke-linejoin":n.join,"stroke-dasharray":n.dashArray,"stroke-miterlimit":"4","text-anchor":i.align,"text-decoration":i.decoration,kerning:i.kerning,rotate:i.rotate,"text-rendering":m,"font-style":i.font.style,"font-variant":i.font.variant,"font-weight":i.font.weight,"font-size":i.font.size,"font-family":i.font.family,x:t.x,y:t.y},t.text)}return null}function S(t){const e={fill:"none",pattern:null,linearGradient:null};if(t)if("type"in t&&"pattern"===t.type){const n="patternId-"+ ++g;e.fill=`url(#${n})`,e.pattern={id:n,x:t.x,y:t.y,width:t.width,height:t.height,image:{x:0,y:0,width:t.width,height:t.height,href:t.src}}}else if("type"in t&&"linear"===t.type){const n="linearGradientId-"+ ++y;e.fill=`url(#${n})`,e.linearGradient={id:n,x1:t.x1,y1:t.y1,x2:t.x2,y2:t.y2,stops:t.colors.map((t=>({offset:t.offset,color:t.color&&new c.Z(t.color).toString()})))}}else if(t){const n=new c.Z(t);e.fill=n.toString()}return e}function A(t){const e={color:"none",width:1,cap:"butt",join:"4",dashArray:"none"};if(t&&(null!=t.width&&(e.width=t.width),t.cap&&(e.cap=t.cap),t.join&&(e.join=t.join.toString()),t.color&&(e.color=new c.Z(t.color).toString()),t.style)){let n=null;if(t.style in M&&(n=M[t.style]),Array.isArray(n)){n=n.slice(0);for(let e=0;e<n.length;++e)n[e]*=t.width;if("butt"!==t.cap){for(let e=0;e<n.length;e+=2)n[e]-=t.width,n[e]<1&&(n[e]=1);for(let e=1;e<n.length;e+=2)n[e]+=t.width}n=n.join(",")}e.dashArray=n}return e}function N(t,e){const n={align:null,decoration:null,kerning:null,rotate:null,font:{style:null,variant:null,weight:null,size:null,family:null}};return t&&(n.align=t.align,n.decoration=t.decoration,n.kerning=t.kerning?"auto":"0",n.rotate=t.rotated?"90":"0",n.font.style=e.style||"normal",n.font.variant=e.variant||"normal",n.font.weight=e.weight||"normal",n.font.size=e.size&&e.size.toString()||"10pt",n.font.family=e.family||"serif"),n}function G(t){const{pattern:e,linearGradient:n}=t;if(e)return(0,f.u)("pattern",{id:e.id,patternUnits:"userSpaceOnUse",x:e.x,y:e.y,width:e.width,height:e.height},(0,f.u)("image",{x:e.image.x,y:e.image.y,width:e.image.width,height:e.image.height,href:e.image.href}));if(n){const t=n.stops.map(((t,e)=>(0,f.u)("stop",{key:`${e}-stop`,offset:t.offset,"stop-color":t.color})));return(0,f.u)("linearGradient",{id:n.id,gradientUnits:"userSpaceOnUse",x1:n.x1,y1:n.y1,x2:n.x2,y2:n.y2},t)}return null}function B(t,e,n){return(0,u.t)(t,(0,u.c)(t),[e,n])}function D(t,e,n,i,r){return(0,u.s)(t,(0,u.c)(t),[e,n]),t[4]=t[4]*e-i*e+i,t[5]=t[5]*n-r*n+r,t}function E(t,e,n,i){const r=e%360*Math.PI/180;(0,u.r)(t,(0,u.c)(t),r);const o=Math.cos(r),a=Math.sin(r),l=t[4],s=t[5];return t[4]=l*o-s*a+i*a-n*o+n,t[5]=s*o+l*a-n*a-i*o+i,t}function U(t,e){b&&"left"in b?(b.left>t&&(b.left=t),b.right<t&&(b.right=t),b.top>e&&(b.top=e),b.bottom<e&&(b.bottom=e)):b={left:t,bottom:e,right:t,top:e}}function Z(t){const e=t.args,n=e.length;let i;switch(t.action){case"M":case"L":case"C":case"S":case"Q":case"T":for(i=0;i<n;i+=2)U(e[i],e[i+1]);k.x=e[n-2],k.y=e[n-1];break;case"H":for(i=0;i<n;++i)U(e[i],k.y);k.x=e[n-1];break;case"V":for(i=0;i<n;++i)U(k.x,e[i]);k.y=e[n-1];break;case"m":{let t=0;"x"in k||(U(k.x=e[0],k.y=e[1]),t=2);for(i=t;i<n;i+=2)U(k.x+=e[i],k.y+=e[i+1]);break}case"l":case"t":for(i=0;i<n;i+=2)U(k.x+=e[i],k.y+=e[i+1]);break;case"h":for(i=0;i<n;++i)U(k.x+=e[i],k.y);break;case"v":for(i=0;i<n;++i)U(k.x,k.y+=e[i]);break;case"c":for(i=0;i<n;i+=6)U(k.x+e[i],k.y+e[i+1]),U(k.x+e[i+2],k.y+e[i+3]),U(k.x+=e[i+4],k.y+=e[i+5]);break;case"s":case"q":for(i=0;i<n;i+=4)U(k.x+e[i],k.y+e[i+1]),U(k.x+=e[i+2],k.y+=e[i+3]);break;case"A":for(i=0;i<n;i+=7)U(e[i+5],e[i+6]);k.x=e[n-2],k.y=e[n-1];break;case"a":for(i=0;i<n;i+=7)U(k.x+=e[i+5],k.y+=e[i+6])}}function C(t,e,n){const i=x[t.toLowerCase()];let r;"number"==typeof i&&(i?e.length>=i&&(r={action:t,args:e.slice(0,e.length-e.length%i)},n.push(r),Z(r)):(r={action:t,args:[]},n.push(r),Z(r)))}function F(t){const e=("string"!=typeof t.path?$(t.path):t.path).match(w),n=[];if(b={},k={},!e)return null;let i="",r=[];const o=e.length;for(let l=0;l<o;++l){const t=e[l],o=parseFloat(t);isNaN(o)?(i&&C(i,r,n),r=[],i=t):r.push(o)}C(i,r,n);const a={x:0,y:0,width:0,height:0};return b&&"left"in b&&(a.x=b.left,a.y=b.top,a.width=b.right-b.left,a.height=b.bottom-b.top),a}function T(t){const e={x:0,y:0,width:0,height:0};if("circle"===t.type)e.x=t.cx-t.r,e.y=t.cy-t.r,e.width=2*t.r,e.height=2*t.r;else if("ellipse"===t.type)e.x=t.cx-t.rx,e.y=t.cy-t.ry,e.width=2*t.rx,e.height=2*t.ry;else if("image"===t.type||"rect"===t.type)e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height;else if("path"===t.type){const n=F(t);e.x=n.x,e.y=n.y,e.width=n.width,e.height=n.height}return e}function V(t){const e={x:0,y:0,width:0,height:0};let n=null,i=Number.NEGATIVE_INFINITY,r=Number.NEGATIVE_INFINITY;for(const o of t)n?(n.x=Math.min(n.x,o.x),n.y=Math.min(n.y,o.y),i=Math.max(i,o.x+o.width),r=Math.max(r,o.y+o.height)):(n=e,n.x=o.x,n.y=o.y,i=o.x+o.width,r=o.y+o.height);return n&&(n.width=i-n.x,n.height=r-n.y),n}function R(t,e,n,i,r,o,a,l,s){let c=(a&&o?z(o,e):e)/2,f=(a&&o?z(o,n):n)/2;if(s){const t=s[0],e=s[1];c=(a&&o?z(o,t):t)/2,f=(a&&o?z(o,e):e)/2}const d=t.width+i,g=t.height+i,y=(0,h.c)(),p=(0,h.c)();let m=!1;if(r&&0!==d&&0!==g){const t=e!==n?e/n:d/g,i=e>n?e:n;let r=1,o=1;isNaN(i)||(t>1?(r=i/d,o=i/t/g):(o=i/g,r=i*t/d)),(0,u.m)(p,p,D(y,r,o,c,f)),m=!0}const x=t.x+(d-i)/2,w=t.y+(g-i)/2;if((0,u.m)(p,p,B(y,c-x,f-w)),!m&&(d>e||g>n)){const t=d/e>g/n,i=(t?e:n)/(t?d:g);(0,u.m)(p,p,D(y,i,i,x,w))}return o&&(0,u.m)(p,p,E(y,o,x,w)),l&&(0,u.m)(p,p,B(y,l[0],l[1])),`matrix(${p[0]},${p[1]},${p[2]},${p[3]},${p[4]},${p[5]})`}function Y(t,e,n){const i=null==t?void 0:t.effects.find((t=>"bloom"===t.type));if(!i)return null;const{strength:r,radius:o}=i,a=r>0?o:0,l=(r+a)*e,s=4*r+1;return(0,f.u)("filter",{id:`bloom${n}`,x:"-100%",y:"-100%",width:"300%",height:"300%",filterUnits:"userSpaceOnUse"},(0,f.u)("feMorphology",{operator:"dilate",radius:(r+.5*a)*(5**(e/100)*(.4+e/100)),in:"SourceGraphic",result:"dilate"}),(0,f.u)("feGaussianBlur",{in:"dilate",stdDeviation:l/25,result:"blur"}),(0,f.u)("feGaussianBlur",{in:"blur",stdDeviation:l/50,result:"intensityBlur"}),(0,f.u)("feComponentTransfer",{in:"SourceGraphic",result:"intensityBrightness"},(0,f.u)("feFuncR",{type:"linear",slope:s}),(0,f.u)("feFuncG",{type:"linear",slope:s}),(0,f.u)("feFuncB",{type:"linear",slope:s})),(0,f.u)("feMerge",null,(0,f.u)("feMergeNode",{in:"intensityBlur"}),(0,f.u)("feMergeNode",{in:"intensityBrightness"}),(0,f.u)("feGaussianBlur",{stdDeviation:r/10})))}function _(t,e,n,i){const r=[],o=[],a=++j,l=Y(null==i?void 0:i.effectView,e,a);let s=null;if(l){var c;const t=null==i||null==(c=i.effectView)?void 0:c.effects.find((t=>"bloom"===t.type)),r=(t.strength?t.strength+t.radius/2:0)/3,o=e+e*r,a=n+n*r;s=[Math.max(o,10),Math.max(a,10)]}for(const h of t){const t=[],a=[];let l=0,c=0,u=0;for(const e of h){const{shape:n,fill:i,stroke:o,font:s,offset:h}=e;l+=o&&o.width||0;const f=S(i),d=A(o),g="text"===n.type?N(n,s):null;r.push(G(f)),t.push(I(n,f.fill,d,g)),a.push(T(n)),h&&(c+=h[0],u+=h[1])}const d=R(V(a),e,n,l,null==i?void 0:i.scale,null==i?void 0:i.rotation,null==i?void 0:i.useRotationSize,[c,u],s);o.push((0,f.u)("g",{transform:d},t))}return null!=i&&i.useRotationSize&&null!=i&&i.rotation&&(e=z(null==i?void 0:i.rotation,e),n=z(null==i?void 0:i.rotation,n)),l&&(e=s[0],n=s[1]),(0,f.u)("svg",{xmlns:d,width:e,height:n,style:"display: block;"},l,(0,f.u)("defs",null,r),l?(0,f.u)("g",{filter:`url(#bloom${a})`},o):o)}var L=n(2354);const O=(0,s.E)();function P(t,e,n){const i=Math.ceil(e[0]),r=Math.ceil(e[1]);if(!t.some((t=>!!t.length)))return null;const o=n&&n.node||document.createElement("div");return null!=n.opacity&&(o.style.opacity=n.opacity.toString()),null!=n.effectView&&(o.style.filter=(0,L.wJ)(n.effectView)),O.append(o,_.bind(null,t,i,r,n)),o}function q(t,e){t=Math.ceil(t),e=Math.ceil(e);const n=document.createElement("canvas");n.width=t,n.height=e,n.style.width=t+"px",n.style.height=e+"px";const i=n.getContext("2d");return i.clearRect(0,0,t,e),i}function J(t,e,n){return t?(0,r["default"])(t,{responseType:"image"}).then((t=>{const i=t.data,r=i.width,o=i.height,a=r/o;let l=e;if(n){const t=Math.max(r,o);l=Math.min(l,t)}return{image:i,width:a<=1?Math.ceil(l*a):l,height:a<=1?l:Math.ceil(l/a)}})):Promise.reject(new a.Z("renderUtils: imageDataSize","href not provided."))}function H(t,e){return!(!t||"ignore"===e)&&("multiply"!==e||255!==t.r||255!==t.g||255!==t.b||1!==t.a)}function Q(t,e,n,i,r){switch(r){case"multiply":t[e+0]*=n[0],t[e+1]*=n[1],t[e+2]*=n[2],t[e+3]*=n[3];break;default:{const r=(0,o._Y)({r:t[e+0],g:t[e+1],b:t[e+2]});r.h=i.h,r.s=i.s,r.v=r.v/100*i.v;const a=(0,o.xr)(r);t[e+0]=a.r,t[e+1]=a.g,t[e+2]=a.b,t[e+3]*=n[3];break}}}function K(t,e,n,r,a){return J(t,e,a).then((a=>{const s=a.width?a.width:e,c=a.height?a.height:e;if(a.image&&H(n,r)){let e=a.image.width,i=a.image.height;(0,l.Z)("edge")&&/\.svg$/i.test(t)&&(e-=1,i-=1);const h=q(s,c);h.drawImage(a.image,0,0,e,i,0,0,s,c);const u=h.getImageData(0,0,s,c),f=[n.r/255,n.g/255,n.b/255,n.a],d=(0,o._Y)(n);for(let t=0;t<u.data.length;t+=4)Q(u.data,t,f,d,r);h.putImageData(u,0,0),t=h.canvas.toDataURL("image/png")}else{const e=i.id&&i.id.findCredential(t);if(e&&e.token){const n=-1===t.indexOf("?")?"?":"&";t=`${t}${n}token=${e.token}`}}return{url:t,width:s,height:c}})).catch((function(){return{url:t,width:e,height:e}}))}}}]);
//# sourceMappingURL=6684.616afe66.js.map