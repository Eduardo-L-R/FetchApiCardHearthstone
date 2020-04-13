import React from 'react';
import './App.css';

class App extends React.Component() {
  constructor(){
    super();
    this.state ={
      task:"",
    }
  }
  componentDidMount(){
    fetch('https://httpbin.org/ip')
    .then(function(response) {
        return response.text();
    })
    .then(function(data) {
        console.log('data = ', data);
    })
    .catch(function(err) {
        console.error(err);
    });
  }

  render(){
    return(
      <div>
      </div>
    )
  };
}

export default App;
