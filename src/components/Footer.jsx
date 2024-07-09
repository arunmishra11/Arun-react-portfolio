import React from "react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer>
      <h3>Check me out! :</h3>

      <a
        href="https://github.com/arunmishra11"
        target="_blank"
        rel="noreferrer"
        className="icon-container"
      >
        <i className="bi bi-github"></i>
        <p>GitHub</p>
      </a>

      <a
        href="https://www.linkedin.com/in/arun-mishra-558367110/"
        target="_blank"
        rel="noreferrer"
        className="icon-container"
      >
        <i className="bi bi-linkedin"></i>
        <p>LinkedIn</p>
      </a>

      <a
        href="https://x.com/home"
        target="_blank"
        rel="noreferrer"
        className="icon-container"
      >
        <i className="bi bi-twitter"></i>
        <p>Twitter</p>
      </a>
    </footer>
  );
}

export default Footer;
