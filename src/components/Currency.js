import React, { Component } from "react";

export default class Currency extends Component {
  render() {
    return (
      <div
        className="menuItem"
        currency={this.props.currency}
        symbol={this.props.currencySymbol}
        id="selectCurrency"
      >
        <select
          className="currencyChanger"
          onChange={this.props.handleCurrency}
        >
          {this.props.currencyList.map((currency) => (
            <option
              className="currencuButtons"
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
