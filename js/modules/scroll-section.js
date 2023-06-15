// Função de scroll das sections
export default function activeScrollSection() {
    const sections = document.querySelectorAll("[data-scroll-suave]");
    console.log(sections)
    if (sections.length) {
      const windowMetade = window.innerHeight * 0.6;
  
      function scrollSection() {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top;
          const ativarScroll = sectionTop - windowMetade < 0;
          if (ativarScroll) section.classList.add(section.dataset.scrollSuave);
          else section.classList.remove(section.dataset.scrollSuave);
        });
      }
      scrollSection();
      window.addEventListener("scroll", scrollSection);
    }
}