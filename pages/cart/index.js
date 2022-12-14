import Link from "next/link";
import Head from "next/head";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BackBtn from "../../components/BackBtn";
import CartTable from "../../components/CartTable";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7.063rem;
`;

const ContentContainer = styled.div`
  width: 80%;
`;

const Header = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #f7f7f7;
  margin-top: 2.375rem;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 3.313rem;
`;

const CheckoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.938rem;
  height: 3.063rem;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);

  return (
    <>
      <Head>
        <title>Acrowd - Cart</title>
        <meta name="description" content="Acrowd Cart" />
      </Head>
      <BackBtn />
      <Container>
        <ContentContainer>
          <Header>Cart</Header>
          <TableContainer
            sx={{ width: "100%", margin: "auto" }}
            component={Paper}
          >
            <Table
              sx={{ width: "100%", margin: "auto", border: 0 }}
              aria-label="simple table"
            >
              <TableHead sx={{ background: "#f6f6f6" }}>
                <TableRow>
                  <TableCell sx={{ color: "#000" }}></TableCell>
                  <TableCell sx={{ color: "#000" }} align="left">
                    Product
                  </TableCell>
                  <TableCell sx={{ color: "#000" }} align="left">
                    Price
                  </TableCell>
                  <TableCell sx={{ color: "#000" }} align="left">
                    Quantity
                  </TableCell>
                  <TableCell sx={{ color: "#000" }} align="left">
                    Total
                  </TableCell>
                  <TableCell sx={{ color: "#000" }} align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((productInCart) => {
                  return (
                    <CartTable
                      key={productInCart.id}
                      products={productInCart}
                    />
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Divider />
          <BtnContainer>
            <Link href="/checkout">
              <CheckoutBtn>Proceed to checkout</CheckoutBtn>
            </Link>
          </BtnContainer>
        </ContentContainer>
      </Container>
    </>
  );
}
