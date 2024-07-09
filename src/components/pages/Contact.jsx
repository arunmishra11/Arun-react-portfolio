import React, { useRef } from "react";
import "../../styles/about.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "../../styles/form.css";

const serviceId = "default_service";
const templateId = "template_c8segls";
const publicKey = "rZUzDLHjPiVUuMlz3";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Checks if name is empty
    if (form.current.user_name.value === "") {
      Swal.fire("Uh oh!", "Name can't be left blank.", "error");
      return;
    }

    // Checks if email is empty
    if (form.current.user_email.value === "") {
      Swal.fire("Uh oh!", "Email can't be left blank.", "error");
      return;
    }

    // Checks if message is empty
    if (form.current.message.value === "") {
      Swal.fire("Uh oh!", "Message can't be left blank.", "error");
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        console.log("Sent!");
        Swal.fire("Success!", "Message was successfully sent!", "success");
      },
      (error) => {
        console.log(error.text);
        Swal.fire("Uh oh!", "An unexpected error occurred.", "error");
      }
    );
  };

  return (
    <section className="section-container contact-main">
      <h2 className="container-title">Contact Me!</h2>

      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="user_name">Name</label>
          <input type="text" id="user_name" name="user_name" required />

          <label htmlFor="user_email">Email</label>
          <input type="email" id="user_email" name="user_email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <input className="form-btn" type="submit" value="Send" />
        </form>

        <div className="about-info">
          <p>
            <span className="bold">Name: </span>Arun K Mishra
          </p>
          <p>
            <span className="bold">Title: </span>Full Stack Software Engineer
          </p>
          <p>
            <span className="bold">Email: </span>
            <a href="mailto:arunmishra305@gmail.com">arunmishra305@gmail.com</a>
          </p>
          <p>
            <span className="bold">Phone: </span>(123) 456-7890
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

          <p>
            <br />
            If you have any questions or comments please feel free to contact
            me!
          </p>
        </div>
      </div>
    </section>
  );
};
