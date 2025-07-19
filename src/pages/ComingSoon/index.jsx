import "./ComingSoon.scss";
import rkLogo from "../../assets/icons/rk-logo.png";
import comingSoonStock from "../../assets/images/coming-soon-stock.png";
import { useBreakpoint } from "../../hooks/useBreakPoints";

const ComingSoon = () => {
  const { isMobile } = useBreakpoint();

  return isMobile ? (
    <div className="ComingSoon-mobile">
      <div className="ComingSoon-mobile-header">
        <img src={rkLogo} className="ComingSoon-mobile-header-logo" />
        {/* <button className="ComingSoon-mobile-header-notify-me">Notify Me</button> */}
      </div>
      <div className="ComingSoon-mobile-content">
        <div className="main-heading">
          We’re building something powerful for your growth.
        </div>
        <img src={comingSoonStock} />
        <div className="sub-heading">
          At R Kumar Financial Services Limited, we simplify your path to
          raising capital, launching IPOs, and staying ahead of regulatory
          complexities. Whether you're a startup ready for your first funding
          round or an established business planning to go public — we’ll guide
          you every step of the way.
        </div>
        <div className="sub-heading-2">
          Working on it!
          <br />
          <b>Security Exchange Board of India</b>
          <br />
          <b>MINISTRY OF CORPORATE AFFAIRS</b>
        </div>
      </div>
      <div className="ComingSoon-mobile-footer">
        <div className="ComingSoon-mobile-footer-right">
          © 2025 Rkumar Financial Services. All rights reserved.
        </div>
      </div>
    </div>
  ) : (
    <div className="ComingSoon">
      <div className="ComingSoon-header">
        <img src={rkLogo} className="ComingSoon-header-logo" />
        {/* <button className="ComingSoon-header-notify-me">Notify Me</button> */}
      </div>
      <div className="ComingSoon-content">
        <div className="ComingSoon-content-inner">
          <div className="ComingSoon-content-inner-left">
            <div className="main-heading">
              We’re building something powerful for your growth.
            </div>
            <div className="sub-heading">
              At R Kumar Financial Services Limited, we simplify your path to
              raising capital, launching IPOs, and staying ahead of regulatory
              complexities. Whether you're a startup ready for your first
              funding round or an established business planning to go public —
              we’ll guide you every step of the way.
            </div>
            <div className="sub-heading-2">
              Working on it!
              <br />
              <b>Security Exchange Board of India</b>
              <br />
              <b>MINISTRY OF CORPORATE AFFAIRS</b>
            </div>
            {/* <button className="ComingSoon-header-notify-me">Notify Me</button> */}
          </div>
          <div className="ComingSoon-content-inner-right">
            <img src={comingSoonStock} />
          </div>
        </div>
      </div>
      <div className="ComingSoon-footer">
        <img src={rkLogo} className="ComingSoon-footer-logo" />
        <div className="ComingSoon-footer-right">
          © 2025 Rkumar Financial Services. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
