import React, { Component } from "react";

export default class Currency extends Component {
  render() {
    return (
      <div
        onMouseDown={this.props.hideMiniCart}
        className="menuItem"
        currency={this.props.currency}
        symbol={this.props.currencySymbol}
        id="selectCurrency"
      >
        {/* <span id="currencySymbol">{this.props.currencySymbol + " "}</span> */}
        <select
          value={this.props.currencySymbol + " " + this.props.currency}
          className="currencyChanger"
          onChange={(e) => {
            this.props.handleCurrency(e);
          }}
        >
          {this.props.currencyList.map((currency) => (
            <option
              id={currency.label}
              className="currencyButtons"
              symbol={currency.symbol}
              key={currency.label}
              currencylabel={currency.label}
            >
              {currency.symbol} {currency.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}
