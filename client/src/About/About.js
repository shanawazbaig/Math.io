import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="center about-text">
      <p>
        Math.io is simple react web app which solve simple complex analysis problems and define most of the theroems we used the api to solve most of the problems and we implemented the voice assistant to make the web application user friendly.
      </p>
      <br />
      <h1>Math.io uses:</h1>
      <ul>
        <li>React.JS on the front end</li>
        <li>Express.js/Node.js on the back end</li>
        <li>Selenium, Mocha, Chai and Supertest for Integration/Unit tests</li>
        <li>Docker for containerization</li>
        <li>Heroku for deployment</li>
      </ul>
      <h1>Contributors:</h1>
      <ul>
        <li>N S R Jyothish Chandra</li>
        <li>Mohitha</li>
        <li>Shanawaz Baig</li>
      </ul>
      <h1>Attributions:</h1>
      <ul>
        <a href="http://products.wolframalpha.com/api/"><li>Wolfram Alpha Api</li></a>
        <a href="https://codepen.io/mrrocks/pen/EiplA"><li>Loading Spinner</li></a>
        <a href="https://codepen.io/seansean11/pen/dhwzj"><li>Pulse Animation</li></a>
        <a href="https://sweetalert.js.org/"><li>SweetAlert</li></a>
        <a href="https://gist.github.com/hsed/ef4a2d17f76983588cb6d2a11d4566d6"><li>Speech Synthesis Chunker</li></a>
        <li>Icons: <a href="https://www.flaticon.com/free-icon/microphone-black-shape_25682#term=mic&page=1&position=1">Mic</a> | <a href="https://www.flaticon.com/free-icon/left-arrow_61752#term=back%20arrow&page=1&position=17">Arrow</a></li>
      </ul>
    </div>
  );
}
export { About }