import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
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

const Description = styled.p``;

function Product({ product, relatedProducts }) {
  const { images, name, sale_price, regular_price, price, short_description } =
    product;
  const router = useRouter();

  console.log(11, product);
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
        </Card>
      </Container>
    </>
  );
}

export default Product;
