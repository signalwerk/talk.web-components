class UserProfile extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.innerHTML = /* HTML */ `
      <!-- <div class="close" part="close">&times;</div> -->
      <div>
        <div class="name" part="name">Warning</div>
        <div class="content">
          <slot part="slotted-content"></slot>
        </div>
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
          /* padding: 0.5em; */

        }
        .name {
          font-size: 0.5em;
          padding: 0.25em  0.5em;
          background-color: black;
          color: white;
        }
        .content {
          padding: 0.5em;
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
