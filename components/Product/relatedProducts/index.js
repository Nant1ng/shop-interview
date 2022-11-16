import styled from "styled-components";
import ProductCard from "../../Products/ProductCard";
import {
  TABLET_BP,
  LAPTOP_BP,
  DESKTOP_BP,
} from "../../../utils/consts";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  ${DESKTOP_BP} {
    align-items: flex-start;
  }
`;

const Header = styled.h1`
  font-size: 1.5rem;
  ${LAPTOP_BP} {
    margin-left: 1.25rem;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${TABLET_BP} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

function RelatedProducts({ products }) {
  return (
    <Container>
      <Header>Related products</Header>
      <ProductContainer>
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
      </ProductContainer>
    </Container>
  );
}

export default RelatedProducts;
