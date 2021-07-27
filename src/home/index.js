import React, {useEffect, useState} from 'react'
import background from "../static/cover.jpg";
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
      props.getHomeData();
      setMount(true);
    }
  }, [mount, props]);

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
      <CardWrapper key={product.id}>
        <CardImageWrapper src={background} alt=""/>
        <CardInfoWrapper>
          <CardTitleLinkWrapper to="/product/detail">{product.title}</CardTitleLinkWrapper>
          <CardTextWrapper>Price: ${product.price}</CardTextWrapper>
          <CardTextWrapper>Sales: ${product.description}</CardTextWrapper>
        </CardInfoWrapper>
        <CardDetailLinkWrapper to="/product/detail"> SEE DETAIL </CardDetailLinkWrapper>
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
  getHomeData() {
    const action = actionCreators.getHome();
    dispatch(action);
  }
})

export default connect(mapStateToProps, mapDispatch)(Home);
