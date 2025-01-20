import React from "react";

function Contact() {
  return (
    <div>
      <section id="contact">
        <h3 id="contact_h3">Contact</h3>
        <form action="https://api.web3forms.com/submit" id="form" method="post">
          <input
            type="hidden"
            name="access_key"
            defaultValue="be2b2366-ba03-4def-b914-74ac7e054d27"
          />
          <p>
            Name:
            <input
              name="Name"
              type="text"
              placeholder="Enter Your Name"
              required
            />
            <sup>*</sup>
          </p>
          <p>
            Phone:
            <input
              name="Phone NO"
              type="number"
              placeholder="Enter Your Phone Number"
              required
            />
            <sup>*</sup>
          </p>
          <p>
            Email:
            <input
              name="Email"
              type="email"
              placeholder="Enter Your Email"
              required
            />
            <sup>*</sup>
          </p>
          <p>
            <textarea
              name="Message"
              placeholder="Enter Your Message"
              required
              id="textarea"
            />
          </p>
          <br />
          <button id="button">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
