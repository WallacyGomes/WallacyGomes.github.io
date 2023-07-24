export default function activeMenuMobile() {
  const menuBtn = document.querySelector(".menu-btn");
  const header = document.querySelector(".header");
  let btnclicado = true;

  //Função para abrir ou fechar o menu mobile
  function openMenu() {
    if (btnclicado === true) {
      const menuContentContainer = document.createElement("div");
      menuContentContainer.classList.add("menu-content-container");
      menuBtn.classList.add("aberto");
      header.appendChild(menuContentContainer);

      const ulMenuContent = document.createElement("ul");
      ulMenuContent.classList.add("menu-content");
      menuContentContainer.appendChild(ulMenuContent);

      const sobreMenuContent = document.createElement("a");
      sobreMenuContent.setAttribute("href", "#sobre");
      const sobreText = document.createTextNode("Sobre");
      sobreMenuContent.appendChild(sobreText);
      ulMenuContent.appendChild(sobreMenuContent);

      const portfolioMenuContent = document.createElement("a");
      portfolioMenuContent.setAttribute("href", "#portfolio");
      const portfolioText = document.createTextNode("Portfolio");
      portfolioMenuContent.appendChild(portfolioText);
      ulMenuContent.appendChild(portfolioMenuContent);

      const contatoMenuContent = document.createElement("a");
      contatoMenuContent.setAttribute("href", "#contato");
      const contatoText = document.createTextNode("Contato");
      contatoMenuContent.appendChild(contatoText);
      ulMenuContent.appendChild(contatoMenuContent);

      btnclicado = false;
    } else {
      const novaDIV = document.querySelector(".menu-content-container");
      novaDIV.remove();
      menuBtn.classList.remove("aberto");
      btnclicado = true;
    }
  }

  menuBtn.addEventListener("click", openMenu);
}