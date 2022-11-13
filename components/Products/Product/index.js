import react from "react";
import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  width: 17.5rem;
  height: 22.625rem;
  padding: 1.25rem;
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

function Product({ name, price, regularPrice, salePrice, img, categories, slug }) {
  return (
    <Card>
      <Image
        src={img.src}
        layout="responsive"
        objectFit="cover"
        alt={name}
        width={280}
        height={274}
      />
      <Title>{name}</Title>
      <PriceContainer>
        {salePrice && <CrossOutPrice>${regularPrice}</CrossOutPrice>}
        <Price>${price}</Price>
      </PriceContainer>
    </Card>
  );
}

export default Product;
