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

const Home = (props) => {

  const {token} = useToken();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      props.getHomeData(token);
      setMount(true);
    }
  }, [mount, props, token]);

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
