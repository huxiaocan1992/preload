"use strict";var fontLoad=function(){return function(t,e,n,r){var o=document.createElement("link");if(o.rel="preload",o.href=t,o.as=e||"font",o.type=n||"font/ttf",o.setAttribute("crossorigin","anonymous"),r=r||function(){},!o.relList||!o.relList.supports||!o.relList.supports("preload"))return alert("unsupports: Resource Hints preload"),0;o.addEventListener("load",function(){r()}),document.getElementsByTagName("head")[0].appendChild(o)}}();