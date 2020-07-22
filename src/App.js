import React from 'react';
import './App.css';
import HomePage from './components/homepage/homepage.component.jsx';
import Header from './components/header/header.component.jsx';
import Footer from './components/footer/footer.component';
import Tools from './components/tools/tools.component.jsx';
import About from './components/about/about.component.jsx';
import Project from './components/projects/projects.component';
import {Switch, Route} from 'react-router-dom';
import Contact from './components/contact/contact.component.jsx';


function App() {
  return (
    <div className="App">
      <Header/>
     <Switch>
          <Route exact path="/" component={HomePage}/>
           <Route path="/about" component={About}/>
          <Route path="/tools" component={Tools}/>
          <Route path="/projects" component={Project}/>
          <Route path="/contact" component={Contact}/>
     </Switch>
     <Footer/>
    </div>
  );
}

export default App;
