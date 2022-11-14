import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import BackBtn from "../BackBtn";
import RelatedProducts from "./RelatedProducts";
import { TABLET_BP } from "../../utils/consts";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const Header = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
  ${TABLET_BP} {
    font-size: 3rem;
  }
`;

const Card = styled.div`
  width: 17.5rem;
  height: 22.625rem;
  padding: 1.25rem;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1rem;
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

const Description = styled.p``;

const Cart = styled.div`
  display: flex;
  flex-direction: row;
`;

const CartAmountToggle = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  border: 1px solid #000000;
  width: 7.938rem;
  height: 3.063rem;
`;

const AmountBtn = styled.div`
  font-size: 2rem;
  cursor: pointer;
  height: 100%;
`;

const AmountValue = styled.div`
  font-size: 1.5rem;
`;

const CartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.938rem;
  height: 3.063rem;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;

function Product({ product, relatedProducts }) {
  const { images, name, sale_price, regular_price, price, short_description } =
    product;
  const router = useRouter();
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <>
      <BackBtn />
      <Container>
        <Header>
          {router.asPath.split("/")[1]} /{router.asPath.split("/")[2]} /{" "}
          {router.asPath.split("/")[3]}
        </Header>
        <Card>
          <Image
            src={images[0].src}
            layout="responsive"
            objectFit="cover"
            alt={name}
            width={280}
            height={274}
          />
          <Title>{name}</Title>
          <PriceContainer>
            {sale_price && <CrossOutPrice>${regular_price}</CrossOutPrice>}
            <Price>${price}</Price>
          </PriceContainer>
          <Description>
            {short_description.replace(/<\/?[^>]+(>|$)/g, "")}
          </Description>
          <Cart>
            <CartAmountToggle>
              <AmountBtn onClick={() => setDecrease()}> - </AmountBtn>
              <AmountValue>{amount}</AmountValue>
              <AmountBtn onClick={() => setIncrease()}> + </AmountBtn>
            </CartAmountToggle>
            <Link href="/cart">
              <CartBtn>Add to Cart</CartBtn>
            </Link>
          </Cart>
        </Card>
        <RelatedProducts products={relatedProducts} />
      </Container>
    </>
  );
}

export default Product;
