
function insertRenovaciones(parentDiv){


// Datos de la tabla
const filasRenovaciones = [
  { modulo: "Módulo de gestión consolidada", precio: 10 },
  { modulo: "Módulos individuales", precio: 5 },
];

// Crear tabla
const tablaRenovaciones = document.createElement("table");
tablaRenovaciones.className = "tabla-renovaciones";

// Encabezado
const theadRen = document.createElement("thead");
const trHeadRen = document.createElement("tr");

const thVacioRen = document.createElement("th");
const thPrecioRen = document.createElement("th");
thPrecioRen.textContent = "us$";

trHeadRen.append(thVacioRen, thPrecioRen);
theadRen.appendChild(trHeadRen);
tablaRenovaciones.appendChild(theadRen);

// Cuerpo
const tbodyRen = document.createElement("tbody");

filasRenovaciones.forEach((f) => {
  const tr = document.createElement("tr");

  const tdModulo = document.createElement("td");
  tdModulo.textContent = f.modulo;

  const tdPrecio = document.createElement("td");
  tdPrecio.textContent = f.precio;

  tr.append(tdModulo, tdPrecio);
  tbodyRen.appendChild(tr);
});

tablaRenovaciones.appendChild(tbodyRen);
parentDiv.appendChild(tablaRenovaciones);

// Nota final
const notaCompra = document.createElement("p");
notaCompra.className = "nota-compra";
notaCompra.textContent = "Compra única del módulo de costo, no requiere renovación.";
parentDiv.appendChild(notaCompra);


}

export { insertRenovaciones };