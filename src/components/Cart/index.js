import React from 'react'
// import Products from '../Products/index';

import {
    CartContainer,
    CartContent,
    CartHeader,
    CartBox
} from './CartElement'

const Cart = (props) => {
    const { cartItems } = props;

    return ( 
        <CartContainer>
            <CartContent>
                <CartHeader>Cart Items</CartHeader>
                <CartBox>
                    {cartItems.length === 0 && <p>Cart is Empty</p>}

                </CartBox>

            </CartContent>
        </CartContainer>
    )
}

export default Cart