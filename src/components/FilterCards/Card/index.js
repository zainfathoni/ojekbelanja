import React from 'react';

import './Card.css';

const mark = (first, body, keyword) => {
  const index = body.toLowerCase().indexOf(keyword.toLowerCase());
  let awal = `${body.slice(0, index)}`;
  let newAwal = (first.length === 0) ? [{data: awal, isMarked: false}] : [...first, {data: awal, isMarked: false}]
  if(index > -1 && keyword){
    let tengah = body.slice(index, index + keyword.length)
    let akhir = `${body.slice(index + keyword.length)}`
    return mark([...newAwal, {data: tengah, isMarked: true}], akhir, keyword)
  }else{
    return [...newAwal, {data: body, isMarked: false}]
  }
}

const jsxMark = (first, body, keyword) => {
  const marked = mark(first, body, keyword);
  return marked.map(function(d){
    console.log(d);
    if(d.isMarked){
      return(<mark>{d.data}</mark>)
    }else{
      return(d.data)
    }
  })
}

export default function Card(props) {
  const { keyword, title ,description } = props;
  const marked = jsxMark([], title, keyword)
  const markeds = jsxMark([], description, keyword)
  // TODO: @rekysenjaya Find multiple matches in a single string
  // TODO: @rekysenjaya Display multiple matches
  // TODO: @rekysenjaya Modularize display matches
  return (
    <li>
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt="Toko Profile" />
        </div>
        <div className="card-content">
          <div className="card-content-title">
            {marked}
          </div>
          <div className="card-content-description">
            {markeds}
          </div>
        </div>
        <div className="card-action">
          <button className="card-action-btn" onClick={(e) => props.action(props.id)}>
            Mulai Belanja <i className="material-icons">shopping_cart</i>
          </button>
        </div>
      </div>
    </li>
  )
}

Card.propTypes = {
  id: React.PropTypes.string.isRequired,
  keyword: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  action: React.PropTypes.func.isRequired
}
