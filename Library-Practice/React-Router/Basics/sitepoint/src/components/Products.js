import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import productData from '../data/productData';
import Product from './Product';

class Products extends Component {
  render() {
    const { url } = this.props.match;
    const linkList = productData.map((product) => (
      <li key={product.id}>
        <Link to={`${url}/${product.id}`}>{product.name}</Link>
      </li>
    ));
    return (
      <div>
        <div>
          <h2>Products</h2>
          <ul>{linkList}</ul>
        </div>
        <Route path={`${url}/:productId`}>
          <Product data={productData} />
        </Route>
        <Route path={url} exact>
          <p>Please select a product</p>
        </Route>
      </div>
    );
  }
}

export default Products;
