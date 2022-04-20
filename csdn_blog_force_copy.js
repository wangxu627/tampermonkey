// ==UserScript==
// @name         CSDN Blog Force Copy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var nodeList = document.querySelectorAll(".prettyprint");
    for(const node of nodeList) {
        console.log(node);
        node.style.userSelect = "auto";
        node.querySelector("code").style.userSelect = "auto";
    }
})();
