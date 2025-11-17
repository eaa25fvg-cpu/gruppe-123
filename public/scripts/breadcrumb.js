class Breadcrumb extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: 'open' });

      // Laver elementerne
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      
      const firstItem = document.createElement('a');
      firstItem.classList.add('nav-button');
      firstItem.setAttribute("href", "/discover.html");

      const lastItem = document.createElement('a');
      lastItem.classList.add('nav-button');
      lastItem.setAttribute("href", "/checkout.html");


      firstItem.textContent = '1. Vælg sange'
      lastItem.textContent = '2. Betaling'

      const style = document.createElement('style');
      style.textContent = `

      .wrapper {
      align-self: center;
      justify-content: center;
      display: flex;
      gap: 12px;
      margin-bottom: 32px;
      }

      .nav-button {
      font-family: "Inter", sans-serif;
      font-size: 18px;
      font-weight: 600;
      line-height: normal;
      padding: 4px;
      background-color: transparent;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.60);
      text-decoration: none;
      }

      .nav-button.active {
      color: #fff;
      }

      .nav-button:hover {
      background-color: background: rgba(255, 255, 255, 0.20);
      }
      `

      root.append(style, wrapper);
      wrapper.append(firstItem, lastItem)


      const path = window.location.pathname;
      if (path === '/discover.html') {
        firstItem.classList.add('active')
      } else if (path === '/checkout.html') {
        lastItem.classList.add('active')
      }


    }
}
customElements.define('nav-breadcrumb', Breadcrumb);