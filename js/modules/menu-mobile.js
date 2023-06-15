export default function activeMenuMobile() {
    const corpo = document.querySelector("body");
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
  
        const tecnologiasMenuContent = document.createElement("a");
        tecnologiasMenuContent.setAttribute("href", "#tecnologias");
        const tecnologiasText = document.createTextNode("Tecnologias");
        tecnologiasMenuContent.appendChild(tecnologiasText);
        ulMenuContent.appendChild(tecnologiasMenuContent);
  
        const portfolioMenuContent = document.createElement("a");
        portfolioMenuContent.setAttribute("href", "#portfolio");
        const portfolioText = document.createTextNode("Portfolio");
        portfolioMenuContent.appendChild(portfolioText);
        ulMenuContent.appendChild(portfolioMenuContent);
  
        const certificadosMenuContent = document.createElement("a");
        certificadosMenuContent.setAttribute("href", "#certificados");
        const certificadosText = document.createTextNode("Certificados");
        certificadosMenuContent.appendChild(certificadosText);
        ulMenuContent.appendChild(certificadosMenuContent);
  
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
  
    //Verificando se a tela não é mais mobile
    window.addEventListener("resize", () => {
      const novaDiv = document.querySelector(".menu-content-container");
  
      if (window.innerWidth > 600) {
        novaDiv.classList.add("desativado");
      } else {
        novaDiv.classList.remove("desativado");
      }
    });
}