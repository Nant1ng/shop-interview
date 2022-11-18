import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cartActions } from "../../shop/cart";

const CartBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.938rem;
  height: 3.063rem;
  background-color: #000000;
  color: #ffffff;
  text-transform: uppercase;
  cursor: pointer;
`;

const AddToCart = ({ product, quantity }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const data = {
      id: product.id,
      name: product.name,
      image: product.images[0].src,
      quantity: quantity,
      price: product.price,
    };

    dispatch(cartActions.addProduct(data));
  };
  return (
    <>
      <CartBtn onClick={() => addToCart()}>Add to Cart</CartBtn>
    </>
  );
};

export default AddToCart;
