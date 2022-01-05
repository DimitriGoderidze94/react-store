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
      category: "all",
      currencylabel:
        JSON.parse(sessionStorage.getItem("choosenCurrencyLabel")) || "USD",
      currencysymbol:
        JSON.parse(sessionStorage.getItem("choosenCurrencySymbol")) || "$",
      AllCategories: [],
      currencyList: [],
      showCart: false,
      cartItemNumber: JSON.parse(sessionStorage.getItem("cart"))
        ? JSON.parse(sessionStorage.getItem("cart")).length
        : "",
      totalPrice: JSON.parse(sessionStorage.getItem("totalPrice")) || 0,
    };
    this.handleCurrency = this.handleCurrency.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.hideMiniCart = this.hideMiniCart.bind(this);
    this.setCartItemNumber = this.setCartItemNumber.bind(this);
    this.setTotalPrice = this.setTotalPrice.bind(this);
  }

  componentDidMount() {
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");
    sessionStorage.setItem("cart", JSON.stringify(cart));

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
    this.setCartItemNumber();
  }

  handleCurrency(e) {
    this.setState(
      {
        currencylabel:
          e.target.selectedOptions[0].getAttribute("currencylabel"),
        currencysymbol: e.target.selectedOptions[0].getAttribute("symbol"),
      },
      () => {
        this.setTotalPrice();
      }
    );
    sessionStorage.setItem(
      "choosenCurrencySymbol",
      JSON.stringify(e.target.selectedOptions[0].getAttribute("symbol"))
    );
    sessionStorage.setItem(
      "choosenCurrencyLabel",
      JSON.stringify(e.target.selectedOptions[0].getAttribute("currencylabel"))
    );
  }

  handleCategory(e) {
    this.setState({ category: e.target.innerText });
  }

  handleCart() {
    if (this.state.showCart) {
      this.setState({
        showCart: false,
      });
      document.getElementById("page").style.background = "#FFFFFF";
    } else {
      this.setState({
        showCart: true,
      });
      document.getElementById("page").style.background =
        "rgba(57, 55, 72, 0.22)";
    }
    this.setTotalPrice();
  }
  hideMiniCart() {
    this.setState({
      showCart: false,
    });
    document.getElementById("page").style.background = "#FFFFFF";
  }

  setCartItemNumber() {
    this.setState({
      cartItemNumber: JSON.parse(sessionStorage.getItem("cart")).length || "",
    });
  }

  setTotalPrice() {
    let cart = JSON.parse(sessionStorage.getItem("cart"));
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let subTotal =
        cart[i][1].prices.filter(
          (price) => price.currency.label === this.state.currencylabel
        )[0].amount * JSON.parse(sessionStorage.getItem("cart"))[i][0].quantity;
      total = total + subTotal;
    }
    this.setState({
      totalPrice: Math.round((total * 100) / 100),
    });
    sessionStorage.setItem("totalPrice", Math.round((total * 100) / 100));
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
          <Nav
            currencylabel={this.state.currencylabel}
            hideMiniCart={this.hideMiniCart}
            AllCategories={this.state.AllCategories}
            category={this.state.category}
            handleCategory={this.handleCategory}
          />
          <div id="logo" className="menuItem"></div>
          <Currency
            setTotalPrice={this.setTotalPrice}
            hideMiniCart={this.hideMiniCart}
            currencyList={this.state.currencyList}
            currency={this.state.currencylabel}
            handleCurrency={this.handleCurrency}
            currencySymbol={this.state.currencysymbol}
          />

          <button
            className="menuItem"
            id="showCart"
            onClick={() => this.handleCart()}
          >
            <div id="cartItemNumber">{this.state.cartItemNumber}</div>
          </button>
        </div>
        {this.state.showCart && (
          <div id="minicart">
            <div>
              <b>MY BAG: </b>
              {JSON.parse(sessionStorage.getItem("cart"))
                ? JSON.parse(sessionStorage.getItem("cart")).length
                : 0}
              {" ITEMS"}
            </div>
            <div className="minicartTop">
              <Cart
                totalPrice={this.state.totalPrice}
                setTotalPrice={this.setTotalPrice}
                setCartItemNumber={this.setCartItemNumber}
                currencysymbol={this.state.currencysymbol}
                currency={this.state.currencylabel}
                onClick={this.increment}
              />
            </div>
            <div>
              <div id="totalPriceContainer">
                <b id="total">TOTAL: </b>
                <b id="totalPrice">
                  {this.state.currencysymbol + this.state.totalPrice}
                </b>
              </div>
              <div id="fullWidth">
                <Link id="viewBag" to={"cart"}>
                  VIEW&nbsp;BAG
                </Link>
                <a
                  href="."
                  id="checkOut"
                  onClick={() => alert("please try later")}
                >
                  CHECKOUT
                </a>
              </div>
            </div>
          </div>
        )}
        <div onMouseDown={() => this.hideMiniCart()} id="page">
          <Routes>
            {this.state.AllCategories.map((category) => (
              <Route
                key={category}
                path={category + "/*"}
                element={
                  <div>
                    <h2>{category.toUpperCase()}</h2>
                    <ProductLlistingPage
                      setTotalPrice={this.setTotalPrice}
                      setCartItemNumber={this.setCartItemNumber}
                      hideMiniCart={this.hideMiniCart}
                      currency={this.state.currencylabel}
                      key={category}
                      category={category}
                      currencysymbol={this.state.currencysymbol}
                      ha
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
                  setTotalPrice={this.setTotalPrice}
                  setCartItemNumber={this.setCartItemNumber}
                  hideMiniCart={this.hideMiniCart}
                  productSpecs={this.state.productSpecs}
                  currency={this.state.currencylabel}
                  key={this.state.category}
                  category={"all"}
                  currencysymbol={this.state.currencysymbol}
                />
              }
            />

            <Route
              key={"cart"}
              path={"cart"}
              element={
                <Cart
                  totalPrice={this.state.totalPrice}
                  setTotalPrice={this.setTotalPrice}
                  setCartItemNumber={this.setCartItemNumber}
                  currencysymbol={this.state.currencysymbol}
                  currency={this.state.currencylabel}
                  onClick={this.increment}
                  hideMiniCart={this.hideMiniCart}
                />
              }
            />
          </Routes>
        </div>
      </div>
    );
  }
}
