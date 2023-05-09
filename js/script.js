// Função do efeito de scroll dos links internos
function activeScrollSuave() {
  const menu = document.querySelectorAll('.header-menu li [href^="#"]');
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

activeScrollSuave();

// Função de scroll das sections
function activeScrollSection() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function scrollSection() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const ativarScroll = sectionTop - windowMetade < 0;
        if (ativarScroll) section.classList.add("ativado");
        else section.classList.remove("ativado");
      });
    }
    scrollSection();
    window.addEventListener("scroll", scrollSection);
  }
}

activeScrollSection();

function activeMenuOpacity(){
  const menu = document.querySelector(".js-menuopacity");

  window.addEventListener("scroll", (MenuOpacity) =>  {
    const diminuirOpacidade = scrollY > 0;
    if (diminuirOpacidade) menu.classList.add("ativo")
    else menu.classList.remove("ativo")
  });
}

activeMenuOpacity();