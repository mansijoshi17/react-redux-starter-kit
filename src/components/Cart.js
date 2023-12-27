import React, { useState } from "react";
import CartItem from "./CartItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <div style={{ margin: "30px" }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {cartItems.map((item) => (
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

export default Cart;
