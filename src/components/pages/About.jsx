import React from "react";
import ProfilePic from "../../assets/img/me-profile.png";
import "../../styles/about.css";

function About() {
  return (
    <section className="section-container">
      <div className="top-row">
        <img id="img-of-me" src={ProfilePic} alt="Arun Mishra" />
        <div className="about-info">
          <p>
            <span className="bold">Name: </span>Arun Mishra
          </p>
          <p>
            <span className="bold">Title: </span>Full Stack Software Engineer
          </p>
          <p>
            <span className="bold">Email: </span>arunmishra305@gmail.com
          </p>
          <p>
            <span className="bold">Phone: </span>(123) 456-789
          </p>
          <p>
            <span className="bold">LinkedIn: </span>
            <a
              href="https://www.linkedin.com/in/arun-mishra-558367110/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              Arun Mishra
            </a>
          </p>
          <p>
            <span className="bold">Github: </span>
            <a
              href="https://github.com/arunmishra11"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              arunmishra11
            </a>
          </p>
        </div>
      </div>

      <div className="middle-row">
        <div className="m-column">
          <h2 className="about-header">About Me</h2>
          <p>
            My name is Arun Mishra and I am a DFW based software
            engineer! I am currently working as an Infrastructure Engineer at USAA mostly working on Linux Environments.I am now looking for opportunities to
            start the next chapter of my career!
            <br /> <br /> I am always excited to learn new skills and concepts
            and I am ready for wherever life takes me next!
          </p>
        </div>

        <div className="m-column">
          <h2 className="about-header">Education</h2>

          <div className="ed-container">
            <h3 className="school-name bold">
              Southeast Missouri State University, Cape Girardeau
            </h3>
            <p>BS in Cellular Biology</p>
            <p>May 2012</p>
          </div>

          <div className="ed-container">
            <h3 className="school-name bold">
              Harrisburg University of Science and Technology, Harrisburg
            </h3>
            <p>Masters in Project Management</p>
            <p>May 2017</p>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <h2 className="about-header">Experience</h2>

        <div className="ed-container">
          <h3 className="school-name bold">Bed Bath & Beyond</h3>
          <p>Web System Engineer</p>
          <p>October 2013 – 2016</p>
        </div>

        <div className="ed-container">
          <h3 className="school-name bold">
            USAA
          </h3>
          <p>Infrastructure Engineer</p>
          <p>October 2016 – Present</p>
        </div>

        <div className="ed-container">
          <h3 className="school-name bold">UT Austin</h3>
          <p>Freelance - Full-Stack Software Engineer</p>
          <p>February 2024 – July 2024</p>
        </div>
      </div>
    </section>
  );
}

export default About;
