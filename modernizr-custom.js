/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csstransforms-csstransforms3d-csstransitions-preserve3d-atrule-setclasses-testallprops !*/
!function(e,n,t){function r(e,n){return typeof e===n}function s(){var e,n,t,s,i,o,a;for(var f in C)if(C.hasOwnProperty(f)){if(e=[],n=C[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)o=e[i],a=o.split("."),1===a.length?Modernizr[a[0]]=s:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=s),y.push((s?"":"no-")+a.join("-"))}}function i(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(b&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),b?x.className.baseVal=n:x.className=n)}function o(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function a(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var s;for(var i in e)if(e[i]in n)return t===!1?e[i]:(s=n[e[i]],r(s,"function")?l(s,t||n):s);return!1}function d(){var e=n.body;return e||(e=o(b?"svg":"body"),e.fake=!0),e}function p(e,t,r,s){var i,a,f,l,u="modernizr",p=o("div"),c=d();if(parseInt(r,10))for(;r--;)f=o("div"),f.id=s?s[r]:u+(r+1),p.appendChild(f);return i=o("style"),i.type="text/css",i.id="s"+u,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",l=x.style.overflow,x.style.overflow="hidden",x.appendChild(c)),a=t(p,e),c.fake?(c.parentNode.removeChild(c),x.style.overflow=l,x.offsetHeight):p.parentNode.removeChild(p),!!a}function c(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(n,r){var s=n.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(n[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];s--;)i.push("("+c(n[s])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,s,i){function l(){d&&(delete A.style,delete A.modElem)}if(i=r(i,"undefined")?!1:i,!r(s,"undefined")){var u=m(e,s);if(!r(u,"undefined"))return u}for(var d,p,c,h,g,v=["modernizr","tspan","samp"];!A.style&&v.length;)d=!0,A.modElem=o(v.shift()),A.style=A.modElem.style;for(c=e.length,p=0;c>p;p++)if(h=e[p],g=A.style[h],a(h,"-")&&(h=f(h)),A.style[h]!==t){if(i||r(s,"undefined"))return l(),"pfx"==n?h:!0;try{A.style[h]=s}catch(y){}if(A.style[h]!=g)return l(),"pfx"==n?h:!0}return l(),!1}function g(e,n,t,s,i){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+P.join(o+" ")+o).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,s,i):(a=(e+" "+z.join(o+" ")+o).split(" "),u(a,n,t))}function v(e,n,r){return g(e,t,t,n,r)}var y=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var x=n.documentElement,S="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",S||_);var b="svg"===x.nodeName.toLowerCase();Modernizr.addTest("preserve3d",function(){var e=o("a"),n=o("a");e.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",e.appendChild(n),x.appendChild(e);var t=n.getBoundingClientRect();return x.removeChild(e),t.width&&t.width<4});var T="Moz O ms Webkit",P=w._config.usePrefixes?T.split(" "):[];w._cssomPrefixes=P;var k=function(n){var r,s=prefixes.length,i=e.CSSRule;if("undefined"==typeof i)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+n;for(var o=0;s>o;o++){var a=prefixes[o],f=a.toUpperCase()+"_"+r;if(f in i)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=k;var z=w._config.usePrefixes?T.toLowerCase().split(" "):[];w._domPrefixes=z;var E=w.testStyles=p,N={elem:o("modernizr")};Modernizr._q.push(function(){delete N.elem});var A={style:N.elem.style};Modernizr._q.unshift(function(){delete A.style}),w.testAllProps=g,w.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in x.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",E(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0)),s(),i(y),delete w.addTest,delete w.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);