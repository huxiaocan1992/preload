"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var cssLoad=function(e,t,n){function r(e){return o.body?e():setTimeout(function(){r(e)})}var i=function e(t){for(var n=s.href,r=a.length;r--;)if(a[r].href===n)return t();setTimeout(function(){e(t)})},o=window.document,a=o.styleSheets,s=o.createElement("link"),n=n||"all";if(s.rel="stylesheet",s.href=e,s.media=n,!t){var d=(o.getElementsByTagName("head")[0]||o.body).childNodes;t=d[d.length-1]}r(function(){t.parentNode.insertBefore(s,t||t.nextSibling)}),s.addEventListener&&s.addEventListener("load",function(e){if(navigator.userAgent.toLowerCase().match(/firefox/)){var n=o.createElement("script");t.parentNode.insertBefore(n,t||t.nextSibling)}}),s.onloadcssdefined=i,i(function(){s.media!==n&&(s.media=n)})};exports.default=cssLoad;