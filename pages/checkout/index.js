import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../shop/cart";
import styled from "styled-components";
import ProductList from "../../components/ProductList";
import BackBtn from "../../components/BackBtn";
import { LAPTOP_BP } from "../../utils/consts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7.063rem;
`;

const ContentContainer = styled.div`
  width: 80%;
  ${LAPTOP_BP} {
    width: 40%;
  }
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const InputTitle = styled.p`
  font-size: 0.875rem;
`;

const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  padding: 0.625rem;
  border: 1px solid #000000;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.563rem;
  background-color: #f7f7f7;
  margin-top: 5.25rem;
  margin-bottom: 1.5rem;
`;

const BannerTitle = styled.p`
  font-size: 1.125rem;
  width: 4.188rem;
  margin-left: 1.25rem;
`;

const TotalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.938rem;
`;

const TotalTitle = styled.p`
  font-weight: bold;
  margin: 0 1.5rem;
`;

const PurchaseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.063rem;
  height: 3.063rem;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 5.375rem;
`;

export default function Checkout() {
  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.products);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    setEmail("");
    setFirstName("");
    setLastName("");
    const orderData = {
      email,
      firstName,
      lastName,
      cart,
    };

    fetch("http://localhost:3000/api/orders", {
      method: "POST",
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          alert("Order Made Successfully!");
          dispatch(cartActions.clearCart());
          router.replace("/shop");
          dispatch(cartActions.clearCart());
        }
      });
  };

  let totalPrice;
  if (cart.length > 0) {
    totalPrice = cart.reduce((previousValue, currentValue) => {
      previousValue = +(previousValue + currentValue.totalPrice);

      return previousValue;
    }, 0);
  }

  return (
    <>
      <Head>
        <title>Acrowd - Checkout</title>
        <meta name="description" content="Acrowd Checkout" />
      </Head>
      <BackBtn />
      <Container>
        <ContentContainer>
          <Header>Checkout</Header>
          <InputTitle>Email * </InputTitle>
          <Input
            type="text"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputRow>
            <InputGroup>
              <InputTitle>First name * </InputTitle>
              <Input
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputTitle>Last name * </InputTitle>
              <Input
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputGroup>
          </InputRow>
          <Banner>
            <BannerTitle>Product</BannerTitle>
            <BannerTitle>Total</BannerTitle>
          </Banner>
          {cart.map((product) => {
            return <ProductList key={product.id} products={product} />;
          })}

          <TotalRow>
            <TotalTitle>Total</TotalTitle>
            <TotalTitle>${totalPrice}</TotalTitle>
          </TotalRow>
        </ContentContainer>
        <PurchaseBtn onClick={submitOrder}>Confirm Purchase</PurchaseBtn>
      </Container>
    </>
  );
}
