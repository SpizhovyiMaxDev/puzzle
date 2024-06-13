import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { addItem } from "./cartSlice";
import { formatRefName } from "../../utils/helpers";

function AddNewItem({ product }) {
  const dispatch = useDispatch();

  function handleDispatch() {
    const newItem = {
      quantity: 1,
      totalPrice: product.price,
      ...product,
      path: `/categories/${formatRefName(product.category)}/${product.id}`,
    };

    dispatch(addItem(newItem));
  }
  return (
    <Button handler={handleDispatch} type="outline">
      Add To Cart
    </Button>
  );
}

export default AddNewItem;
