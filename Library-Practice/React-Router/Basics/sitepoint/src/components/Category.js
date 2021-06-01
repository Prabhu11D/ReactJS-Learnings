import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class Category extends Component {
  render() {
    const { url, path } = this.props.match;
    console.log(this.props);

    return (
      <div>
        <ul>
          <li>
            <Link to={`${url}/shoes`}>Shoes</Link>
          </li>
          <li>
            <Link to={`${url}/boots`}>Boots</Link>
          </li>
          <li>
            <Link to={`${url}/footwear`}>Footwear</Link>
          </li>
        </ul>
        <Route path={`${path}/:name`} component={Item}></Route>
      </div>
    );
  }
}

function Item(props) {
  const name = props.match.params.name;
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}

export default Category;
