import React, { Component } from 'react'
import background from "../static/background.jpg"
import {
  BoxWrapper,
  ButtonWrapper,
  DetailImageWrapper,
  DetailWrapper,
  SectionWrapper,
  TextWrapper,
  TitleWrapper
} from "./style";

export class ProductDetail extends Component {
  render() {
    return (
      <SectionWrapper>
        <DetailWrapper>
          <DetailImageWrapper src={background} alt=""/>
          <BoxWrapper>
            <TitleWrapper>POLESTAR 1</TitleWrapper>
            <TextWrapper>UI/UX designing, html css tutorials</TextWrapper>
            <TextWrapper>Welcome to our channel Dev AT. Here you can learn web designing,
              UI/UX designing, html css tutorials, css animations and css effects,
              javascript and jquery tutorials and related so on.
            </TextWrapper>
            <ButtonWrapper>SHOPAHOLIC</ButtonWrapper>
          </BoxWrapper>
        </DetailWrapper>
      </SectionWrapper>
    )
  }
}

export default ProductDetail;
