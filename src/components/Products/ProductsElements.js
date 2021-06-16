import styled from 'styled-components';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((90vw - 1300px) / 2);
  background: rgb(255,250,240);
  color: #000;
  padding-top: 150px;
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

  :hover{
    border: 1px solid gray;
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductP = styled.p`
  font-style: italic;
  letter-spacing: 1px;
  text-align: center;
  margin-bottom: 5px;
`

export const ProductImg = styled.img`
  height: 250px;
  min-width: 298px;
  max-width: 100%;
  border-bottom: 1px solid lightgray;

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

export const ProducGood = styled.p`
  letter-spacing: 0.8px;
  line-height: 1.2;
  color: gray;
  font-style: italic;
  text-transform: capitalize;
`

export const ProductPrice = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

// Card footer
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;

`


export const ProductButton = styled.a`
  font-size: 1rem;
  padding: 0 10px;
  background-color: #FEDF1B;
  border-radius: 15px;
  border: 1px solid gray;
  text-decoration: none;
  color: black;
  transition: 0.15s ease-in-out;
  cursor: pointer;

  :hover{
    background-color: #d1b500
  }
`;

