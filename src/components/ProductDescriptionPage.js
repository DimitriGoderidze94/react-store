import React, { Component } from "react";

export default class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      choosenImg: 0,
      chosenAttributes: JSON.parse(
        sessionStorage.getItem(this.props.id) || "[]"
      ),
    };
  }


  setCartData() {
    let index = -1;
    const cart = JSON.parse(sessionStorage.getItem("cart") || "[]");

    for (let i = 0; i < cart.length; i++) {
      if (cart[i][1].id === this.props.specs.id) {
        index = i;
      }
    }

    if (
      this.props.specs.attributes.length >
      this.state.chosenAttributes.filter(
        function (e) {
          return e != null;
        }
      ).length
    ) {
      alert("please choose all attributes");
    } else if (index > -1) {
      let temp = JSON.parse(sessionStorage.getItem("cart") || "[]");

      temp.splice(index, 1, [
        { quantity: 1 },
        this.props.specs,
        this.state.chosenAttributes,
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(temp));
    } else {
      cart.push([
        { quantity: 1 },
        this.props.specs,
        this.state.chosenAttributes,
        0,
      ]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    }

    this.props.setCartItemNumber();
    this.props.setTotalPrice();

  }

  componentDidMount() {
    console.log(sessionStorage.getItem(this.props.id))
    console.log("hi")
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
              <div
                style={{
                  height: 72 / this.props.specs.attributes.length + "%",
                }}
                className="attributes"
                key={attribute.name}
              >
                <h5 key={attribute.name}>{attribute.name + ":"}</h5>
                {attribute.items.map((item) => (
                  <button
                    onClick={() => {
                      let temp = this.state.chosenAttributes;
                      temp[key] = item.displayValue;
                      this.setState({
                        chosenAttributes: temp,
                      });

                      sessionStorage.setItem(
                        this.props.id,
                        JSON.stringify(this.props.specs.attributes.map(item => item.items[0].id))
                      );

                    }}
                    id={item.id}
                    className="square"
                    style={{
                      backgroundColor: item.displayValue,
                      color: item.displayValue,
                      borderColor:
                        this.state.chosenAttributes[key] === item.id
                          ? "#1D1F22"
                          : "#C0C0C0",
                    }}
                    key={item.displayValue}
                  >
                    {item.value}
                  </button>
                ))}
              </div>
            ))}
            <div className="bottom">
              <h4>PRICE:</h4>
              <span>
                {this.props.currencysymbol + this.props.price.toFixed(2)}
              </span>
              <br />
              <button className="addToCart" onClick={() => this.setCartData()}>
                ADD TO CART
              </button>

              <div
                className="description"
                dangerouslySetInnerHTML={{
                  __html: this.props.specs.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
