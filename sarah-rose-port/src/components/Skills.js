import "../Skills.css";
import React from "react";
import styled, { css } from "styled-components";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skillsContainer">
        <div className="skill">
          <i class="devicon-slack-plain"></i> <p className="language">slack</p>{" "}
          <br></br>
          <i class="devicon-trello-plain"></i>{" "}
          <p className="language">trello</p>
          <br></br>
          <i class="devicon-visualstudio-plain"></i>{" "}
          <p className="language">vscode</p>
          <br></br>
        </div>
        <div className="skill">
          <i class="devicon-git-plain"></i> <p className="language">git</p>
          <br></br>
          <i class="devicon-npm-original-wordmark"></i>{" "}
          <p className="language">npm</p>
          <br></br>
          <i class="devicon-chrome-plain tooltip" title="Chrome"></i>{" "}
          <p className="language">chrome</p>
          <br></br>
        </div>
        <div className="skill">
          <i class="devicon-github-original tooltip" title="Github"></i>{" "}
          <p className="language">github</p>
          <br></br>
          <i class="devicon-apple-original tooltip" title="macOS"></i>{" "}
          <p className="language">macOS</p>
          <br></br>
          <i class="devicon-codepen-plain tooltip" title="Codepen"></i>{" "}
          <p className="language">codepen</p>
          <br></br>
        </div>
        <div className="skill">
          <i class="devicon-html5-plain"></i> <p className="language">html5</p>
          <br></br>
          <i class="devicon-css3-plain"></i> <p className="language">css3</p>
          <br></br>
          <i class="devicon-javascript-plain " title="Javascript"></i>{" "}
          <p className="language">javascript</p>
          <br></br>
        </div>
        <div className="skill">
          <i class="devicon-react-original"></i>{" "}
          <p className="language">reactJS</p>
          <br></br>
          <i class="devicon-redux-original tooltip" title="redux"></i>{" "}
          <p className="language">redux</p>
          <br></br>
          <i class="devicon-nodejs-plain"></i>
          <p className="language">node</p>
          <br></br>
        </div>
      </div>
      <h3>NEXT ON THE AGENDA</h3>
      MATERIAL UI | SWIFT | REACT NATIVE | FLUTTER | TYPESCRIPT
    </div>
  );
};

export default Skills;
