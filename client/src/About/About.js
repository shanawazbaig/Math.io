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
    <br />
      <h1>Contributors:</h1>
      <ul>
        <li>N S R Jyothish Chandra</li>
        <li>B Mohitha</li>
        <li>Shanawaz Baig</li>
      </ul>
    </div>
  );
}
export { About }
