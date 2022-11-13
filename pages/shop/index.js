import react from "react";
import Head from "next/head";
import styled from "styled-components";
import { getAllProducts } from "../../api";
import Products from "../../components/Products";
import Navbar from "../../components/Navbar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.p`
  font-size: 3rem;
`;

export default function Shop({ products }) {
  return (
    <>
      <Head>
        <title>Acrowd - Shop</title>
        <meta name="description" content="Acrowd shop" />
      </Head>
      <Container>
        <Header>Shop</Header>
        <Navbar />
        <Products products={products} />
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const data = await getAllProducts();

  return {
    props: {
      products: data,
    },
  };
}
