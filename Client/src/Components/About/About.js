import React from 'react';
import aboutstyle from './About.module.scss';

export default function About() {
  return (
    <div className={aboutstyle.header}>
      <h2>React & Node</h2>

      <hr />

      <div className={aboutstyle.aboutContent}>
        <div>
          <a href="https://reactjs.org/" target="_blank">
            React.js :
          </a>
          <p>React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.</p>
          <a href="https://nodejs.org/en/about/" target="_blank">
            Node.js :
          </a>
          <p>Node.js is an open-source, cross-platform, back-end, JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
        </div>
      </div>
    </div>
  );
}
