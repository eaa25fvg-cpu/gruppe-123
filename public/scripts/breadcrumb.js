import { ellipse } from "motion/react-client";

class Breadcrumb extends HTMLElement {
    constructor() {
      super();

      const root = this.attachShadow({ mode: 'open' });

      // Laver elementerne
      const wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      
      const firstItem = document.createElement('button');
      firstItem.classList.add('nav-button');

      const lastItem = document.createElement('button');
      lastItem.classList.add('nav-button');


      firstItem.textContent = '1. Vælg sange'
      lastItem.textContent = '2. Betaling'

      const style = document.createElement('style');
      style.textContent = `

      .wrapper {
      display: flex;
      gap: 12px;
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
      } else if (path === '/discover') {
        firstItem.classList.add('active')
      }


    }
}
customElements.define('nav-breadcrumb', Breadcrumb);