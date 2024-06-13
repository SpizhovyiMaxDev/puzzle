import LinkButton from "../../ui/LinkButton";

function CategoryPlaceholder() {
  return (
    <div>
      <LinkButton path={"/categories/all"}>&larr; General page</LinkButton>
      <h1 className="mt-2 text-base sm:text-2xl">
        (= ^ .^=)/ Please choose a category
      </h1>
    </div>
  );
}

export default CategoryPlaceholder;
