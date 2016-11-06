import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import TokoPicker from '../../components/TokoPicker';
import FilterInput from '../../components/FilterInput';
import FilterCards from '../../components/FilterCards';
import { tokos } from '../../models';
import '../Home/Home.css';

export default class StyleGuide extends Component {
  render() {
    return (
      <div className="app">
        <h1>Main Navigation</h1>
        <MainNav />
        <h1>Header</h1>
        <Header />
        <h1>Paragraph</h1>
        <p>
          Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        <h1>Toko Picker</h1>
        <TokoPicker />
        <hr />
        <h1>Header Not Found</h1>
        <Header is404 />
        <h1>Filter Input</h1>
        <FilterInput
          placeholder="Sample Placeholder"
          keyword=""
          action={() => true}
          />
        <h1>Filter Cards</h1>
        <FilterCards
          keyword=""
          items={tokos}
          titleField="name"
          descriptionField="area"
          imageField="image"
          action={() => true}
          />
      </div>
    );
  }
}
