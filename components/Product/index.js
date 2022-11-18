import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { TABLET_BP, DESKTOP_BP } from "../../utils/consts";
import BackBtn from "../BackBtn";
import RelatedProducts from "./RelatedProducts";
import AddToCart from "../AddToCart";
import CartBtn from "../CartBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${DESKTOP_BP} {
    flex-direction: row;
    padding: 0 1rem;
  }
`;

const ImgContainer = styled.div`
  width: 18.25rem;
  ${TABLET_BP} {
    width: 36.25rem;
    height: 36.25rem;
  }
`;

const ProductInfo = styled.div`
  width: 15rem;
  ${TABLET_BP} {
    width: 30rem;
  }
  ${DESKTOP_BP} {
    padding-left: 7.5rem;
  }
`;

const Header = styled.p`
  font-size: 1rem;
  text-transform: capitalize;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const Price = styled.p`
  font-size: 1rem;
  padding-right: 0.6rem;
  margin: 0;
`;

const CrossOutPrice = styled.p`
  font-size: 1rem;
  padding-right: 0.6rem;
  text-decoration-line: line-through;
  opacity: 0.5;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #414141;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.25rem;
`;

const CartQuantityToggle = styled.div`
  display: flex;
  align-items: baseline;
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

const QuantityValue = styled.div`
  font-size: 1.5rem;
`;

function Product({ product, relatedProducts }) {
  const { images, name, sale_price, regular_price, price, short_description } =
    product;
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const setDecrease = () => {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1);
  };

  const setIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <BackBtn />
      <CartBtn />
      <Container>
        <ProductContainer>
          <ImgContainer>
            <Image
              src={images[0].src}
              layout="responsive"
              objectFit="cover"
              alt={name}
              width={580}
              height={580}
            />
          </ImgContainer>
          <ProductInfo>
            <Header>
              {router.asPath.split("/")[1]} /{router.asPath.split("/")[2]} /{" "}
              {router.asPath.split("/")[3]}
            </Header>
            <Title>{name}</Title>
            <PriceContainer>
              {sale_price && <CrossOutPrice>${regular_price}</CrossOutPrice>}
              <Price>${price}</Price>
            </PriceContainer>
            <Description>
              {short_description.replace(/<\/?[^>]+(>|$)/g, "")}
            </Description>
            <Cart>
              <CartQuantityToggle>
                <QuantityBtn onClick={() => setDecrease()}> - </QuantityBtn>
                <QuantityValue>{quantity}</QuantityValue>
                <QuantityBtn onClick={() => setIncrease()}> + </QuantityBtn>
              </CartQuantityToggle>
              <AddToCart product={product} quantity={quantity} />
            </Cart>
          </ProductInfo>
        </ProductContainer>
        <RelatedProducts products={relatedProducts} />
      </Container>
    </>
  );
}

export default Product;
