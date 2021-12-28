import "./App.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Nav from "./components/Nav";
import { Routes, Route, Link } from "react-router-dom";
import ProductLlistingPage from "./components/ProductLlistingPage";

import React, { Component } from "react";
import Currency from "./components/Currency";
import Cart from "./components/Cart";
import ProductDescriptionPage from "./components/ProductDescriptionPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "clothes",
      currencylabel: "USD",
      currencysymbol: "$",
      AllCategories: [],
      count: 0,
      currencyList: [],
      showCart: false,
    };
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  componentDidMount() {
    //categori list
    const categoryInfo = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "http://localhost:4000/",
    });

    categoryInfo
      .query({
        query: gql`
          {
            categories {
              name
            }
          }
        `,
      })
      .then((result) => {
        const nav = result.data.categories.map((category) => category.name);
        this.setState({ AllCategories: nav });
      });

    const currencyInfo = new ApolloClient({
      cache: new InMemoryCache(),
      uri: "http://localhost:4000/",
    });

    // currency list
    currencyInfo
      .query({
        query: gql`
          {
            currencies {
              label
              symbol
            }
          }
        `,
      })
      .then((result) => {
        this.setState({
          currencyList: result.data.currencies,
        });
      });
  }

  handleCurrency(e) {
    this.setState({
      currencylabel: e.target.selectedOptions[0].getAttribute("currencylabel"),
      currencysymbol: e.target.selectedOptions[0].getAttribute("symbol"),
    });
  }
  handleCategory(e) {
    this.setState({ category: e.target.innerText }, () => {});
  }

  handleCart() {
    if (this.state.showCart) {
      this.setState({
        showCart: false,
      });
    } else {
      this.setState({
        showCart: true,
      });
    }
    console.log(this.state.showCart);
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          <Nav
            AllCategories={this.state.AllCategories}
            category={this.state.category}
            handleCategory={this.handleCategory}
          />

          <Currency
            currencyList={this.state.currencyList}
            currency={this.state.currencylabel}
            handleCurrency={this.handleCurrency}
          />
          <button onClick={() => sessionStorage.setItem("cart", "[]")}>
            clearCart
          </button>
          <Link to={"cart"}>cart</Link>
          <button onClick={() => this.handleCart()}>show cart</button>
        </div>
        {this.state.showCart && (
          <div id="minicart">
            <Cart
              currencysymbol={this.state.currencysymbol}
              currency={this.state.currencylabel}
              count={this.state.count}
              onClick={this.increment}
            />
          </div>
        )}

        <Routes>
          {this.state.AllCategories.map((category, key) => (
            <Route
              key={category}
              path={category + "/*"}
              element={
                <div>
                  <h2>{category}</h2>
                  <ProductLlistingPage
                    currency={this.state.currencylabel}
                    key={category}
                    category={category}
                    currencysymbol={this.state.currencysymbol}
                  />
                </div>
              }
            />
          ))}
          <Route
            key={"all"}
            path={"/*"}
            element={
              <ProductLlistingPage
                productSpecs={this.state.productSpecs}
                currency={this.state.currencylabel}
                key={this.state.category}
                category={"all"}
                currencysymbol={this.state.currencysymbol}
              />
            }
          />

          <Route
            key={"ProductDescriptionPage"}
            path={this.state.category + "/ProductDescriptionPage"}
            element={
              <ProductDescriptionPage handleCategory={this.handleCategory} />
            }
          />
          <Route
            key={"cart"}
            path={"cart"}
            element={
              <Cart
                currencysymbol={this.state.currencysymbol}
                currency={this.state.currencylabel}
                count={this.state.count}
                onClick={this.increment}
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
