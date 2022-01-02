import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(sessionStorage.getItem("cart")) || "[]",
      sumPriceList: [],
      totalPrice: 0,
    };
  }

  getCartData() {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    console.log(cart);
  }

  clearCartData() {
    this.setState({
      cart: [],
    });
    sessionStorage.setItem("cart", "[]");
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
          <h2>cart is empty</h2>
          <h3>TOTAL PRICE: 0</h3>
        </div>
      );
    } else {
      return (
        <div id="cartPage" onMouseDown={this.props.hideMiniCart}>
          <h2>Cart</h2>
          <h3>
            {"TOTAL PRICE: " +
              this.props.currencysymbol +
              this.props.totalPrice}
          </h3>
          {/* <h3 className={JSON.parse(sessionStorage.getItem("cart"))[0][1]}></h3> */}
          {JSON.parse(sessionStorage.getItem("cart")).map((cartItem, key2) => (
            <div key={cartItem[1].name} className="cartItemContainer">
              <div className="halfView">
                <h4>{cartItem[1].name}</h4>
                <b>{"UNIT PRICE: " + this.props.currencysymbol}</b>
                <b>
                  {
                    cartItem[1].prices.filter(
                      (price) => price.currency.label === this.props.currency
                    )[0].amount
                  }
                </b>

                {cartItem[1].attributes.map((attribute, key) => (
                  <div className="attributes forCart" key={attribute.name}>
                    <h5 key={attribute.name}>{attribute.name}</h5>
                    {attribute.items.map((item, key1) => (
                      <button
                        key={item.displayValue}
                        className="square"
                        style={{
                          backgroundColor: item.displayValue,
                          color: item.displayValue,
                          borderColor:
                            cartItem[2][key] === item.id
                              ? "#1D1F22"
                              : "lightblue",
                        }}
                      >
                        {item.displayValue}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <div className="halfView" key={cartItem[1].name}>
                <div className="half">
                  <button
                    className="square1"
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
                    className="square1"
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
                    }}
                  >
                    -
                  </button>
                </div>
                <div className="half">
                  <img
                    className="cartImg"
                    src={cartItem[1].gallery[0]}
                    alt={"img"}
                  />
                </div>

                <div className="removeFromCart">
                  <b>
                    <b>{" SUM: " + this.props.currencysymbol}</b>
                    {Math.round(
                      cartItem[1].prices.filter(
                        (price) => price.currency.label === this.props.currency
                      )[0].amount *
                        cartItem[0].quantity *
                        100
                    ) / 100}
                  </b>
                  <button onClick={() => this.removeCartItem(key2)}>
                    remove
                  </button>
                </div>
              </div>
              <div className="line"></div>
            </div>
          ))}

          {/* <button onClick={() => this.getCartData()}>getCartData</button>
          <button onClick={() => this.clearCartData()}>clear</button> */}
          <div className="line"></div>
        </div>
      );
    }
  }
}
