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
          <div class="form-floating mb-3 border border-1 border-dark">
            <input
              type="text"
              class="form-control"
              name="Name"
              id="Name"
              placeholder=""
            />
            <label for="Name">Name</label>
          </div>
          <div class="form-floating mb-3 border border-1 border-dark">
            <input
              type="tel"
              class="form-control"
              name="Mobile"
              id="Mobile"
              placeholder=""
            />
            <label for="Mobile">Mobile No</label>
          </div>
          <div class="form-floating mb-3 border border-1 border-dark">
            <input
              type="email"
              class="form-control"
              name="Email"
              id="Email"
              placeholder=""
            />
            <label for="Email">Email</label>
          </div>
          <div class="mb-3">
            <label for="Message" class="form-label"></label>
            <textarea class="form-control border border-1 border-dark" name="Message" id="Message" rows="3" placeholder="Write your message"></textarea>
          </div>
          <br />
          <button id="button">Submit</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
