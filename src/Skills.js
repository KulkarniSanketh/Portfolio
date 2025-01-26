import React from "react";
import html from "./Images/html_logo.png"
import css from "./Images/css_logo.png"
import js from "./Images/js_logo.png"
import mysql from "./Images/mysql_logo.png"
import bootstrap from "./Images/bootstrap_logo.png"
import react_logo from "./Images/react_logo.png"
import mongodb from "./Images/mongodb_logo.png"
import nodejs from "./Images/nodejs_logo.png"
import c from "./Images/c_logo.png"
import java from "./Images/java_logo.png"
import python from "./Images/python_logo.png"

function Skills() {
  return (
    <>
      <section id="skills">
        <h2 id="Skills" class='p-2'>SKILLS</h2>
        <h3>Using Now:</h3>
        <div className="Images">
          <div>
            <img className="p-2" src={html} alt="NA"/>
            <br />
            <small>HTML</small>
          </div>
          <div>
            <img className="p-2" src={css} alt="NA" />
            <br />
            <small>CSS</small>
          </div>
          <div>
            <img className="p-2" src={js} alt="NA" />
            <br />
            <small>JAVASCRIPT</small>
          </div>
          <div>
            <img className="p-2"  src={mysql} alt="NA" />
            <br />
            <small>MYSQL</small>
          </div>
          <div>
            <img className="p-2" src={bootstrap} alt="NA" />
            <br />
            <small>BOOTSTRAP</small>
          </div>
          <div>
            <img className="p-2" src={react_logo} alt="NA" />
            <br />
            <small>REACT</small>
          </div>
        </div>
        <br />
        <br />
        <h3>Learning:</h3>
        <div className="Images">
          <div>
            <img className="p-2"  src={mongodb} alt="NA" />
            <br />
            <small>MONGODB</small>
          </div>
          <div>
            <img className="p-2" src={nodejs} alt="NA" />
            <br />
            <small>NODEJS</small>
          </div>
        </div>
        <br />
        <br />
        <h3>Other Skills:</h3>
        <div className="Images">
          <div>
            <img className="p-2" src={c} alt="NA" />
            <br />
            <small>C</small>
          </div>
          <div>
            <img className="p-2" src={java} alt="NA" />
            <br />
            <small>JAVA</small>
          </div>
          <div>
            <img className="p-2" src={python} alt="NA" />
            <br />
            <small>PYTHON</small>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
