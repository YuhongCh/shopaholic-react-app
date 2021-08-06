import React, {useEffect, useState} from 'react'
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
import axios from "axios";

async function validate(token) {

  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/validate',
    data: {
      cookie : token
    }
  }).then(response => response.data.code === 0)
    .catch(error => false)

}

const Detail = (props) => {

  const {token, setToken} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      validate(token).then(function(response) {
        if (!response) {
          setToken(null);
        }
      })
      props.getDetailData(props.match.params, token);
      setMount(true);
    }
  }, [mount, props, setToken, token]);

  if (token === null) {
    return <Redirect to="/signin"/>;
  }

  const product = props.productDetail.toJS();

  if (product == null) {
    return <div></div>
  }

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <ProductDetailWrapper>
          <DetailImageWrapper src={product.productImg} alt=""/>
          <DetailInfoWrapper>
            <DetailTitleWrapper>{product.productName}</DetailTitleWrapper>
            <DetailTextWrapper>{product.productDetail}</DetailTextWrapper>
            <DetailTextWrapper>
              price: {product.productDiscount} / {product.productPrice}
            </DetailTextWrapper>
            <DetailTextWrapper> stock: {product.productStock} </DetailTextWrapper>
            <CountDownTextWrapper>
              <Countdown
                date={new Date(product.startDate)}
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

const renderer = ({days, hours, minutes, seconds, completed, total}) => {
  if (completed) { // Render a completed state
    return (
      <div>
        <CountDownTextWrapper>shopaholic is now open!!!</CountDownTextWrapper>
        <DetailButtonWrapper onClick={(e) => console.log()}>
          ADD TO CART
        </DetailButtonWrapper>
      </div>
    )
  } else if (total > 100000) {
    const hourString = hours > 1 ? "hours" : "hour";
    const minuteString = minutes > 1 ? "minutes" : "minute";
    const secondString = seconds > 1 ? "seconds" : "second";
    const dayString = days > 1 ? "days" : "day";
    return (
      <div>
        <CountDownTextWrapper>
          <span>sales start in {days} {dayString} {hours} {hourString} {minutes} {minuteString} {seconds} {secondString}</span>
        </CountDownTextWrapper>
        <DetailButtonWrapper disabled={true}>
          NOT AVAILABLE
        </DetailButtonWrapper>
      </div>

    );
  } else { // Render a countdown
    return (
      <div>
        <CountDownTextWrapper>
          <span>sales start soon: {total}</span>
        </CountDownTextWrapper>
        <DetailButtonWrapper disabled={true}>
          NOT AVAILABLE
        </DetailButtonWrapper>
      </div>
    )
  }
};

async function addToCart(credentials) {

  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/signin',
    data: {
      uid: credentials.phone,
      password: credentials.password
    }
  }).then(response => response.data.code === 0 ? response.data.data.cookie : null);

}

const mapStateToProps = (state) => {
  return {
    productDetail: state.getIn(['detail', 'productDetail'])
  }
}

const mapDispatch = (dispatch) => ({
  getDetailData(productId, cookie) {
    const action = actionCreators.getDetail(productId, cookie);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Detail);
