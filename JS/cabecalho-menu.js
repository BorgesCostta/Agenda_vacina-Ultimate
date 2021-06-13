class MenuInterativo {
   constructor(mobileMenu, listaMenu, linksMenu) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.listaMenu = document.querySelector(listaMenu);
      this.linksMenu = document.querySelectorAll(linksMenu);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
   }

   animateLinks() {
      this.linksMenu.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      }); 
   }

   handleClick() {
      this.listaMenu.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
   }

   addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
   }

   init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
   }
}

const menuInterativo = new MenuInterativo (
   ".mobile-menu",
   ".lista-menu",
   ".lista-menu li",
 );
 menuInterativo.init();