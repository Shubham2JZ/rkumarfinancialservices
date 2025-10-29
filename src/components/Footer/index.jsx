import { Link } from "react-router-dom";
import rkLogo from "../../assets/icons/rk-logo.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-grid">
        <div className="footer-company">
          <div className="footer-logo-section">
            <img src={rkLogo} alt="RK Logo" className="footer-logo" />
            <div>
              <div className="footer-company-name">R Kumar Financial</div>
              <div className="footer-company-subtext">Services Limited</div>
            </div>
          </div>
          <p className="footer-description">
            Your trusted partner for IPO advisory, fundraising, and regulatory
            compliance. Simplifying your path to growth with over 25 years of
            expertise.
          </p>
          <div className="footer-contact">
            <div>+91 81281 03775</div>
            <div>info@rkumarfinancial.com</div>
            <div>
              305, The Centrium, 3rd Floor, 57, Lal Bahadur Shastri Road, Nav
              Pada, Kurla (West), Mumbai – 400 070, Maharashtra, India.
            </div>
          </div>
        </div>

        {/* <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Success Stories", path: "/success-stories" },
                { name: "Resources", path: "/resources" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer-link">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

        <div className="footer-section">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            {["IPO", "Capital Raising", "Finance Advisory"].map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 R Kumar Financial Services Limited. All rights reserved.</p>
        <div className="footer-policy-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
