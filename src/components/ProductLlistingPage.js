import React, { Component } from "react";
import ProductCard from "./ProductCard";
import { Routes, Route } from "react-router-dom";
import ProductDescriptionPage from "./ProductDescriptionPage";

export default class ProductLlistingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullSpecs: [],
    };
  }
  componentDidMount() { }

  render() {
    return (
      <div
        currencysymbol={this.props.currencysymbol}
        currency={this.props.currency}
        key={this.props.category}
      >
        <Routes>
          <Route
            path="/"
            element={<h2 id="category">{this.props.category.toUpperCase()}</h2>}
          />
        </Routes>

        <section id="wrapper">
          {this.props.fullSpecs.map((specs) => (
            <Routes key={specs.id}>
              <Route
                key={"ProductListingPage"}
                path={"/"}
                element={
                  <ProductCard

                    setTotalPrice={this.props.setTotalPrice}
                    setCartItemNumber={this.props.setCartItemNumber}
                    attributeLength={specs.attributes.length}
                    specs={specs}
                    name={specs.name}
                    id={specs.id}
                    onClick={this.handlePage}
                    listImg={"listImg"}
                    img={specs["gallery"][0]}
                    alt={specs["name"]}
                    key={specs.prices[0].amount}
                    title={specs.name}
                    price={
                      specs.prices.filter(
                        (price) => price.currency.label === this.props.currency
                      )[0].amount
                    }
                    currency={this.props.currency}
                    currencysymbol={this.props.currencysymbol}
                    category={this.props.category}
                    listCard="listCard"
                    listProductTitle="listProductTitle"
                    listProductPrice="listProductPrice"
                  />
                }
              />

              <Route
                key={"ProductDescriptionPage"}
                path={specs.id}
                element={
                  <ProductDescriptionPage

                    setTotalPrice={this.props.setTotalPrice}
                    setCartItemNumber={this.props.setCartItemNumber}
                    id={specs.id}
                    hideMiniCart={this.props.hideMiniCart}
                    specs={specs}
                    price={
                      specs.prices.filter(
                        (price) => price.currency.label === this.props.currency
                      )[0].amount
                    }
                    handleCategory={this.handleCategory}
                    currencysymbol={this.props.currencysymbol}
                  />
                }
              />
            </Routes>
          ))}
        </section>
      </div>
    );
  }
}