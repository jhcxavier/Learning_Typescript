"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue.extend({
    props: ["item"],
    template: "\n        <div>\n            <div class=\"col-sm-6\">\n                <label>Tracking #</label>\n                <span>{{item.trackingNumber}}</span>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <label>Assigned To:</label>\n                <span>{{item.assignedTo}}</span>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <label>Brand:</label>\n                <span>{{item.brand}}</span>\n            </div>\n\n            <div class=\"col-sm-6\">\n                <label>Serial #:</label>\n                <span>{{item.serialNumber}}</span>\n            </div>\n           \n            <div class=\"col-sm-12\">\n                <label>Model:</label>\n                <span>{{item.year}} {{item.model}}</span>\n            </div>\n\n        </div>\n    "
});
