import React, { useState } from "react";
import book from "./Images/open-book.png";

function Project() {
  const github = "https://github.com/KulkarniSanketh/My-Notebook";

  // State for tracking flipped cards
  const [flipped, setFlipped] = useState([false, false]);

  // Toggle flip state
  const toggleFlip = (index) => {
    setFlipped((prevState) =>
      prevState.map((isFlipped, i) => (i === index ? !isFlipped : isFlipped))
    );
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project_info">
        {/* Project 1 */}
        <div
          className={`info1 ${flipped[0] ? "flipped" : ""}`}
          onClick={() => toggleFlip(0)}
        >
          <div className="front">
            <p>
              "MY Notebook" is designed with students in mind, providing an
              all-in-one platform to manage your academic progress and stay
              organized.
            </p>
            <img src={book} alt="Notebook" />
            <small>Click me</small>
          </div>
          <div className="back">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
            </ul>
            <button>
              <a href={github} target="_blank" rel="noopener noreferrer">
                Visit My Notebook
              </a>
            </button>
          </div>
        </div>

        {/* Project 2 */}
        <br />
      </div>
    </section>
  );
}

export default Project;
