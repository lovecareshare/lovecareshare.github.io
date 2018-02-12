
d = new Date();
var cache_key = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() + "-" + d.getHours ()
var swUrl = 'https://app.wigzo.com/wigzo_sw.js';
    importScripts(swUrl + "?orgtoken=eec7cff8-718c-42f8-b564-4532ea822ee8&cache_key="+cache_key);