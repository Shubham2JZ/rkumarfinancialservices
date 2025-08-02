import CaseStudyCard from "../../components/CaseStudyCard";
import ServiceCard from "../../components/ServiceCard";
import ServicesSection from "../../components/ServicesSection";
import SuccessStoriesCard from "../../components/SuccessStoriesCard";
import "./SuccessStories.scss";

const stats = [
  {
    icon: "🏢",
    value: "100+",
    label: "Companies Funded",
  },
  {
    icon: "💰",
    value: "₹50,000Cr+",
    label: "Capital Raised",
  },
  {
    icon: "📈",
    value: "85%",
    label: "Success Rate",
  },
  {
    icon: "👥",
    value: "500+",
    label: "Happy Clients",
  },
];

const caseStudies = [
  {
    title: "TechVantage Solutions",
    serviceType: "IPO",
    industryType: "Technology",
    tags: ["₹500+ Cr"],
    challenge:
      "A growing SaaS company needed to raise ₹500 crores for expansion into international markets and product development.",
    solution:
      "We provided comprehensive IPO advisory, restructured their corporate governance, and executed a successful public listing strategy.",
    testimonial: {
      initials: "RM",
      quote:
        "R Kumar Financial's expertise was instrumental in our successful IPO. Their strategic guidance and meticulous planning exceeded our expectations.",
      name: "Rajesh Mehta",
      role: "CEO, TechVantage Solutions",
    },
    results: [
      { title: "Capital Raised", value: "₹750 crores" },
      { title: "Timeline", value: "8 months" },
      { title: "Listing Premium", value: "35%" },
      { title: "Oversubscription", value: "12x" },
    ],
  },
  {
    title: "GreenEnergy Innovations",
    serviceType: "Series B",
    industryType: "Renewable Energy",
    tags: ["Series B Fundraising", "Clean Energy", "₹200+ Cr"],
    challenge:
      "A renewable energy startup required ₹200 crores for scaling manufacturing operations and market expansion.",
    solution:
      "We identified strategic investors, crafted compelling investment narratives, and negotiated favorable terms for growth capital.",
    testimonial: {
      initials: "PS",
      quote:
        "The team's deep understanding of our sector and investor network made the fundraising process seamless and successful.",
      name: "Priya Sharma",
      role: "Founder, GreenEnergy Innovations",
    },
    results: [
      { title: "Capital Raised", value: "₹250 crores" },
      { title: "Timeline", value: "4 months" },
      { title: "Valuation", value: "₹1,200 crores" },
      { title: "Investors", value: "3 PE firms" },
    ],
  },
  {
    title: "HealthCare Plus",
    serviceType: "Strategic Partnership",
    industryType: "Healthcare",
    tags: ["Partnership", "Strategic"],
    challenge:
      "A healthcare provider needed strategic investment for digital transformation and network expansion across tier-2 cities.",
    solution:
      "We facilitated strategic partnerships with leading healthcare groups and structured the investment for optimal growth.",
    testimonial: {
      initials: "DAG",
      quote:
        "R Kumar Financial understood our vision and connected us with the right partners who shared our mission of accessible healthcare.",
      name: "Dr. Amit Gupta",
      role: "MD, HealthCare Plus",
    },
    results: [
      { title: "Capital Raised", value: "₹300 crores" },
      { title: "Timeline", value: "6 months" },
      { title: "Partnerships", value: "2 strategic" },
      { title: "Expansion", value: "15 cities" },
    ],
  },
];

const industries = [
  "Technology",
  "Healthcare",
  "Manufacturing",
  "Education",
  "Financial Services",
  "Retail",
  "Energy",
  "Agriculture",
  "Logistics",
  "Real Estate",
  "Media",
  "Automotive",
];

const successStories = [
  {
    serviceType: "IPO",
    industryType: "Logistics",
    title: "Logiflow Systems",
    content:
      "Successful IPO for logistics automation company with 25% listing premium",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹450 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "7 months",
        bold: true,
      },
    ],
  },
  {
    serviceType: "Series C",
    industryType: "Education Technology",
    title: "EduTech Solutions",
    content:
      "Growth capital for expanding online education platform across India",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹180 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "3 months",
        bold: true,
      },
    ],
  },
  {
    serviceType: "Series A",
    industryType: "Fintech",
    title: "FinNext Digital",
    content: "Early-stage funding for innovative digital lending platform",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹75 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "2 months",
        bold: true,
      },
    ],
  },
  {
    serviceType: "Strategic Investment",
    industryType: "Agriculture",
    title: "AgriGrow Technologies",
    content:
      "Strategic investment for agtech startup revolutionizing farm management",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹120 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "4 months",
        bold: true,
      },
    ],
  },
  {
    serviceType: "IPO",
    industryType: "Retail",
    title: "RetailMax Chain",
    content:
      "Public listing for retail chain expansion with strong investor response",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹600 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "9 months",
        bold: true,
      },
    ],
  },
  {
    serviceType: "Series B",
    industryType: "Water Technology",
    title: "CleanWater Solutions",
    content: "Growth funding for water purification technology company",
    parameters: [
      {
        title: "Capital Raised",
        value: "₹95 crores",
        color: true,
      },
      {
        title: "Timeline",
        value: "3 months",
        bold: true,
      },
    ],
  },
];

const SuccessStories = () => {
  return (
    <div className="SuccessStories">
      <div className="section-1">
        <div className="main-heading">
          Success <span className="highlighted">Stories</span>
        </div>
        <div className="sub-heading">
          <div>
            Real stories of companies we've helped transform their growth
            trajectory. From startups to established enterprises, discover how
            we've simplified their path to success.
          </div>
        </div>
      </div>
      <div className="section">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">{item.icon}</div>
              <div className="stat-value">{item.value}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
        <div className="main-heading">Featured Case Studies</div>
        <div className="sub-heading">
          In-depth look at our most impactful client partnerships
        </div>
        {caseStudies.map((study, index) => (
          <CaseStudyCard key={index} data={study} />
        ))}
      </div>
      <div className="section">
        <div className="main-heading">More Success Stories</div>
        <div className="sub-heading">
          A glimpse of our diverse portfolio across industries
        </div>
        <div className="more-success-stories-container">
          {successStories.map((n) => (
            <SuccessStoriesCard key={n.title} data={n} />
          ))}
        </div>
        <div className="main-heading">Industries We Serve</div>
        <div className="sub-heading">
          Our expertise spans across diverse sectors
        </div>
        <div className="industries-container">
          {industries.map((n) => (
            <div key={n} className="industry">
              {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
