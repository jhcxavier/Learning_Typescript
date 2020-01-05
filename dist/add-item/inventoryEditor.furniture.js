"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vue.extend({
    props: ["item", "category"],
    computed: {
        colors: function () {
            return this.category.colors;
        }
    },
    template: "\n      <div>\n  \n          <div class=\"col-sm-6 form-group\">\n              <label for=\"item.manufacturer\">Manufacturer</label>\n              <input name=\"item.manufacturer\" type=\"text\" class=\"form-control\" v-model=\"item.manufacturer\" />\n          </div>\n  \n          <div class=\"col-sm-6 form-group\">\n              <label for=\"item.model\">Model / Serial Number / Description</label>\n              <input name=\"item.model\" type=\"text\" class=\"form-control\" v-model=\"item.model\" />\n          </div>\n  \n          <div class=\"col-sm-3 form-group\">\n              <label for=\"item.material\">Material</label>\n              <input name=\"item.material\" type=\"text\" class=\"form-control\" v-model=\"item.material\" />\n          </div>\n  \n          <div v-if=\"colors\" class=\"col-sm-3 form-group\">\n            <label for=\"item.color\">Color</label>\n            <select name=\"item.color\"class=\"form-control\" v-model=\"item.color\">\n              <option disabled value=\"\">-- Select --</option>\n              <option v-for=\"color in colors\" :value=\"color\">\n                {{color}}\n              </option>\n            </select>\n        </div>\n\n      </div>\n      "
});
