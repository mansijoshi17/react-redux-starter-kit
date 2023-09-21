import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AddShoppingCart } from "@material-ui/icons";
import { Badge, Drawer } from "@material-ui/core";
import { connect } from "react-redux";
import Cart from "../components/Cart";

function NavBar(props) {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="Nav">
      <div className="container">
        <div className="App-logo">
          <Link to={`/`}>
            <img
              src="https://techstory.in/wp-content/uploads/2015/02/studentdesk.png"
              id="App-logo"
              alt="app-logo"
              height={"45"}
            ></img>
          </Link>
        </div>
        <div>
          <div class="navbar-right">
            <Badge badgeContent={props.data.length} color="error">
              <AddShoppingCart
                style={{ fontSize: "30px", alignSelf: "center" }}
                onClick={() => setCartOpen(true)}
              />
            </Badge>
          </div>
        </div>
      </div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart />
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.cart.cartItemsReducer.cartItems,
});

export default connect(mapStateToProps, 0)(NavBar);
