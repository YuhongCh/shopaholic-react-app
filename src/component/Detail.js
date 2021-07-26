import React, { Component } from 'react'
import background from "../static/background.jpg"
import useToken from "../hook/useToken";
import {
  DetailInfoWrapper,
  DetailImageWrapper,
  ProductDetailWrapper,
  SectionWrapper,
  DetailTextWrapper,
  DetailTitleWrapper,
  DetailButtonWrapper, CountDownTextWrapper
} from "./style";
import {Redirect} from "react-router";
import Header from "./Header";
import Countdown from 'react-countdown';

export default function Detail () {

  const { token, setToken } = useToken();

  if (token === null) {
    return <Redirect to="/signin"/>;
  }

  const state = {
    title: "POLESTAR 1",
    introduction: "UI/UX designing, html css tutorials",
    description: "Welcome to our channel Dev AT. Here you can learn web designing,\n" +
      "UI/UX designing, html css tutorials, css animations and css effects,\n" +
      "javascript and jquery tutorials and related so on."
  }

    return (
      <div>
        <Header/>
        <SectionWrapper>
          <ProductDetailWrapper>
            <DetailImageWrapper src={background} alt=""/>
            <DetailInfoWrapper>
              <DetailTitleWrapper>{state.title}</DetailTitleWrapper>
              <DetailTextWrapper>{state.description}</DetailTextWrapper>
              <DetailTextWrapper>price: 0.01 / 100.01 </DetailTextWrapper>
              <DetailTextWrapper> stock: 5 </DetailTextWrapper>
              <CountDownTextWrapper>
              <Countdown
                date={Date.now() + 5000}
                renderer={renderer}
                intervalDelay={0}
                precision={3}
              >
              </Countdown>
              </CountDownTextWrapper>
            </DetailInfoWrapper>
          </ProductDetailWrapper>
        </SectionWrapper>
      </div>
    )
}

const renderer = ({ hours, minutes, seconds, completed, total }) => {
  if (completed) {
    // Render a completed state
    return  (
      <div>
        <CountDownTextWrapper>shopaholic is now open!!!</CountDownTextWrapper>
        <DetailButtonWrapper onClick={() => alert("success")}>
          SHOPAHOLIC
        </DetailButtonWrapper>
      </div>
   )
  } else {
    // Render a countdown
    return (
      <div>
        <CountDownTextWrapper>
          <span>sales start in (millisecond) : {total}</span>
        </CountDownTextWrapper>
        <DetailButtonWrapper disabled={true}>
          NOT AVAILABLE
        </DetailButtonWrapper>
      </div>
      )
  }
};

