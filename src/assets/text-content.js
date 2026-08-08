import { Contenido } from "./class-content";
import { name } from "./personalInfo";

const project1 = new Contenido("langES");

project1.titleAbout = "Tablas para la gestión de pequeñas empresas"; // Hojas de cálculo
project1.middleContent = [
  "¿Sabes realmente cuánto ganas cada mes?",
  "Muchos pequeños negocios venden todos los días, pero desconocen sus utilidades reales",
];
project1.textContentAbout =
  "Desarrollé un sistema de gestión en Google Sheets que ayuda a controlar las principales áreas del negocio. Sin pagar una suscripción mensual y sin necesidad de conocimientos técnicos. Utiliza tablas dinámicas y estructuradas para generar consolidados automáticos por mes, año, categorías y parámetros varios.  Se implementan fórmulas avanzadas como QUERY, FILTER, INDEX, MATCH y VLOOKUP para extraer y consolidar datos complejos bajo solicitud específica, garantizando precisión y agilidad en el análisis. Se incluye un menú personalizado con funciones diseñadas en Google Apps Script para automatizar tareas repetitivas o facilitar el uso de la herramienta a personas sin conocimientos técnicos.";
project1.subtitle1 = "Diseño estructurado mediante módulos";
project1.headContactMe = "Contáctame";
project1.textContactMe = [
  `Soy ${name}, si quieres un diseño para ti, ponte en contacto conmigo. Escribe directo al email`,
  "o por LinKedIn",
];
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

project1.arrayAbout = [
  "📊 Diseño de sistema de gestión en Google Sheets que permite conocer, mes a mes, cuánto vende realmente el negocio, cuánto le cuesta vender, cuánto gasta y cuál es su resultado económico. Sin pagar una suscripción mensual y sin necesidad de conocimientos técnicos",
  "📁 Contiene:",
  [
    "🗂️ Catálogo de productos",
    ["✅ Personalizable.", "✅ Puede ser para comerciantes o productores."],
  ],
  [
    "💰 Gestión de ventas",
    [
      "📝 Registro de ventas.",
      "🛒 Canal de venta.",
      "⚙️ Parámetro adicional configurable.",
      "🔄 Consolidación automática mediante tablas dinámicas.",
    ],
  ],
  [
    "🧮 Costeo de ventas",
    "Calcula automáticamente el costo de lo vendido.",
    [
      "🏬 Empresas comerciales → toma el precio de compra.",
      "🏭 Empresas productoras → toma el costo de fabricación.",
    ],
  ],
  [
    "💸 Gestión de gastos",
    [
      "📝 Registro de gastos.",
      "🏷️ Clasificación libre del usuario (categoría de gasto, proveedores).",
      "🧾 Clasificación gerencial definida por el sistema.",
    ],
  ],
  [
    "Estado de resultados gerencial",
    "Integra automáticamente:",
    [
      "💵 Ventas",
      "📦 Costo de ventas",
      "👷 Mano de obra",
      "🏗️ Depreciación",
      "🗃️ Gastos administrativos",
      "📣 Gastos de ventas",
    ],
    "✨ Para mostrar el resultado económico del negocio.",
  ],
  [
    "🤖 Se incluye un menú personalizado con funciones diseñadas en Google Apps Script para automatizar tareas repetitivas o facilitar el uso de la herramienta a personas sin conocimientos técnicos.",
  ],
];
// información adicional
project1.projectDescription4_array = [
  "Prueba esta página web gratuita para control de tus gastos",
  "Módulo de gestión consolidada",
  "Módulos individuales",
  "Compra única del módulo de costo, no requiere renovación.",
  [
    "Módulo de Ventas",
    "Módulo de Gastos",
    "Módulo de Costos",
    "Módulo de Gestión Consolidada",
    "Sistema de Gestión Completo",
    "Gráficos gratis",
  ],
  "RENOVACIONES años siguientes",
];

project1.language = "español";

const arrayProjects = [project1];

export { arrayProjects };
