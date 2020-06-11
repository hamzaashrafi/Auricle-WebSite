import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Message from './components/message';
import Counter from './components/counter';
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Footer from './components/footer';

const PageNotFound = () => {
  return (
    <section id="banner_parallax" className="inner_page_banner slide_banner1">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full">
              <div className="slide_cont">
                <h2>Page Not Found</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function App() {
  return (
    <Router>
        <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
        <Footer />
    </Router>
  );
}

export default App;
