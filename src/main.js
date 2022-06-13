"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var index_js_1 = require("src/components/Ui/index.js");
var app = (0, vue_1.createApp)(App_vue_1["default"]);
index_js_1["default"].forEach(function (component) {
    app.component(component.name, component);
});
app.mount('#app');
