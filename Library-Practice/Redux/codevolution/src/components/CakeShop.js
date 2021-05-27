import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/Cake";

function CakeShop(props) {
  console.log(props);
  return (
    <div>
      <h2>Cake Shop</h2>
      <p>Available Cakes - {props.numOfCakes}</p>
      <button
        onClick={() => {
          if (props.numOfCakes > 0) props.buyCake();
        }}
      >
        Buy Cake
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeShop);
