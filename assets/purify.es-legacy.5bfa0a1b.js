!function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}System.register([],(function(t){"use strict";return{execute:function(){var n=Object.hasOwnProperty,r=Object.setPrototypeOf,o=Object.isFrozen,i=Object.getPrototypeOf,a=Object.getOwnPropertyDescriptor,l=Object.freeze,c=Object.seal,s=Object.create,u="undefined"!=typeof Reflect&&Reflect,f=u.apply,m=u.construct;f||(f=function(e,t,n){return e.apply(t,n)}),l||(l=function(e){return e}),c||(c=function(e){return e}),m||(m=function(e,t){return new(Function.prototype.bind.apply(e,[null].concat(/*! @license DOMPurify 2.3.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.0/LICENSE */function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t))))});var p,d=w(Array.prototype.forEach),g=w(Array.prototype.pop),y=w(Array.prototype.push),h=w(String.prototype.toLowerCase),v=w(String.prototype.match),b=w(String.prototype.replace),A=w(String.prototype.indexOf),T=w(String.prototype.trim),S=w(RegExp.prototype.test),x=(p=TypeError,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return m(p,t)});function w(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return f(e,t,r)}}function k(e,t){r&&r(e,null);for(var n=t.length;n--;){var i=t[n];if("string"==typeof i){var a=h(i);a!==i&&(o(t)||(t[n]=a),i=a)}e[i]=!0}return e}function E(e){var t=s(null),r=void 0;for(r in e)f(n,e,[r])&&(t[r]=e[r]);return t}function R(e,t){for(;null!==e;){var n=a(e,t);if(n){if(n.get)return w(n.get);if("function"==typeof n.value)return w(n.value)}e=i(e)}return function(e){return console.warn("fallback value for",e),null}}var _=l(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=l(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),N=l(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),O=l(["animate","color-profile","cursor","discard","fedropshadow","feimage","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),L=l(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),M=l(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),F=l(["#text"]),I=l(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),C=l(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),z=l(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),U=l(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),H=c(/\{\{[\s\S]*|[\s\S]*\}\}/gm),j=c(/<%[\s\S]*|[\s\S]*%>/gm),P=c(/^data-[\-\w.\u00B7-\uFFFF]/),B=c(/^aria-[\-\w]+$/),W=c(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),G=c(/^(?:\w+script|data):/i),q=c(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),K="function"==typeof Symbol&&"symbol"===e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)};function V(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var Y=function(){return"undefined"==typeof window?null:window},X=function(e,t){if("object"!==(void 0===e?"undefined":K(e))||"function"!=typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};t("default",function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y(),n=function(t){return e(t)};if(n.version="2.3.0",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,o=t.document,i=t.DocumentFragment,a=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,f=t.NamedNodeMap,m=void 0===f?t.NamedNodeMap||t.MozNamedAttrMap:f,p=t.Text,w=t.Comment,$=t.DOMParser,Z=t.trustedTypes,J=s.prototype,Q=R(J,"cloneNode"),ee=R(J,"nextSibling"),te=R(J,"childNodes"),ne=R(J,"parentNode");if("function"==typeof a){var re=o.createElement("template");re.content&&re.content.ownerDocument&&(o=re.content.ownerDocument)}var oe=X(Z,r),ie=oe&&ze?oe.createHTML(""):"",ae=o,le=ae.implementation,ce=ae.createNodeIterator,se=ae.createDocumentFragment,ue=ae.getElementsByTagName,fe=r.importNode,me={};try{me=E(o).documentMode?o.documentMode:{}}catch(ht){}var pe={};n.isSupported="function"==typeof ne&&le&&void 0!==le.createHTMLDocument&&9!==me;var de=H,ge=j,ye=P,he=B,ve=G,be=q,Ae=W,Te=null,Se=k({},[].concat(V(_),V(D),V(N),V(L),V(F))),xe=null,we=k({},[].concat(V(I),V(C),V(z),V(U))),ke=null,Ee=null,Re=!0,_e=!0,De=!1,Ne=!1,Oe=!1,Le=!1,Me=!1,Fe=!1,Ie=!1,Ce=!0,ze=!1,Ue=!0,He=!0,je=!1,Pe={},Be=k({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),We=null,Ge=k({},["audio","video","img","source","image","track"]),qe=null,Ke=k({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Ve="http://www.w3.org/1998/Math/MathML",Ye="http://www.w3.org/2000/svg",Xe="http://www.w3.org/1999/xhtml",$e=Xe,Ze=!1,Je=null,Qe=o.createElement("form"),et=function(e){Je&&Je===e||(e&&"object"===(void 0===e?"undefined":K(e))||(e={}),e=E(e),Te="ALLOWED_TAGS"in e?k({},e.ALLOWED_TAGS):Se,xe="ALLOWED_ATTR"in e?k({},e.ALLOWED_ATTR):we,qe="ADD_URI_SAFE_ATTR"in e?k(E(Ke),e.ADD_URI_SAFE_ATTR):Ke,We="ADD_DATA_URI_TAGS"in e?k(E(Ge),e.ADD_DATA_URI_TAGS):Ge,ke="FORBID_TAGS"in e?k({},e.FORBID_TAGS):{},Ee="FORBID_ATTR"in e?k({},e.FORBID_ATTR):{},Pe="USE_PROFILES"in e&&e.USE_PROFILES,Re=!1!==e.ALLOW_ARIA_ATTR,_e=!1!==e.ALLOW_DATA_ATTR,De=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Ne=e.SAFE_FOR_TEMPLATES||!1,Oe=e.WHOLE_DOCUMENT||!1,Fe=e.RETURN_DOM||!1,Ie=e.RETURN_DOM_FRAGMENT||!1,Ce=!1!==e.RETURN_DOM_IMPORT,ze=e.RETURN_TRUSTED_TYPE||!1,Me=e.FORCE_BODY||!1,Ue=!1!==e.SANITIZE_DOM,He=!1!==e.KEEP_CONTENT,je=e.IN_PLACE||!1,Ae=e.ALLOWED_URI_REGEXP||Ae,$e=e.NAMESPACE||Xe,Ne&&(_e=!1),Ie&&(Fe=!0),Pe&&(Te=k({},[].concat(V(F))),xe=[],!0===Pe.html&&(k(Te,_),k(xe,I)),!0===Pe.svg&&(k(Te,D),k(xe,C),k(xe,U)),!0===Pe.svgFilters&&(k(Te,N),k(xe,C),k(xe,U)),!0===Pe.mathMl&&(k(Te,L),k(xe,z),k(xe,U))),e.ADD_TAGS&&(Te===Se&&(Te=E(Te)),k(Te,e.ADD_TAGS)),e.ADD_ATTR&&(xe===we&&(xe=E(xe)),k(xe,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&k(qe,e.ADD_URI_SAFE_ATTR),He&&(Te["#text"]=!0),Oe&&k(Te,["html","head","body"]),Te.table&&(k(Te,["tbody"]),delete ke.tbody),l&&l(e),Je=e)},tt=k({},["mi","mo","mn","ms","mtext"]),nt=k({},["foreignobject","desc","title","annotation-xml"]),rt=k({},D);k(rt,N),k(rt,O);var ot=k({},L);k(ot,M);var it=function(e){var t=ne(e);t&&t.tagName||(t={namespaceURI:Xe,tagName:"template"});var n=h(e.tagName),r=h(t.tagName);if(e.namespaceURI===Ye)return t.namespaceURI===Xe?"svg"===n:t.namespaceURI===Ve?"svg"===n&&("annotation-xml"===r||tt[r]):Boolean(rt[n]);if(e.namespaceURI===Ve)return t.namespaceURI===Xe?"math"===n:t.namespaceURI===Ye?"math"===n&&nt[r]:Boolean(ot[n]);if(e.namespaceURI===Xe){if(t.namespaceURI===Ye&&!nt[r])return!1;if(t.namespaceURI===Ve&&!tt[r])return!1;var o=k({},["title","style","font","a","script"]);return!ot[n]&&(o[n]||!rt[n])}return!1},at=function(e){y(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(ht){try{e.outerHTML=ie}catch(ht){e.remove()}}},lt=function(e,t){try{y(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(ht){y(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(Fe||Ie)try{at(t)}catch(ht){}else try{t.setAttribute(e,"")}catch(ht){}},ct=function(e){var t=void 0,n=void 0;if(Me)e="<remove></remove>"+e;else{var r=v(e,/^[\r\n\t ]+/);n=r&&r[0]}var i=oe?oe.createHTML(e):e;if($e===Xe)try{t=(new $).parseFromString(i,"text/html")}catch(ht){}if(!t||!t.documentElement){t=le.createDocument($e,"template",null);try{t.documentElement.innerHTML=Ze?"":i}catch(ht){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(o.createTextNode(n),a.childNodes[0]||null),$e===Xe?ue.call(t,Oe?"html":"body")[0]:Oe?t.documentElement:a},st=function(e){return ce.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},ut=function(e){return!(e instanceof p||e instanceof w)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof m&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute&&"string"==typeof e.namespaceURI&&"function"==typeof e.insertBefore)},ft=function(e){return"object"===(void 0===c?"undefined":K(c))?e instanceof c:e&&"object"===(void 0===e?"undefined":K(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},mt=function(e,t,r){pe[e]&&d(pe[e],(function(e){e.call(n,t,r,Je)}))},pt=function(e){var t=void 0;if(mt("beforeSanitizeElements",e,null),ut(e))return at(e),!0;if(v(e.nodeName,/[\u0080-\uFFFF]/))return at(e),!0;var r=h(e.nodeName);if(mt("uponSanitizeElement",e,{tagName:r,allowedTags:Te}),!ft(e.firstElementChild)&&(!ft(e.content)||!ft(e.content.firstElementChild))&&S(/<[/\w]/g,e.innerHTML)&&S(/<[/\w]/g,e.textContent))return at(e),!0;if(!Te[r]||ke[r]){if(He&&!Be[r]){var o=ne(e)||e.parentNode,i=te(e)||e.childNodes;if(i&&o)for(var a=i.length-1;a>=0;--a)o.insertBefore(Q(i[a],!0),ee(e))}return at(e),!0}return e instanceof s&&!it(e)?(at(e),!0):"noscript"!==r&&"noembed"!==r||!S(/<\/no(script|embed)/i,e.innerHTML)?(Ne&&3===e.nodeType&&(t=e.textContent,t=b(t,de," "),t=b(t,ge," "),e.textContent!==t&&(y(n.removed,{element:e.cloneNode()}),e.textContent=t)),mt("afterSanitizeElements",e,null),!1):(at(e),!0)},dt=function(e,t,n){if(Ue&&("id"===t||"name"===t)&&(n in o||n in Qe))return!1;if(_e&&!Ee[t]&&S(ye,t));else if(Re&&S(he,t));else{if(!xe[t]||Ee[t])return!1;if(qe[t]);else if(S(Ae,b(n,be,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==A(n,"data:")||!We[e]){if(De&&!S(ve,b(n,be,"")));else if(n)return!1}else;}return!0},gt=function(e){var t=void 0,r=void 0,o=void 0,i=void 0;mt("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(r=T(t.value),o=h(s),l.attrName=o,l.attrValue=r,l.keepAttr=!0,l.forceKeepAttr=void 0,mt("uponSanitizeAttribute",e,l),r=l.attrValue,!l.forceKeepAttr&&(lt(s,e),l.keepAttr))if(S(/\/>/i,r))lt(s,e);else{Ne&&(r=b(r,de," "),r=b(r,ge," "));var f=e.nodeName.toLowerCase();if(dt(f,o,r))try{u?e.setAttributeNS(u,s,r):e.setAttribute(s,r),g(n.removed)}catch(ht){}}}mt("afterSanitizeAttributes",e,null)}},yt=function e(t){var n=void 0,r=st(t);for(mt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)mt("uponSanitizeShadowNode",n,null),pt(n)||(n.content instanceof i&&e(n.content),gt(n));mt("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(e,o){var a=void 0,l=void 0,s=void 0,u=void 0,f=void 0;if((Ze=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!ft(e)){if("function"!=typeof e.toString)throw x("toString is not a function");if("string"!=typeof(e=e.toString()))throw x("dirty is not a string, aborting")}if(!n.isSupported){if("object"===K(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof e)return t.toStaticHTML(e);if(ft(e))return t.toStaticHTML(e.outerHTML)}return e}if(Le||et(o),n.removed=[],"string"==typeof e&&(je=!1),je);else if(e instanceof c)1===(l=(a=ct("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!Fe&&!Ne&&!Oe&&-1===e.indexOf("<"))return oe&&ze?oe.createHTML(e):e;if(!(a=ct(e)))return Fe?null:ie}a&&Me&&at(a.firstChild);for(var m=st(je?e:a);s=m.nextNode();)3===s.nodeType&&s===u||pt(s)||(s.content instanceof i&&yt(s.content),gt(s),u=s);if(u=null,je)return e;if(Fe){if(Ie)for(f=se.call(a.ownerDocument);a.firstChild;)f.appendChild(a.firstChild);else f=a;return Ce&&(f=fe.call(r,f,!0)),f}var p=Oe?a.outerHTML:a.innerHTML;return Ne&&(p=b(p,de," "),p=b(p,ge," ")),oe&&ze?oe.createHTML(p):p},n.setConfig=function(e){et(e),Le=!0},n.clearConfig=function(){Je=null,Le=!1},n.isValidAttribute=function(e,t,n){Je||et({});var r=h(e),o=h(t);return dt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(pe[e]=pe[e]||[],y(pe[e],t))},n.removeHook=function(e){pe[e]&&g(pe[e])},n.removeHooks=function(e){pe[e]&&(pe[e]=[])},n.removeAllHooks=function(){pe={}},n}())}}}))}();
