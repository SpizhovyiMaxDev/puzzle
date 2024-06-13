import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartSummary({ totalSum }) {
  return (
    <div className="flex flex-col gap-6 items-start border-t-2 pt-6 mt-8 sm:flex-row sm:justify-between sm:items-center">
      <Button type="primary" path="/categories/all">
        &larr; Back to Shopping
      </Button>
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:gap-6 items-start xs:items-center">
        <p className="text-lg font-medium">
          Total Price:
          <strong className="ml-2">{formatCurrency(totalSum)}</strong>
        </p>
        <Button type="primary">Buy Products &rarr;</Button>
      </div>
    </div>
  );
}

export default CartSummary;
