import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="z-20">
      <img src="/logotype/logotype.webp" alt="logotype" className="h-8 w-28" />
    </Link>
  );
}

export default Logo;
