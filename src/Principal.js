import React, { Component } from 'react';
import './Principal.css';
import Chocolates from './Chocolates';
import Cliente from './Cliente';

class Principal extends Component {
  render() {
    return (
      <div>
        <h1>Tienda de Chocolates</h1>
        <Chocolates />
        <Cliente />
      </div>
    );
  }
}

export default Principal;
