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
    ProducGood,
    ProductPrice, 
    ProductButton, 
    CardFooter,
    ProductP,
} from './ProductsElements'


const Products = ({ data }) => {

    const onAdd = () => {
        console.log(onAdd);
    }

    return (
        <ProductsContainer>
            <ProductsHeading>Products</ProductsHeading>
            <ProductP>*We start making a Fruizzy after we receive your order</ProductP>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                            <ProductTitle>{product.name}</ProductTitle>
                            <ProductDesc>{product.description}</ProductDesc>
                            <ProducGood>{product.goodfor}</ProducGood>
                            <ProductPrice>{product.price}</ProductPrice>
                            <CardFooter>                                
                                <ProductButton 
                                onClick={() => onAdd()}>          
                                Add to Cart</ProductButton>
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
