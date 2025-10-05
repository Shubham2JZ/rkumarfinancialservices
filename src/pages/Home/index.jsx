import { Button } from "@mui/material";
import "./Home.scss";
import { Link } from "react-router-dom";
import FAQs from "../../components/FAQs";
import UpcomingIPOs from "../../components/UpcomingIPOs";

const section2ItemList = [
  {
    icon: "G",
    heading: "IPO Advisory & Execution",
    content:
      "Complete guidance from planning to listing with proven track record",
  },
  {
    icon: "S",
    heading: "Regulatory Compliance",
    content:
      "Expert navigation through complex regulations and compliance requirements",
  },
  {
    icon: "P",
    heading: "Fundraising Strategy",
    content:
      "Strategic capital raising solutions tailored to your business needs",
  },
  {
    icon: "M",
    heading: "Investor Relations",
    content:
      "Building strong relationships with investors for sustainable growth",
  },
];

const section2GridContent = [
  { number: "25+", label: "Years Experience" },
  { number: "100+", label: "Successful IPOs" },
  { number: "50B+", label: "Capital Raised" },
  { number: "₹500+", label: "Happy Clients" },
];

const section2WhyChooseList = [
  "25+ years of capital market expertise",
  "100+ successful IPO completions",
  "Comprehensive regulatory compliance",
  "Personalized strategic guidance",
  "End-to-end service support",
  "Strong investor network",
];

const section3ReviewsData = [
  {
    stars: 5,
    userName: "Rajesh Sharma",
    userCompany: "TechCorp Ltd",
    content:
      "R Kumar Financial made our IPO journey seamless. Their expertise and guidance were invaluable.",
  },
  {
    stars: 5,
    userName: "Priya Patel",
    userCompany: "GrowthTech Solutions",
    content:
      "Outstanding service in fundraising. They helped us secure Series B funding efficiently.",
  },
  {
    stars: 5,
    userName: "Amit Gupta",
    userCompany: "InnovateCorp",
    content:
      "Professional, reliable, and results-driven. Highly recommend their services.",
  },
];

const section3TrustedByList = ["BSE", "NSE", "SEBI", "ICAI", "CII", "FICCI"];

const Home = () => {
  return (
    <div className="Home">
      <div className="section-1">
        <div className="section-1-left">
          <div className="main-heading">
            Your Path to <span className="highlighted">Growth</span>,
            Simplified.
          </div>
          <div className="sub-heading">
            Expert IPO advisory, fundraising, and regulatory compliance services
            for companies ready to scale. Transform your business vision into
            capital market success.
          </div>
          <div className="button-container">
            <Button
              sx={{ textTransform: "none" }}
              component={Link}
              to={"/contact"}
              className="button-1"
            >
              Get Free Consultation
            </Button>
            <Button
              sx={{ textTransform: "none" }}
              component={Link}
              to={"/success-stories"}
              className="button-2"
            >
              View Success Stories
            </Button>
          </div>
        </div>
        <div className="section-1-right">Image</div>
      </div>
      <div className="section-2">
        <div className="main-heading">Comprehensive Financial Services</div>
        <div className="sub-heading">
          <div>
            From startup to IPO, we provide end-to-end solutions for your
            capital market journey
          </div>
        </div>
        <div className="item-list-container">
          {section2ItemList.map((n) => (
            <div key={n.heading} className="item">
              <div className="item-icon">{n.icon}</div>
              <div className="item-heading">{n.heading}</div>
              <div className="item-content">{n.content}</div>
            </div>
          ))}
        </div>
        <div className="why-choose">
          <div className="why-choose-left">
            <div className="why-choose-left-main-heading">
              Why Choose R Kumar Financial?
            </div>
            <div className="why-choose-left-sub-heading">
              Trusted expertise with a proven track record of transforming
              businesses into market leaders.
            </div>
            <div className="why-choose-left-grid-container">
              {section2GridContent.map((n) => (
                <div key={n.label} className="grid-item">
                  <div className="grid-item-number">{n.number}</div>
                  <div className="grid-item-label">{n.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-choose-right">
            {section2WhyChooseList.map((n) => (
              <div className="list-item">* {n}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="main-heading">Client Success Stories</div>
        <div className="sub-heading">
          What our clients say about their journey with us
        </div>
        <div className="reviews-container">
          {section3ReviewsData.map((n, i) => (
            <div className="review" key={i}>
              <div className="review-stars">
                {Array.from({ length: n.stars }, (_, i) => (
                  <span key={i}>*</span>
                ))}
              </div>
              <div className="review-content">"{n.content}"</div>
              <div className="review-user">{n.userName}</div>
              <div className="review-user-company">{n.userCompany}</div>
            </div>
          ))}
        </div>
        <div className="trusted-by">
          <div className="trusted-by-heading">
            Trusted by Leading Organizations
          </div>
          <div className="trusted-by-content">
            {section3TrustedByList.map((n) => (
              <div className="item" key={n}>
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>
      <UpcomingIPOs />
      <div className="section-4">
        <div className="main-heading">Ready to Grow Together ?</div>
        <div className="sub-heading">
          <div>
            Let's discuss how we can simplify your path to capital market
            success. Get in touch for a free consultation today.
          </div>
        </div>
        <div className="button-container">
          <Button
            sx={{ textTransform: "none" }}
            component={Link}
            to={"/contact"}
            className="button"
          >
            Schedule Consultation
          </Button>
          <Button
            sx={{ textTransform: "none" }}
            component={Link}
            to={"/success-stories"}
            className="button"
          >
            Download our Brochure
          </Button>
        </div>
      </div>
      <FAQs />
    </div>
  );
};

export default Home;
