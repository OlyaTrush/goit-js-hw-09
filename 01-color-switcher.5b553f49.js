!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")},n=null;function o(n){return function(){t.startBtn.disabled=n,t.stopBtn.disabled=!n}}var e=o(!0),r=o(!1);r();var a=function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));t.bodyColor.style.background=n};t.startBtn.addEventListener("click",(function(){n=setInterval(a,1e3),e()})),t.stopBtn.addEventListener("click",(function(){clearInterval(n),r()}))}();
//# sourceMappingURL=01-color-switcher.5b553f49.js.map
