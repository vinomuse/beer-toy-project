import React, { Component } from 'react';
import { BeerItem } from 'models/beer';

import './index.scss';

interface Props {
  type: string;
  beer: BeerItem;
  onSave?(id: number): void;
  onRemove?(id: number): void;
  onClear?(id: number, count: number): void;
}

class Beer extends Component<Props, {}> {

  shouldComponentUpdate(nextProps: Props) {
    return (
      this.props.beer.id !== nextProps.beer.id ||
      this.props.beer.stock !== nextProps.beer.stock
    )
  }

  render() {

    const { beer, type, onSave, onRemove, onClear } = this.props;
    const { id, name, image, tags, price, stock, count } = beer;

    return (
      <li className="beer-item">
        <div className="img">
          <img width="100%" src={image} alt=""/>
        </div>
        <div className="info">
          <h2>{name}</h2>
          <ul className="label">
            {tags.map((item, index) => (<li key={item.key}>{item.name}{tags.length - 1 > index && ', '} </li>))}
          </ul>
          <span className="price">{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} <label>원</label></span>
          <div className="count-info">
            {
              type === 'shopping' && (
                <span>재고 <label>{stock}</label></span>
              )
            }
            {
              count > 0 && (
                <span>수량 <label>{count}</label></span>
              )
            }
            
          </div>
        </div>

        <div className="btn-group">
          {
            (count > 0 && type === 'shopping') && (
              <button className="btn-remove" onClick={() => onRemove && onRemove(id)}>빼기</button>
            )
          }
          {
            type === 'shopping' && (
              <button 
                className={`btn-save ${stock && stock > 0 ? 'on' : 'off'}`} 
                onClick={() => onSave && onSave(id)}
                disabled={stock === 0}
              >담기</button>
            )
          }
          {
            type === 'payment' && (
              <button 
                className="btn-clear"
                onClick={() => onClear && onClear(id, count)}
              >취소</button>
            )
          }
        </div>
      </li>
    );
  }
}

export default Beer;