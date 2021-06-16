import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: rgb(255,250,240);
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
  background-color: white;
  border: 1px solid lightgray;
  margin-bottom: 50px;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  border: 1px solid gray;

`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 0.5rem;
  line-height: 1.5;
  letter-spacing: 0.8px;
`;

export const CardFooter = styled.div`
  display: flex;
`

export const ProductPrice = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

