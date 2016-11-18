import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import FilterInput from '../../components/FilterInput';
import FilterCards from '../../components/FilterCards';
import { tokos } from '../../models';
import '../pages.css';
import './StyleGuide.css';

export default class StyleGuide extends Component {
  constructor(props) {
    super(props);

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
      <div className="l-StyleGuide">

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Main Navigation</label>
          <div className="l-wrapper-MainNav">
            <MainNav />
          </div>
        </section>

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Header</label>
          <Header />
        </section>

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Header Not Found</label>
          <Header is404 />
        </section>

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Paragraph</label>
          <p>
            Pilih Toko <strong>Ojek Belanja</strong> Anda
        </p>
        </section>

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Filter Input</label>
          <div className="l-main">
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

        <section className="StyleGuide-section">
          <label className="StyleGuide-label">Filter Cards</label>
          <div className="l-main">
            <FilterCards
              keyword=""
              items={tokos}
              fields={{
                title: 'name',
                description: 'area',
                image: 'image',
              }}
              action={() => true}
              />
          </div>
        </section>

      </div>
    );
  }
}
