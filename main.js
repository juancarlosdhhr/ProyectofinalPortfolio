import './style.css'

//Importo Componentes:

import Header from "./components/Header/Header.js"; //Esta función inyecta el string en el Header
import Footer from "./components/Footer/Footer.js";
import AboutMe from "./pages/AboutMe/AboutMe.js"; 
import { Projects } from "./pages/Projects/Projects.js";
import { WavyBackground } from "./components/Background/Background.js";
import { ThemeButton } from "./components/ThemeButton/Themebutton.js";

// Inicializar el botón de tema al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  ThemeButton();
});



/* import { changeTheme } from "./components/Navbar/Navbar";
import { linkPage } from "./utils/linkPage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";

 */

//Y ahora podemos hacer una función adicional (opcional):

const create = () => {
  document.body.innerHTML += WavyBackground();
//Aquí yo voy a ir lanzando las piezas que quiero que aparezcan en mi página

    //Lanzo Header
    Header(); 

    //Lanzo Footer

    Footer ();

   
    //Lanzo AboutMe

    AboutMe ();

    


      //Recupero los links y les añado un evento click que pinten About Me y Projects 
document.querySelector("#aboutLink").addEventListener("click", () => AboutMe());

document.querySelector("#projectsLink").addEventListener("click", () => Projects());
   

// De forma que tendríamos aquí toda la pila de la construcción de la página
};

//Lo único que ejecutamos aquí es la función create
create()


//Fondo pantalla:






  
 
  

  




