import react from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavbarBtn = styled.a`
  cursor: pointer;
  margin: 0 1.25rem 0;
  font-size: 1.125rem;
`;

function Navbar() {
  return (
    <Container>
      <Link href="/shop/accessories">
        <NavbarBtn>Accessories</NavbarBtn>
      </Link>
      <Link href="/shop/men">
        <NavbarBtn>Men</NavbarBtn>
      </Link>
      <Link href="/shop/women">
        <NavbarBtn>Women</NavbarBtn>
      </Link>
    </Container>
  );
}

export default Navbar;
