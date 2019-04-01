import React, { Component } from 'react';
import './App.css';
import GenerateQuotes from './components/GenerateQuotes'
import DisplayQuote from './components/DisplayQuote'


class App extends Component {

  state = {
    simpson : {
      quote: "Nothing you say can upset us. We're the MTV generation.",
      character: "Bart Simpson",
      image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638"
    }
  };

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        this.setState({
          simpson : data[0]
        });
    });
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simpsons quotes - the return</h1>
        </header>
        <body className="App-body">
          <GenerateQuotes selectQuote={() =>  this.getQuote()} />
          <DisplayQuote simpson={this.state.simpson}/>
        </body>
      </div>
    );
  }
}

export default App;
