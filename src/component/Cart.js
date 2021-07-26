import React, { Component } from 'react'
import Header from "./Header";
import {
  CartTableWrapper, CartPaymentWrapper, CartTitleHeaderWrapper, CartTitleWrapper,
  SectionWrapper
} from "./style";
import Checkout from "./Checkout";

export default function Cart() {

  const state = {
    orders : [
      {}
    ]
  }

  return (
    <div>
      <Header/>
      <SectionWrapper>
        <CartTitleHeaderWrapper>
          <div>
            <CartTitleWrapper>Your Cart</CartTitleWrapper>
            <span> 4 items</span>
          </div>
        </CartTitleHeaderWrapper>
        <CartTableWrapper>
          <table>
            <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th className="broader">Quantity</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td>$100</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td>$100</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td>$100</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td>$100</td>
              <td>1</td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td>$100</td>
              <td>1</td>
            </tr>
            <tr>
              <td></td>
              <td><strong>Total: $500</strong></td>
              <td><CartPaymentWrapper to="/checkout"> PAYMENT </CartPaymentWrapper></td>
            </tr>
            </tbody>
          </table>
        </CartTableWrapper>
      </SectionWrapper>
    </div>
  )
}

function OrderList(orders) {

  const total = 0;
  orders.map(order => {


  })
}
