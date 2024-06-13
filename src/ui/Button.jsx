import { Link } from "react-router-dom";

function Button({
  type = "",
  children,
  handler = null,
  ariaLabel = "",
  path = "",
}) {
  const base = "px-4 py-2 focus:outline-none focus:outline-none";

  const styles = {
    primary: `${base} bg-primaryTransparent text-sm`,
    submit: `${base} bg-primaryTransparent rounded-md px-20 py-3 text-sm md:text-base md:w-auto w-full`,
    hamburger: "p-4 z-20 md:hidden inline-block",
    outlineSquared: `${base} border-2 border-stone-800 text-center text-base text-stone-800`,
    outlineWidthFull: `${base} border-2 border-stone-800 w-full text-center text-stone-800`,
    outline: `${base} border-2 border-stone-800 text-center text-stone-800 text-base`,
  };

  if (path) {
    return (
      <Link to={path} className={styles[type]}>
        {children}
      </Link>
    );
  }

  if (handler) {
    return (
      <button className={styles[type]} onClick={handler} aria-label={ariaLabel}>
        {children}
      </button>
    );
  }

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
