import { Link, useNavigate } from "react-router-dom";

function LinkButton({ path, children }) {
  const navigate = useNavigate();

  if (path === "-1") {
    return (
      <Link
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={path}
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
