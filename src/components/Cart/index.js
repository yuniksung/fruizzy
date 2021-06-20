import React from 'react'
// import Products from '../Products/index';

import {
    CartContainer,
    CartContent,
    CartHeader,
    CartBox,
    CartItems,
    ItemName,
    RemoveBtn,
    AddBtn
} from './CartElement'

const Cart = (props) => {
    const { cartItems, onAdd, onRemove } = props;

    return ( 
        <CartContainer>
            <CartContent>
                <CartHeader>Cart Items</CartHeader>
                <CartBox>
                    {cartItems.length === 0 && <p>Cart is Empty</p>}
                    {cartItems.map((item) => (
                        <CartItems key={item.id}>
                            <ItemName>{item.name}</ItemName>

                            <RemoveBtn onClick={()=> onRemove(item)}>-</RemoveBtn>
                            <AddBtn onClick={()=> onAdd(item)}>+</AddBtn>
                            
                        </CartItems>
                    ))}
                </CartBox>

            </CartContent>
        </CartContainer>
    )
}

export default Cart