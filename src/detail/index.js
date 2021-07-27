import React, {useEffect, useState} from 'react'
import background from "../static/cover.jpg"
import useToken from "../gateway/hook/useToken";
import {
  DetailInfoWrapper,
  DetailImageWrapper,
  ProductDetailWrapper,
  SectionWrapper,
  DetailTextWrapper,
  DetailTitleWrapper,
  DetailButtonWrapper, CountDownTextWrapper
} from "../style";
import {Redirect} from "react-router";
import Header from "../header/index";
import Countdown from 'react-countdown';
import {connect} from "react-redux";
import * as actionCreators from "./store/actionCreators";

const Detail = (props) => {

  const {token} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      props.getDetailData();
      setMount(true);
    }
  }, [mount, props]);
  if (token === null) {
    return <Redirect to="/signin"/>;
  }

  const productDetail = props.productDetail.toJS();

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <ProductDetailWrapper>
          <DetailImageWrapper src={background} alt=""/>
          <DetailInfoWrapper>
            <DetailTitleWrapper>{productDetail.title}</DetailTitleWrapper>
            <DetailTextWrapper>{productDetail.description}</DetailTextWrapper>
            <DetailTextWrapper>
              price: {productDetail.sales} / {productDetail.price}
            </DetailTextWrapper>
            <DetailTextWrapper> stock: {productDetail.stock} </DetailTextWrapper>
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

const renderer = ({hours, minutes, seconds, completed, total}) => {
  if (completed) { // Render a completed state
    return (
      <div>
        <CountDownTextWrapper>shopaholic is now open!!!</CountDownTextWrapper>
        <DetailButtonWrapper onClick={() => alert("success")}>
          SHOPAHOLIC
        </DetailButtonWrapper>
      </div>
    )
  } else { // Render a countdown
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

const mapStateToProps = (state) => {
  return {
    productDetail: state.getIn(['detail', 'productDetail'])
  }
}

const mapDispatch = (dispatch) => ({
  getDetailData() {
    const action = actionCreators.getDetail();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Detail);
