import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ProductRow from "../../components/ProductRow";
import BackBtn from "../../components/BackBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7.063rem;
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TitleRow = styled.div`
  width: 100%;
  height: 3.563rem;
  background-color: #f6f6f6;
  margin-top: 4rem;
  margin-bottom: 2.375rem;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.p``;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f7f7f7;
  margin-top: 2.375rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3.313rem;
`;

const CheckoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.938rem;
  height: 3.063rem;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);

  return (
    <>
      <Head>
        <title>Acrowd - Cart</title>
        <meta name="description" content="Acrowd Cart" />
      </Head>
      <BackBtn />
      <Container>
        <ContentContainer>
          <Header>Cart</Header>
          <TitleRow>
            <Title>Product</Title>
            <Row>
              <Title>Price</Title>
              <Title>Quantity</Title>
              <Title>Total</Title>
            </Row>
          </TitleRow>
          {cart.map((product) => {
            return <ProductRow key={product.id} products={product} />;
          })}
          <Divider />
          <BtnContainer>
            <Link href="/checkout">
              <CheckoutBtn>Proceed to checkout</CheckoutBtn>
            </Link>
          </BtnContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
