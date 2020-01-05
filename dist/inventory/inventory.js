"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inventoryStore_js_1 = require("../inventoryStore.js");
var inventoryDetails_js_1 = require("./inventoryDetails.js");
var InventoryList = Vue.extend({
    props: ["selectedItem", "inventory"],
    methods: {
        getIcon: function (item) {
            switch (item.type) {
                case "computer":
                    return "fa-desktop";
                case "furniture":
                    return "fa-chair";
                default:
                    return "fa-dolly-flatbed";
            }
        }
    },
    template: "\n    <div class=\"inventory-list list-group\">\n      <a class=\"list-group-item\"\n        v-for=\"item in inventory\"\n        @click=\"$emit('item-selected', item)\"\n        :class=\"{ active: selectedItem && selectedItem.trackingNumber == item.trackingNumber }\"\n      >\n        <i class=\"fas\" :class=\"getIcon(item)\"></i>\n        {{ item.name }}\n      </a>\n    </div>\n  "
});
exports.default = Vue.extend({
    components: { InventoryList: InventoryList, inventoryDetails: inventoryDetails_js_1.default },
    data: function () { return ({
        inventory: inventoryStore_js_1.default.items,
        selectedItem: null
    }); },
    methods: {
        deleteItem: function (item) {
            inventoryStore_js_1.default.removeItem(item);
        }
    },
    mounted: function () {
        if (this.inventory.length) {
            this.selectedItem = this.inventory[0];
        }
    },
    template: "\n    <div>\n      <h2 class=\"title\">Current Inventory</h2>\n\n      <div class=\"menu-bar text-right\">\n        <a href=\"#/add-item\" class=\"add-item btn btn-sm btn-primary\">Add New Item</a>\n      </div>\n\n      <div class=\"flex\">\n      \n        <inventory-list \n          :inventory=\"inventory\" \n          :selectedItem=\"selectedItem\" \n          @item-selected=\"selectedItem = $event\"\n        />\n\n        <div v-if=\"selectedItem\" class=\"grow full-height\">\n          <div class=\"inventory-panel panel panel-default\">\n            <div class=\"panel-heading\">\n              <h3 class=\"panel-title col-xs-10\">{{ selectedItem.name }}</h3>\n              <button @click.stop=\"deleteItem(selectedItem)\" class=\"pull-right btn btn-xs btn-danger\">Delete</button>\n            </div>\n            <div class=\"panel-body\">\n              <inventory-details :item=\"selectedItem\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
});
