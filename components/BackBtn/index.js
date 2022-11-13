import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

const Button = styled.div`
  width: 4rem;
  position: absolute;
  left: 10%;
  top: 3.563rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 1.125rem;
`;

const BackBtn = () => {
  const router = useRouter();
  const backButtonHandler = () => {
    const paths = router.asPath.split("/");
    paths.splice(paths.length - 1);
    router.push(paths.join("/"));
  };
  return (
    <Button onClick={backButtonHandler}>
      <ButtonText>❮ Back</ButtonText>
    </Button>
  );
};

export default BackBtn;
