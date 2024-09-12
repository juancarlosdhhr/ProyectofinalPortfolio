import "./AboutMe.css";
import { cleanPage } from "../../components/../utils/cleanPage";

const template = () => {
  return `
 
    <section id="aboutme">
    <p>Welcome, I am</p>
   <h1 class="typing-effect">Juan Carlos Dahdah</h1>
   
        <img src="/mypicture.jpg" alt="Foto de perfil de Juan Carlos"/> 

    <p class="description">Full Stack Software Development student in the Prometeo program at The Power Business School, I am actively honing my skills to create cutting-edge web and application solutions. Based in Tenerife, Canary Islands, I am dedicated to mastering the craft of software development to build impactful digital products.

My background in psychology enriches my approach to development, providing valuable insights into user behavior and experience. This unique combination allows me to design intuitive, user-centered solutions that make the difference.

Currently, I am deeply involved in developing various projects, applying and expanding my technical skills to deliver innovative and effective solutions in the tech industry.

</p>
    <a href="mailto:juancadah@gmail.com" class="contact-link">Contact Me →</a>


    
    

    </section>
    `;
    };

const AboutMe = () => {
document.querySelector("main").innerHTML = template();
};

export default AboutMe;


