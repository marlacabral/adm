import React, { Component } from 'react';
import api from './api';


class App extends Component{

  async componentDidMount(){
    const response = await api.get('/cadastro');

    console.log(response.data);
  }
  render(){
    return(
      <div>
        <h1>Bem vindo</h1>
      </div>
    );
  };
};

export default App;
