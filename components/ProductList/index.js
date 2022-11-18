import styled from "styled-components";

const ListContainer = styled.div`
  width: 100%;
  margin-bottom: 1.438rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProductName = styled.p`
  font-size: 0.75rem;
  font-weight: bold;
  width: 14.938rem;
  margin: 0 1.5rem;
`;

const ProdcutPrice = styled.p`
  margin: 0 1.5rem;
`;

const ProductList = ({ products }) => {
  const { name, price, quantity } = products;

  return (
    <ListContainer>
      <List>
        <ProductName>
          {name} x {quantity}
        </ProductName>
        <ProdcutPrice>${quantity * price}</ProdcutPrice>
      </List>
    </ListContainer>
  );
};

export default ProductList;
