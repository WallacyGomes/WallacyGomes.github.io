// Função do efeito de scroll dos links internos
export default function activeScrollSuave() {
    const menu = document.querySelectorAll('a[href^="#"]');
    if (menu.length) {
      function scrollSuave(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const linkar = document.querySelector(href);
        linkar.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }
      menu.forEach((link) => {
        link.addEventListener("click", scrollSuave);
      });
    }
}