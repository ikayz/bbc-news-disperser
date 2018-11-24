import React, { Component } from 'react';
import Nav from './components/nav';
import Footer from './components/footer';
import './css/main.css';
import NewsList from './components/news_list.1';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <NewsList />
        <Footer/>
      </div>
    );
  }
}

export default App;
