parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function e(e,r){return a(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(d){o=!0,a=d}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function a(e){if(Array.isArray(e))return e}function c(){var t={error:document.createElement("p"),amend:document.createElement("p"),waiting:document.createElement("p"),success:document.createElement("p"),contactme:contactme};t.error.className="error",t.error.appendChild(document.createTextNode("Something went wrong, please try again.")),t.amend.className="error",t.amend.appendChild(document.createTextNode("Please fill out name and contact method.")),t.waiting.appendChild(document.createTextNode("Thank you")),t.success.appendChild(document.createTextNode("I will return to you shortly")),t.contactme.onsubmit=function(e){e.preventDefault(),t.error.parentNode&&t.error.parentNode.removeChild(t.error),t.amend.parentNode&&t.amend.parentNode.removeChild(t.amend),t.contactme.parentNode.replaceChild(t.waiting,t.contactme);var r,o=(r=t.contactme,[].reduce.call(r,function(e,t){return t.value&&(e[t.name]=t.value.trim()),e},{}));if(!o.name||!o.contact)return t.waiting.parentNode.replaceChild(t.contactme,t.waiting),void t.contactme.parentNode.insertBefore(t.amend,t.contactme);o.date=(new Date).toUTCString(),fetch(t.contactme.action+function(e){return Object.keys(n).reduce(function(t,r){return t.push([n[r],encodeURIComponent(e[r])].join("=")),t},[]).join("&")}(o)).then(function(e){t.waiting.parentNode.replaceChild(t.success,t.waiting)}).catch(function(e){t.waiting.parentNode.replaceChild(t.success,t.waiting)})};var n={name:"entry.1419581890",contact:"entry.367634920",message:"entry.1892559927",date:"entry.1624056495"};[].forEach.call(document.querySelectorAll('a[href^="#"]'),function(e){e.addEventListener("click",function(t){t.preventDefault(),document.querySelector('[name="'+e.getAttribute("href").replace("#","")+'"]').scrollIntoView({behavior:"smooth"})})});var r=document.createElement("iframe");[["title","My Office Location"],["width","100%"],["height","100%"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.7957283073088!2d-0.1435368157730345!3d51.590307079648746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3e977d91b5%3A0xf02ada7628d85293!2sDan%20I%20Silas%20Chartered%20Surveyor!5e0!3m2!1siw!2sil!4v1594805579242!5m2!1siw!2sil"],["frameborder","0"],["scrolling","no"],["marginheight","0"],["marginwidth","0"]].forEach(function(t){var n=e(t,2),o=n[0],a=n[1];return r.setAttribute(o,a)}),document.querySelector("footer").appendChild(r)}"complete"===document.readyState?c():window.addEventListener("DOMContentLoaded",c);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=script.a2a23e63.js.map