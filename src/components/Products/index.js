import React from 'react'
import {
    ProductsContainer, 
    ProductsHeading, 
    ProductWrapper, 
    ProductCard, 
    ProductImg,
    ProductInfo, 
    ProductTitle, 
    ProductDesc, 
    ProductPrice, 
    ProductButton, 
    CardFooter
} from './ProductsElements'


const Products = ({ heading, data }) => {
    return (
        <ProductsContainer>
            <ProductsHeading>Menu</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.description}</ProductDesc>
                            <CardFooter>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton><i class="fas fa-cart-plus"></i></ProductButton>
                            </CardFooter>

                        </ProductInfo>
                    </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products
