import ServiceCard from "../../components/ServiceCard";
import ServicesSection from "../../components/ServicesSection";
import "./OurServices.scss";

const serviceConfigs = [
  {
    icon: "📈",
    title: "IPO Advisory & Execution",
    subtitle: "Complete IPO Journey Management",
    description:
      "End-to-end IPO advisory services from initial planning to successful listing on stock exchanges.",
    features: [
      "Pre-IPO structuring and planning",
      "Due diligence coordination",
      "Regulatory filing and compliance",
      "Investor roadshows and marketing",
      "Pricing and allocation strategy",
      "Post-listing support",
    ],
    process: [
      "Initial Assessment & Feasibility Study",
      "Corporate Restructuring & Compliance",
      "Draft Red Herring Prospectus Preparation",
      "Regulatory Approvals & Filing",
      "Marketing & Investor Outreach",
      "Pricing, Allocation & Listing",
    ],
    details: {
      timeline: "6–12 months",
      suitable: "Companies with ₹100+ crores revenue",
      benefits: [
        "Access to public capital markets",
        "Enhanced brand visibility and credibility",
        "Improved governance and transparency",
        "Exit opportunities for early investors",
      ],
    },
  },
  {
    icon: "👥",
    title: "Fundraising & Investment Strategy",
    subtitle: "Strategic Capital Solutions",
    description:
      "Comprehensive fundraising solutions including private equity, venture capital, and debt financing.",
    features: [
      "Investor identification and outreach",
      "Valuation and term sheet negotiation",
      "Due diligence management",
      "Deal structuring and documentation",
      "Regulatory approvals",
      "Post-investment relations",
    ],
    process: [
      "Funding Requirement Analysis",
      "Investor Mapping & Targeting",
      "Investment Memorandum Preparation",
      "Investor Presentations & Meetings",
      "Term Sheet Negotiation",
      "Transaction Closure",
    ],
    details: {
      timeline: "3–6 months",
      suitable: "Startups to established companies",
      benefits: [
        "Access to growth capital",
        "Strategic partnerships",
        "Business expansion opportunities",
        "Enhanced market position",
      ],
    },
  },
  {
    icon: "🛡️",
    title: "Regulatory & Legal Compliance",
    subtitle: "Comprehensive Compliance Management",
    description:
      "Expert guidance on regulatory requirements, corporate governance, and legal compliance.",
    features: [
      "SEBI compliance and regulations",
      "Corporate governance framework",
      "Board and committee structures",
      "Regulatory filings and reporting",
      "Risk management systems",
      "Ongoing compliance monitoring",
    ],
    process: [
      "Compliance Gap Analysis",
      "Framework Development",
      "Policy Implementation",
      "Training & Awareness",
      "Monitoring & Reporting",
      "Continuous Improvement",
    ],
    details: {
      timeline: "Ongoing",
      suitable: "Listed and unlisted companies",
      benefits: [
        "Regulatory compliance assurance",
        "Risk mitigation",
        "Enhanced transparency",
        "Improved stakeholder confidence",
      ],
    },
  },
  {
    icon: "🎤",
    title: "Investor Pitch & Story Building",
    subtitle: "Compelling Investment Narratives",
    description:
      "Crafting compelling investment stories and pitch presentations that resonate with investors.",
    features: [
      "Business model articulation",
      "Financial modeling and projections",
      "Competitive positioning",
      "Investment highlight creation",
      "Presentation design and delivery",
      "Q&A preparation and coaching",
    ],
    process: [
      "Business Analysis & Story Development",
      "Financial Model Creation",
      "Presentation Design",
      "Pitch Rehearsal & Refinement",
      "Investor Meetings",
      "Follow-up & Closure",
    ],
    details: {
      timeline: "4–8 weeks",
      suitable: "All fundraising companies",
      benefits: [
        "Clear value proposition",
        "Investor confidence building",
        "Effective communication",
        "Higher success rates",
      ],
    },
  },
  {
    icon: "🏢",
    title: "Post-IPO Corporate Governance",
    subtitle: "Sustainable Growth Management",
    description:
      "Ongoing support for listed companies to maintain compliance and drive sustainable growth.",
    features: [
      "Board effectiveness and advisory",
      "Investor relations management",
      "ESG framework implementation",
      "Strategic planning support",
      "Performance monitoring",
      "Stakeholder communication",
    ],
    process: [
      "Governance Assessment",
      "Framework Enhancement",
      "Implementation Support",
      "Training & Development",
      "Ongoing Monitoring",
      "Continuous Improvement",
    ],
    details: {
      timeline: "Ongoing",
      suitable: "Listed companies",
      benefits: [
        "Sustained market confidence",
        "Regulatory compliance",
        "Strategic growth support",
        "Enhanced stakeholder value",
      ],
    },
  },
];

const OurServices = () => {
  return (
    <div className="OurServices">
      <div className="section-1">
        <div className="main-heading">
          Our <span className="highlighted">Services</span>
        </div>
        <div className="sub-heading">
          <div>
            Comprehensive financial services designed to accelerate your growth
            journey. From IPO advisory to ongoing compliance, we provide
            end-to-end solutions tailored to your business needs.
          </div>
        </div>
      </div>
      <div className="section-2">
        <ServicesSection />
        <div className="main-heading">Detailed Service Breakdown</div>
        <div className="sub-heading">
          Deep dive into our comprehensive service offerings
        </div>
        {serviceConfigs.map((n) => (
          <ServiceCard data={n} key={n.title} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
