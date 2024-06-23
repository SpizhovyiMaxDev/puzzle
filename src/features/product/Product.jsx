import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
  capitalizeFirstLetter,
  formatCurrency,
  getRefName,
  reduceAmountOfText,
} from "../../utils/helpers";
import ProductQuant from "./ProductQuant";
import { getProduct } from "../../services/apiProducts";

function Product() {
  const { categoryType, product } = useLoaderData();
  const category = capitalizeFirstLetter(getRefName(categoryType));
  const [showMore, setShowMore] = useState(false);
  const capitalizedDescription = capitalizeFirstLetter(product.description);
  const textIsShort = product.description.split(" ").length <= 20;
  const description = showMore
    ? capitalizedDescription
    : `${reduceAmountOfText(capitalizedDescription, 20)}...`;

  return (
    <section className="px-4 mt-32 mb-12 min-h-[80vh]">
      <div className="max-w-customSm mx-auto flex gap-3 mb-14">
        <Link to="/" className="text-lg">
          Home
        </Link>
        <span>/</span>
        <Link to="/categories/all" className="text-lg">
          All
        </Link>
        <span>/</span>
        <Link className="text-lg" to={`/categories/${categoryType}`}>
          {category}
        </Link>
      </div>

      <div className="max-w-customSm mx-auto grid grid-cols-1 product-md:grid-cols-2 relative items-stretch">
        <div className="h-80 sm:h-113 w-full mb-8 flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-72 max-w-72"
          />
        </div>

        <div className="bg-stone-100 px-4 sm:px-8 product-md:py-28 py-14">
          <p className="uppercase tracking-wide text-sm product-md:font-semibold mb-4 product-md:text-lg product-md:top-10 product-md:absolute product-md:left-[50%] product-md:translate-x-[-50%]">
            {category}
          </p>
          <h2 className="font-bold leading-9 text-xl md:text-2xl text-stone-700 mb-4">
            {product.title}
          </h2>
          <p className="text-xl text-stone-700 font-bold mb-4">
            {formatCurrency(product.price)}
          </p>
          <p className="text-base sm:text-lg mb-8 text-stone-800 leading-9">
            {description}

            {!textIsShort && (
              <span
                className="text-blue-900 cursor-pointer ml-2 text-base"
                onClick={() => setShowMore((prev) => !prev)}
              >
                {showMore ? "Show Less" : "Show More..."}
              </span>
            )}
          </p>

          <ProductQuant product={product} />
        </div>
      </div>
    </section>
  );
}

export default Product;

export async function loader({ params }) {
  const { categoryType, productId } = params;
  const product = await getProduct(productId);
  return { categoryType, product };
}
