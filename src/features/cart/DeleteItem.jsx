import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem({ productId, type = "secondary", children }) {
  const dispatch = useDispatch();

  return (
    <Button type={type} handler={() => dispatch(deleteItem(productId))}>
      {children}
    </Button>
  );
}

export default DeleteItem;
