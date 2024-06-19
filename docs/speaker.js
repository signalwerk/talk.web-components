class VideoButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: none;
          }
          :host(.show) {
            display: flex;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        </style>
        <video autoplay></video>
      `;
  }

  connectedCallback() {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        this.shadowRoot.querySelector("video").srcObject = stream;
        // this.classList.add("show");
      })
      .catch((error) => {
        console.error("Error accessing the camera", error);
      });

    document.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  handleKeydown(event) {
    if (event.ctrlKey && event.key === "h") {
      this.classList.toggle("show");
    } else if (event.ctrlKey && event.key === "f") {
      this.classList.toggle("big");
      this.classList.add("show");
    }
  }
}

customElements.define("video-button", VideoButton);
