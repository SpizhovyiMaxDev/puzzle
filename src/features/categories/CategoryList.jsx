import { useLoaderData } from "react-router-dom";
import { getCategory } from "../../services/apiProducts";
import { getRefName } from "../../utils/helpers";
import Item from "./Item";

function CategoryList() {
  const list = useLoaderData();
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2">
      {list.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default CategoryList;

export async function loader({ params }) {
  const category = await getCategory(getRefName(params.categoryType));
  return category;
}
