function EmptyCart() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 py-6">
      <div className="max-w-customSm mx-auto grid grid-cols-1 sm:grid-cols-2 items-center bg-white p-6 shadow-lg rounded-lg">
        <img
          src="./app-icons/empty-cart.webp"
          alt="Empty cart"
          className="h-54 max-w-full"
        />
        <div className="p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center sm:text-left mb-2">
            Your Cart is empty
          </h2>
          <p className="text-sm sm:text-base text-gray-600 text-center sm:text-left">
            Please add some new products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart;
