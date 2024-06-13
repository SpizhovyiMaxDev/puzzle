import Button from "./Button";

function Hamburger({ state, handleMobileNav }) {
  return (
    <Button
      type="hamburger"
      handler={handleMobileNav}
      ariaLabel="Hamburger button"
    >
      {state ? (
        <svg width="28px" height="28px">
          <use href="/app-icons/icons.svg#icon-close"></use>
        </svg>
      ) : (
        <svg width="28px" height="28px">
          <use href="/app-icons/icons.svg#icon-hamburger"></use>
        </svg>
      )}
    </Button>
  );
}

export default Hamburger;
