import React from 'react'
import {
    CartContainer,
    CartContent,
    CartHeader,
    CartBox
} from './CartElement'

const Cart = () => {
    return ( 
        <CartContainer>
            <CartContent>
                <CartHeader>Cart Items</CartHeader>
                <CartBox>


                </CartBox>

            </CartContent>
        </CartContainer>
    )
}

export default Cart

/* <AddOrDelete>
<AddDeleteBtn 
onClick={() => {
    setQuantity(quantity + 1);
}}
><i class="fas fa-plus"></i></AddDeleteBtn>
<CountText>{ quantity + 1}</CountText>
<AddDeleteBtn
onClick={() => {
    setQuantity(quantity - 1);
}}
><i class="fas fa-minus"></i></AddDeleteBtn>
</AddOrDelete> */
