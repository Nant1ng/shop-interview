import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import Products from "../Products";
import BackBtn from "../BackBtn";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`;

const Header = styled.p`
  font-size: 3rem;
  text-transform: capitalize;
`;

const ProductCategory = ({ products }) => {
  const router = useRouter();
  return (
    <Container>
      <BackBtn />
      <Header>
        {router.asPath.split("/")[2]} / 
        {router.query.productCategory}
      </Header>
      <Products products={products} />
    </Container>
  );
};

export default ProductCategory;
