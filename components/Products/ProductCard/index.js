import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { serializeCategory } from "../../../utils";

const Card = styled.div`
  width: 17.5rem;
  height: 22.625rem;
  padding: 1.25rem;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 1rem;
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

function ProductCard({
  name,
  price,
  regularPrice,
  salePrice,
  img,
  categories,
  slug,
}) {
  const { parent, slug: productCategory } = serializeCategory(categories);
  const url = `/shop/${parent}/${productCategory}/${slug}`;

  return (
    <Link href={`${url}`}>
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
    </Link>
  );
}

export default ProductCard;
