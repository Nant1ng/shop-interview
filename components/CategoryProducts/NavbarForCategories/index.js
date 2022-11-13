import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  cursor: pointer;
  margin: 0 1.25rem 0;
  font-size: 1.125rem;
`;

function NavbarForCategories({ categories, url }) {
  return (
    <Container>
      {categories.map((category) => (
        <Link key={category?.id} href={`${url}/${category.name.toLowerCase()}`}>
          <Button>{category.name}</Button>
        </Link>
      ))}
    </Container>
  );
}

export default NavbarForCategories;
