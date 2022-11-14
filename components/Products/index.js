import react from "react";
import styled from "styled-components";

import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`;

function Products({ products }) {
  return (
    <Container>
      {products.map((product) => {
        return (
          <ProductCard
            key={product?.id}
            name={product?.name}
            price={product?.price}
            regularPrice={product?.regular_price}
            salePrice={product?.sale_price}
            img={product?.images[0]}
            categories={product?.categories}
            slug={product?.slug}
          />
        );
      })}
    </Container>
  );
}

export default Products;
