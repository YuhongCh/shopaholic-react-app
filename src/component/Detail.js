import React, { Component } from 'react'
import background from "../static/background.jpg"
import {
  DetailInfoWrapper,
  DetailImageWrapper,
  ProductDetailWrapper,
  SectionWrapper,
  DetailTextWrapper,
  DetailTitleWrapper,
  DetailButtonWrapper
} from "./style";
import Header from "./Header";

export class Detail extends Component {

  constructor() {
    super();
    this.state = {
      title: "POLESTAR 1",
      introduction: "UI/UX designing, html css tutorials",
      description: "Welcome to our channel Dev AT. Here you can learn web designing,\n" +
        "UI/UX designing, html css tutorials, css animations and css effects,\n" +
        "javascript and jquery tutorials and related so on."
    }
  }

  render() {
    return (
      <div>
        <SectionWrapper>
          <ProductDetailWrapper>
            <DetailImageWrapper src={background} alt=""/>
            <DetailInfoWrapper>
              <DetailTitleWrapper>{this.state.title}</DetailTitleWrapper>
              <DetailTextWrapper>{this.state.introduction}</DetailTextWrapper>
              <DetailTextWrapper>{this.state.description}</DetailTextWrapper>
              <DetailButtonWrapper onClick={() => alert("not available yet")}>SHOPAHOLIC</DetailButtonWrapper>
            </DetailInfoWrapper>
          </ProductDetailWrapper>
        </SectionWrapper>
      </div>
    )
  }
}

export default Detail;
