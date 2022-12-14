import React from "react";
import Router from "next/router";
import styled from "styled-components";

const Button = styled.div`
  width: 4rem;
  position: absolute;
  left: 5%;
  top: 2rem;
  cursor: pointer;
`;

const ButtonText = styled.p`
  font-size: 1.125rem;
`;

const BackBtn = () => {
  return (
    <Button onClick={() => Router.back()}>
      <ButtonText>❮ Back</ButtonText>
    </Button>
  );
};

export default BackBtn;
