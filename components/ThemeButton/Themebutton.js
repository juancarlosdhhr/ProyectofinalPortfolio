

import "./Themebutton.css";

export const ThemeButton = () => {
    // Crear el botón de tema
    const button = document.createElement("button");
    button.id = "theme-toggle";
    button.setAttribute("aria-label", "Toggle Theme");
  
    // Crear imágenes de la bombilla
    const lightIcon = document.createElement("img");
    lightIcon.src = "/bombilla.png";  
    lightIcon.alt = "Light Theme Icon";
    lightIcon.classList.add("light-icon");
  
    const darkIcon = document.createElement("img");
    darkIcon.src = "/bombilla.png";  
    darkIcon.alt = "Dark Theme Icon";
    darkIcon.classList.add("dark-icon");
  
    // Añadir las imágenes al botón
    button.appendChild(lightIcon);
    button.appendChild(darkIcon);
  
    // Añadir evento al botón
    button.addEventListener("click", () => {
      if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
      }
    });
  
    // Cambiar el tema claro/oscuro
    const currentTheme = localStorage.getItem("theme") || "light";
    if (currentTheme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  
    document.querySelector("header").appendChild(button);
  };

  
  