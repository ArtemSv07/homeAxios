import"./assets/modulepreload-polyfill-3cfb730f.js";const o=document.querySelectorAll(".animations"),i=document.querySelector(".covers");function t(){const e=i.getBoundingClientRect();e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)?window.innerWidth<1440&&o.forEach(n=>{console.log("on"),n.classList.add("animations-mobile-tablet")}):o.forEach(n=>{console.log("off"),n.classList.remove("animations-mobile-tablet")})}window.addEventListener("scroll",t);window.addEventListener("resize",t);
//# sourceMappingURL=commonHelpers.js.map