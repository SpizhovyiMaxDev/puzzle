import { useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import CartHeader from "./CartHeader";
import CartSummary from "./CartSummary";

function Cart() {
  const cart = useSelector(getCart);
  const isEmpty = cart.length === 0;
  const totalSum = useSelector(getTotalCartPrice);

  return (
    <section className="px-4 py-32 min-h-[70vh]">
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <div className="max-w-customMd mx-auto min-h-screen">
          <CartHeader />
          <CartItems cart={cart} />
          <CartSummary totalSum={totalSum} />
        </div>
      )}
    </section>
  );
}

export default Cart;
