"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.fontLoad=t()}(void 0,function(){return function(e,t,o,n){var r=document.createElement("link");if(r.rel="preload",r.href=e,r.as=t||"font",r.type=o||"font/ttf",r.setAttribute("crossorigin","anonymous"),n=n||function(){},!r.relList||!r.relList.supports||!r.relList.supports("preload"))return alert("unsupports: Resource Hints preload"),0;r.addEventListener("load",function(){n()}),document.getElementsByTagName("head")[0].appendChild(r)}});