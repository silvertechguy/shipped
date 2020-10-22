import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const CartScreen = ({ match, location }) => {
  const productId = match.params.id;

  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartScreen;
