module.exports = {
  "globDirectory": "./",
  "globPatterns": [
    "**/*.{ico,png,jpg,gif,html,js,json}"
  ],
  "swDest": "sw.js",
  "globIgnores": [
    "workbox-config.js",
    "node_modules/**/*",
    "js/html5.min.js",
    "js/respond.min.js",
    "package*.json"
  ],
  "importWorkboxFrom" : "local"
};
