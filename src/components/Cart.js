import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const Cart = (props) => {
  const calculateTotal = (items) => {
    items.map((item) => {
      let newPrice = item.price.slice(1);
      item.price = newPrice;
    });
    let total = items.reduce((n, item) => n + parseFloat(item.price), 0);
    return total;
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Your Cart</h2>
      {props.cartItems.length === 0 ? <p>No items in cart.</p> : null}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {props.cartItems.map((item) => (
          <div>
            <CartItem key={item.id} item={item} />
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>

      {/* <h2>Total: ${calculateTotal(props.cartItems)}</h2> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItemsReducer.cartItems,
});

export default connect(mapStateToProps, 0)(Cart);
