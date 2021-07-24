import React, { Component } from 'react'
import {
  CardWrapper, CardImageWrapper, CardInfoWrapper,
  CardDetailLinkWrapper, CardTextWrapper,  CardTitleLinkWrapper,
  SectionWrapper,ProductListWrapper,
} from "./style";
import background from "../static/background.jpg";

export class Home extends Component {

  constructor() {
    super();
    this.state = {
      products: [
        {id : 1, title: "POLESTAR 1", description: "A nice car", price: "0.01"},
        {id : 2, title: "POLESTAR 2", description: "A nice car", price: "0.01"},
        {id : 3, title: "POLESTAR 3", description: "A nice car", price: "0.01"},
        {id : 4, title: "POLESTAR 4", description: "A nice car", price: "0.01"},
        {id : 5, title: "POLESTAR 5", description: "A nice car", price: "0.01"},
        {id : 6, title: "POLESTAR 6", description: "A nice car", price: "0.01"},
        {id : 7, title: "POLESTAR 7", description: "A nice car", price: "0.01"},
        {id : 8, title: "POLESTAR 8", description: "A nice car", price: "0.01"},
        {id : 9, title: "POLESTAR 9", description: "A nice car", price: "0.01"},
        {id : 10, title: "POLESTAR 10", description: "A nice car", price: "0.01"},
        {id : 11, title: "POLESTAR 11", description: "A nice car", price: "0.01"},
        {id : 12, title: "POLESTAR 12", description: "A nice car", price: "0.01"},
        {id : 13, title: "POLESTAR 13", description: "A nice car", price: "0.01"},
        {id : 14, title: "POLESTAR 14", description: "A nice car", price: "0.01"},
        {id : 15, title: "POLESTAR 15", description: "A nice car", price: "0.01"},
      ]
    }
  }

  render() {
    return (
      <SectionWrapper>
        <ProductListWrapper>
          <ProductList products={this.state.products}/>
        </ProductListWrapper>
      </SectionWrapper>
    )
  }
}

function ProductList({products}) {
  return (
    products.map(product => (
      <CardWrapper key={product.id}>
        <CardImageWrapper src={background} alt=""/>
        <CardInfoWrapper>
          <CardTitleLinkWrapper to="/detail">{product.title}</CardTitleLinkWrapper>
          <CardTextWrapper>${product.price}</CardTextWrapper>
          <CardTextWrapper>{product.description}</CardTextWrapper>
        </CardInfoWrapper>
        <CardDetailLinkWrapper to="/detail"> SEE DETAIL </CardDetailLinkWrapper>
      </CardWrapper>
    ))
  )
}

export default Home;