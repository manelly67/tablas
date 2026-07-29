import coffeeteaIcon from "../assets/screenshot-S1.jpg";


function addCoffeetea(parentDiv){

const div = document.createElement("div");
div.className = "coffeetea-div";

const subdiv = document.createElement("div");

const text = document.createElement("p");
text.textContent = "Prueba esta página web gratuita para control de tus gastos";


const enlaceCoffeetea = document.createElement("a");
enlaceCoffeetea.href = "https://coffeetea.netlify.app";
enlaceCoffeetea.target = "_blank";
enlaceCoffeetea.rel = "noopener noreferrer";
enlaceCoffeetea.className = "coffeetea-enlace";

const imgCoffeetea = document.createElement("img");
imgCoffeetea.src = coffeeteaIcon; 
imgCoffeetea.alt = "Ir a Coffeetea";
imgCoffeetea.width = 200;
imgCoffeetea.height = 200;
imgCoffeetea.className = "coffeetea-icono";

enlaceCoffeetea.appendChild(imgCoffeetea);

parentDiv.appendChild(div);
div.appendChild(subdiv);
subdiv.appendChild(text);
subdiv.appendChild(enlaceCoffeetea);


}

export {
    addCoffeetea
}