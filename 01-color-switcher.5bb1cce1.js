const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let d=null;e.setAttribute("disabled",""),t.addEventListener("click",(()=>{e.removeAttribute("disabled"),t.setAttribute("disabled",""),d=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;r.setAttribute("style",`background-color: ${t}`)}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled"),e.setAttribute("disabled",""),clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.5bb1cce1.js.map
