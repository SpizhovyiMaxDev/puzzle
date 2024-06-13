import { useNavigate } from "react-router-dom";
import {
  formatCurrency,
  formatTitle,
  reduceAmountOfText,
} from "../../utils/helpers";
import { formatRefName } from "../../utils/helpers";

function Item({ product }) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() =>
        navigate(`/categories/${formatRefName(product.category)}/${product.id}`)
      }
      className="cursor-pointer p-4 border border-stone-300 hover:border-stone-600 transition-all"
    >
      <div className="w-full h-56 relative mb-2">
        <img
          src={product.image}
          alt={product.title}
          className="absolute max-h-44 max-w-full left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        />
      </div>

      <strong className="mb-4 text-lg xs:text-xl">
        {formatCurrency(product.price)}
      </strong>
      <p className="text-sm xs:text-base">
        {reduceAmountOfText(formatTitle(product.title), 3)}
      </p>
    </li>
  );
}

export default Item;
