import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects'


function App() {

  var winScroll = document.documentElement.scrollTop || window.pageYOffset;

  function hideHeadFoot() {
    var header = document.getElementById('navbar');
    var buttons = document.getElementsByClassName('navbutton');
    var title = document.getElementById('titleplaceholder');

    var st = window.pageYOffset || document.documentElement.scrollTop;
    
    if (winScroll < st) {
      header.style.height = "0px";
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.fontSize = '0px';
      }
      title.style.fontSize = '0px';
    } else {
      header.style.height = "100px";
      for (let index = 0; index < buttons.length; index++) {
        buttons[index].style.fontSize = '24px';
      }
      title.style.fontSize = '40px';
    }
    winScroll = st <= 0 ? 0 : st;
  };

  window.onscroll = () => { hideHeadFoot() };

  return (
    <Router>
      <body style={{ 'background-image': '%PUBLIC_URL%/background.jpg' }}>
        <div id="page-container">
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

          <div id="content-wrap">
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
            <h3>you can find my information on the <Link to="/contact" styling={{"text-decoration" : "none"}}>contact page</Link></h3>
          </div>
        </div>
      </body>
    </Router>
  );
}

export default App;
