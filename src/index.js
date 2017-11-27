import babelRegister from "babel-register";
// babelRegister({
//     ignore: /node_modules\/(?!multirepo-core)/,
//     extensions: [".js"]
// });
import Actor from "multirepo-core/src/entity/Actor";
// import * as core from "multirepo-core";
// const Actor = core.entity.Actor;
const a = new Actor("sghita", 10, 20, "Serban Ghita");
console.log(a.getName(), a.spawn());