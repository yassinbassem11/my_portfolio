(function(){"use strict";window.KBTabs={setupTabs(){const a=document.querySelectorAll(".kt-tabs-wrap");a.forEach(a=>{if(!a.classList.contains("initialized")){a.querySelectorAll(":scope > .kt-tabs-title-list").forEach(a=>{a.setAttribute("role","tablist")}),a.querySelectorAll(":scope > .kt-tabs-content-wrap > .kt-tab-inner-content").forEach(a=>{a.setAttribute("role","tabpanel"),a.setAttribute("aria-hidden","true")}),a.querySelectorAll(":scope > .kt-tabs-title-list li a").forEach(b=>{const c=b.parentElement,d=c.getAttribute("id"),e=c.classList.contains("kt-tab-title-active"),f=c.classList.contains("kt-tabs-accordion-title"),g=b.getAttribute("data-tab"),h=a.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+g);f?b.setAttribute("aria-selected",!!e):(h.setAttribute("aria-labelledby",d),c.setAttribute("role","presentation"),b.setAttribute("role","tab"),b.setAttribute("aria-controls",d),b.setAttribute("tabindex",e?"0":"-1")),h.setAttribute("aria-hidden",e?"false":"true"),e&&(h.style.display="block")}),a.querySelectorAll(":scope > .kt-tabs-title-list li").forEach(a=>{a.addEventListener("keydown",function(b){switch(b.which){case 37:a.previousElementSibling?a.previousElementSibling.querySelector("a").click():a.parentElement.querySelector("li:last-of-type > a").click();break;case 39:a.nextElementSibling?a.nextElementSibling.querySelector("a").click():a.parentElement.querySelector("li:first-of-type > a").click()}})});const b=new Event("resize");window.dispatchEvent(b);const c=a.querySelectorAll(".kt-tabs-title-list li a");c.forEach(a=>{a.addEventListener("click",function(b){b.preventDefault();const c=a.getAttribute("data-tab"),d=a.closest(".kt-tabs-wrap");window.KBTabs.setActiveTab(d,c)})}),a.classList.contains("kt-create-accordion")&&a.querySelectorAll(":scope > .kt-tabs-title-list .kt-title-item").forEach(a=>{const b=a.querySelector("a").getAttribute("data-tab"),c=a.classList,d=a.closest(".kt-tabs-wrap"),e=d.querySelector(":scope > .kt-tabs-content-wrap"),f=window.document.createElement("div");f.className=[...c].concat(["kt-tabs-accordion-title","kt-tabs-accordion-title-"+b]).join(" "),f.innerHTML=a.innerHTML,e.insertBefore(f,e.querySelector(":scope > .kt-inner-tab-"+b)),e.querySelector(":scope > .kt-tabs-accordion-title-"+b+"  a").removeAttribute("role"),e.querySelector(":scope > .kt-tabs-accordion-title-"+b+"  a").removeAttribute("tabindex")});const d=a.querySelectorAll(".kt-tabs-accordion-title a");d.forEach(a=>{const b=a.closest(".kt-create-accordion")?.dataset?.noAllowMultipleOpen;a.addEventListener("click",function(c){window.KBTabs.setActiveAccordion(c,a,b)})}),a.classList.add("initialized")}}),window.KBTabs.setActiveWithHash()},setActiveWithHash(){if(""==window.location.hash)return;const a=window.document.querySelector(window.location.hash+".kt-title-item");if(!a)return;const b=window.document.querySelector("#"+window.location.hash.substring(1)),c=b.querySelector("a").getAttribute("data-tab"),d=b.closest(".kt-tabs-wrap");window.KBTabs.setActiveTab(d,c),window.KBTabs.isMobileSize()&&d.classList.contains("kt-tabs-mobile-layout-accordion")||window.KBTabs.isTabletSize()&&d.classList.contains("kt-tabs-tablet-layout-accordion")?d.querySelector(".kt-tabs-content-wrap > .kt-tabs-accordion-title.kt-tabs-accordion-title-"+c).scrollIntoView({behavior:"smooth"}):d.classList.contains("kt-tabs-layout-vtabs")&&d.querySelector(".kt-tabs-content-wrap").scrollIntoView({behavior:"smooth"})},isMobileSize(){return 767>=window.innerWidth},isTabletSize(){return 767<window.innerWidth&&1024>=window.innerWidth},setActiveAccordion(a,b,c){a.preventDefault();const d=b.getAttribute("data-tab"),e=b.parentElement,f=b.closest(".kt-tabs-wrap"),g=f.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+d);if(e.classList.contains("kt-tab-title-active")?(f.classList.remove("kt-active-tab-"+d),e.classList.replace("kt-tab-title-active","kt-tab-title-inactive"),g.style.display="none",g.setAttribute("tabindex","1"),b.setAttribute("aria-selected","false"),window.KBTabs.setAriaAttributesForTabs(f,d,!1,c)):(f.classList.add("kt-active-tab-"+d),e.classList.replace("kt-tab-title-inactive","kt-tab-title-active"),g.style.display="block",g.setAttribute("tabindex","0"),b.setAttribute("aria-selected","true"),window.KBTabs.setAriaAttributesForTabs(f,d,!0,c)),c){const a=f.querySelectorAll(".kt-tabs-accordion-title a");a.forEach(a=>{const b=a.getAttribute("data-tab"),c=a.parentElement,e=f.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+b);b!=d&&(c.classList.replace("kt-tab-title-active","kt-tab-title-inactive"),c.setAttribute("tabindex","-1"),a.setAttribute("aria-selected","false"),e.style.display="none")})}const h=new Event("resize");window.dispatchEvent(h);const i=new Event("kadence-tabs-open");window.dispatchEvent(i)},setActiveTab(a,b,c=!0){const d=a.querySelector(":scope > .kt-tabs-title-list > li.kt-tab-title-active a"),e=a.querySelector(":scope > .kt-tabs-title-list > li.kt-tab-title-active");e.classList.replace("kt-tab-title-active","kt-tab-title-inactive"),d.setAttribute("tabindex","-1"),d.setAttribute("aria-selected","false"),a.className=a.className.replace(/\bkt-active-tab-\S+/g,"kt-active-tab-"+b);const f=a.querySelector(":scope > .kt-tabs-title-list > li.kt-title-item-"+b+" a"),g=a.querySelector(":scope > .kt-tabs-title-list > li.kt-title-item-"+b);g.classList.replace("kt-tab-title-inactive","kt-tab-title-active"),f.setAttribute("tabindex","0"),f.setAttribute("aria-selected","true"),a.querySelectorAll(":scope > .kt-tabs-content-wrap > .kt-tab-inner-content").forEach(a=>{a.style.display="none"});const h=a.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+b);h.style.display="block",c&&f.focus(),window.KBTabs.setAriaAttributesForTabs(a,b,!0,!0);const i=new Event("resize");window.dispatchEvent(i);const j=new Event("kadence-tabs-open");window.dispatchEvent(j)},setAriaAttributesForTabs(a,b,c=!0,d=!1){d&&a.querySelectorAll(":scope > .kt-tabs-content-wrap > .kt-tab-inner-content:not(.kt-inner-tab-"+b+")").forEach(a=>a.setAttribute("aria-hidden","true")),c?a.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+b).setAttribute("aria-hidden","false"):a.querySelector(":scope > .kt-tabs-content-wrap > .kt-inner-tab-"+b).setAttribute("aria-hidden","true")},init(){window.KBTabs.setupTabs(),window.addEventListener("hashchange",window.KBTabs.setActiveWithHash,!1)}},"loading"===document.readyState?document.addEventListener("DOMContentLoaded",window.KBTabs.init):window.KBTabs.init(),document.addEventListener("kb-query-loaded",window.KBTabs.init)})();