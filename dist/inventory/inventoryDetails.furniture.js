"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue.extend({
    props: ["item"],
    template: "\n        <div>\n        <div class=\"col-sm-6\">\n                <label>Tracking #</label>\n                <span>{{item.trackingNumber}}</span>\n            </div>\n            <div class=\"col-sm-6\">\n                <label>Assigned To:</label>\n                <span>{{item.assignedTo}}</span>\n            </div>\n            <div class=\"col-sm-6\">\n                <label>Manufacturer</label>\n                <span>{{item.manufacturer}}</span>\n            </div>\n            <div class=\"col-sm-12\">\n                <label>Model</label>\n                <span>{{item.model}}</span>\n            </div>\n            <div class=\"col-sm-6\">\n                <label>Material</label>\n                <span>{{item.material}}</span>\n            </div>\n            <div class=\"col-sm-6\">\n                <label>Color</label>\n                <span>{{item.color}}</span>\n            </div>\n        </div>\n    "
});
