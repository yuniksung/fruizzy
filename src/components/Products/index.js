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


const Products = (props) => {
    const { products, onAdd } = props;

    return (
        <ProductsContainer>
            <ProductsHeading>Products</ProductsHeading>
            <ProductP>*We start making a Fruizzy after we receive your order</ProductP>
            <ProductWrapper>
                {products.map((product, index) => {
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
                                onClick={() => onAdd(product)}>          
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
