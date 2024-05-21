import "bulma/css/bulma.css";
import "./App.css";
import Angular from "./assets/images/angular.png";
import Jest from "./assets/images/jest.jpeg";
import ReactLogo from "./assets/images/react.png";
import Vue from "./assets/images/vue-js.png";
import Course from "./Course";

function App() {
  return (
    <div className="App">
      <section class="hero is-success">
        <div class="hero-body">
          <p class="title">Courses</p>
          <p class="subtitle">Available Front-End Courses.</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                title="React"
                description="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript
                library for building user interfaces based on components. It is maintained by Meta (formerly Facebook)
                 and a community of individual developers and companies. One of the most used frameworks."

                image={ReactLogo}
              />
            </div>

            <div className="column">
              <Course
                title="Angular"
                description="Angular also referred to as Angular 2+ is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. 
                Angular is a complete rewrite from the same team that built AngularJS."
                image={Angular}
              />
            </div>

            <div className="column">
              <Course
                title="Vue.js"
                description="LVue.js commonly referred to as Vue; pronounced view 4is an open-source model view viewmodel front end JavaScript library for building user interfaces and single-page applications.
                10 It was created by Evan You, and is maintained by him and the rest of the active core team members."
                image={Vue}
              />
            </div>

            <div className="column">
              <Course
                title="Jest"
                description="Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
                 It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.Jest is well-documented and requires little configuration"
                image={Jest}
              />
            </div>
          </div>
        </section>
      </div>

      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            Created by <strong>Oguzhan Aydin</strong>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
