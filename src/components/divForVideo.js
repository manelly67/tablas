import { demo_hoja_de_gestion } from "../assets/personalInfo";
import video_icon from "../assets/video.png";
import { arrayProjects } from "../assets/text-content";
import miVideo from "../assets/demo_video.mp4";

const divLinkToVideo = (content, altTxt) => {
  const screenW = window.screen.width;
  const imgW = screenW < 800 ? 150 : 200;

  const divForVideo = document.createElement("div");
  divForVideo.className = "centered";
  const text = document.createElement("p");
  text.className = "textForVideo";
  text.textContent = arrayProjects[0]["projectDescription4_array"][6];

  // cambié a video element porque android no estaba reproduciendo los enlaces de Google Vids
  const videoElement = document.createElement("video");
  videoElement.className = "video-presentacion";
  videoElement.controls = true;
  videoElement.preload = "metadata";
  /*videoElement.poster = video_icon;*/
  videoElement.playsInline = true;

  const sourceElement = document.createElement("source");
  sourceElement.src = miVideo;
  sourceElement.type = "video/mp4";

  videoElement.appendChild(sourceElement);

  // Texto de respaldo si el navegador no soporta <video>
  const fallbackText = document.createTextNode(
    "Tu navegador no soporta la reproducción de video.",
  );
  videoElement.appendChild(fallbackText);

  content.appendChild(divForVideo);
  divForVideo.appendChild(text);
  divForVideo.appendChild(videoElement);
};

export { divLinkToVideo };
