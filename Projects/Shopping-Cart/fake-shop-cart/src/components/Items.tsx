import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { addToCart } from '../redux/actionCreator';
import { Action, product } from '../redux/reducer';

export class Items extends Component<Props> {
  render() {
    const { item, addProduct } = this.props;
    return (
      <div className="item">
        <img src={item.image} alt={item.title} />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p className="price">Price : {item.price}</p>
        <button onClick={() => addProduct(item)}>Add To Cart</button>
      </div>
    );
  }
}

interface Props {
  item: product;
  addProduct: (item: product) => void;
}

const mapDispatch = (dispatch: Dispatch<Action>) => {
  return {
    addProduct: (item: product) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatch)(Items);
