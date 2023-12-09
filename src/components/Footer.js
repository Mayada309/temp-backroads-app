import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
import { pageLinks } from "../data";
import { socialLinks } from "../data";
const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <ul className="footer-links" id="footer-links">
          {pageLinks.map((link) => {
            return <PageLink key={link.id} itemClass="footer-link" {...link} />;
          })}
        </ul>
        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLink key={link.id} itemClass="footer-icon" {...link} />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
