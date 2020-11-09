customElements.define(
  "layout-example",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });

      shadowRoot.innerHTML = this.innerHTML;
      this.innerHTML = "";

      /* or with append child
      this.childNodes.forEach((e) => {
        shadowRoot.appendChild(e.cloneNode(true));
        setTimeout(() => e.remove(), 0);
      });
      */
    }
  }
);
