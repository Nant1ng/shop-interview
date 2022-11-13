import Link from "next/link";
import styled from "styled-components";
import BackBtn from "../BackBtn";
import Products from "../Products";
import NavbarForCategories from "./NavbarForCategories";

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

function CategoryProducts({ categoryName, products, categories }) {
  return (
    <Container>
      <BackBtn />
      <Header>{categoryName}</Header>
      <NavbarForCategories
        categories={categories}
        url={`/shop/${categoryName}`}
      />
      <Products products={products} />
    </Container>
  );
}

export default CategoryProducts;
