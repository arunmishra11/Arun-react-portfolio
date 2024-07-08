import React from "react";
import Project from "./Project";
import "../../styles/project.css";

// Importing project screenshots
import ArunBlog from "../../assets/project-img/personalblog.png";
import weatherapp from "../../assets/project-img/weatherapp.png";
import Fitnesspal from "../../assets/project-img/fitnesspal.png";
import employeeTracker from "../../assets/project-img/employee-tracker.png";
import socialNetwork from "../../assets/project-img/social-network-api.png";
import horiseon from "../../assets/project-img/horiseon.png";

function ProjectPage() {
  return (
    <section className="section-container">
      <h2 className="container-title">Projects</h2>
      <div className="project-container">
        <Project
          title="Arun's personal Blog"
          src={ArunBlog}
          deployedLink="https://arunmishra11.github.io/Personal-Blog/"
          sourceLink="https://github.com/arunmishra11/Personal-Blog"
          alt="Screenshot of Arun's personal blog"
        />

        <Project
          title="Weather App"
          src={weatherapp}
          deployedLink="https://arunmishra11.github.io/weatherapp/"
          sourceLink="https://github.com/arunmishra11/weatherapp"
          alt="Screenshot of Weather app"
        />

        <Project
          title="YourFitnessPal"
          src={Fitnesspal}
          deployedLink="https://arunmishra11.github.io/Yourfitnesspal//"
          sourceLink="https://github.com/arunmishra11/Yourfitnesspal"
          alt="Screenshot of yourfitness pal app"
        />

        <Project
          title="Employee Tracker"
          src={employeeTracker}
          deployedLink=""
          sourceLink="https://github.com/arunmishra11/Employeetracker"
          alt="Screenshot of Employee Tracker app"
        />

        <Project
          title="Social Network API"
          src={socialNetwork}
          deployedLink=""
          sourceLink="https://github.com/arunmishra11/Social-network-API"
          alt="Screenshot of API data retrieved in Insomnia"
        />

        <Project
          title="Horiseon Project"
          src={horiseon}
          deployedLink="https://arunmishra11.github.io/Challenge01-horiseon/"
          sourceLink="https://github.com/arunmishra11/Challenge01-horiseon"
          alt="Screenshot of Horiseon project"
        />
      </div>
    </section>
  );
}

export default ProjectPage;