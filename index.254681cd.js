function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,l=c||f||Function("return this")(),s=Object.prototype.toString,p=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function y(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var e=r.test(t);return e||u.test(t)?a(t.slice(2),e?2:8):i.test(t)?NaN:+t}n=function(t,n,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function b(t){return f=t,a=setTimeout(w,n),l?m(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function w(){var t=g();if(j(t))return $(t);a=setTimeout(w,function(t){var e=n-(t-c);return s?d(e,r-(t-f)):e}(t))}function $(t){return a=void 0,h&&o?m(t):(o=i=void 0,u)}function T(){var t=g(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===a)return b(c);if(s)return a=setTimeout(w,n),m(c)}return void 0===a&&(a=setTimeout(w,n)),u}return n=y(n)||0,v(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(y(e.maxWait)||0,n):r,h="trailing"in e?!!e.trailing:h),T.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},T.flush=function(){return void 0===a?u:$(g())},T};function h(t){return fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}const m=document.getElementById("search-box"),b=document.querySelector(".country-info");document.querySelector(".country-list");m.addEventListener("input",t(n)((function(t){let n=t.target.value;console.log(n),console.log(h(n)),h(n).then((t=>{t.forEach((t=>function(t){return b.innerHTML=t}(function({name:t,capital:n,population:e,languages:o,flags:i}){const r=Object.values(o).join(", ");return`\n  <div class="country-card">\n\n    <h2 class="country-name"><img class="icon" src="${i.svg}" alt="flag" width="30px" height="30px" />  ${t.official}</h2>\n    <h3 class="country-capital">Capital: ${n}</h3>\n    <h3 class="country-population">Population: ${e}</h3>\n    <h3 class="country-languages">Languages: ${r}</h3>\n    \n  </div>`}(t))))}))}),300));
//# sourceMappingURL=index.254681cd.js.map