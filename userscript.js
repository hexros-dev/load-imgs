// ==UserScript==
// @name        Load Images in STV
// @namespace   Load Images in STV
// @include     http*://*/truyen/*/1/*/*/
// @exclude     http*://*/truyen/*/1/*/0/
// @grant       none
// @version     1.0
// @author      Hexros Raymond
// @icon        https://raw.githubusercontent.com/hexros-dev/load-imgs/master/assets/icons/icon_64.png
// @downloadURL https://raw.githubusercontent.com/hexros-dev/load-imgs/master/userscript.js
// @homepageURL https://github.com/hexros-dev/load-imgs
// @supportURL  https://github.com/hexros-dev/load-imgs/issues
// @description Load image tags when names are added to STV.
// ==/UserScript==

(function() {
    'use strict';

    const allowedHosts = [
        "14.225.254.182",
        "sangtacviet.app",
        "sangtacviet.vip",
        "sangtacviet.com",
        // thêm nếu cần
    ];

    if (!allowedHosts.includes(location.hostname)) {
        return;
    }


})();
