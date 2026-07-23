import { Contenido } from "./class-content";
import { name } from "./personalInfo";

const project1 = new Contenido("langES");
project1.titleAbout = "Tablas para la gestión de pequeñas empresas"; // Hojas de cálculo
project1.textContentAbout =
  "Diseño de sistema de gestión en Google Sheets con tablas dinámicas y estructuradas para generar consolidados automáticos por mes, año, categorías y parámetros varios.  Se implementan fórmulas avanzadas como QUERY, FILTER, INDEX, MATCH y VLOOKUP para extraer y consolidar datos complejos bajo solicitud específica, garantizando precisión y agilidad en el análisis. Se incluye un menú personalizado con funciones diseñadas en Google Apps Script para automatizar tareas repetitivas o facilitar el uso de la herramienta a personas sin conocimientos técnicos.";
project1.subtitle1 = "Diseño estructurado mediante módulos";
project1.headContactMe = "Contáctame";
project1.textContactMe = `Soy ${name}, si quieres un diseño para ti, ponte en contacto conmigo. Escribe directo al email`;
project1.projectName = "";
project1.projectDescription1 = "Gestión para PRODUCTOR";

project1.projectDescription2 = "Gestión para VENDEDOR";

project1.projectDescription3 = "El precio incluye";
project1.projectDescription3_array = [
  "Personalización",
  "Una capacitación de una hora",
  "Soporte por WhatsApp durante un mes",
];


project1.projectDescription5_array = [
  "En todos los módulos, la información se actualiza automáticamente con cada entrada de datos.",
  "Adaptado a las necesidades de cada cliente",
];


project1.language = "español";

const arrayProjects = [project1];

export { arrayProjects };
