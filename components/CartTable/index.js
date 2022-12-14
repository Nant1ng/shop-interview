import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shop/cart";
import styled from "styled-components";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { Close } from "@mui/icons-material";

const QuantityToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #000000;
  width: 7.938rem;
  height: 3.063rem;
`;

const QuantityBtn = styled.div`
  font-size: 2rem;
  cursor: pointer;
  height: 100%;
`;

const QuantityValue = styled.p`
  font-size: 1.5rem;
`;

const CartTable = ({ products }) => {
  const { id, name, price, image, quantity, totalPrice } = products;
  const dispatch = useDispatch();

  const setDecrease = () => {
    dispatch(cartActions.removeProduct({ id: id }));
  };

  const setIncrease = () => {
    dispatch(cartActions.addProduct({ id: id }));
  };

  return (
    <>
      <TableRow
        key={id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Image
            src={image}
            alt={name}
            layout="fixed"
            objectFit="cover"
            width={121}
            height={118}
          />
        </TableCell>
        <TableCell sx={{ fontWeight: "700", fontSize: "16px" }} align="left">
          {name}
        </TableCell>
        <TableCell align="left">${price}</TableCell>
        <TableCell align="left">
          <QuantityToggle>
            <QuantityBtn onClick={() => setDecrease()}> - </QuantityBtn>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityBtn onClick={() => setIncrease()}> + </QuantityBtn>
          </QuantityToggle>
        </TableCell>
        <TableCell align="left">${totalPrice}</TableCell>
        <TableCell align="left">
          <Button
            sx={{
              color: "#000",
              "&:hover": { background: "transparent" },
            }}
            onClick={() => dispatch(cartActions.deleteProduct({ id: id }))}
          >
            <Close color="#000" />
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

export default CartTable;
