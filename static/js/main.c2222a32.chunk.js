(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{24:function(e,n,t){e.exports=t(37)},29:function(e,n,t){},30:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o={};t.r(o),t.d(o,"App",(function(){return w}));var r=t(0),i=t.n(r),a=t(10),c=t.n(a),s=(t(29),t(30),t(23)),l=function(){var e=Object(r.useState)(""),n=Object(s.a)(e,2),t=n[0],o=n[1];function a(e){var n=e.coords.longitude,t=e.coords.latitude;o("Lat:"+t+" Long"+n)}return i.a.createElement("div",null,i.a.createElement("div",null,"You are safe"),void setInterval((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition(a):console.log("Geo Location not supported by browser")}),5e3),t)};var u=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var v=t(20),g=t(19),h=t(9),p=function(e,n){return Object(h.a)(Object(h.a)({},e),n)},w={state:Object(h.a)({},{isLoading:!1}),reducers:{},effects:function(e){return{}}},b=(0,t(6).createBrowserHistory)(),m=Object(v.init)({models:o,redux:{reducers:{router:function(e){var n={location:e.location,action:e.action};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.type,r=t.payload;return"@@router/LOCATION_CHANGE"===o?p(e,r):e}}(b)},middlewares:[Object(g.a)(b)]}}),k=t(13),y=t(8);c.a.render(i.a.createElement(y.a,{store:m},i.a.createElement(k.a,{history:b},i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-tracker",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/covid-tracker","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.c2222a32.chunk.js.map