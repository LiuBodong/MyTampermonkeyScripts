// ==UserScript==
// @name         Auto Refresh
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Refresh Page
// @author       Liubodong
// @match        *
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    setInterval(function() {
        document.location.reload();
    }, 3000)
})();