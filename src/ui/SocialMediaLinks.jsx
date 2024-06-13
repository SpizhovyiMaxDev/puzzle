function SocialMediaLinks() {
  return (
    <ul className="flex flex-row gap-2 footer-icons">
      <li>
        <a aria-label="Footer link instance" href="https://x.com/home?lang=en">
          <svg width="24px" height="24px">
            <use href="/app-icons/icons.svg#icon-x"></use>
          </svg>
        </a>
      </li>
      <li>
        <a aria-label="Footer link instance" href="https://www.instagram.com/">
          <svg width="24px" height="24px">
            <use href="/app-icons/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>
      <li>
        <a aria-label="Footer link instance" href="https://www.facebook.com/">
          <svg width="24px" height="24px">
            <use href="/app-icons/icons.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
