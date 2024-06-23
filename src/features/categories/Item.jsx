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
      <div className="h-44 mb-8 flex items-center justify-center overflow-hidden">
        <img
          loading="lazy"
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full"
        />
      </div>

      <span className="mb-2 text-lg xs:text-xl block font-bold">
        {formatCurrency(product.price)}
      </span>
      <p className="text-sm xs:text-base">
        {reduceAmountOfText(formatTitle(product.title), 3)}
      </p>
    </li>
  );
}

export default Item;
