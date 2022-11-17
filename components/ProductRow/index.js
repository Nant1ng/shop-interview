import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Imgtest = styled.div`
  width: 7.563rem;
  height: 7.375rem;
  background-color: black;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin: 0 3rem;
`;

const Price = styled.p``;

const QuantityToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000000;
  width: 7.938rem;
  height: 3.063rem;
`;

const QuantityBtn = styled.div`
  font-size: 2rem;
  cursor: pointer;
  height: 100%;
`;

const QuantityValue = styled.p`
  font-size: 1.5rem;
`;

const TotalPrice = styled.p``;

const CloseBtn = styled.div`
  cursor: pointer;
`;

function ProductRow() {
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Container>
      <LeftSide>
        <Imgtest />
        <ProductName>QWERQWER</ProductName>
      </LeftSide>
      <Price>$27.99</Price>
      <QuantityToggle>
        <QuantityBtn onClick={() => setDecrease()}> - </QuantityBtn>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityBtn onClick={() => setIncrease()}> + </QuantityBtn>
      </QuantityToggle>
      <TotalPrice>$30.00</TotalPrice>
      <CloseBtn>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L15 15M1 15L15 1" stroke="black" />
        </svg>
      </CloseBtn>
    </Container>
  );
}

export default ProductRow;
