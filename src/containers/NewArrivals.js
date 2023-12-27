import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core/CircularProgress";

function NewArrivals(props) {
  const [newArrivals, setNewArrivals] = useState([
    {
      image: "https://itbook.store/img/books/9781912047451.png",
      price: "$14.92",
      subtitle: "",
      title: "An Introduction to C & GUI Programming, 2nd Edition",
      url: "https://itbook.store/books/9781912047451",
    },
  ]);
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ marginTop: "100px" }}>
      {newArrivals &&
        newArrivals.map((item) => {
          return (
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
          );
        })}
    </div>
  );
}



export default NewArrivals;
