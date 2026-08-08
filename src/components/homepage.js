import photo_MN from "../assets/photo-footer.png";
import { toggleButton } from "./toggleButton";
import { content_ES } from "./content_ES";
import { insertImg } from "./insertImage";
import { footerDiv } from "./footerDiv";
import { addCoffeetea } from "./coffeeteaDiv";

function homepage() {
  const root = document.documentElement;
  root.setAttribute("lang", "en");
  root.setAttribute("id", "root-element");
  root.className = "light";

  const divButtons = document.createElement("div");
  divButtons.className = "setButtons";
  const toggle = toggleButton(root);
  const linkToEN = document.createElement("a");
  linkToEN.textContent = "EN";
  linkToEN.href = "https://manelly67.github.io/tablas_en/";
  linkToEN.target = "_blank";
  linkToEN.rel = "noopener noreferrer";
  const linkToPT = document.createElement("a");
  linkToPT.textContent = "PT";
  linkToPT.href = "https://manelly67.github.io/tablas_pt/";
  linkToPT.target = "_blank";
  linkToPT.rel = "noopener noreferrer";

  const main = document.createElement("main");
  const content = document.createElement("section");

  content_ES(content);

  document.body.appendChild(main);
  main.appendChild(divButtons);
  main.appendChild(content);

  divButtons.appendChild(toggle);
  divButtons.appendChild(linkToEN);
  divButtons.appendChild(linkToPT);

  const mn_image = new Image();
  mn_image.src = photo_MN;
  const div = document.createElement("div");
  div.className = "divImgPhoto";
  divButtons.appendChild(div);
  insertImg(
    div,
    mn_image.src,
    "maria nelly lopez image",
    "photoImg",
    "145px",
    "145px",
  );

  footerDiv(content);
  addCoffeetea(content);
}

export { homepage };
