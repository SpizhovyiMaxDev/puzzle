import Logo from "../ui/Logo";
import NavItem from "../ui/NavItem";
import SocialMediaLinks from "../ui/SocialMediaLinks";
import { footerLinks } from "../data/footer";

function Footer() {
  function disableClick(e) {
    e.preventDefault();
  }

  return (
    <footer className="px-4 py-16">
      <div
        className="mx-auto grid max-w-customMd grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1.3fr_1.2fr_1fr]"
        onClick={disableClick}
      >
        <div className="flex flex-col gap-4">
          <Logo className="footer-logo" />
          <SocialMediaLinks />
          <p className="mt-auto">
            Copyright &copy;{new Date().getFullYear()} by Pizzle, Inc.
            <br /> All rights reserved.
          </p>
        </div>

        {footerLinks.map((section) => (
          <NavItem
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}
      </div>
    </footer>
  );
}

export default Footer;
