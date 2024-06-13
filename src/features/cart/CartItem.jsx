import { Link } from "react-router-dom";
import {
  capitalizeFirstLetter,
  formatCurrency,
  reduceAmountOfText,
} from "../../utils/helpers";
import UpdateItemQuantity from "./UpdateItemQuantity";
import DeleteItem from "./DeleteItem";

function CartItem({ product }) {
  return (
    <li className="grid gap-8 grid-cols-1 py-8 sm:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_3fr_2fr] items-stretch">
      <div className="min-h-60 w-full relative">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-44 max-w-full absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%]"
        />
      </div>
      <div>
        <Link to={product.path} className="text-xl font-semibold mb-4 block">
          {product.title}
        </Link>

        <p className="text-xl font-bold mb-2">
          {formatCurrency(product.price)}
        </p>

        <p className="text-semibold mb-4 font-semibold text-xl block lg:hidden">
          <span className="font-medium">Total Price:</span>{" "}
          {formatCurrency(product.totalPrice)}
        </p>

        <p className="leading-8 text-lg mb-8">
          {capitalizeFirstLetter(reduceAmountOfText(product.description, 15))}
          ...
        </p>
        <div className="flex items-center gap-4">
          <UpdateItemQuantity productId={product.id} />
          <DeleteItem productId={product.id} type="outline">
            Delete
          </DeleteItem>
        </div>
      </div>

      <div className="hidden lg:block text-right">
        <p className="text-xl font-bold">
          {formatCurrency(product.totalPrice)}
        </p>
      </div>
    </li>
  );
}

export default CartItem;
