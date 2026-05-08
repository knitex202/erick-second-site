import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import erickcontactimage from "../Assets/galleryImages/erick-contact-image.png";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formdata = new FormData(form.current);
    const data = Object.fromEntries(formdata.entries());

    emailjs
      .send(
        "Customer_Input_knite",
        "template_ufetdcp",
        data,
        "J56SqAg1nmqQT3-C2"
      )
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <main className="screen-page">
      <section className="contact-screen">
        <img src={erickcontactimage} alt="Erick Cedeno portrait" className="contact-bg" />
        <div className="contact-shade" />

        <div className="contact-content">
          <h1 className="page-heading">Contact</h1>
          <p>For bookings and inquiries, please get in touch.</p>

          <form ref={form} onSubmit={handleSubmit} className="reference-form">
            <label>
              <span>Name</span>
              <input name="name" type="text" placeholder="Your name" required />
            </label>

            <label>
              <span>Email</span>
              <input
                name="user_email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea name="message" placeholder="Your message" rows="6" required />
            </label>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending" : "Send message"}
              <span>-></span>
            </button>

            {status === "sent" ? <p className="form-note">Message sent.</p> : null}
            {status === "error" ? (
              <p className="form-note form-note-error">Message failed. Please try again.</p>
            ) : null}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
