import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects'


function App() {
  return (
    <Router>
      <body style={{ 'background-image': '%PUBLIC_URL%/background.jpg' }}>
        <div id="navbar">
          <div id="leftnavbar">
            <div className="buttondiv">
              <Link to="/" id="titleplaceholder">Lilja/Home</Link>
            </div>
          </div>

          <div id="rightnavbar">
            <div className="buttondiv">
              <Link to="/projects" class="navbutton">Projects</Link>
            </div>
            <div className="buttondiv">
              <Link to="/about" class="navbutton">About</Link>
            </div>
            <div className="buttondiv">
              <Link to="/contact" class="navbutton">Contact</Link>
            </div>
          </div>
        </div>



        <div>
            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/projects">
                <Projects />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </div>

        <div id="footer">
          <h3>you can find my information on the pages</h3>
        </div>
      </body>
    </Router>
  );
}

export default App;
