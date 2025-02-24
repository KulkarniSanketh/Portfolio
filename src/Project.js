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
  const githubgo=()=>{
    window.open("https://github.com/KulkarniSanketh/My-Notebook");
    return;
  }

  return (
    <section id="projects" className="p-2">
      <h2>Projects</h2>
      
    </section>
  );
}

export default Project;
