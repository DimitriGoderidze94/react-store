import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(sessionStorage.getItem("cart")) || "[]",
      choosenImg: [],
    };
  }

  removeCartItem(key) {
    let temp = JSON.parse(sessionStorage.getItem("cart") || "[]");

    temp.splice(key, 1);
    sessionStorage.setItem("cart", JSON.stringify(temp));
    this.setState({
      cart: temp,
    });
    this.props.setCartItemNumber();
    this.props.setTotalPrice();
  }

  render() {
    if (JSON.parse(sessionStorage.getItem("cart")).length === 0) {
      return (
        <div onMouseDown={this.props.hideMiniCart} id="cartPage">
          <h2 style={{ textAlign: "center" }}>THE CART IS EMPTY</h2>
        </div>
      );
    } else {
      return (
        <div id="cartPage" onMouseDown={this.props.hideMiniCart}>
          <h2>CART</h2>
          {/* <h3>
            {"TOTAL PRICE: " +
              this.props.currencysymbol +
              this.props.totalPrice}
          </h3> */}
          {JSON.parse(sessionStorage.getItem("cart")).map((cartItem, key2) => (
            <div key={cartItem[1].name} className="cartItemContainer">
              <div className="halfView cartOptions">
                <div className="fullWidth">
                  <h4>{cartItem[1].name}</h4>

                  <b>
                    <b>{this.props.currencysymbol}</b>
                    {(
                      Math.round(
                        cartItem[1].prices.filter(
                          (price) =>
                            price.currency.label === this.props.currency
                        )[0].amount *
                        cartItem[0].quantity *
                        100
                      ) / 100
                    ).toFixed(2)}
                  </b>

                  {cartItem[1].attributes.map((attribute, key) => (
                    <div className="attributes forCart" key={attribute.name}>
                      <h5 key={attribute.name}>{attribute.name + ":"}</h5>
                      {attribute.items.map((item) => (

                        <button
                          key={item.displayValue}
                          className="box"
                          style={
                            CSS.supports('color', item.displayValue) ?
                              {
                                color: item.displayValue,
                                backgroundColor: item.displayValue,
                                border: cartItem[2][key] === item.id ? "4px solid rgb(0, 0, 0)" : "1px solid #1D1F22"
                              } : {
                                color: cartItem[2][key] === item.id ? "#ffffff" : "#1D1F22",
                                backgroundColor: cartItem[2][key] === item.id ? "#1D1F22" : "#ffffff",
                              }}
                        >
                          {item.value}
                        </button>

                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="halfView cartNumber" key={cartItem[1].name}>
                <div className="left30">
                  <button
                    className="box1"
                    onClick={() => {
                      let temp = JSON.parse(sessionStorage.getItem("cart"));
                      if (temp[key2][0].quantity < 50) {
                        temp[key2][0].quantity += 1;
                      } else {
                        alert("max number reached");
                      }

                      this.setState({
                        cart: temp,
                      });
                      sessionStorage.setItem("cart", JSON.stringify(temp));
                      this.props.setTotalPrice();
                    }}
                  >
                    +
                  </button>
                  <div className="quantity">{cartItem[0].quantity}</div>
                  <button
                    className="box1 bottom1"
                    onClick={() => {
                      let temp = JSON.parse(sessionStorage.getItem("cart"));
                      if (temp[key2][0].quantity > 1) {
                        temp[key2][0].quantity -= 1;
                      }
                      this.setState({
                        cart: temp,
                      });

                      sessionStorage.setItem("cart", JSON.stringify(temp));
                      this.props.setTotalPrice();
                      if (temp[key2][0].quantity === 1) {
                        this.removeCartItem(key2);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="cartImgContainer">
                  <button
                    onClick={() => {
                      let temp =
                        JSON.parse(sessionStorage.getItem("cart")) || "[]";

                      if (this.state.cart[key2][3] > 0) {
                        temp[key2][3] -= 1;
                        this.setState({
                          cart: temp,
                        });
                        sessionStorage.setItem("cart", JSON.stringify(temp));
                      }
                    }}
                    className="chevron left"
                  ></button>
                  <button
                    onClick={() => {
                      let temp =
                        JSON.parse(sessionStorage.getItem("cart")) || "[]";

                      if (
                        this.state.cart[key2][3] <
                        cartItem[1].gallery.length - 1
                      ) {
                        temp[key2][3] += 1;
                        this.setState({
                          cart: temp,
                        });
                        sessionStorage.setItem("cart", JSON.stringify(temp));
                      }
                    }}
                    className="chevron right"
                  ></button>

                  <img
                    className="cartImg"
                    src={cartItem[1].gallery[this.state.cart[key2][3]]}
                    alt={"img"}
                  />
                </div>
                {/* <div className="removeFromCart half">
                  <button onClick={() => this.removeCartItem(key2)}>
                    remove
                  </button>
                </div> */}
              </div>
              <div className="line"></div>
            </div>
          ))}
          <br />
          <div className="line"></div>
        </div>
      );
    }
  }
}
