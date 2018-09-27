/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4faec5c39a1f821270a5878880fbfc8c"
  },
  {
    "url": "favicon.ico",
    "revision": "d83f9bf4f7879d67e79a41e4926a9aaa"
  },
  {
    "url": "googlecbe6bcecc1cd880f.html",
    "revision": "ccfc2252971317b2254bfaaeb83d1b76"
  },
  {
    "url": "img/olivier-tille.jpg",
    "revision": "28be7267f2c062cce6d8dca38d4dc032"
  },
  {
    "url": "index.html",
    "revision": "541f05e2c2a503cb9ee6882992739e0e"
  },
  {
    "url": "manifest.json",
    "revision": "88fffe5d0116d1d44cfc44f622e47611"
  },
  {
    "url": "scripts/script.js",
    "revision": "3de7a00ee0a659c975bc65fabb6b4adc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
