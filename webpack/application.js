console.log("Hello world!");
window.jQuery = require("jquery")
require("angular")
require("angular-ui-router")
// require("lodash")
require("restangular-umd")
require("./ng/app.js")
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./ng/', true, /\.js$/));
