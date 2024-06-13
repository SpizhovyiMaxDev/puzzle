import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();

  return (
    <div>
      <LinkButton path={"/"}>&larr; Main page</LinkButton>
      <h1 className="mt-2 text-base sm:text-2xl">
        ('¬‿¬)/ {error?.data ?? error}
      </h1>
    </div>
  );
}

export default Error;
