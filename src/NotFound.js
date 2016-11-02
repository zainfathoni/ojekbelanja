import React, { Component } from 'react';
import logo from './css/images/logo.svg';
import './css/App.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Ojek <i className="material-icons">motorcycle</i><i className="material-icons">loop</i> Nyasar</h2>
        </div>
        <p className="App-intro">
          Maaf, halaman yang Anda tuju tidak ditemukan.
        </p>
        <p className="App-intro">
          Silakan kembali ke <a href="/">halaman utama</a>.
        </p>
      </div>
    );
  }
}

export default NotFound;
