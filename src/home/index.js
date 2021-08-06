import React, {useEffect, useState} from 'react'
import useToken from "../gateway/hook/useToken";
import {Redirect} from "react-router";
import Header from "../header/index";
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {
  CardWrapper, CardImageWrapper, CardInfoWrapper,
  CardDetailLinkWrapper, CardTextWrapper, CardTitleLinkWrapper,
  SectionWrapper, ProductListWrapper,
} from "../style";
import axios from "axios";

async function validate(token) {

  return await axios({
    method: 'post',
    url: 'http://localhost:8080/user/validate',
    data: {
      cookie : token
    }
  }).then(response => response.data.code === 0)
    .catch(error => null)

}

const Home = (props) => {

  const {token, setToken} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      validate(token).then(function(response) {
        if (!response) {
          setToken(null);
        }
      })
      props.getHomeData(token);
      setMount(true);
    }
  }, [mount, props, setToken, token]);

  if (token === null) {
    return <Redirect to="/signin"/>;
  }
  else {
    return (
      <div>
        <Header/>
        <SectionWrapper>
          <ProductListWrapper>
            <ProductList products={props.productList.toJS()}/>
          </ProductListWrapper>
        </SectionWrapper>
      </div>
    )
  }
}

const ProductList = ({products}) => {

  return (
    products.map(product => (
      <CardWrapper key={product.productId}>
        <CardImageWrapper src={product.productImg} alt=""/>
        <CardInfoWrapper>
          <CardTitleLinkWrapper to="/product/detail">{product.productName}</CardTitleLinkWrapper>
          <CardTextWrapper>Price: ${product.productPrice}</CardTextWrapper>
          <CardTextWrapper>Sales: ${product.productDiscount}</CardTextWrapper>
          <CardTextWrapper>{product.productTitle}</CardTextWrapper>
        </CardInfoWrapper>
        <CardDetailLinkWrapper
          to={ 'product/' + product.productId }
        > SEE DETAIL </CardDetailLinkWrapper>
      </CardWrapper>
    ))
  )
}

const mapStateToProps = (state) => {
  return {
    productList: state.getIn(['home', 'productList'])
  }
}

const mapDispatch = (dispatch) => ({
  getHomeData(token) {
    const action = actionCreators.getHome(token);
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Home);
