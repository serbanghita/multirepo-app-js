"use strict";

var _Actor = require("multirepo-core/src/entity/Actor");

var _Actor2 = _interopRequireDefault(_Actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const a = new _Actor2.default("sghita", 10, 20, "Serban Ghita");
console.log(a.getName());