import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav onMouseDown={this.props.hideMiniCart} id="nav" className="menuItem">
        {this.props.AllCategories.map((category, key) => (
          <Link
            onClick={this.props.handleCategory}
            to={category}
            className="navButtons"
            key={key}
            style={{
              color: this.props.category === category ? "#5ECE7B" : "black",
              borderColor:
                this.props.category === category ? "#5ECE7B" : "white",
            }}
          >
            {category.toUpperCase()}
          </Link>
        ))}
      </nav>
    );
  }
}
