// Função de scroll das sections
export default function activeScrollSection() {
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