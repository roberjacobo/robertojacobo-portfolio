import React from "react";

import "../../styles/components/whatido.css";

const Whatido = () => {
  return (
    <>
      <h2>What I Do</h2>
      <div className="whatido-container">
        <div className="skills-container">
          <div className="foreground"></div>
          <div className="javascript-container"></div>
          <div className="node-container"></div>
          <div className="react-container"></div>
          <div className="mongodb-container"></div>
          <div className="gatsby-container"></div>
          <div className="github-container"></div>
          <div className="graphQL-container"></div>
          <div className="google-cloud-container"></div>
          <div className="css-container"></div>
          <div className="html-container"></div>
          <div className="bootstrap-container"></div>
          <div className="java-container"></div>
          <div className="sql-container"></div>
        </div>
      </div>
    </>
  );
};

export default Whatido;
