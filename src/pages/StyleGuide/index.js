import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import FilterInput from '../../components/FilterInput';
import FilterCards from '../../components/FilterCards';
import { tokos } from '../../models';
import '../pages.css';
import './StyleGuide.css';

export default class StyleGuide extends Component {
  constructor() {
    super();

    this.state = {
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  /*** Render ***/

  render() {
    return (
      <div className="l-styleguide">

        <section>
          <label>Main Navigation</label>
          <div className="l-wrapper-mainnav">
            <MainNav />
          </div>
        </section>

        <section>
          <label>Header</label>
          <Header />
        </section>

        <section>
          <label>Header Not Found</label>
          <Header is404 />
        </section>
        
        <section>
          <label>Paragraph</label>
          <p>
            Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        </section>

        <section>
          <label>Filter Input</label>
          <div className="l-wrapper-filter">
            <FilterInput
              placeholder="Without Button"
              keyword={this.state.keyword}
              action={this.updateKeyword}
              />
            <FilterInput
              placeholder="With Button"
              keyword={this.state.keyword}
              action={this.updateKeyword}
              withButton
              />
          </div>
        </section>

        <section>
          <label>Filter Cards</label>
          <div className="l-wrapper-filter">
            <FilterCards
              keyword=""
              items={tokos}
              titleField="name"
              descriptionField="area"
              imageField="image"
              action={() => true}
              />
          </div>
        </section>
        
      </div>
    );
  }
}
