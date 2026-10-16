(()=>{var l="#ffffff",s="#222222";function c(e){let t=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return t*.299+n*.587+o*.114>150}function i(e){let t=document.getElementById("tc-style");t||(t=document.createElement("style"),t.id="tc-style",document.documentElement.appendChild(t));let n=e?.course||{},o=n.colors?.topbar;if(!o){t.textContent="";return}let r=n.textColors?.topbar||(c(o)?s:l),d=c(r)?"none":"brightness(0)",a=r===s?"brightness(0)":"none";t.textContent=`
    #vod_header { background-color: ${o} !important; }
    #vod_header h1, #vod_header h1 span { color: ${r} !important; }
    #vod_header .vod_close_button img { filter: ${d} !important; }
    #vod_header h1 span { filter: ${a} !important; }`}chrome.storage.sync.get("themes",e=>i(e.themes));chrome.storage.onChanged.addListener(e=>{e.themes&&i(e.themes.newValue)});})();
