import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getCurrentQuantity,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ productId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(productId));

  return (
    <div className="flex items-center justify-center">
      <Button
        type="outlineSquared"
        handler={() => dispatch(decreaseItemQuantity(productId))}
      >
        -
      </Button>
      <span className="px-4 py-2 text-lg">{currentQuantity}</span>
      <Button
        type="outlineSquared"
        handler={() => dispatch(increaseItemQuantity(productId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
