import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav id="nav" className="menuItem">
        {this.props.AllCategories.map((category, key) => (
          <Link
            onClick={this.props.handleCategory}
            to={category}
            className="navButtons"
            key={key}
          >
            {category}
          </Link>
        ))}
      </nav>
    );
  }
}
