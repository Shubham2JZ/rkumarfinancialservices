import React, { useMemo, useState } from "react";
import Collapsible from "react-collapsible";
import "./FAQs.scss";
import { Button } from "@mui/material";

const faqs = [
  {
    question: "What is an IPO and why should my company consider it?",
    answer: (
      <p>
        An IPO (Initial Public Offering) is when a private company offers its
        shares to the public for the first time. It helps companies to raise
        substantial capital, develop credibility in the market, generate value
        to existing stakeholders and fuel growth. IPOs enable firms to expand,
        settle debts or enhance brand credibility.
      </p>
    ),
  },
  {
    question: "How do I know if my company is ready for an IPO?",
    answer: (
      <div>
        <p>You're IPO-ready if you have:</p>
        <ul>
          <li>Consistent revenue and profitability</li>
          <li>Scalable business operations</li>
          <li>Strong governance and compliance systems</li>
          <li>Clear use-of-proceeds plan</li>
        </ul>
      </div>
    ),
  },
  {
    question: "What are the key benefits and challenges of going public?",
    answer: (
      <>
        {" "}
        <div className="faq-content-grid">
          <div>
            <p>Benefits:</p>
            <ul>
              <li>Access to capital</li>
              <li>Better brand image</li>
              <li>Liquidity for shareholders</li>
              <li>Stronger market credibility</li>
            </ul>
          </div>
          <div>
            <p>Challenges:</p>
            <ul>
              <li>Regulatory compliance</li>
              <li>Public scrutiny</li>
              <li>Cost of listing and disclosures</li>
              <li>Managing investor expectations</li>
            </ul>
          </div>
        </div>
        <div>
          We help you weigh these carefully and plan accordingly.
        </div>
      </>
    ),
  },
  {
    question:
      "How long does the IPO process usually take with the R Kumar Financial Services?",
    answer: (
      <p>
        An average SME IPO requires 4-6 months between the assessment and the
        listing, whereas a Mainboard IPO may require 6-12 months. The timing
        will depend on your readiness, approvals and market conditions. R Kumar
        Financial Services keeps you on track with end-to-end support
      </p>
    ),
  },
  {
    question: "How does R Kumar Financial Services assist in the IPO process?",
    answer: (
      <div>
        <p>We provide comprehensive advisory services, including:</p>
        <ul>
          <li>IPO readiness evaluation</li>
          <li>Due diligence & documentation</li>
          <li>Team building (merchant bankers, auditors, legal advisors)</li>
          <li>Regulatory filings and SEBI/NSE/BSE coordination</li>
          <li>Branding and investor roadshows</li>
          <li>Post-IPO compliance and governance support</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "What makes R Kumar Financial Services different from other IPO consultancy firms?",
    answer: (
      <div>
        <p>
          We combine deep regulatory expertise, founder-first guidance and
          practical execution. What sets us apart:
        </p>
        <ul>
          <li>End-to-end IPO lifecycle support</li>
          <li>Access to funding & investor networks</li>
          <li>Experience with startups, MSMEs & family-run businesses</li>
          <li>
            Special asset-to-capital structuring (land, business, or legacy
            assets)
          </li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Does R Kumar Financial Services help with pre-IPO funding or investor connections?",
    answer: (
      <p>
        Yes. We facilitate pre-IPO funding rounds, bridge capital and strategic
        investor connections through our curated network of angel investors, VCs
        and family offices. This helps build momentum and improve valuation
        before listing.
      </p>
    ),
  },
  {
    question:
      "Can R Kumar Financial Services help convert land or assets into capital for IPO readiness?",
    answer: (
      <p>
        Absolutely. Whether you have valuable land or underutilized assets, we
        can assist you in releasing capital through structured deals, joint
        ventures or asset-backed funding- and get your business ready to be
        IPO-eligible and scaled.
      </p>
    ),
  },
  {
    question:
      "Do i need a merchant banker and will R Kumar Financial Services help in selection?",
    answer: (
      <p>
        Yes, it is required to appoint a merchant banker registered with SEBI.
        We assist in finding, screening and appointing the best merchant banker
        as per your sector, size and listing objectives, so that there is a
        match on the first day of listing.
      </p>
    ),
  },
  {
    question: "What are the estimated cost involved in an IPO?",
    answer: (
      <div>
        <p>
          IPO costs vary by size, exchange and services required. Typical
          expenses include:
        </p>
        <ul>
          <li>Regulatory fees</li>
          <li>Merchant banker and legal advisor fees</li>
          <li>Auditor and RTA costs</li>
          <li>Marketing and PR campaigns</li>
        </ul>
        <p>
          But whatever it is, We provide transparent budgeting and cost control
          strategies.
        </p>
      </div>
    ),
  },
  {
    question:
      "Does R Kumar Financial Services offer post-listing compliance and advisory support?",
    answer: (
      <div>
        <p>Yes. We do not stop at listing. We support you with:</p>
        <ul>
          <li>SEBI & exchange compliance</li>
          <li>Periodic filings & disclosures</li>
          <li>Corporate governance advisory</li>
          <li>Secretarial and audit liaison</li>
        </ul>
        <p>We help you stay compliant and investor-ready at all times.</p>
      </div>
    ),
  },
  {
    question:
      "Does R Kumar Financial Services help manage investor relations and disclosures after the IPO?",
    answer: (
      <div>
        <p>Yes, we help maintain healthy investor relations by:</p>
        <ul>
          <li>Preparing quarterly disclosures</li>
          <li>Organizing analyst calls and investor updates</li>
          <li>Communication and press release management</li>
          <li>Ensuring transparency and trust in your public profile</li>
        </ul>
      </div>
    ),
  },
  {
    question:
      "Does R Kumar Financial Services assist with branding and IPO marketing campaigns?",
    answer: (
      <p>
        Definitely. We create captivating IPO narratives, organize online and
        print campaigns, media coverage and investor presentations- ensuring
        that your IPO receives much-needed attention and credibility in the
        market.
      </p>
    ),
  },
  {
    question:
      "What is the first step to begin IPO journey with R Kumar Financial Services?",
    answer: (
      <p>
        Start with a discovery consultation. We assess your current position,
        suggest the right IPO route (SME or Mainboard) and design a customized
        roadmap. We then assist you in putting the right team together and
        commencing due diligence.
      </p>
    ),
  },
  {
    question: "Do you work with MSMEs and family-owned businesses?",
    answer: (
      <p>
        Yes. We specialize in guiding MSMEs, startups and family businesses
        through the IPO maze. Whether you're first-gen or legacy-led, we help
        institutionalize your business and prepare it for the public market.
      </p>
    ),
  },
];

const FAQs = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const data = useMemo(() => (isShowMore ? [...faqs] : [...faqs].slice(0, 6)));

  return (
    <div className="FAQs">
      <div className="FAQs-heading">Frequently Asked Questions</div>
      <div className="FAQs-content">
        {data.map((faq, index) => (
          <FAQComponent data={faq} key={index} />
        ))}
      </div>
      <Button
        sx={{ textTransform: "none" }}
        className="button-1"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        Show {!isShowMore ? "more" : "less"} FAQs
      </Button>
    </div>
  );
};

const FAQComponent = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <Collapsible
        open={isOpen}
        onOpening={() => setIsOpen(true)}
        onClosing={() => setIsOpen(false)}
        trigger={
          <div className="faq-header">
            <span>{data.question}</span>
            <span className={`faq-icon ${isOpen ? "opened" : ""}`}>+</span>
          </div>
        }
        transitionTime={200}
      >
        <div className="faq-body">{data.answer}</div>
      </Collapsible>
    </div>
  );
};

export default FAQs;
