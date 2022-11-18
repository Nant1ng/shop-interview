import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shop/cart";
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

function ProductRow({ products }) {
  const { id, name, price, image, quantity } = products;
  const [quantitys, setQuantity] = useState(quantity);
  const dispatch = useDispatch();

  const setDecrease = () => {
    quantitys > 1 ? setQuantity(quantitys - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    setQuantity(quantitys + 1);
  };

  console.log(111, quantitys * price);
  console.log("hej");
  return (
    <Container>
      <LeftSide>
        <Imgtest />
        <ProductName>{name}</ProductName>
      </LeftSide>
      <Price>${price}</Price>
      <QuantityToggle>
        <QuantityBtn onClick={() => setDecrease()}> - </QuantityBtn>
        <QuantityValue>{quantitys}</QuantityValue>
        <QuantityBtn onClick={() => setIncrease()}> + </QuantityBtn>
      </QuantityToggle>
      <TotalPrice>${price * quantitys}</TotalPrice>
      <CloseBtn
        onClick={() =>
          dispatch(cartActions.deleteItem({ id: id }))
        }
      >
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
