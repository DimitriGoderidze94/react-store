import React, { Component } from "react";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: JSON.parse(sessionStorage.getItem("cart")),
    };
  }

  getCartData() {
    var data = JSON.parse(sessionStorage.getItem("cart"));

    console.log(data);
  }

  clearCartData() {
    this.setState({
      cart: [],
    });
    sessionStorage.setItem("cart", "[]");
  }

  render() {
    if (JSON.parse(sessionStorage.getItem("cart")).length == 0) {
      return <h2>cart is empty</h2>;
    } else {
      return (
        <div id="cartPage">
          <h2>Cart</h2>
          {JSON.parse(sessionStorage.getItem("cart")).map((cartItem, key2) => (
            <div key={cartItem[1].name} className="cartItemContainer">
              <div className="halfView">
                <h4>{cartItem[1].name}</h4>
                <span>{this.props.currencysymbol}</span>
                <span>
                  {
                    cartItem[1].prices.filter(
                      (price) => price.currency.label === this.props.currency
                    )[0].amount
                  }
                </span>
                <span>
                  <span>{this.props.currencysymbol + " TOTAL PRICE: "}</span>
                  {cartItem[1].prices.filter(
                    (price) => price.currency.label === this.props.currency
                  )[0].amount * this.state.cart[key2][0].quantity}
                </span>
                {cartItem[1].attributes.map((attribute, key) => (
                  <div className="attributes forCart" key={attribute.name}>
                    <h5 key={attribute.name}>{attribute.name}</h5>
                    {attribute.items.map((item, key1) => (
                      <button
                        key={item.displayValue}
                        onClick={() => {
                          var temp = JSON.parse(sessionStorage.getItem("cart"));

                          temp[key2][2][key] = item.displayValue;

                          this.setState({
                            cart: temp,
                          });
                          console.log(temp);

                          sessionStorage.setItem("cart", JSON.stringify(temp));
                        }}
                        className="square"
                        style={{
                          backgroundColor: item.displayValue,
                          color: item.displayValue,
                          borderColor:
                            cartItem[2][key] == item.id
                              ? "darkblue"
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
                    className="square"
                    onClick={() => {
                      var temp = JSON.parse(sessionStorage.getItem("cart"));
                      if (temp[key2][0].quantity < 50) {
                        temp[key2][0].quantity += 1;
                      } else {
                        alert("max number reached");
                      }
                      this.setState({
                        cart: temp,
                      });
                      sessionStorage.setItem("cart", JSON.stringify(temp));
                    }}
                  >
                    +
                  </button>
                  <div>{cartItem[0].quantity}</div>
                  <button
                    className="square"
                    onClick={() => {
                      var temp = JSON.parse(sessionStorage.getItem("cart"));
                      if (temp[key2][0].quantity > 1) {
                        temp[key2][0].quantity -= 1;
                      }
                      this.setState({
                        cart: temp,
                      });
                      sessionStorage.setItem("cart", JSON.stringify(temp));
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
              </div>
            </div>
          ))}

          <button onClick={() => this.getCartData()}>getCartData</button>
          <button onClick={() => this.clearCartData()}>clear</button>
        </div>
      );
    }
  }
}
