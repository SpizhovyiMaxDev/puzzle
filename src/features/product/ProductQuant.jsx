import { useSelector } from "react-redux";
import { getCurrentQuantity } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import AddNewItem from "../cart/AddNewItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";

function ProductQuant({ product }) {
  const currentQuantity = useSelector(getCurrentQuantity(product.id));
  const isInCart = currentQuantity > 0;
  const currentPrice = isInCart
    ? product.price * currentQuantity
    : product.price;

  if (isInCart) {
    return (
      <div>
        <div className="flex gap-8 mb-8 items-center justify-between flex-col sm:flex-row">
          <p className="text-lg font-semibold ">Quantity</p>
          <UpdateItemQuantity productId={product.id} />
          <p className="text-lg font-semibold">
            {formatCurrency(currentPrice)}
          </p>
        </div>
        <div className="flex gap-4 xs:gap-8 xs:flex-row flex-col">
          <DeleteItem productId={product.id} type="outlineWidthFull">
            Delete Item
          </DeleteItem>
          <Button path="/cart" type="outlineWidthFull">
            Go To Cart
          </Button>
        </div>
      </div>
    );
  }

  return <AddNewItem product={product} />;
}

export default ProductQuant;
