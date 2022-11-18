import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shop/cart";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 1.938rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.div`
  width: 7.563rem;
  height: 7.375rem;
  background-color: black;
`;

const ProductName = styled.p`
  font-weight: bold;
  width: 14.938rem;
  margin: 0 1rem;
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
  const { id, name, price, image, quantity, totalPrice } = products;
  const dispatch = useDispatch();

  const setDecrease = () => {
    dispatch(cartActions.removeProduct({ id: id }));
  };

  const setIncrease = () => {
    dispatch(cartActions.addProduct({ id: id }));
  };

  return (
    <Container>
      <ContentContainer>
        <LeftSide>
          <ImgContainer>
            <Image
              src={image}
              layout="responsive"
              objectFit="cover"
              alt={name}
              width={121}
              height={118}
            />
          </ImgContainer>
          <ProductName>{name}</ProductName>
        </LeftSide>
        <Price>${price}</Price>
        <QuantityToggle>
          <QuantityBtn onClick={() => setDecrease()}> - </QuantityBtn>
          <QuantityValue>{quantity}</QuantityValue>
          <QuantityBtn onClick={() => setIncrease()}> + </QuantityBtn>
        </QuantityToggle>
        <TotalPrice>${totalPrice}</TotalPrice>
        <CloseBtn
          onClick={() => dispatch(cartActions.deleteProduct({ id: id }))}
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
      </ContentContainer>
    </Container>
  );
}

export default ProductRow;
