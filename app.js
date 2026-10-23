import picocolors from "picocolors";
import pc from "picocolors";
import { formatearPrecio } from "./utils/formato.js";

console.log("hola mundo desde la recalcada base de node.js")
console.log(picocolors.green("este mi color primal"));

console.log(formatearPrecio(1500))