import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  render() {
    return (
      <>
        <Link specs={"hi"} to={this.props.id} className={this.props.listCard}>
          <img
            className={this.props.listImg}
            src={this.props.img}
            alt={this.props.alt}
          />
          <h6 className={this.props.listProductTitle}>{this.props.title}</h6>
          <span className={this.props.listProductPrice}>
            {this.props.currencysymbol + this.props.price}
          </span>
        </Link>
      </>
    );
  }
}
