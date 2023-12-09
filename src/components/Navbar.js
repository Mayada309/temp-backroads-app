import logo from "../images/logo.svg";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
import { pageLinks } from "../data";
import { socialLinks } from "../data";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return <PageLink key={link.id} itemClass="nav-link" {...link} />;
            })}
          </ul>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <SocialLink key={link.id} itemClass="nav-icon" {...link} />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
