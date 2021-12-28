import React, { Component } from "react";

export default class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choosenImg: 0,

      chosenAttributes: [],
    };
  }
  setCartData() {
    var index = -1;
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    for (var i = 0; i < cart.length; i++) {
      if (cart[i][1].id === this.props.specs.id) {
        index = i;
      }
    }
    if (index > -1) {
      alert(this.props.specs.name + "is already in cart");
    } else {
      cart.push([
        { quantity: 1 },
        this.props.specs,
        this.state.chosenAttributes,
      ]);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  render() {
    return (
      <div className="ProductDescriptionPage" specs={this.props.specs}>
        <div className="minImgContainer">
          {this.props.specs.gallery.map((img, key) => (
            <img
              onClick={() =>
                this.setState({
                  choosenImg: key,
                })
              }
              id={this.props.specs.gallery.length}
              style={{
                height: 100 / this.props.specs.gallery.length - 1 + "%",
              }}
              key={img}
              className="minImg"
              src={img}
              alt={"img"}
            />
          ))}
        </div>
        <div className="maxImgContainer">
          <img
            className="productDescriptionImg"
            src={this.props.specs.gallery[this.state.choosenImg]}
            alt={"img"}
          />
        </div>
        <div className="ProductDescriptionContainer">
          <div className="attributesContainer">
            <h2>{this.props.specs.name}</h2>
            {this.props.specs.attributes.map((attribute, key) => (
              <div className="attributes" key={attribute.name}>
                <h5 key={attribute.name}>{attribute.name}</h5>
                {attribute.items.map((item, key1) => (
                  <button
                    onClick={() => {
                      var temp = this.state.chosenAttributes;
                      temp[key] = item.id;
                      this.setState({
                        chosenAttributes: temp,
                      });
                    }}
                    id={item.id}
                    className="square"
                    style={{
                      backgroundColor: item.displayValue,
                      color: item.displayValue,
                      borderColor:
                        this.state.chosenAttributes[key] == item.id
                          ? "darkblue"
                          : "lightblue",
                    }}
                    key={item.displayValue}
                  >
                    {item.displayValue}
                  </button>
                ))}
              </div>
            ))}

            <h4>PRICE:</h4>
            <span>{this.props.currencysymbol + this.props.price}</span>
            <br />
            <button onClick={() => this.setCartData()}>ADD TO CART</button>
          </div>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: this.props.specs.description }}
          ></div>
        </div>
      </div>
    );
  }
}
