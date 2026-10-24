import { arrayProjects } from "../assets/text-content";
import { insertTable } from "./table";
import { insertTable2 } from "./table2";
import { insertRenovaciones } from "./renovaciones";
import { gestion_productor, gestion_vendedor, productor_costos } from "../assets/prices";

function description(parentDiv) {
  const div = document.createElement("div");

  for (let i = 0; i < arrayProjects.length; i++) {
    const project = document.createElement("article");
    project.setAttribute("id", `langES`);
    project.className = "divForModules";
    div.appendChild(project);
  }

  const allProjectsDiv = div.querySelectorAll("article");
  const projectsInDiv = [...allProjectsDiv];
  const iterator = projectsInDiv.entries();

  projectsInDiv.forEach(() => {
    let index = iterator.next().value;
    let x = index[1];
    const divA = document.createElement("div");
    divA.className = "parrafos";
    const divB = document.createElement("div");
    divB.className = "parrafos";
    const divC = document.createElement("div");
    divC.className = "parrafos";
    const divD = document.createElement("div");
    divD.className = "parrafos";
    const divE = document.createElement("div");
    divE.className = "parrafos";


    const description1 = document.createElement("h3");
    const description2 = document.createElement("h3");
    const description3 = document.createElement("h3");
    const description4 = document.createElement("h3");
    const description5 = document.createElement("h3");

    const divA_1 = document.createElement("div");
    divA_1.className = "displayInRow";
    const tag1 = document.createElement("div");
    tag1.className = "price-tag";
    const price1 = document.createElement("p");
    price1.textContent = `$${gestion_productor}`;
    price1.className = "prices";
    const cuotas1 = document.createElement("p");
    cuotas1.textContent = "Pago único o 2 cuotas de US$ 45";

    const divB_1 = document.createElement("div");
    divB_1.className = "displayInRow";
    const tag2 = document.createElement("div");
    tag2.className = "price-tag";
    const price2 = document.createElement("p");
    price2.textContent = `$${gestion_vendedor}`;
    price2.className = "prices";
    const cuotas2 = document.createElement("p");
    cuotas2.textContent = "Pago único o 2 cuotas de US$ 30";

    const divE_1 = document.createElement("div");
    divE_1.className = "displayInRow";
    const tag3 = document.createElement("div");
    tag3.className = "price-tag";
    const price3 = document.createElement("p");
    price3.textContent = `$${productor_costos}`;
    price3.className = "prices";
    const cuotas3 = document.createElement("p");
    cuotas3.textContent = "Pago único o 2 cuotas de US$ 20";

    x.appendChild(divA);
    x.appendChild(divB);
    x.appendChild(divE);
    x.appendChild(divC);
    x.appendChild(divD);
   

    divA.appendChild(divA_1);
    divA_1.appendChild(tag1);
    tag1.appendChild(price1);
    divA_1.appendChild(description1);
    divA.appendChild(cuotas1);

    divB.appendChild(divB_1);
    divB_1.appendChild(tag2);
    tag2.appendChild(price2);
    divB_1.appendChild(description2);
    divB.appendChild(cuotas2);

    divE.appendChild(divE_1);
    divE_1.appendChild(tag3);
    tag3.appendChild(price3);
    divE_1.appendChild(description5);
    divE.appendChild(cuotas3);

    divC.appendChild(description3);
    divD.appendChild(description4);

    arrayProjects.map((e) => {
      switch (e.id === x.getAttribute("id")) {
        case true:
          description1.textContent = e.projectDescription1;
         // insertTable(divA);

          description2.textContent = e.projectDescription2;
         // insertTable2(divB);

          description5.textContent = e.projectDescription4;

         // el precio incluye
          description3.textContent = e.projectDescription3;
          e.projectDescription3_array.forEach((item) => {
            const divRenglon = document.createElement("div");
            const span = document.createElement("span");
            span.textContent = "\u2B52";
            span.setAttribute("style", "color:darkcyan;");
            const renglon = document.createElement("p");
            renglon.textContent = item;
            divC.appendChild(divRenglon);
            divRenglon.appendChild(span);
            divRenglon.appendChild(renglon);
          });
          
          // renovaciones
          description4.textContent = arrayProjects[0]["projectDescription4_array"][5];
          insertRenovaciones(divD);

          if (x.getAttribute("id") === "langES") {
            x.classList.add("show");
          } else {
            x.classList.add("hide");
          }
          break;
        case false:
          break;
      }
    });
  });

  parentDiv.appendChild(div);
}

export { description };
