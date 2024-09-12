//Importar los estilos del Header
import "./Header.css";


//FUNCIÓN QUE CREA LA PLANTILLA DEL TEMPLATE
const template = () => {
    return `
    
    <nav>
      <ul>
        <li>
          <a href="#null" id="aboutLink">About me</a>
        </li>
        <li>
          <a href="#null" id="projectsLink">Projects</a>
        </li>
      </ul>
    </nav>
    `;
  };


//FUNCIÓN QUE INYECTA LA PLANTILLA

const Header = () => {
//Recupero la etiqueta Header del html
const header =document.querySelector("header"); //Con esta función busco el header de mi html
//Le inyecto el string del template al header
    header.innerHTML = template ();  
////Dentro del header | Metemos el template de arriba 

//

};

//Exportamos la función Header; //Uso el default porque es lo único que quiero que se exporte
export default Header;