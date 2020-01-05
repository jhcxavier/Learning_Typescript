"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue.extend({
    props: ["item"],
    data: function () { return ({
        minYear: 2010,
        maxYear: new Date().getFullYear()
    }); },
    template: "\n      <div>\n  \n          <div class=\"col-sm-3 form-group\">\n              <label for=\"item-brand\">Brand</label>\n              <input name=\"item-brand\" type=\"text\" class=\"form-control\" v-model=\"item.brand\" />\n          </div>\n  \n          <div class=\"col-sm-3 form-group\">\n              <label for=\"item-model\">Model</label>\n              <input name=\"item-model\" type=\"text\" class=\"form-control\" v-model=\"item.model\" />\n          </div>\n  \n          <div class=\"col-sm-3 form-group\">\n              <label for=\"item-year\">Year</label>\n              <input name=\"item-year\" type=\"number\":min=\"minYear\" :max=\"maxYear\" class=\"form-control\" v-model=\"item.year\" />\n          </div>\n  \n          <div class=\"col-sm-3 form-group\">\n              <label for=\"item-serial-number\">Serial Number</label>\n              <input name=\"item-serial-number\" type=\"text\" class=\"form-control\" v-model=\"item.serialNumber\" />\n          </div>\n  \n      </div>\n      "
});
