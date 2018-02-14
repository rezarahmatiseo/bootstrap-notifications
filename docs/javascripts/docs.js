//
// Scripts
// -------------------

// Required libraries
// f.e. require('../../vendor/jquery/jquery.min');


/*!

Holder - client side image placeholders
Version 2.9.0+igxoe
© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/
!function(t){if(t.document){var e=t.document;e.querySelectorAll||(e.querySelectorAll=function(r){var n,i=e.createElement("style"),o=[];for(e.documentElement.firstChild.appendChild(i),e._qsa=[],i.styleSheet.cssText=r+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",t.scrollBy(0,0),i.parentNode.removeChild(i);e._qsa.length;)n=e._qsa.shift(),n.style.removeAttribute("x-qsa"),o.push(n);return e._qsa=null,o}),e.querySelector||(e.querySelector=function(t){var r=e.querySelectorAll(t);return r.length?r[0]:null}),e.getElementsByClassName||(e.getElementsByClassName=function(t){return t=String(t).replace(/^|\s+/g,"."),e.querySelectorAll(t)}),Object.keys||(Object.keys=function(t){if(t!==Object(t))throw TypeError("Object.keys called on non-object");var e,r=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(e);return r}),Array.prototype.forEach||(Array.prototype.forEach=function(t){if(void 0===this||null===this)throw TypeError();var e=Object(this),r=e.length>>>0;if("function"!=typeof t)throw TypeError();var n,i=arguments[1];for(n=0;r>n;n++)n in e&&t.call(i,e[n],n,e)}),function(t){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.atob=t.atob||function(t){t=String(t);var r,n=0,i=[],o=0,a=0;if(t=t.replace(/\s/g,""),t.length%4===0&&(t=t.replace(/=+$/,"")),t.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(t))throw Error("InvalidCharacterError");for(;n<t.length;)r=e.indexOf(t.charAt(n)),o=o<<6|r,a+=6,24===a&&(i.push(String.fromCharCode(o>>16&255)),i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o)),a=0,o=0),n+=1;return 12===a?(o>>=4,i.push(String.fromCharCode(255&o))):18===a&&(o>>=2,i.push(String.fromCharCode(o>>8&255)),i.push(String.fromCharCode(255&o))),i.join("")},t.btoa=t.btoa||function(t){t=String(t);var r,n,i,o,a,s,l,h=0,u=[];if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError");for(;h<t.length;)r=t.charCodeAt(h++),n=t.charCodeAt(h++),i=t.charCodeAt(h++),o=r>>2,a=(3&r)<<4|n>>4,s=(15&n)<<2|i>>6,l=63&i,h===t.length+2?(s=64,l=64):h===t.length+1&&(l=64),u.push(e.charAt(o),e.charAt(a),e.charAt(s),e.charAt(l));return u.join("")}}(t),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(t){var e=this.__proto__||this.constructor.prototype;return t in this&&(!(t in e)||e[t]!==this[t])}),function(){if("performance"in t==!1&&(t.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in t.performance==!1){var e=Date.now();performance.timing&&performance.timing.navigationStart&&(e=performance.timing.navigationStart),t.performance.now=function(){return Date.now()-e}}}(),t.requestAnimationFrame||(t.webkitRequestAnimationFrame?!function(t){t.requestAnimationFrame=function(e){return webkitRequestAnimationFrame(function(){e(t.performance.now())})},t.cancelAnimationFrame=webkitCancelAnimationFrame}(t):t.mozRequestAnimationFrame?!function(t){t.requestAnimationFrame=function(e){return mozRequestAnimationFrame(function(){e(t.performance.now())})},t.cancelAnimationFrame=mozCancelAnimationFrame}(t):!function(t){t.requestAnimationFrame=function(e){return t.setTimeout(e,1e3/60)},t.cancelAnimationFrame=t.clearTimeout}(t))}}(this),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Holder=e():t.Holder=e()}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){(function(e){function n(t,e,r,n){var a=i(r.substr(r.lastIndexOf(t.domain)),t);a&&o({mode:null,el:n,flags:a,engineSettings:e})}function i(t,e){var r={theme:T(U.settings.themes.gray,null),stylesheets:e.stylesheets,instanceOptions:e},n=t.indexOf("?"),i=[t];-1!==n&&(i=[t.slice(0,n),t.slice(n+1)]);var o=i[0].split("/");r.holderURL=t;var a=o[1],s=a.match(/([\d]+p?)x([\d]+p?)/);if(!s)return!1;if(r.fluid=-1!==a.indexOf("p"),r.dimensions={width:s[1].replace("p","%"),height:s[2].replace("p","%")},2===i.length){var l=v.parse(i[1]);if(l.bg&&(r.theme.bg=w.parseColor(l.bg)),l.fg&&(r.theme.fg=w.parseColor(l.fg)),l.bg&&!l.fg&&(r.autoFg=!0),l.theme&&r.instanceOptions.themes.hasOwnProperty(l.theme)&&(r.theme=T(r.instanceOptions.themes[l.theme],null)),l.text&&(r.text=l.text),l.textmode&&(r.textmode=l.textmode),l.size&&(r.size=l.size),l.font&&(r.font=l.font),l.align&&(r.align=l.align),l.lineWrap&&(r.lineWrap=l.lineWrap),r.nowrap=w.truthy(l.nowrap),r.auto=w.truthy(l.auto),r.outline=w.truthy(l.outline),w.truthy(l.random)){U.vars.cache.themeKeys=U.vars.cache.themeKeys||Object.keys(r.instanceOptions.themes);var h=U.vars.cache.themeKeys[0|Math.random()*U.vars.cache.themeKeys.length];r.theme=T(r.instanceOptions.themes[h],null)}}return r}function o(t){var e=t.mode,r=t.el,n=t.flags,i=t.engineSettings,o=n.dimensions,s=n.theme,l=o.width+"x"+o.height;e=null==e?n.fluid?"fluid":"image":e;var f=/holder_([a-z]+)/g,c=!1;if(null!=n.text&&(s.text=n.text,"object"===r.nodeName.toLowerCase())){for(var d=s.text.split("\\n"),p=0;p<d.length;p++)d[p]=w.encodeHtmlEntity(d[p]);s.text=d.join("\\n")}if(s.text){var g=s.text.match(f);null!==g&&g.forEach(function(t){"holder_dimensions"===t&&(s.text=s.text.replace(t,l))})}var m=n.holderURL,v=T(i,null);if(n.font&&(s.font=n.font,!v.noFontFallback&&"img"===r.nodeName.toLowerCase()&&U.setup.supportsCanvas&&"svg"===v.renderer&&(v=T(v,{renderer:"canvas"}))),n.font&&"canvas"==v.renderer&&(v.reRender=!0),"background"==e)null==r.getAttribute("data-background-src")&&E.setAttr(r,{"data-background-src":m});else{var y={};y[U.vars.dataAttr]=m,E.setAttr(r,y)}n.theme=s,r.holderData={flags:n,engineSettings:v},("image"==e||"fluid"==e)&&E.setAttr(r,{alt:s.text?c?s.text:s.text+" ["+l+"]":l});var b={mode:e,el:r,holderSettings:{dimensions:o,theme:s,flags:n},engineSettings:v};"image"==e?(n.auto||(r.style.width=o.width+"px",r.style.height=o.height+"px"),"html"==v.renderer?r.style.backgroundColor=s.background:(a(b),"exact"==n.textmode&&(r.holderData.resizeUpdate=!0,U.vars.resizableImages.push(r),h(r)))):"background"==e&&"html"!=v.renderer?a(b):"fluid"==e&&(r.holderData.resizeUpdate=!0,"%"==o.height.slice(-1)?r.style.height=o.height:null!=n.auto&&n.auto||(r.style.height=o.height+"px"),"%"==o.width.slice(-1)?r.style.width=o.width:null!=n.auto&&n.auto||(r.style.width=o.width+"px"),("inline"==r.style.display||""===r.style.display||"none"==r.style.display)&&(r.style.display="block"),u(r),"html"==v.renderer?r.style.backgroundColor=s.background:(U.vars.resizableImages.push(r),h(r)))}function a(t){function r(){var e=null;switch(l.renderer){case"canvas":e=I(u,t);break;case"svg":e=S(u,t);break;default:throw"Holder: invalid renderer: "+l.renderer}return e}var n=null,i=t.mode,o=t.el,a=t.holderSettings,l=t.engineSettings;switch(l.renderer){case"svg":if(!U.setup.supportsSVG)return;break;case"canvas":if(!U.setup.supportsCanvas)return;break;default:return}var h={width:a.dimensions.width,height:a.dimensions.height,theme:a.theme,flags:a.flags},u=s(h);if(n=r(),null==n)throw"Holder: couldn't render placeholder";"background"==i?(o.style.backgroundImage="url("+n+")",o.style.backgroundSize=h.width+"px "+h.height+"px"):("img"===o.nodeName.toLowerCase()?E.setAttr(o,{src:n}):"object"===o.nodeName.toLowerCase()&&E.setAttr(o,{data:n,type:"image/svg+xml"}),l.reRender&&e.setTimeout(function(){var t=r();if(null==t)throw"Holder: couldn't render placeholder";"img"===o.nodeName.toLowerCase()?E.setAttr(o,{src:t}):"object"===o.nodeName.toLowerCase()&&E.setAttr(o,{data:t,type:"image/svg+xml"})},150)),E.setAttr(o,{"data-holder-rendered":!0})}function s(t){function e(t,e,r,n){e.width=r,e.height=n,t.width=Math.max(t.width,e.width),t.height+=e.height}var r=U.defaults.size;switch(parseFloat(t.theme.size)?r=t.theme.size:parseFloat(t.flags.size)&&(r=t.flags.size),t.font={family:t.theme.font?t.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:l(t.width,t.height,r,U.defaults.scale),units:t.theme.units?t.theme.units:U.defaults.units,weight:t.theme.fontweight?t.theme.fontweight:"bold"},t.text=t.theme.text||Math.floor(t.width)+"x"+Math.floor(t.height),t.noWrap=t.theme.nowrap||t.flags.nowrap,t.align=t.theme.align||t.flags.align||"center",t.flags.textmode){case"literal":t.text=t.flags.dimensions.width+"x"+t.flags.dimensions.height;break;case"exact":if(!t.flags.exactDimensions)break;t.text=Math.floor(t.flags.exactDimensions.width)+"x"+Math.floor(t.flags.exactDimensions.height)}var n=t.flags.lineWrap||U.setup.lineWrapRatio,i=t.width*n,o=i,a=new y({width:t.width,height:t.height}),s=a.Shape,h=new s.Rect("holderBg",{fill:t.theme.bg});if(h.resize(t.width,t.height),a.root.add(h),t.flags.outline){var u=new A(h.properties.fill);u=u.lighten(u.lighterThan("7f7f7f")?-.1:.1),h.properties.outline={fill:u.toHex(!0),width:2}}var f=t.theme.fg;if(t.flags.autoFg){var c=new A(h.properties.fill),d=new A("fff"),p=new A("000",{alpha:.285714});f=c.blendAlpha(c.lighterThan("7f7f7f")?p:d).toHex(!0)}var g=new s.Group("holderTextGroup",{text:t.text,align:t.align,font:t.font,fill:f});g.moveTo(null,null,1),a.root.add(g);var m=g.textPositionData=L(a);if(!m)throw"Holder: staging fallback not supported yet.";g.properties.leading=m.boundingBox.height;var v=null,w=null;if(m.lineCount>1){var b,E=0,x=0,S=0;w=new s.Group("line"+S),("left"===t.align||"right"===t.align)&&(o=t.width*(1-2*(1-n)));for(var I=0;I<m.words.length;I++){var T=m.words[I];v=new s.Text(T.text);var B="\\n"==T.text;!t.noWrap&&(E+T.width>=o||B===!0)&&(e(g,w,E,g.properties.leading),g.add(w),E=0,x+=g.properties.leading,S+=1,w=new s.Group("line"+S),w.y=x),B!==!0&&(v.moveTo(E,0),E+=m.spaceWidth+T.width,w.add(v))}if(e(g,w,E,g.properties.leading),g.add(w),"left"===t.align)g.moveTo(t.width-i,null,null);else if("right"===t.align){for(b in g.children)w=g.children[b],w.moveTo(t.width-w.width,null,null);g.moveTo(0-(t.width-i),null,null)}else{for(b in g.children)w=g.children[b],w.moveTo((g.width-w.width)/2,null,null);g.moveTo((t.width-g.width)/2,null,null)}g.moveTo(null,(t.height-g.height)/2,null),(t.height-g.height)/2<0&&g.moveTo(null,0,null)}else v=new s.Text(t.text),w=new s.Group("line0"),w.add(v),g.add(w),"left"===t.align?g.moveTo(t.width-i,null,null):"right"===t.align?g.moveTo(0-(t.width-i),null,null):g.moveTo((t.width-m.boundingBox.width)/2,null,null),g.moveTo(null,(t.height-m.boundingBox.height)/2,null);return a}function l(t,e,r,n){var i=parseInt(t,10),o=parseInt(e,10),a=Math.max(i,o),s=Math.min(i,o),l=.8*Math.min(s,a*n);return Math.round(Math.max(r,l))}function h(t){var e;e=null==t||null==t.nodeType?U.vars.resizableImages:[t];for(var r=0,n=e.length;n>r;r++){var i=e[r];if(i.holderData){var o=i.holderData.flags,s=B(i);if(s){if(!i.holderData.resizeUpdate)continue;if(o.fluid&&o.auto){var l=i.holderData.fluidConfig;switch(l.mode){case"width":s.height=s.width/l.ratio;break;case"height":s.width=s.height*l.ratio}}var h={mode:"image",holderSettings:{dimensions:s,theme:o.theme,flags:o},el:i,engineSettings:i.holderData.engineSettings};"exact"==o.textmode&&(o.exactDimensions=s,h.holderSettings.dimensions=o.dimensions),a(h)}else d(i)}}}function u(t){if(t.holderData){var e=B(t);if(e){var r=t.holderData.flags,n={fluidHeight:"%"==r.dimensions.height.slice(-1),fluidWidth:"%"==r.dimensions.width.slice(-1),mode:null,initialDimensions:e};n.fluidWidth&&!n.fluidHeight?(n.mode="width",n.ratio=n.initialDimensions.width/parseFloat(r.dimensions.height)):!n.fluidWidth&&n.fluidHeight&&(n.mode="height",n.ratio=parseFloat(r.dimensions.width)/n.initialDimensions.height),t.holderData.fluidConfig=n}else d(t)}}function f(){var t,r=[],n=Object.keys(U.vars.invisibleImages);n.forEach(function(e){t=U.vars.invisibleImages[e],B(t)&&"img"==t.nodeName.toLowerCase()&&(r.push(t),delete U.vars.invisibleImages[e])}),r.length&&C.run({images:r}),setTimeout(function(){e.requestAnimationFrame(f)},10)}function c(){U.vars.visibilityCheckStarted||(e.requestAnimationFrame(f),U.vars.visibilityCheckStarted=!0)}function d(t){t.holderData.invisibleId||(U.vars.invisibleId+=1,U.vars.invisibleImages["i"+U.vars.invisibleId]=t,t.holderData.invisibleId=U.vars.invisibleId)}function p(t){U.vars.debounceTimer||t.call(this),U.vars.debounceTimer&&e.clearTimeout(U.vars.debounceTimer),U.vars.debounceTimer=e.setTimeout(function(){U.vars.debounceTimer=null,t.call(this)},U.setup.debounce)}function g(){p(function(){h(null)})}var m=r(2),v=r(3),y=r(10),w=r(11),b=r(12),E=r(13),A=r(14),x=r(15),S=r(16),I=r(19),T=w.extend,B=w.dimensionCheck,R=x.svg_ns,C={version:x.version,addTheme:function(t,e){return null!=t&&null!=e&&(U.settings.themes[t]=e),delete U.vars.cache.themeKeys,this},addImage:function(t,e){var r=E.getNodeArray(e);return r.forEach(function(e){var r=E.newEl("img"),n={};n[U.setup.dataAttr]=t,E.setAttr(r,n),e.appendChild(r)}),this},setResizeUpdate:function(t,e){t.holderData&&(t.holderData.resizeUpdate=!!e,t.holderData.resizeUpdate&&h(t))},run:function(t){t=t||{};var r={},a=T(U.settings,t);U.vars.preempted=!0,U.vars.dataAttr=a.dataAttr||U.setup.dataAttr,r.renderer=a.renderer?a.renderer:U.setup.renderer,-1===U.setup.renderers.join(",").indexOf(r.renderer)&&(r.renderer=U.setup.supportsSVG?"svg":U.setup.supportsCanvas?"canvas":"html");var s=E.getNodeArray(a.images),l=E.getNodeArray(a.bgnodes),h=E.getNodeArray(a.stylenodes),u=E.getNodeArray(a.objects);return r.stylesheets=[],r.svgXMLStylesheet=!0,r.noFontFallback=a.noFontFallback?a.noFontFallback:!1,h.forEach(function(t){if(t.attributes.rel&&t.attributes.href&&"stylesheet"==t.attributes.rel.value){var e=t.attributes.href.value,n=E.newEl("a");n.href=e;var i=n.protocol+"//"+n.host+n.pathname+n.search;r.stylesheets.push(i)}}),l.forEach(function(t){if(e.getComputedStyle){var n=e.getComputedStyle(t,null).getPropertyValue("background-image"),s=t.getAttribute("data-background-src"),l=s||n,h=null,u=a.domain+"/",f=l.indexOf(u);if(0===f)h=l;else if(1===f&&"?"===l[0])h=l.slice(1);else{var c=l.substr(f).match(/([^\"]*)"?\)/);if(null!==c)h=c[1];else if(0===l.indexOf("url("))throw"Holder: unable to parse background URL: "+l}if(null!=h){var d=i(h,a);d&&o({mode:"background",el:t,flags:d,engineSettings:r})}}}),u.forEach(function(t){var e={};try{e.data=t.getAttribute("data"),e.dataSrc=t.getAttribute(U.vars.dataAttr)}catch(i){}var o=null!=e.data&&0===e.data.indexOf(a.domain),s=null!=e.dataSrc&&0===e.dataSrc.indexOf(a.domain);o?n(a,r,e.data,t):s&&n(a,r,e.dataSrc,t)}),s.forEach(function(t){var e={};try{e.src=t.getAttribute("src"),e.dataSrc=t.getAttribute(U.vars.dataAttr),e.rendered=t.getAttribute("data-holder-rendered")}catch(i){}var o=null!=e.src,s=null!=e.dataSrc&&0===e.dataSrc.indexOf(a.domain),l=null!=e.rendered&&"true"==e.rendered;o?0===e.src.indexOf(a.domain)?n(a,r,e.src,t):s&&(l?n(a,r,e.dataSrc,t):!function(t,e,r,i,o){w.imageExists(t,function(t){t||n(e,r,i,o)})}(e.src,a,r,e.dataSrc,t)):s&&n(a,r,e.dataSrc,t)}),this}},U={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",themes:{gray:{bg:"#EEEEEE",fg:"#AAAAAA"},social:{bg:"#3a5a97",fg:"#FFFFFF"},industrial:{bg:"#434A52",fg:"#C2F200"},sky:{bg:"#0D8FDB",fg:"#FFFFFF"},vine:{bg:"#39DBAC",fg:"#1E292C"},lava:{bg:"#F8591A",fg:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16}},L=function(){var t=null,e=null,r=null;return function(n){var i=n.root;if(U.setup.supportsSVG){var o=!1,a=function(t){return document.createTextNode(t)};(null==t||t.parentNode!==document.body)&&(o=!0),t=b.initSVG(t,i.properties.width,i.properties.height),t.style.display="block",o&&(e=E.newEl("text",R),r=a(null),E.setAttr(e,{x:0}),e.appendChild(r),t.appendChild(e),document.body.appendChild(t),t.style.visibility="hidden",t.style.position="absolute",t.style.top="-100%",t.style.left="-100%");var s=i.children.holderTextGroup,l=s.properties;E.setAttr(e,{y:l.font.size,style:w.cssProps({"font-weight":l.font.weight,"font-size":l.font.size+l.font.units,"font-family":l.font.family})}),r.nodeValue=l.text;var h=e.getBBox(),u=Math.ceil(h.width/i.properties.width),f=l.text.split(" "),c=l.text.match(/\\n/g);u+=null==c?0:c.length,r.nodeValue=l.text.replace(/[ ]+/g,"");var d=e.getComputedTextLength(),p=h.width-d,g=Math.round(p/Math.max(1,f.length-1)),m=[];if(u>1){r.nodeValue="";for(var v=0;v<f.length;v++)if(0!==f[v].length){r.nodeValue=w.decodeHtmlEntity(f[v]);var y=e.getBBox();m.push({text:f[v],width:y.width})}}return t.style.display="none",{spaceWidth:g,lineCount:u,boundingBox:h,words:m}}return!1}}();for(var P in U.flags)U.flags.hasOwnProperty(P)&&(U.flags[P].match=function(t){return t.match(this.regex)});U.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,dataAttr:"data-src",renderers:["html","canvas","svg"]},U.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{}},function(){var t=E.newEl("canvas");t.getContext&&-1!=t.toDataURL("image/png").indexOf("data:image/png")&&(U.setup.renderer="canvas",U.setup.supportsCanvas=!0),document.createElementNS&&document.createElementNS(R,"svg").createSVGRect&&(U.setup.renderer="svg",U.setup.supportsSVG=!0)}(),c(),m&&m(function(){U.vars.preempted||C.run(),e.addEventListener?(e.addEventListener("resize",g,!1),e.addEventListener("orientationchange",g,!1)):e.attachEvent("onresize",g),"object"==typeof e.Turbolinks&&e.document.addEventListener("page:change",function(){C.run()})}),t.exports=C}).call(e,function(){return this}())},function(t,e){function r(t){function e(t){if(!E){if(!a.body)return i(e);for(E=!0;t=A.shift();)i(t)}}function r(t){(w||t.type===l||a[c]===f)&&(n(),e())}function n(){w?(a[y](m,r,h),t[y](l,r,h)):(a[p](v,r),t[p](u,r))}function i(t,e){setTimeout(t,+e>=0?e:1)}function o(t){E?i(t):A.push(t)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function S(){document.removeEventListener("DOMContentLoaded",S,!1),document.readyState="complete"},!1),document.readyState="loading");var a=t.document,s=a.documentElement,l="load",h=!1,u="on"+l,f="complete",c="readyState",d="attachEvent",p="detachEvent",g="addEventListener",m="DOMContentLoaded",v="onreadystatechange",y="removeEventListener",w=g in a,b=h,E=h,A=[];if(a[c]===f)i(e);else if(w)a[g](m,r,h),t[g](l,r,h);else{a[d](v,r),t[d](u,r);try{b=null==t.frameElement&&s}catch(x){}b&&b.doScroll&&!function I(){if(!E){try{b.doScroll("left")}catch(t){return i(I,50)}n(),e()}}()}return o.version="1.4.0",o.isReady=function(){return E},o}t.exports="undefined"!=typeof window&&r(window)},function(t,e,r){var n=encodeURIComponent,i=decodeURIComponent,o=r(4),a=r(5),s=/(\w+)\[(\d+)\]/,l=/\w+\.\w+/;e.parse=function(t){if("string"!=typeof t)return{};if(t=o(t),""===t)return{};"?"===t.charAt(0)&&(t=t.slice(1));for(var e={},r=t.split("&"),n=0;n<r.length;n++){var a,h,u,f=r[n].split("="),c=i(f[0]);if(a=s.exec(c))e[a[1]]=e[a[1]]||[],e[a[1]][a[2]]=i(f[1]);else if(a=l.test(c)){for(a=c.split("."),h=e;a.length;)if(u=a.shift(),u.length){if(h[u]){if(h[u]&&"object"!=typeof h[u])break}else h[u]={};a.length||(h[u]=i(f[1])),h=h[u]}}else e[f[0]]=null==f[1]?"":i(f[1])}return e},e.stringify=function(t){if(!t)return"";var e=[];for(var r in t){var i=t[r];if("array"!=a(i))e.push(n(r)+"="+n(t[r]));else for(var o=0;o<i.length;++o)e.push(n(r+"["+o+"]")+"="+n(i[o]))}return e.join("&")}},function(t,e){function r(t){return t.replace(/^\s*|\s*$/g,"")}e=t.exports=r,e.left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}},function(t,e,r){(function(e){var r=Object.prototype.toString;t.exports=function(t){switch(r.call(t)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===t?"null":void 0===t?"undefined":t!==t?"nan":t&&1===t.nodeType?"element":"undefined"!=typeof e&&e.isBuffer(t)?"buffer":(t=t.valueOf?t.valueOf():Object.prototype.valueOf.apply(t),typeof t)}}).call(e,r(6).Buffer)},function(t,e,r){(function(t,n){function i(){function t(){}try{var e=new Uint8Array(1);return e.foo=function(){return 42},e.constructor=t,42===e.foo()&&e.constructor===t&&"function"==typeof e.subarray&&0===e.subarray(1,1).byteLength}catch(r){return!1}}function o(){return t.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function t(e){return this instanceof t?(this.length=0,this.parent=void 0,"number"==typeof e?a(this,e):"string"==typeof e?s(this,e,arguments.length>1?arguments[1]:"utf8"):l(this,e)):arguments.length>1?new t(e,arguments[1]):new t(e)}function a(e,r){if(e=g(e,0>r?0:0|m(r)),!t.TYPED_ARRAY_SUPPORT)for(var n=0;r>n;n++)e[n]=0;return e}function s(t,e,r){("string"!=typeof r||""===r)&&(r="utf8");var n=0|y(e,r);return t=g(t,n),t.write(e,r),t}function l(e,r){if(t.isBuffer(r))return h(e,r);if(J(r))return u(e,r);if(null==r)throw new TypeError("must start with number, buffer, array or string");if("undefined"!=typeof ArrayBuffer){if(r.buffer instanceof ArrayBuffer)return f(e,r);if(r instanceof ArrayBuffer)return c(e,r)}return r.length?d(e,r):p(e,r)}function h(t,e){var r=0|m(e.length);return t=g(t,r),e.copy(t,0,0,r),t}function u(t,e){var r=0|m(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function f(t,e){var r=0|m(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function c(e,r){return t.TYPED_ARRAY_SUPPORT?(r.byteLength,e=t._augment(new Uint8Array(r))):e=f(e,new Uint8Array(r)),e}function d(t,e){var r=0|m(e.length);t=g(t,r);for(var n=0;r>n;n+=1)t[n]=255&e[n];return t}function p(t,e){var r,n=0;"Buffer"===e.type&&J(e.data)&&(r=e.data,n=0|m(r.length)),t=g(t,n);for(var i=0;n>i;i+=1)t[i]=255&r[i];return t}function g(e,r){t.TYPED_ARRAY_SUPPORT?(e=t._augment(new Uint8Array(r)),e.__proto__=t.prototype):(e.length=r,e._isBuffer=!0);var n=0!==r&&r<=t.poolSize>>>1;return n&&(e.parent=K),e}function m(t){if(t>=o())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o().toString(16)+" bytes");return 0|t}function v(e,r){if(!(this instanceof v))return new v(e,r);var n=new t(e,r);return delete n.parent,n}function y(t,e){"string"!=typeof t&&(t=""+t);var r=t.length;if(0===r)return 0;for(var n=!1;;)switch(e){case"ascii":case"binary":case"raw":case"raws":return r;case"utf8":case"utf-8":return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return V(t).length;default:if(n)return q(t).length;e=(""+e).toLowerCase(),n=!0}}function w(t,e,r){var n=!1;if(e=0|e,r=void 0===r||r===1/0?this.length:0|r,t||(t="utf8"),0>e&&(e=0),r>this.length&&(r=this.length),e>=r)return"";for(;;)switch(t){case"hex":return L(this,e,r);case"utf8":case"utf-8":return B(this,e,r);case"ascii":return C(this,e,r);case"binary":return U(this,e,r);case"base64":return T(this,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,e,r);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,e,r,n){r=Number(r)||0;var i=t.length-r;n?(n=Number(n),n>i&&(n=i)):n=i;var o=e.length;if(o%2!==0)throw new Error("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;n>a;a++){var s=parseInt(e.substr(2*a,2),16);if(isNaN(s))throw new Error("Invalid hex string");t[r+a]=s}return a}function E(t,e,r,n){return W(q(e,t.length-r),t,r,n)}function A(t,e,r,n){return W(H(e),t,r,n)}function x(t,e,r,n){return A(t,e,r,n)}function S(t,e,r,n){return W(V(e),t,r,n)}function I(t,e,r,n){return W(G(e,t.length-r),t,r,n)}function T(t,e,r){return 0===e&&r===t.length?$.fromByteArray(t):$.fromByteArray(t.slice(e,r))}function B(t,e,r){r=Math.min(t.length,r);for(var n=[],i=e;r>i;){var o=t[i],a=null,s=o>239?4:o>223?3:o>191?2:1;if(r>=i+s){var l,h,u,f;switch(s){case 1:128>o&&(a=o);break;case 2:l=t[i+1],128===(192&l)&&(f=(31&o)<<6|63&l,f>127&&(a=f));break;case 3:l=t[i+1],h=t[i+2],128===(192&l)&&128===(192&h)&&(f=(15&o)<<12|(63&l)<<6|63&h,f>2047&&(55296>f||f>57343)&&(a=f));break;case 4:l=t[i+1],h=t[i+2],u=t[i+3],128===(192&l)&&128===(192&h)&&128===(192&u)&&(f=(15&o)<<18|(63&l)<<12|(63&h)<<6|63&u,f>65535&&1114112>f&&(a=f))}}null===a?(a=65533,s=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=s}return R(n)}function R(t){var e=t.length;if(Z>=e)return String.fromCharCode.apply(String,t);for(var r="",n=0;e>n;)r+=String.fromCharCode.apply(String,t.slice(n,n+=Z));return r}function C(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(127&t[i]);return n}function U(t,e,r){var n="";r=Math.min(t.length,r);for(var i=e;r>i;i++)n+=String.fromCharCode(t[i]);return n}function L(t,e,r){var n=t.length;(!e||0>e)&&(e=0),(!r||0>r||r>n)&&(r=n);for(var i="",o=e;r>o;o++)i+=Y(t[o]);return i}function P(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function _(t,e,r){if(t%1!==0||0>t)throw new RangeError("offset is not uint");if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function O(e,r,n,i,o,a){if(!t.isBuffer(e))throw new TypeError("buffer must be a Buffer instance");if(r>o||a>r)throw new RangeError("value is out of bounds");if(n+i>e.length)throw new RangeError("index out of range")}function D(t,e,r,n){0>e&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-r,2);o>i;i++)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function k(t,e,r,n){0>e&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-r,4);o>i;i++)t[r+i]=e>>>8*(n?i:3-i)&255}function M(t,e,r,n,i,o){if(e>i||o>e)throw new RangeError("value is out of bounds");if(r+n>t.length)throw new RangeError("index out of range");if(0>r)throw new RangeError("index out of range")}function F(t,e,r,n,i){return i||M(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),X.write(t,e,r,n,23,4),r+4}function j(t,e,r,n,i){return i||M(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),X.write(t,e,r,n,52,8),r+8}function z(t){if(t=N(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function N(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function Y(t){return 16>t?"0"+t.toString(16):t.toString(16)}function q(t,e){e=e||1/0;for(var r,n=t.length,i=null,o=[],a=0;n>a;a++){if(r=t.charCodeAt(a),r>55295&&57344>r){if(!i){if(r>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(e-=3)>-1&&o.push(239,191,189);continue}i=r;continue}if(56320>r){(e-=3)>-1&&o.push(239,191,189),i=r;continue}r=i-55296<<10|r-56320|65536}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,128>r){if((e-=1)<0)break;o.push(r)}else if(2048>r){if((e-=2)<0)break;o.push(r>>6|192,63&r|128)}else if(65536>r){if((e-=3)<0)break;o.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(1114112>r))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return o}function H(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e}function G(t,e){for(var r,n,i,o=[],a=0;a<t.length&&!((e-=2)<0);a++)r=t.charCodeAt(a),n=r>>8,i=r%256,o.push(i),o.push(n);return o}function V(t){return $.toByteArray(z(t))}function W(t,e,r,n){for(var i=0;n>i&&!(i+r>=e.length||i>=t.length);i++)e[i+r]=t[i];return i}var $=r(7),X=r(8),J=r(9);e.Buffer=t,e.SlowBuffer=v,e.INSPECT_MAX_BYTES=50,t.poolSize=8192;var K={};t.TYPED_ARRAY_SUPPORT=void 0!==n.TYPED_ARRAY_SUPPORT?n.TYPED_ARRAY_SUPPORT:i(),t.TYPED_ARRAY_SUPPORT&&(t.prototype.__proto__=Uint8Array.prototype,t.__proto__=Uint8Array),t.isBuffer=function(t){return!(null==t||!t._isBuffer)},t.compare=function(e,r){if(!t.isBuffer(e)||!t.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(e===r)return 0;for(var n=e.length,i=r.length,o=0,a=Math.min(n,i);a>o&&e[o]===r[o];)++o;return o!==a&&(n=e[o],i=r[o]),i>n?-1:n>i?1:0},t.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},t.concat=function(e,r){if(!J(e))throw new TypeError("list argument must be an Array of Buffers.");if(0===e.length)return new t(0);var n;if(void 0===r)for(r=0,n=0;n<e.length;n++)r+=e[n].length;var i=new t(r),o=0;for(n=0;n<e.length;n++){var a=e[n];a.copy(i,o),o+=a.length}return i},t.byteLength=y,t.prototype.length=void 0,t.prototype.parent=void 0,t.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?B(this,0,t):w.apply(this,arguments)},t.prototype.equals=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:0===t.compare(this,e)},t.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},t.prototype.compare=function(e){if(!t.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?0:t.compare(this,e)},t.prototype.indexOf=function(e,r){function n(t,e,r){for(var n=-1,i=0;r+i<t.length;i++)if(t[r+i]===e[-1===n?0:i-n]){if(-1===n&&(n=i),i-n+1===e.length)return r+n}else n=-1;return-1}if(r>2147483647?r=2147483647:-2147483648>r&&(r=-2147483648),r>>=0,0===this.length)return-1;if(r>=this.length)return-1;if(0>r&&(r=Math.max(this.length+r,0)),"string"==typeof e)return 0===e.length?-1:String.prototype.indexOf.call(this,e,r);if(t.isBuffer(e))return n(this,e,r);if("number"==typeof e)return t.TYPED_ARRAY_SUPPORT&&"function"===Uint8Array.prototype.indexOf?Uint8Array.prototype.indexOf.call(this,e,r):n(this,[e],r);throw new TypeError("val must be string, number or Buffer")},t.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},t.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},t.prototype.write=function(t,e,r,n){if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e=0|e,isFinite(r)?(r=0|r,void 0===n&&(n="utf8")):(n=r,r=void 0);else{var i=n;n=e,e=0|r,r=i}var o=this.length-e;if((void 0===r||r>o)&&(r=o),t.length>0&&(0>r||0>e)||e>this.length)throw new RangeError("attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return b(this,t,e,r);case"utf8":case"utf-8":return E(this,t,e,r);case"ascii":return A(this,t,e,r);case"binary":return x(this,t,e,r);case"base64":return S(this,t,e,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,t,e,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},t.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Z=4096;t.prototype.slice=function(e,r){var n=this.length;e=~~e,r=void 0===r?n:~~r,0>e?(e+=n,0>e&&(e=0)):e>n&&(e=n),0>r?(r+=n,0>r&&(r=0)):r>n&&(r=n),e>r&&(r=e);var i;if(t.TYPED_ARRAY_SUPPORT)i=t._augment(this.subarray(e,r));else{var o=r-e;i=new t(o,void 0);for(var a=0;o>a;a++)i[a]=this[a+e]}return i.length&&(i.parent=this.parent||this),i},t.prototype.readUIntLE=function(t,e,r){t=0|t,e=0|e,r||_(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return n},t.prototype.readUIntBE=function(t,e,r){t=0|t,e=0|e,r||_(t,e,this.length);for(var n=this[t+--e],i=1;e>0&&(i*=256);)n+=this[t+--e]*i;return n},t.prototype.readUInt8=function(t,e){return e||_(t,1,this.length),this[t]},t.prototype.readUInt16LE=function(t,e){return e||_(t,2,this.length),this[t]|this[t+1]<<8},t.prototype.readUInt16BE=function(t,e){return e||_(t,2,this.length),this[t]<<8|this[t+1]},t.prototype.readUInt32LE=function(t,e){return e||_(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},t.prototype.readUInt32BE=function(t,e){return e||_(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},t.prototype.readIntLE=function(t,e,r){t=0|t,e=0|e,r||_(t,e,this.length);for(var n=this[t],i=1,o=0;++o<e&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*e)),n},t.prototype.readIntBE=function(t,e,r){t=0|t,e=0|e,r||_(t,e,this.length);for(var n=e,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;
return i*=128,o>=i&&(o-=Math.pow(2,8*e)),o},t.prototype.readInt8=function(t,e){return e||_(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},t.prototype.readInt16LE=function(t,e){e||_(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt16BE=function(t,e){e||_(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},t.prototype.readInt32LE=function(t,e){return e||_(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},t.prototype.readInt32BE=function(t,e){return e||_(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},t.prototype.readFloatLE=function(t,e){return e||_(t,4,this.length),X.read(this,t,!0,23,4)},t.prototype.readFloatBE=function(t,e){return e||_(t,4,this.length),X.read(this,t,!1,23,4)},t.prototype.readDoubleLE=function(t,e){return e||_(t,8,this.length),X.read(this,t,!0,52,8)},t.prototype.readDoubleBE=function(t,e){return e||_(t,8,this.length),X.read(this,t,!1,52,8)},t.prototype.writeUIntLE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||O(this,t,e,r,Math.pow(2,8*r),0);var i=1,o=0;for(this[e]=255&t;++o<r&&(i*=256);)this[e+o]=t/i&255;return e+r},t.prototype.writeUIntBE=function(t,e,r,n){t=+t,e=0|e,r=0|r,n||O(this,t,e,r,Math.pow(2,8*r),0);var i=r-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+r},t.prototype.writeUInt8=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,1,255,0),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),this[r]=255&e,r+1},t.prototype.writeUInt16LE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):D(this,e,r,!0),r+2},t.prototype.writeUInt16BE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,2,65535,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):D(this,e,r,!1),r+2},t.prototype.writeUInt32LE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r+3]=e>>>24,this[r+2]=e>>>16,this[r+1]=e>>>8,this[r]=255&e):k(this,e,r,!0),r+4},t.prototype.writeUInt32BE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,4,4294967295,0),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):k(this,e,r,!1),r+4},t.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);O(this,t,e,r,i-1,-i)}var o=0,a=1,s=0>t?1:0;for(this[e]=255&t;++o<r&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+r},t.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e=0|e,!n){var i=Math.pow(2,8*r-1);O(this,t,e,r,i-1,-i)}var o=r-1,a=1,s=0>t?1:0;for(this[e+o]=255&t;--o>=0&&(a*=256);)this[e+o]=(t/a>>0)-s&255;return e+r},t.prototype.writeInt8=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,1,127,-128),t.TYPED_ARRAY_SUPPORT||(e=Math.floor(e)),0>e&&(e=255+e+1),this[r]=255&e,r+1},t.prototype.writeInt16LE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8):D(this,e,r,!0),r+2},t.prototype.writeInt16BE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,2,32767,-32768),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>8,this[r+1]=255&e):D(this,e,r,!1),r+2},t.prototype.writeInt32LE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,4,2147483647,-2147483648),t.TYPED_ARRAY_SUPPORT?(this[r]=255&e,this[r+1]=e>>>8,this[r+2]=e>>>16,this[r+3]=e>>>24):k(this,e,r,!0),r+4},t.prototype.writeInt32BE=function(e,r,n){return e=+e,r=0|r,n||O(this,e,r,4,2147483647,-2147483648),0>e&&(e=4294967295+e+1),t.TYPED_ARRAY_SUPPORT?(this[r]=e>>>24,this[r+1]=e>>>16,this[r+2]=e>>>8,this[r+3]=255&e):k(this,e,r,!1),r+4},t.prototype.writeFloatLE=function(t,e,r){return F(this,t,e,!0,r)},t.prototype.writeFloatBE=function(t,e,r){return F(this,t,e,!1,r)},t.prototype.writeDoubleLE=function(t,e,r){return j(this,t,e,!0,r)},t.prototype.writeDoubleBE=function(t,e,r){return j(this,t,e,!1,r)},t.prototype.copy=function(e,r,n,i){if(n||(n=0),i||0===i||(i=this.length),r>=e.length&&(r=e.length),r||(r=0),i>0&&n>i&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(0>r)throw new RangeError("targetStart out of bounds");if(0>n||n>=this.length)throw new RangeError("sourceStart out of bounds");if(0>i)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-r<i-n&&(i=e.length-r+n);var o,a=i-n;if(this===e&&r>n&&i>r)for(o=a-1;o>=0;o--)e[o+r]=this[o+n];else if(1e3>a||!t.TYPED_ARRAY_SUPPORT)for(o=0;a>o;o++)e[o+r]=this[o+n];else e._set(this.subarray(n,n+a),r);return a},t.prototype.fill=function(t,e,r){if(t||(t=0),e||(e=0),r||(r=this.length),e>r)throw new RangeError("end < start");if(r!==e&&0!==this.length){if(0>e||e>=this.length)throw new RangeError("start out of bounds");if(0>r||r>this.length)throw new RangeError("end out of bounds");var n;if("number"==typeof t)for(n=e;r>n;n++)this[n]=t;else{var i=q(t.toString()),o=i.length;for(n=e;r>n;n++)this[n]=i[n%o]}return this}},t.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(t.TYPED_ARRAY_SUPPORT)return new t(this).buffer;for(var e=new Uint8Array(this.length),r=0,n=e.length;n>r;r+=1)e[r]=this[r];return e.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")};var Q=t.prototype;t._augment=function(e){return e.constructor=t,e._isBuffer=!0,e._set=e.set,e.get=Q.get,e.set=Q.set,e.write=Q.write,e.toString=Q.toString,e.toLocaleString=Q.toString,e.toJSON=Q.toJSON,e.equals=Q.equals,e.compare=Q.compare,e.indexOf=Q.indexOf,e.copy=Q.copy,e.slice=Q.slice,e.readUIntLE=Q.readUIntLE,e.readUIntBE=Q.readUIntBE,e.readUInt8=Q.readUInt8,e.readUInt16LE=Q.readUInt16LE,e.readUInt16BE=Q.readUInt16BE,e.readUInt32LE=Q.readUInt32LE,e.readUInt32BE=Q.readUInt32BE,e.readIntLE=Q.readIntLE,e.readIntBE=Q.readIntBE,e.readInt8=Q.readInt8,e.readInt16LE=Q.readInt16LE,e.readInt16BE=Q.readInt16BE,e.readInt32LE=Q.readInt32LE,e.readInt32BE=Q.readInt32BE,e.readFloatLE=Q.readFloatLE,e.readFloatBE=Q.readFloatBE,e.readDoubleLE=Q.readDoubleLE,e.readDoubleBE=Q.readDoubleBE,e.writeUInt8=Q.writeUInt8,e.writeUIntLE=Q.writeUIntLE,e.writeUIntBE=Q.writeUIntBE,e.writeUInt16LE=Q.writeUInt16LE,e.writeUInt16BE=Q.writeUInt16BE,e.writeUInt32LE=Q.writeUInt32LE,e.writeUInt32BE=Q.writeUInt32BE,e.writeIntLE=Q.writeIntLE,e.writeIntBE=Q.writeIntBE,e.writeInt8=Q.writeInt8,e.writeInt16LE=Q.writeInt16LE,e.writeInt16BE=Q.writeInt16BE,e.writeInt32LE=Q.writeInt32LE,e.writeInt32BE=Q.writeInt32BE,e.writeFloatLE=Q.writeFloatLE,e.writeFloatBE=Q.writeFloatBE,e.writeDoubleLE=Q.writeDoubleLE,e.writeDoubleBE=Q.writeDoubleBE,e.fill=Q.fill,e.inspect=Q.inspect,e.toArrayBuffer=Q.toArrayBuffer,e};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,r(6).Buffer,function(){return this}())},function(t,e,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";!function(t){"use strict";function e(t){var e=t.charCodeAt(0);return e===a||e===f?62:e===s||e===c?63:l>e?-1:l+10>e?e-l+26+26:u+26>e?e-u:h+26>e?e-h+26:void 0}function r(t){function r(t){h[f++]=t}var n,i,a,s,l,h;if(t.length%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var u=t.length;l="="===t.charAt(u-2)?2:"="===t.charAt(u-1)?1:0,h=new o(3*t.length/4-l),a=l>0?t.length-4:t.length;var f=0;for(n=0,i=0;a>n;n+=4,i+=3)s=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&s)>>16),r((65280&s)>>8),r(255&s);return 2===l?(s=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&s)):1===l&&(s=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(s>>8&255),r(255&s)),h}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,a,s=t.length%3,l="";for(i=0,a=t.length-s;a>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],l+=r(o);switch(s){case 1:o=t[t.length-1],l+=e(o>>2),l+=e(o<<4&63),l+="==";break;case 2:o=(t[t.length-2]<<8)+t[t.length-1],l+=e(o>>10),l+=e(o>>4&63),l+=e(o<<2&63),l+="="}return l}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="+".charCodeAt(0),s="/".charCodeAt(0),l="0".charCodeAt(0),h="a".charCodeAt(0),u="A".charCodeAt(0),f="-".charCodeAt(0),c="_".charCodeAt(0);t.toByteArray=r,t.fromByteArray=i}(e)},function(t,e){e.read=function(t,e,r,n,i){var o,a,s=8*i-n-1,l=(1<<s)-1,h=l>>1,u=-7,f=r?i-1:0,c=r?-1:1,d=t[e+f];for(f+=c,o=d&(1<<-u)-1,d>>=-u,u+=s;u>0;o=256*o+t[e+f],f+=c,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=n;u>0;a=256*a+t[e+f],f+=c,u-=8);if(0===o)o=1-h;else{if(o===l)return a?NaN:(d?-1:1)*(1/0);a+=Math.pow(2,n),o-=h}return(d?-1:1)*a*Math.pow(2,o-n)},e.write=function(t,e,r,n,i,o){var a,s,l,h=8*o-i-1,u=(1<<h)-1,f=u>>1,c=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:o-1,p=n?1:-1,g=0>e||0===e&&0>1/e?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(s=isNaN(e)?1:0,a=u):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),e+=a+f>=1?c/l:c*Math.pow(2,1-f),e*l>=2&&(a++,l/=2),a+f>=u?(s=0,a=u):a+f>=1?(s=(e*l-1)*Math.pow(2,i),a+=f):(s=e*Math.pow(2,f-1)*Math.pow(2,i),a=0));i>=8;t[r+d]=255&s,d+=p,s/=256,i-=8);for(a=a<<i|s,h+=i;h>0;t[r+d]=255&a,d+=p,a/=256,h-=8);t[r+d-p]|=128*g}},function(t,e){var r=Array.isArray,n=Object.prototype.toString;t.exports=r||function(t){return!!t&&"[object Array]"==n.call(t)}},function(t,e){var r=function(t){function e(t,e){for(var r in e)t[r]=e[r];return t}var r=1,n=function(t){r++,this.parent=null,this.children={},this.id=r,this.name="n"+r,"undefined"!=typeof t&&(this.name=t),this.x=this.y=this.z=0,this.width=this.height=0};n.prototype.resize=function(t,e){null!=t&&(this.width=t),null!=e&&(this.height=e)},n.prototype.moveTo=function(t,e,r){this.x=null!=t?t:this.x,this.y=null!=e?e:this.y,this.z=null!=r?r:this.z},n.prototype.add=function(t){var e=t.name;if("undefined"!=typeof this.children[e])throw"SceneGraph: child already exists: "+e;this.children[e]=t,t.parent=this};var i=function(){n.call(this,"root"),this.properties=t};i.prototype=new n;var o=function(t,r){if(n.call(this,t),this.properties={fill:"#000000"},"undefined"!=typeof r)e(this.properties,r);else if("undefined"!=typeof t&&"string"!=typeof t)throw"SceneGraph: invalid node name"};o.prototype=new n;var a=function(){o.apply(this,arguments),this.type="group"};a.prototype=new o;var s=function(){o.apply(this,arguments),this.type="rect"};s.prototype=new o;var l=function(t){o.call(this),this.type="text",this.properties.text=t};l.prototype=new o;var h=new i;return this.Shape={Rect:s,Text:l,Group:a},this.root=h,this};t.exports=r},function(t,e){(function(t){e.extend=function(t,e){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);if(null!=e)for(var i in e)e.hasOwnProperty(i)&&(r[i]=e[i]);return r},e.cssProps=function(t){var e=[];for(var r in t)t.hasOwnProperty(r)&&e.push(r+":"+t[r]);return e.join(";")},e.encodeHtmlEntity=function(t){for(var e=[],r=0,n=t.length-1;n>=0;n--)r=t.charCodeAt(n),r>128?e.unshift(["&#",r,";"].join("")):e.unshift(t[n]);return e.join("")},e.imageExists=function(t,e){var r=new Image;r.onerror=function(){e.call(this,!1)},r.onload=function(){e.call(this,!0)},r.src=t},e.decodeHtmlEntity=function(t){return t.replace(/&#(\d+);/g,function(t,e){return String.fromCharCode(e)})},e.dimensionCheck=function(t){var e={height:t.clientHeight,width:t.clientWidth};return e.height&&e.width?e:!1},e.truthy=function(t){return"string"==typeof t?"true"===t||"yes"===t||"1"===t||"on"===t||"✓"===t:!!t},e.parseColor=function(t){var e,r=/(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i,n=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,i=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/,o=t.match(r);return null!==o?(e=o[1]||o[2],"#"!==e[0]?"#"+e:e):(o=t.match(n),null!==o?e="rgb("+o.slice(1).join(",")+")":(o=t.match(i),null!==o?e="rgba("+o.slice(1).join(",")+")":null))},e.canvasRatio=function(){var e=1,r=1;if(t.document){var n=t.document.createElement("canvas");if(n.getContext){var i=n.getContext("2d");e=t.devicePixelRatio||1,r=i.webkitBackingStorePixelRatio||i.mozBackingStorePixelRatio||i.msBackingStorePixelRatio||i.oBackingStorePixelRatio||i.backingStorePixelRatio||1}}return e/r}}).call(e,function(){return this}())},function(t,e,r){(function(t){var n=r(13),i="http://www.w3.org/2000/svg",o=8;e.initSVG=function(t,e,r){var a,s,l=!1;t&&t.querySelector?(s=t.querySelector("style"),null===s&&(l=!0)):(t=n.newEl("svg",i),l=!0),l&&(a=n.newEl("defs",i),s=n.newEl("style",i),n.setAttr(s,{type:"text/css"}),a.appendChild(s),t.appendChild(a)),t.webkitMatchesSelector&&t.setAttribute("xmlns",i);for(var h=0;h<t.childNodes.length;h++)t.childNodes[h].nodeType===o&&t.removeChild(t.childNodes[h]);for(;s.childNodes.length;)s.removeChild(s.childNodes[0]);return n.setAttr(t,{width:e,height:r,viewBox:"0 0 "+e+" "+r,preserveAspectRatio:"none"}),t},e.svgStringToDataURI=function(){var e="data:image/svg+xml;charset=UTF-8,",r="data:image/svg+xml;charset=UTF-8;base64,";return function(n,i){return i?r+btoa(t.unescape(encodeURIComponent(n))):e+encodeURIComponent(n)}}(),e.serializeSVG=function(e,r){if(t.XMLSerializer){var i=new XMLSerializer,o="",a=r.stylesheets;if(r.svgXMLStylesheet){for(var s=n.createXML(),l=a.length-1;l>=0;l--){var h=s.createProcessingInstruction("xml-stylesheet",'href="'+a[l]+'" rel="stylesheet"');s.insertBefore(h,s.firstChild)}s.removeChild(s.documentElement),o=i.serializeToString(s)}var u=i.serializeToString(e);return u=u.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),o+u}}}).call(e,function(){return this}())},function(t,e){(function(t){e.newEl=function(e,r){return t.document?null==r?t.document.createElement(e):t.document.createElementNS(r,e):void 0},e.setAttr=function(t,e){for(var r in e)t.setAttribute(r,e[r])},e.createXML=function(){return t.DOMParser?(new DOMParser).parseFromString("<xml />","application/xml"):void 0},e.getNodeArray=function(e){var r=null;return"string"==typeof e?r=document.querySelectorAll(e):t.NodeList&&e instanceof t.NodeList?r=e:t.Node&&e instanceof t.Node?r=[e]:t.HTMLCollection&&e instanceof t.HTMLCollection?r=e:e instanceof Array?r=e:null===e&&(r=[]),r=Array.prototype.slice.call(r)}}).call(e,function(){return this}())},function(t,e){var r=function(t,e){"string"==typeof t&&(this.original=t,"#"===t.charAt(0)&&(t=t.slice(1)),/[^a-f0-9]+/i.test(t)||(3===t.length&&(t=t.replace(/./g,"$&$&")),6===t.length&&(this.alpha=1,e&&e.alpha&&(this.alpha=e.alpha),this.set(parseInt(t,16)))))};r.rgb2hex=function(t,e,r){function n(t){var e=(0|t).toString(16);return 16>t&&(e="0"+e),e}return[t,e,r].map(n).join("")},r.hsl2rgb=function(t,e,r){var n=t/60,i=(1-Math.abs(2*r-1))*e,o=i*(1-Math.abs(parseInt(n)%2-1)),a=r-i/2,s=0,l=0,h=0;return n>=0&&1>n?(s=i,l=o):n>=1&&2>n?(s=o,l=i):n>=2&&3>n?(l=i,h=o):n>=3&&4>n?(l=o,h=i):n>=4&&5>n?(s=o,h=i):n>=5&&6>n&&(s=i,h=o),s+=a,l+=a,h+=a,s=parseInt(255*s),l=parseInt(255*l),h=parseInt(255*h),[s,l,h]},r.prototype.set=function(t){this.raw=t;var e=(16711680&this.raw)>>16,r=(65280&this.raw)>>8,n=255&this.raw,i=.2126*e+.7152*r+.0722*n,o=-.09991*e-.33609*r+.436*n,a=.615*e-.55861*r-.05639*n;return this.rgb={r:e,g:r,b:n},this.yuv={y:i,u:o,v:a},this},r.prototype.lighten=function(t){var e=Math.min(1,Math.max(0,Math.abs(t)))*(0>t?-1:1),n=255*e|0,i=Math.min(255,Math.max(0,this.rgb.r+n)),o=Math.min(255,Math.max(0,this.rgb.g+n)),a=Math.min(255,Math.max(0,this.rgb.b+n)),s=r.rgb2hex(i,o,a);return new r(s)},r.prototype.toHex=function(t){return(t?"#":"")+this.raw.toString(16)},r.prototype.lighterThan=function(t){return t instanceof r||(t=new r(t)),this.yuv.y>t.yuv.y},r.prototype.blendAlpha=function(t){t instanceof r||(t=new r(t));var e=t,n=this,i=e.alpha*e.rgb.r+(1-e.alpha)*n.rgb.r,o=e.alpha*e.rgb.g+(1-e.alpha)*n.rgb.g,a=e.alpha*e.rgb.b+(1-e.alpha)*n.rgb.b;return new r(r.rgb2hex(i,o,a))},t.exports=r},function(t,e){t.exports={version:"2.9.0",svg_ns:"http://www.w3.org/2000/svg"}},function(t,e,r){function n(t,e){return f.element({tag:e,width:t.width,height:t.height,fill:t.properties.fill})}function i(t){return h.cssProps({fill:t.fill,"font-weight":t.font.weight,"font-family":t.font.family+", monospace","font-size":t.font.size+t.font.units})}function o(t,e,r){var n=r/2;return["M",n,n,"H",t-n,"V",e-n,"H",n,"V",0,"M",0,n,"L",t,e-n,"M",0,e-n,"L",t,n].join(" ")}var a=r(17),s=r(12),l=r(15),h=r(11),u=l.svg_ns,f={element:function(t){var e=t.tag,r=t.content||"";return delete t.tag,delete t.content,[e,r,t]}};t.exports=function(t,e){var r=e.engineSettings,l=r.stylesheets,h=l.map(function(t){return'<?xml-stylesheet rel="stylesheet" href="'+t+'"?>'}).join("\n"),c="holder_"+Number(new Date).toString(16),d=t.root,p=d.children.holderTextGroup,g="#"+c+" text { "+i(p.properties)+" } ";p.y+=.8*p.textPositionData.boundingBox.height;var m=[];Object.keys(p.children).forEach(function(t){var e=p.children[t];Object.keys(e.children).forEach(function(t){var r=e.children[t],n=p.x+e.x+r.x,i=p.y+e.y+r.y,o=f.element({tag:"text",content:r.properties.text,x:n,y:i});m.push(o)})});var v=f.element({tag:"g",content:m}),y=null;if(d.children.holderBg.properties.outline){var w=d.children.holderBg.properties.outline;y=f.element({tag:"path",d:o(d.children.holderBg.width,d.children.holderBg.height,w.width),"stroke-width":w.width,stroke:w.fill,fill:"none"})}var b=n(d.children.holderBg,"rect"),E=[];E.push(b),w&&E.push(y),E.push(v);var A=f.element({tag:"g",id:c,content:E}),x=f.element({tag:"style",content:g,type:"text/css"}),S=f.element({tag:"defs",content:x}),I=f.element({tag:"svg",content:[S,A],width:d.properties.width,height:d.properties.height,xmlns:u,viewBox:[0,0,d.properties.width,d.properties.height].join(" "),preserveAspectRatio:"none"}),T=a(I);T=h+T[0];var B=s.svgStringToDataURI(T,"background"===e.mode);return B}},function(t,e,r){r(18);t.exports=function n(t,e,r){"use strict";function i(t){var e=t.match(/^\w+/),n={tag:e?e[0]:"div",attr:{},children:[]},i=t.match(/#([\w-]+)/),o=t.match(/\$([\w-]+)/),a=t.match(/\.[\w-]+/g);return i&&(n.attr.id=i[1],r[i[1]]=n),o&&(r[o[1]]=n),a&&(n.attr["class"]=a.join(" ").replace(/\./g,"")),t.match(/&$/g)&&(d=!1),n}function o(t,e){return null!==e&&e!==!1&&void 0!==e?"string"!=typeof e&&"object"!=typeof e?String(e):e:void 0}function a(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function s(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var l,h,u,f,c=1,d=!0;if(r=r||{},"string"==typeof t[0])t[0]=i(t[0]);else{if(!Array.isArray(t[0]))throw new Error("First element of array must be a string, or an array and not "+JSON.stringify(t[0]));c=0}for(;c<t.length;c++){if(t[c]===!1||null===t[c]){t[0]=!1;break}if(void 0!==t[c]&&t[c]!==!0)if("string"==typeof t[c])d&&(t[c]=s(t[c])),t[0].children.push(t[c]);else if("number"==typeof t[c])t[0].children.push(t[c]);else if(Array.isArray(t[c])){if(Array.isArray(t[c][0])){if(t[c].reverse().forEach(function(e){t.splice(c+1,0,e)}),0!==c)continue;c++}n(t[c],e,r),t[c][0]&&t[0].children.push(t[c][0])}else if("function"==typeof t[c])u=t[c];else{if("object"!=typeof t[c])throw new TypeError('"'+t[c]+'" is not allowed as a value.');for(h in t[c])t[c].hasOwnProperty(h)&&null!==t[c][h]&&t[c][h]!==!1&&("style"===h&&"object"==typeof t[c][h]?t[0].attr[h]=JSON.stringify(t[c][h],o).slice(2,-2).replace(/","/g,";").replace(/":"/g,":").replace(/\\"/g,"'"):t[0].attr[h]=t[c][h])}}if(t[0]!==!1){l="<"+t[0].tag;for(f in t[0].attr)t[0].attr.hasOwnProperty(f)&&(l+=" "+f+'="'+a(t[0].attr[f]||"")+'"');l+=">",t[0].children.forEach(function(t){l+=t}),l+="</"+t[0].tag+">",t[0]=l}return r[0]=t[0],u&&u(t[0]),r}},function(t,e){"use strict";function r(t){var e=""+t,r=n.exec(e);if(!r)return e;var i,o="",a=0,s=0;for(a=r.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 39:i="&#39;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}s!==a&&(o+=e.substring(s,a)),s=a+1,o+=i}return s!==a?o+e.substring(s,a):o}var n=/["'&<>]/;t.exports=r},function(t,e,r){var n=r(13),i=r(11);t.exports=function(){var t=n.newEl("canvas"),e=null;return function(r){null==e&&(e=t.getContext("2d"));var n=i.canvasRatio(),o=r.root;t.width=n*o.properties.width,t.height=n*o.properties.height,e.textBaseline="middle";var a=o.children.holderBg,s=n*a.width,l=n*a.height,h=2,u=h/2;e.fillStyle=a.properties.fill,e.fillRect(0,0,s,l),a.properties.outline&&(e.strokeStyle=a.properties.outline.fill,e.lineWidth=a.properties.outline.width,e.moveTo(u,u),e.lineTo(s-u,u),e.lineTo(s-u,l-u),e.lineTo(u,l-u),e.lineTo(u,u),e.moveTo(0,u),e.lineTo(s,l-u),e.moveTo(0,l-u),e.lineTo(s,u),e.stroke());var f=o.children.holderTextGroup;e.font=f.properties.font.weight+" "+n*f.properties.font.size+f.properties.font.units+" "+f.properties.font.family+", monospace",e.fillStyle=f.properties.fill;for(var c in f.children){var d=f.children[c];for(var p in d.children){var g=d.children[p],m=n*(f.x+d.x+g.x),v=n*(f.y+d.y+g.y+f.properties.leading/2);e.fillText(g.properties.text,m,v)}}return t.toDataURL("image/png")}}()}])}),function(t,e){e&&(Holder=t.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Dropdown = function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    DROPRIGHT: 'dropright',
    DROPLEFT: 'dropleft',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left',
    POSITION_STATIC: 'position-static'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end',
    RIGHT: 'right-start',
    RIGHTEND: 'right-end',
    LEFT: 'left-start',
    LEFTEND: 'left-end'
  };
  var Default = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent'
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // getters


    var _proto = Dropdown.prototype;

    // public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
        }

        var element = this._element; // for dropup with alignment we use the parent as popper container

        if ($(parent).hasClass(ClassName.DROPUP)) {
          if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
            element = parent;
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(ClassName.POSITION_STATIC);
        }

        this._popper = new Popper(element, this._menu, this._getPopperConfig());
      } // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _extends({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($parentDropdown.hasClass(ClassName.DROPRIGHT)) {
        placement = AttachmentMap.RIGHT;
      } else if ($parentDropdown.hasClass(ClassName.DROPLEFT)) {
        placement = AttachmentMap.LEFT;
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      var offsetConf = {};

      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = _extends({}, data.offsets, _this2._config.offset(data.offsets) || {});
          return data;
        };
      } else {
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return popperConfig;
    }; // static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(Selector.MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}($, Popper);
//# sourceMappingURL=dropdown.js.map

// Main scripts
// require('main');
