import React from 'react';

export class Item extends React.Component{
    constructor(brand, title, description, descriptionFull, price, currency) {
        super();
        this.props.brand = brand;
        this.props.title = title;
        this.props.description = description;
        this.props.descriptionFull = descriptionFull;
        this.props.price = price;
        this.props.currency = currency;
    }   
  }

  export const item = new Item('Tiger of Sweden', 'Leonard coat', 'Minimalistic coat in cotton-blend', "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.", 399, '£');