import pc from "picocolors";
import { formatearPrecio, formatearNombre } from "./utils/formato.js";
import { formatearNombre } from "./utils/formato.js";

console.log("hola mundo desde la recalcada base de node.js")
console.log(picocolors.green("este mi color primal"));

console.log(formatearPrecio(1500))

import { productos } from "./data/productos.js";
import {
  buscarPorId,
  listarAgotados,
  valorInventario,
  listarPorCategoria
} from "./servicios/inventario.js";

console.log(pc.green("API Mi Tienda de Barrio"));
console.log(pc.yellow("En construcción"));
console.log(pc.blue("Bienvenido/a"));
console.log(pc.red("ERROR de prueba"));

console.log(formatearPrecio(8400));
console.log(formatearPrecio(270700));
console.log(formatearNombre("leche 1 L"));

console.table(productos);
console.log(`La tienda tiene ${productos.length} productos`);

for (const p of productos) {
  console.log(`${p.nombre} – ${formatearPrecio(p.precio)}`);
}

console.log("Producto 3:", buscarPorId(3).nombre);
console.log("Agotados:", listarAgotados().length);
console.log("Valor del inventario:", formatearPrecio(valorInventario()));
console.log("Productos de granos:", listarPorCategoria("granos").length);