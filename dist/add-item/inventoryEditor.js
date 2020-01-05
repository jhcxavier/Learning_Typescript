"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryEditor_computer_js_1 = require("./inventoryEditor.computer.js");
var inventoryEditor_furniture_js_1 = require("./inventoryEditor.furniture.js");
exports.default = Vue.extend({
    props: ["item", "category"],
    render: function (createEditor) {
        var editor = null;
        switch (this.item.inventoryType) {
            case "computer":
                editor = inventoryEditor_computer_js_1.default;
                break;
            case "furniture":
                editor = inventoryEditor_furniture_js_1.default;
                break;
        }
        return createEditor(editor, { props: this.$props });
    }
});
