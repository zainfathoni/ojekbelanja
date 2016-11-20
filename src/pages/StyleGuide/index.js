import React, { Component } from 'react';

import Section from '../../components/FilterCards/Section'
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
      <div className="l-fullwidth">
        <Section
          id="main-navigation"
          label="Main Navigation"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <div id="main-navigation" className="l-wrapper-MainNav">
            <MainNav />
          </div>
        </Section>

        <Section
          className="Styleguide-section"
          id="header"
          label="Header"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <Header />
        </Section>

        <Section
          className="Styleguide-section"
          id="header-not-found"
          label="Header-Not-Found"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <Header is404 />
        </Section>

        <Section
          className="Styleguide-section"
          id="paragraph"
          label="Paragraph"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <p>
            Pilih Toko <strong>Ojek Belanja</strong> Anda
          </p>
        </Section>

        <Section
          className="Styleguide-section"
          id="filter-input"
          label="Filter Input"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <div id="filter-input" className="l-main">
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
        </Section>

        <Section
          className="Styleguide-section"
          id="filter-cards"
          label="Filter Cards"
          labelClassName="StyleGuide-label"
          separatorClassName="StyleGuide-separator">
          <div id="filter-cards" className="l-main">
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
        </Section>

      </div>
    );
  }
}
