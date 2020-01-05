"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryStore_js_1 = require("../inventoryStore.js");
var inventoryEditor_js_1 = require("./inventoryEditor.js");
exports.default = Vue.extend({
    components: { inventoryEditor: inventoryEditor_js_1.default },
    data: function () { return ({
        categories: inventoryStore_js_1.default.categories,
        errors: [],
        item: {},
        saving: false,
        showSavedMessage: false
    }); },
    computed: {
        canSubmit: function () {
            return this.item && !!this.item.subCategory;
        },
        category: function () {
            var _this = this;
            return this.categories.find(function (x) { return x.name === _this.item.inventoryType; }) || {};
        },
        subCategories: function () {
            return this.category.subCategories;
        },
        editorComponent: function () {
            switch (this.item.inventoryType) {
                case "computer":
                    return editComputer;
                case "furniture":
                    return editFurniture;
                default:
                    return null;
            }
        }
    },
    methods: {
        onSubmit: function () {
            var _this = this;
            this.saving = true;
            inventoryStore_js_1.default
                .addItem(this.item)
                .then(function () {
                _this.reset();
                _this.showSavedMessage = true;
                _this.saving = false;
                setTimeout(function () { return (_this.showSavedMessage = false); }, 4000);
            })
                .catch(function (errors) {
                var _a;
                (_a = _this.errors).splice.apply(_a, __spreadArrays([0, Infinity], errors));
                _this.saving = false;
            });
        },
        reset: function () {
            this.item = {};
            this.errors = [];
            this.showErrors = false;
        },
        hasError: function (field) {
            return !!this.errors.find(function (x) { return x.field === field; });
        }
    },
    template: "\n    <div>\n      <div v-if=\"showSavedMessage\" class=\"alert alert-success alert-dismissible fade\" role=\"alert\">\n        <button @click=\"showSavedMessage = false\" type=\"button\" class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n        <strong>Inventory item saved!</strong>\n        You have successfully saved your new item!\n        Check it out on the <a href=\"#/inventory\">Inventory page</a>!\n      </div>\n\n      <h2 class=\"text-center\">Add New Inventory Item</h2>\n\n      <div class=\"form-container\">\n        <div class=\"saving\" v-if=\"saving\">\n          Saving...\n        </div>\n\n        <form @submit.prevent=\"onSubmit\">\n\n          <div v-if=\"errors.length\" class=\"panel panel-danger\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title\">Invalid Inventory Item</h3>\n            </div>\n            <div class=\"panel-body\">\n              Please correct the following errors:\n              <ul>\n                <li class=\"error\" v-for=\"error in errors\">\n                  <span>{{ error.message }}</span>\n                </li>\n            </ul>\n            </div>\n          </div>\n\n          <div class=\"row\">\n\n            <div class=\"col-sm-6 form-group\">\n                <label for=\"item-type\">Category</label>\n                <select name=\"item-type\"class=\"form-control\" v-model=\"item.type\">\n                  <option disabled value=\"\">-- Select --</option>\n                  <option v-for=\"category in categories\" :value=\"category.name\">\n                    {{category.displayName}}\n                  </option>\n                </select>\n            </div>\n\n            <div class=\"col-sm-6 form-group\">\n                <label for=\"item-subCategory\">Sub-Category</label>\n                <select v-if=\"!subCategories\" disabled class=\"form-control\">\n                  <option selected>-- Select a Category --</option>\n                </select>\n                <select name=\"item-subCategory\" class=\"form-control\" \n                    v-if=\"subCategories\" v-model=\"item.subCategory\"\n                  >\n                  <option disabled selected>-- Select --</option>\n                  <option v-for=\"category in subCategories\" :value=\"category.name\">\n                    {{category.displayName}}\n                  </option>\n                </select>\n            </div>\n\n            <div v-if=\"item.subCategory\">\n              <div class=\"col-sm-6 form-group\">\n                  <label for=\"item-name\">Name</label>\n                  <input name=\"item-name\" type=\"text\" class=\"form-control\" v-model=\"item.name\" />\n              </div>\n\n              <div class=\"col-sm-6 form-group\">\n                  <label for=\"item-assigned-to\">Assigned To</label>\n                  <input name=\"item-assigned-to\" type=\"text\" class=\"form-control\" v-model=\"item.assignedTo\"  />\n              </div>\n\n              <inventory-editor :item=\"item\" :category=\"category\"></inventory-editor>\n            </div>\n\n            </div>\n          <div class=\"col-sm-12 clear \">\n            <button :disabled=\"!canSubmit\" type=\"submit\" class=\"btn btn-primary\">Save</button>\n            <a href=\"#/\" class=\"btn btn-default\">Cancel</a>\n          </div>\n\n        </form>\n      </div>\n    </div>\n    "
});
