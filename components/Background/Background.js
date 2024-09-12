 // components/effects/WavyBackground.js

import "./Background.css";


export const WavyBackground = () => {
    const backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("wavy-background");
    return backgroundDiv.outerHTML;
  };
   