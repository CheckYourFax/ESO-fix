// ==UserScript==
// @name         ESO Forum Fix
// @namespace    http://tampermonkey.net/
// @version      1.01
// @description  Fixes ESO forums
// @include      https://forums.elderscrollsonline.com/*
// @author       CheckYourFax
// @icon         https://us.v-cdn.net/5020507/uploads/favicon_07701a7cad522642.ico
// @grant        none
// ==/UserScript==
window.addEventListener('load', function() {
javascript:(function(){var a=document.createElement('style'),b;document.head.appendChild(a);b=a.sheet;b.insertRule('body{visibility:visible !important;}',0);})()
}, false);