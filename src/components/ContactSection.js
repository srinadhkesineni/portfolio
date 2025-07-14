import React from "react";
// import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to get in touch with me!</p>

      <div className="contact-info">
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>Ongole, India</span>
        </div>
        <div className="info-item">
          <i className="fas fa-envelope"></i>
          <span>srinadhkesineni7@example.com</span>
        </div>
      </div>

      <form
        className="contact-form"
        action="https://formspree.io/f/mdkdnprn"
        method="POST"
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
