// ==UserScript==
// @name         ESO Forum visibility Fix
// @namespace    http://tampermonkey.net/
// @version      1.04
// @description  Fixes ESO forums with a simple CSS hack to temporarily work around a visibility bug within the ESO forums.
// @include      https://forums.elderscrollsonline.com/*
// @author       CheckYourFax
// @icon         https://us.v-cdn.net/5020507/uploads/favicon_07701a7cad522642.ico
// @grant        none
// ==/UserScript==
window.addEventListener('load', function() { //Wait for page to load
(function(){var a=document.createElement('style'),b;document.head.appendChild(a);b=a.sheet;b.insertRule('body{visibility:visible !important;}',0);})(); //overwrites the style element visibility to remove 'hidden' element.
}, false);
// This script should not interfere with normal forum functionality when this bug is ultimately fixed by Bethesda/ZeniMax since it only overwrites an element that should not have been there in the first place
// Courtesy of CheckYourFax#1445 of the Daedric Banditoos
