function CartHeader() {
  return (
    <div className="flex justify-between border-b-2 py-4">
      <span className="text-2xl font-semibold">Shopping Cart</span>
      <span className="hidden lg:inline-block text-xl font-medium">Price</span>
    </div>
  );
}

export default CartHeader;
