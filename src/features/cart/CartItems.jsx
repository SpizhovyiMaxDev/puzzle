import CartItem from "./CartItem";

function CartItems({ cart }) {
  return (
    <ul className="space-y-2 divide-y-2">
      {cart.map((product) => (
        <CartItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default CartItems;
