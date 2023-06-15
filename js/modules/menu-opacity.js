// Reduz a opacidade do menu quando estiver em scroll
export default function activeMenuOpacity() {
    const menu = document.querySelector("[data-menu-opacity]");
  
    window.addEventListener("scroll", (MenuOpacity) => {
      const diminuirOpacidade = scrollY > 0;
      if (diminuirOpacidade) menu.classList.add(menu.dataset.menuOpacity);
      else menu.classList.remove(menu.dataset.menuOpacity);
    });
}