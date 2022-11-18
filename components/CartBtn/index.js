import Link from "next/link";
import styled from "styled-components";

const Button = styled.div`
  width: 4rem;
  position: absolute;
  right: 5%;
  top: 2rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 1.125rem;
`;

const CartBtn = () => {
  return (
    <Link href="/cart">
      <Button>
        <ButtonText>Cart ❯</ButtonText>
      </Button>
    </Link>
  );
};

export default CartBtn;
