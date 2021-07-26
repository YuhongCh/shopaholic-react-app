import React, { Component } from 'react'
import Header from "./Header";
import {
  CardTableWrapper, CartPaymentWrapper, CartTitleHeaderWrapper, CartTitleWrapper,
  SectionWrapper
} from "./style";

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
        <CardTableWrapper>
          <table>
            <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td><div>$100</div></td>
              <td>1</td>
              <td><strong>$100</strong></td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td><div>$100</div></td>
              <td>1</td>
              <td><strong>$100</strong></td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td><div>$100</div></td>
              <td>1</td>
              <td><strong>$100</strong></td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td><div>$100</div></td>
              <td>1</td>
              <td><strong>$100</strong></td>
            </tr>
            <tr>
              <td className="flex"><strong>POLESTAR 1</strong></td>
              <td><div>$100</div></td>
              <td>1</td>
              <td><strong>$100</strong></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td><CartPaymentWrapper> PAYMENT </CartPaymentWrapper></td>
            </tr>
            </tbody>
          </table>
        </CardTableWrapper>
      </SectionWrapper>
    </div>
  )
}

function OrderList(orders) {

  const total = 0;
  orders.map(order => {


  })
}
