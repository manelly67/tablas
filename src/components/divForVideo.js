import { demo_hoja_de_gestion } from "../assets/personalInfo";
import video_icon from "../assets/video.png";
import { arrayProjects } from "../assets/text-content";

const divLinkToVideo = (content, altTxt) => {
  const screenW = window.screen.width;
  const imgW = screenW < 800 ? 150 : 200;
  
  const divForVideo = document.createElement("div");
  divForVideo.className = "centered";
  const text = document.createElement("p");
  text.className = "textForVideo";
  text.textContent = arrayProjects[0]["projectDescription4_array"][6];
  const video = document.createElement("a");
  const imgVideo = document.createElement("img");
  const imgVid = new Image();
  imgVid.src = video_icon;

  imgVideo.setAttribute("src", imgVid.src);
  imgVideo.setAttribute("alt", altTxt);
  imgVideo.setAttribute("width", imgW);
  imgVideo.setAttribute("height", "auto");

  video.setAttribute("href", demo_hoja_de_gestion);
  video.setAttribute("target", "_blank");
  video.setAttribute("rel", "noopener noreferrer");

  content.appendChild(divForVideo);
  divForVideo.appendChild(text);
  divForVideo.appendChild(video);
  video.appendChild(imgVideo);
};

export { divLinkToVideo };