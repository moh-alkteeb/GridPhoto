import React from 'react';
// import { Heading } from './components/Heading';
import { Route, Switch, Redirect } from "react-router-dom";
import GridPhoto from './components/GridPhoto';
import Header from './components/common/Header';
import About from './components/About';
import Contact from './components/Contact'
// import UnsplashImage from './components/UnsplashImage';
// import { Loader } from './components/Loader';
// import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroll-component';



function App() {
  

  return (
    <div>
      <Header/>
<Switch>
        <Route path="/" exact component={GridPhoto} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/home" to="/" />
      </Switch>
    
    </div>
  );
}

export default App;
