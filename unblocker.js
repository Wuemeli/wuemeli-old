// ==UserScript==
// @name         Unblock GoGuardian Blocked websites
// @namespace    https://gist.github.com/LegusX/9f7724d01f67a1a3137e322be3057ec9/raw/3ee19e79ea68ed01b5c885277705ae54a273e5e5/unblocker.user.js
// @version      1.3
// @description  Automatically unblocks any websites that are blocked by GoGuardian that start with http://
// @author       LegusX
// @match        http://blocked.com-default.ws/*
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
    window.stop();
    var urlraw = window.location.href.replace(/https*:\/\/blocked.com\-default\.ws\/\?oI\=[0-9]+\&type\=chromium\-m\&url\=/, "").split("");
    var url = urlraw.join("");
    url = url.split("%2F").join("/");
    url = url.split("%3F").join("?");
    document.write('<!DOCTYPE HTML><html><head><title>'+url+'</title></head><body><style>html,body{border:0;margin:0;padding:0;height:100%}iframe{border:0;margin:0;display:block}</style><iframe src="http://'+url+'" height=100% width=100%></iframe></body></html>');
    window.stop();
})();