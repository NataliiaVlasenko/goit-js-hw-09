const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let o=null;r.setAttribute("disabled",!0),e.addEventListener("click",(()=>{o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.setAttribute("disabled",!0),r.removeAttribute("disabled")})),r.addEventListener("click",(()=>{clearInterval(o),e.removeAttribute("disabled"),r.setAttribute("disabled",!0)})),console.log("5555555555555555555555");
//# sourceMappingURL=01-color-switcher.86fdcb21.js.map