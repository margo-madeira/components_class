import { Component } from 'react';
import { item } from "./Item";

export class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.brand = item.brand;
    this.title = item.title;
    this.description = item.description;
    this.descriptionFull = item.descriptionFull;
    this.currency = item.currency;
    this.price = item.price;
  }
   
  render() {   
    return (
      <div class="main-content">
        <h2>{this.props.brand}</h2>
        <h1>{this.props.title}</h1>
        <h3>{this.props.description}</h3>
        <div class="description">{this.props.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">
            {this.props.currency}
            {(this.props.price).toFixed(2)}
          </div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}


