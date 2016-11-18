import React from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import '../pages.css';
import './Login.css';

export default function Login(props) {
  return (
    <div className="l-fullwidth">
      <div className="l-wrapper-MainNav">
        <MainNav />
      </div>
      <Header heading={'Login/Register'} />
      <main className="l-Login">
      </main>
    </div>
  )
}
