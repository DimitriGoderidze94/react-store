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
      ]);
      sessionStorage.setItem("cart", JSON.stringify(temp));
    } else {
      cart.push([
        { quantity: 1 },
        this.props.specs,
        JSON.parse(sessionStorage.getItem(this.props.id) || "[]"),
      ]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }
    this.props.setCartItemNumber();
    this.props.setTotalPrice();
  }
  render() {
    return (
      <div className={this.props.listCard}>
        <Link to={this.props.id}>
          <img
            className={this.props.listImg}
            src={this.props.img}
            alt={this.props.alt}
          />
        </Link>
        {JSON.parse(sessionStorage.getItem(this.props.id) || "[]").length ===
          this.props.attributeLength && (
          <button
            onClick={() => this.setCartData()}
            className="listingPageCart"
          ></button>
        )}
        <Link to={this.props.id}>
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
