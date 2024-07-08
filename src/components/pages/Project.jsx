import React from "react";

function Project({ title, src, deployedLink, sourceLink, alt }) {
  if (deployedLink) {
    return (
      <article className="project">
        <h2 className="project-title">{title}</h2>
        <img className="project-img" src={src} alt={alt} />
        <div className="button-container">
          <a href={deployedLink} target="_blank">
            <button>Deployed App</button>
          </a>
          <a href={sourceLink} target="_blank">
            <button>Source Code</button>
          </a>
        </div>
      </article>
    );
  } else {
    return (
      <article className="project">
        <h2 className="project-title">{title}</h2>
        <img className="project-img" src={src} alt={alt} />
        <div className="button-container">
          <a href={sourceLink} target="_blank">
            <button>Source Code</button>
          </a>
        </div>
      </article>
    );
  }
}

export default Project;