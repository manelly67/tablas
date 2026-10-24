const dashboards = 15;
const scripts_price = 20;
const modulo_ventas = 25;
const modulo_gastos = 15;
const modulo_costos = 60;
const modulo_gestion_consolid = 20;
const hora_menos_5_en_semana = 6;
const hora_mas_5_en_semana = 3.5;

// nueva modalidad
const productor_ventas = 25;
const productor_gastos = 25;
const productor_gestion = 25;
const productor_suma_de_modulos = 115;
const vendedor_ventas = 25;
const vendedor_gastos = 25;
const vendedor_gestion = 25;
const vendedor_suma_de_modulos = 75;
const renovacion_individual = 5;


// precios y productos que quedan
const productor_costos = 40;
const gestion_vendedor = 60;
const gestion_productor = 90;
const renovacion_gestion = 10;


export {
  // estos precios no los estoy utilizando
  dashboards,
  scripts_price,
  modulo_ventas,
  modulo_gastos,
  modulo_costos,
  modulo_gestion_consolid,
  hora_menos_5_en_semana,
  hora_mas_5_en_semana,
  productor_gastos,
  productor_gestion,
  productor_suma_de_modulos,
  productor_ventas,
  renovacion_individual,
  vendedor_gastos,
  vendedor_gestion,
  vendedor_suma_de_modulos,
  vendedor_ventas,


  // estos son los precios que estoy utilizando
  // en caso de cambiar estos precios se debe modificar el valor de cada cuota
  // en descriptionDiv.js
  productor_costos,
  gestion_vendedor,
  gestion_productor,
  renovacion_gestion,

};
