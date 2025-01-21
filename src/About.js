import React from "react";

function About() {
  return (
    <div id="skills">
      <section id="about">
        <h2 id="about_me_h2" class='p-2 border-dark m-lg-0'>ABOUT ME</h2>
        <br />
        <p>
          Hi, I’m Sanketh Kulkarni, a web developer skilled in front-end
          development with a strong foundation in data structures and
          algorithms. I’m passionate about building responsive and user-friendly
          websites that balance design and functionality.
        </p>
        <br />
        <h2>--------\\\///--------</h2>
        <br />
        <div id="explore">
          <div className="design">
            <h3>DESIGN</h3>
            <p>
              I craft designs tailored to your vision, ensuring an intuitive and
              engaging user experience that reflects your brand.
            </p>
          </div>
          <div className="Development">
            <h3>DEVELOPMENT</h3>
            <p>
              I build robust, scalable solutions from the ground up, integrating
              the latest technologies to bring your ideas to life
            </p>
          </div>
          
        <div className="maintenance">
          <h3>MAINTENANCE</h3>
          <p>
            I provide ongoing support to keep your site running smoothly, with
            regular updates <br /> and optimizations for peak performance.
          </p>
        </div>
        </div>
        <br />
        <h2>--------\\\///--------</h2>
        <br />
      </section>
    </div>
  );
}

export default About;
