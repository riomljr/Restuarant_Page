(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var a=t(81),o=t.n(a),r=t(645),c=t.n(r),i=t(667),d=t.n(i),s=new URL(t(570),t.b),l=c()(o()),u=d()(s);l.push([e.id,"body {\n  \n  background: url("+u+");\n  \n  \n}\nnav {\n  display: flex;\n  justify-content: center;\n  gap: 10%;\n\n}\n\nh1 {\n  text-align: center;\n}\n\n.content {\n  background-color: antiquewhite;\n\n}\n\nbutton {\n  border-color:black;\n  background-color: antiquewhite;\n  border-radius: 5px;\n  padding: 2%;\n  font-weight: 900;\n\n}\n\n\n\n.clicked {\n  border: none;\n  opacity: 90%;\n  \n}\n\n.innerContent {\nalign-self: center;\nborder-style: solid;\nborder-radius: 30px;\nborder-width: 10px;\nmax-width: 40%;\npadding: 5%;\n\nbackground-color: antiquewhite;\ntext-align: center;\n}\n\n\n.home {\n  display: flex;\n  flex-direction: column;\n  \n}\n\n.menu {\n  display: flex;\n  flex-direction: column;\n \n  \n}\n\n.about {\n  display: flex;\n  flex-direction: column;\n\n}\n\n",""]);const p=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);a&&c[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var r={},c=[],i=0;i<e.length;i++){var d=e[i],s=a.base?d[0]+a.base:d[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var h=o(m,a);a.byIndex=i,n.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var i=t(r[c]);n[i].references--}for(var d=a(e,o),s=0;s<r.length;s++){var l=t(r[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},570:(e,n,t)=>{e.exports=t.p+"5a69521a8c0403bdcbd4.jpg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={id:a,exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),r=t(569),c=t.n(r),i=t(565),d=t.n(i),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),h={};h.styleTagTransform=p(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=()=>{const e=document.getElementById("content");e.classList.add("home"),document.getElementById("home").classList.add("clicked");const n=document.createElement("div");n.classList.add("container");const t=document.createElement("header"),a=document.createElement("h1");a.innerHTML="Finnegans Cafe",t.appendChild(a),n.appendChild(t);const o=document.createElement("p");o.classList.add("innerContent"),o.innerHTML="Welcome To Finnegan's Cafe.<br>Where a cat can be a cat!<br><br>Any and all cats are welcome to take a nap order a fish fillet or our snack of the day!";const r=document.createElement("p");r.classList.add("innerContent"),r.innerHTML="Location<br>We are Located on the corner of Catnipt Ave and Meowster St <br>Paws Bay, California";const c=document.createElement("p");c.classList.add("innerContent"),c.innerHTML="Hours<br>Monday - Satuday<br>10 AM - 8 PM",e.appendChild(n),e.appendChild(o),e.appendChild(r),e.appendChild(c)},g=()=>{const e=document.getElementById("content");for(;"navigation"!==e.lastChild.id;)e.removeChild(e.lastChild);let n=document.getElementsByTagName("button");for(let e=0;e<n.length;e++)n[e].className="";e.className=""};(()=>{const e=document.getElementById("content");let n=document.createElement("nav");n.id="navigation";let t=document.createElement("button");t.innerHTML="Home",t.id="home";let a=document.createElement("button");a.innerHTML="Menu",a.id="menu";let o=document.createElement("button");o.innerHTML="About",o.id="about",n.appendChild(t),n.appendChild(a),n.appendChild(o),e.appendChild(n)})(),f(),document.getElementById("home").addEventListener("click",(()=>{g(),f()})),document.getElementById("menu").addEventListener("click",(()=>{console.log("Menu working"),g(),(()=>{const e=document.getElementById("content");e.classList.add("menu"),document.getElementById("menu").classList.add("clicked");const n=document.createElement("div");n.classList.add("container");const t=document.createElement("header"),a=document.createElement("h1");a.innerHTML="Menu",t.appendChild(a),n.appendChild(t);const o=document.createElement("p");o.classList.add("innerContent");const r=document.createElement("h2"),c=document.createElement("p");r.innerHTML="Fish Fillet",c.innerHTML="Delicious Catch of the Day<br>Salmon or Cod",o.appendChild(r),o.appendChild(c);const i=document.createElement("p");i.classList.add("innerContent");const d=document.createElement("h2"),s=document.createElement("p");d.innerHTML="Meat Mousse",s.innerHTML="Order a Can of our high quiality meat patte with added moisture.<br>Made from the grass feed free range beef.",i.appendChild(d),i.appendChild(s);const l=document.createElement("p");l.classList.add("innerContent");const u=document.createElement("h2"),p=document.createElement("p");u.innerHTML="Snack of the Day",p.innerHTML="Ranges from Valerian root Catnip to tasty chicken bites",l.appendChild(u),l.appendChild(p),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(l)})()})),document.getElementById("about").addEventListener("click",(()=>{console.log("about working"),g(),(()=>{const e=document.getElementById("content");e.classList.add("about"),document.getElementById("about").classList.add("clicked");const n=document.createElement("div");n.classList.add("container");const t=document.createElement("header"),a=document.createElement("h1");a.innerHTML="About Us",t.appendChild(a),n.appendChild(t);const o=document.createElement("p");o.classList.add("innerContent");const r=document.createElement("h2"),c=document.createElement("p");document.createElement("img"),r.innerHTML="Finnegan",c.innerHTML="Our cafe is name after one of the most handsomest cats",o.appendChild(r),o.appendChild(c);const i=document.createElement("div");i.classList.add("innerContent");const d=document.createElement("h2"),s=document.createElement("p");d.innerHTML="Contact Us",s.innerHTML="Email: Finnegan@Finnengansmadeupcafe.com<br>Phone: 555-5555",i.appendChild(d),i.appendChild(s),e.appendChild(n),e.appendChild(o),e.appendChild(i)})()}))})()})();