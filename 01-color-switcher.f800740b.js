const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};let e=null;const o=()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.bodyColor.style.background=e},n=(e,o)=>{t.startBtn.disabled=e,t.stopBtn.disabled=o};t.startBtn.addEventListener("click",(()=>{e=setInterval(o,1e3),n(!0,!1)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),n(!1,!0)}));
//# sourceMappingURL=01-color-switcher.f800740b.js.map
