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
  DetailButtonWrapper
} from "./style";
import {Redirect} from "react-router";
import Header from "./Header";

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
              <DetailTextWrapper>{state.introduction}</DetailTextWrapper>
              <DetailTextWrapper>{state.description}</DetailTextWrapper>
              <DetailButtonWrapper onClick={() => alert("not available yet")}>SHOPAHOLIC</DetailButtonWrapper>
            </DetailInfoWrapper>
          </ProductDetailWrapper>
        </SectionWrapper>
      </div>
    )
}
