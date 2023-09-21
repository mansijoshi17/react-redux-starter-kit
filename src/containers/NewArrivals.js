import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../service/actions/action";

function NewArrivals(props) {
  const [newArrivals, setNewArrivals] = useState([]);
  console.log(props.data, "newArr");
  useEffect(() => {
    const init = async () => {
      await axios.get(`https://api.itbook.store/1.0/new`).then(
        (
          data //Call Api for get data of New Arrivals.
        ) => {
          setNewArrivals(data.data.books);
        }
      ); //get array of new Arrivals objects .
    };
    init();
  }, []);

  return newArrivals.map(
    (
      item //Take Array and fetch each object item from it.
    ) => {
      return (
        <div style={{ marginTop: "100px" }}>
          {/* pass id of particular book in path of book details */}
          <div class="ui items" style={{ backgroundColor: "white" }}>
            <div class="item" key={item.title}>
              <div class="ui small image">
                <img
                  src={
                    item.image == ""
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ31VaC7Kx30YmBxIaNa6x7ZJrDpRcIGGZ1dCbb380VqIdQhxheWCbQ7JAskMvj_lSvFrU&usqp=CAU"
                      : item.image
                  }
                  alt="book"
                />
              </div>
              <div class="middle aligned content">
                <div class="header" style={{ paddingTop: "25px" }}>
                  {item.title}
                </div>
                <div class="description">
                  <p>{item.subtitle}</p>
                  {/* <h4>City :{item.city.city_name}</h4>
                    <h4>Posted by :{item.user.name} </h4> */}
                  <div>
                    <h4>Price :&nbsp;{item.price}</h4>
                  </div>
                </div>
                <div class="extra">
                  <div
                    class="ui right floated button"
                    onClick={() => {
                      props.addToCartHandler(item);
                    }}
                  >
                    Add to Cart
                  </div>
                </div>
                <div
                  class="extra"
                  onClick={() => {
                    props.removeFromCartHandler(item.title);
                  }}
                >
                  <div class="ui right floated button">Remove from Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );
}

const mapStateToProps = (state) => ({
  data: state.cart.cartItemsReducer.cartItems,
});

const mapDispatchToprops = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToprops)(NewArrivals);
