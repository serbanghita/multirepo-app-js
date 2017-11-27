"use strict";

var _babelRegister = require("babel-register");

var _babelRegister2 = _interopRequireDefault(_babelRegister);

var _Actor = require("multirepo-core/src/entity/Actor");

var _Actor2 = _interopRequireDefault(_Actor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import * as core from "multirepo-core";
// const Actor = core.entity.Actor;
const a = new _Actor2.default("sghita", 10, 20, "Serban Ghita");
// babelRegister({
//     ignore: /node_modules\/(?!multirepo-core)/,
//     extensions: [".js"]
// });

console.log(a.getName(), a.spawn());