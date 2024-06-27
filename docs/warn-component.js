class UserProfile extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.innerHTML = /* HTML */ `
      <!-- <div class="close" part="close">&times;</div> -->
      <div>
        <div class="name" part="name">Warning</div>
        <slot part="slotted-content"></slot>
      </div>
    `;

    const style = document.createElement("style");
    style.textContent = /* CSS */ `
        :host {
          display: block;
          aspect-ratio: 8 / 2;
          background-color: var(--card-bg-color, red);
          position: relative;
          font-size: var(--font-size, 16px);
          padding: 0.5em;

        }
        .close {
          position: absolute;
          top: 0;
          right: 0;
          color: var(--close-button-color, red);
          cursor: pointer;
          display: inline-block;
          line-height: 1;
          width: 0.7em; 
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-size: 1em;    
        }
        .close:hover {
          color: black !important;
        }
        .name {
          font-size: 0.5em;
          margin-top: 10px;
        }
        ::slotted(small) {
          text-transform: uppercase;
          font-size: 0.5em;
          font-weight: bold;
        }
      `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define("warn-component", UserProfile);
