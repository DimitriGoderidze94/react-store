import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      choosenImg: 0,
      chosenAttributes: JSON.parse(
        sessionStorage.getItem(this.props.id) || "[]"
      ),
    };

  }


  setCartData() {
    let index = -1;
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    for (let i = 0; i < cart.length; i++) {
      if (cart[i][1].id === this.props.specs.id) {
        index = i;
      }
    }



    if (index > -1) {
      let temp = JSON.parse(sessionStorage.getItem("cart") || "[]");

      temp.splice(index, 1, [
        { quantity: 1 },
        this.props.specs,
        this.props.specs.attributes.map(item => item.items[0].displayValue),
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(temp));
    } else {
      cart.push([
        { quantity: 1 },
        this.props.specs,
        this.props.specs.attributes.map(item => item.items[0].id),
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    sessionStorage.setItem(
      this.props.id,
      JSON.stringify(this.props.specs.attributes.map(item => item.items[0].id))
    );

    console.log(this.props.id)




    this.props.setCartItemNumber();
    this.props.setTotalPrice();

  }

  removeCategoryName() {
    document.getElementById("category");
  }

  render() {
    return (
      <div className={this.props.listCard}>

        {!this.props.specs.inStock && (
          <div className="outOfStock">OUT OF STOCK</div>
        )}

        <Link
          onMouseOver={() => {
            this.setState({
              hover: true
            })
          }}
          onMouseLeave={() => {
            this.setState({
              hover: false
            })
          }}
          style={{
            opacity: this.props.specs.inStock ? 0.95 : 0.7,

          }}
          to={this.props.id}
        >
          <div
            className="listImgContainer"
            style={{
              opacity: this.props.specs.inStock ? 0.95 : 0.6,
            }}
          >
            <img
              className={this.props.listImg}
              src={this.props.img}
              alt={this.props.alt}
            />
          </div>

          {this.state.hover && (
            <button
              style={{
                opacity: this.props.specs.inStock ? 0.95 : 0.7,

              }}

              onClick={() => {
                if (this.props.specs.inStock) {

                  this.setCartData();
                } else {
                  alert("OUT OF STOCK");
                }
              }}
              className="listingPageCart"
            ></button>
          )}
          <div
            style={{
              opacity: this.props.specs.inStock ? 0.95 : 0.4,
            }}
            to={this.props.id}
          >
            <h6 className={this.props.listProductTitle}>{this.props.title}</h6>
            <span className={this.props.listProductPrice}>
              {this.props.currencysymbol + this.props.price.toFixed(2)}
            </span>
          </div>
        </Link>
        <br />
      </div>
    );
  }
}
