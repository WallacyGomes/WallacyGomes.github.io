// Reduz a opacidade do menu quando estiver em scroll
export default function activeMenuOpacity() {
    const menu = document.querySelector(".js-menuopacity");
  
    window.addEventListener("scroll", (MenuOpacity) => {
      const diminuirOpacidade = scrollY > 0;
      if (diminuirOpacidade) menu.classList.add("ativo");
      else menu.classList.remove("ativo");
    });
}