import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
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
        JSON.parse(sessionStorage.getItem(this.props.id) || "[]"),
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(temp));
    } else {
      cart.push([
        { quantity: 1 },
        this.props.specs,
        JSON.parse(sessionStorage.getItem(this.props.id) || "[]"),
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
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
          style={{
            opacity: this.props.specs.inStock ? 0.9 : 0.6,
            pointerEvents: this.props.specs.inStock ? "auto" : "none",
          }}
          to={this.props.id}
        >
          <div
            className="listImgContainer"
            style={{
              opacity: this.props.specs.inStock ? 0.9 : 0.7,
            }}
          >
            <img
              style={{
                opacity: this.props.specs.inStock ? 0.9 : 0.7,
              }}
              className={this.props.listImg}
              src={this.props.img}
              alt={this.props.alt}
            />
          </div>
        </Link>
        {JSON.parse(sessionStorage.getItem(this.props.id) || "[]").length ===
          this.props.attributeLength && (
          <button
            style={{
              opacity: this.props.specs.inStock ? 0.9 : 0.7,
              pointerEvents: this.props.specs.inStock ? "auto" : "none",
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
        <Link
          style={{
            opacity: this.props.specs.inStock ? 0.9 : 0.4,
            pointerEvents: this.props.specs.inStock ? "auto" : "none",
          }}
          to={this.props.id}
        >
          <h6 className={this.props.listProductTitle}>{this.props.title}</h6>
          <span className={this.props.listProductPrice}>
            {this.props.currencysymbol + this.props.price}
          </span>
        </Link>
        <br />
      </div>
    );
  }
}
