import "./Footer.css";
import { Button } from "../Button/Button";


//* /Creo la plantilla (que es una función que retorna un string)
/* export const Footer = () => `

<h2>Contact</h2>
<div>
${Button("/icons/twitter.png", "Twitter")}
${Button("/icons/github.png", "GitHub")}
${Button("/icons/linkedin.png", "LinkedIn")}
${Button("/icons/telegram.png", "Telegram")}
</div>
`;


import "./Footer.css"

const template = () => {
return `
<p> Copyright 2024 - Juan Carlos </p>

`;

};

const Footer = () => {
const Footer = document.querySelector("footer");
Footer.innerHTML = template();

};

export default Footer; 
 
  */
// Función para generar la plantilla del footer, incluyendo el texto de copyright y los botones.
const template = () => {
    return `
      <h2>Explore My Networks</h2>
      <div>
        ${Button("/twittericon.png", "Twitter")}
        ${Button("/icongithub.jpeg", "GitHub")}
        ${Button("/linkdnicon.jpeg", "LinkedIn")}
        ${Button("/telegramicon.png", "Telegram")}
      </div>
      <p>Copyright 2024 - Juan Carlos Dahdah</p>
    `;
  };
  
  // Función para renderizar el footer en el DOM.
  const Footer = () => {
    const footerElement = document.querySelector("footer");
    footerElement.innerHTML = template(); 
    //Se puede abreviar así:
   /*  document.querySelector("footer").innerHTML = template(); */ //Busco el Footer y directamente le meto el template
  };
  
  export default Footer;