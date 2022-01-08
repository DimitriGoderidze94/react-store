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
        <button
          className="currencyChanger"
          onClick={() => this.props.showCurrencyList()}
        >
          <span>{this.props.currencySymbol}</span>
          <span
            id="vector"
            style={{
              transform: this.props.showCurrency
                ? "rotate(0deg)"
                : "rotate(180deg)",
            }}
          ></span>
        </button>
        {this.props.showCurrency && (
          <div className="column">
            {this.props.currencyList.map((currency) => (
              <button
                onClick={(e) => {
                  this.props.handleCurrency(e);
                }}
                id={currency.label}
                className="currencyButtons"
                symbol={currency.symbol}
                key={currency.label}
                currencylabel={currency.label}
              >
                {currency.symbol} {currency.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}
