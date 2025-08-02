import "./AboutUs.scss";

const section2GridContent = [
  { number: "25+", label: "Years Experience" },
  { number: "100+", label: "Successful IPOs" },
  { number: "50B+", label: "Capital Raised" },
  { number: "₹500+", label: "Happy Clients" },
];

const section2CardContent = [
  {
    logo: "T",
    heading: "Our Mission",
    content:
      "To empower businesses with expert financial guidance, innovative solutions, and unwavering support throughout their capital market journey, making growth accessible and sustainable for companies of all sizes.",
  },
  {
    logo: "TR",
    heading: "Our Vision",
    content:
      "To be India's most trusted and innovative financial services partner, setting new standards in capital market advisory while fostering sustainable economic growth across diverse business sectors.",
  },
];

const section3TimelineContent = [
  {
    year: "1999",
    heading: "Company Founded",
    content:
      "R Kumar Financial Services established with a vision to democratize capital markets",
  },
  {
    year: "2005",
    heading: "First Major IPO",
    content: "Successfully completed our first major IPO, raising ₹100 crores",
  },
  {
    year: "2010",
    heading: "SEBI Recognition",
    content: "Received official recognition as Category I Merchant Banker",
  },
  {
    year: "2015",
    heading: "50+ IPOs Milestone",
    content:
      "Crossed 50 successful IPO completions, establishing market leadership",
  },
  {
    year: "2020",
    heading: "Digital Transformation",
    content: "Launched digital-first approach for seamless client experience",
  },
  {
    year: "2024",
    heading: "100+ IPOs Achieved",
    content: "Reached 100+ successful IPOs with over ₹50,000 crores raised",
  },
];

const section3LeadershipContent = [
  {
    image: "RK",
    userName: "Rajesh Kumar",
    position: "Founder & Managing Director",
    experience: "25+ years",
    fields: "IPO Advisory, Capital Markets",
  },
  {
    image: "PS",
    userName: "Priya Sharma",
    position: "Executive Director - Compliance",
    experience: "18+ years",
    fields: "Regulatory Affairs, Legal Compliance",
  },
  {
    image: "AP",
    userName: "Amit Patel",
    position: "Head of Investment Banking",
    experience: "15+ years",
    fields: "Fundraising, M&A Advisory",
  },
  {
    image: "SG",
    userName: "Sunita Gupta",
    position: "Director - Client Relations",
    experience: "12+ years",
    fields: "Investor Relations, Business Development",
  },
];

const section4CoreValuesContent = [
  {
    logo: "E",
    heading: "Transparency",
    content:
      "We believe in complete transparency in all our dealings, ensuring clients are informed at every step.",
  },
  {
    logo: "M",
    heading: "Excellence",
    content:
      "Committed to delivering exceptional results through continuous innovation and best practices.",
  },
  {
    logo: "L",
    heading: "Integrity",
    content:
      "Our foundation is built on unwavering integrity and ethical business practices.",
  },
  {
    logo: "P",
    heading: "Client-First",
    content:
      "Every decision we make prioritizes our clients' success and long-term growth.",
  },
];

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="section-1">
        <div className="main-heading">
          About <span className="highlighted">R Kumar Financial</span>
        </div>
        <div className="sub-heading">
          <div>
            For over 25 years, we've been the trusted partner for companies
            navigating the complex world of capital markets. Our journey began
            with a simple mission: to make the path to growth accessible and
            simplified for every business.
          </div>
        </div>
      </div>
      <div className="section-2">
        <div className="our-story">
          <div className="our-story-left">
            <div className="main-heading">Our Story</div>
            <div className="content">
              <span>
                Founded in 1999 by Rajesh Kumar, R Kumar Financial Services
                began as a boutique advisory firm with a vision to democratize
                access to capital markets for growing businesses across India.
              </span>
              <span>
                What started as a small team of passionate financial experts has
                grown into one of India's most trusted names in IPO advisory and
                capital raising, having successfully guided over 100 companies
                through their public listing journey.
              </span>
              <span>
                Today, we continue to innovate and evolve, leveraging technology
                and deep market expertise to provide seamless, end-to-end
                solutions for companies at every stage of their growth journey.
              </span>
            </div>
          </div>
          <div className="numbers">
            {section2GridContent.map((n) => (
              <div key={n.label} className="grid-item">
                <div className="grid-item-number">{n.number}</div>
                <div className="grid-item-label">{n.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card-container">
          {section2CardContent.map((n) => (
            <div className="card">
              <div className="card-logo">{n.logo}</div>
              <div className="card-heading">{n.heading}</div>
              <div className="card-content">{n.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-3">
        <div className="main-heading">Our Journey</div>
        <div className="sub-heading">
          Key milestones in our 25+ year journey of excellence
        </div>
        <div className="timeline">
          {section3TimelineContent.map((n) => (
            <div className="card">
              <div className="card-left">
                <div className="year">{n.year}</div>
              </div>
              <div className="card-right">
                <div className="heading">{n.heading}</div>
                <div className="content">{n.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="main-heading">Our Leadership Team</div>
        <div className="sub-heading">
          Meet the experts driving our mission forward
        </div>

        <div className="card-container">
          {section3LeadershipContent.map((n) => (
            <div className="card">
              <div className="card-image">{n.image}</div>
              <div className="card-username">{n.userName}</div>
              <div className="card-position">{n.position}</div>
              <div className="card-experience">{n.experience}</div>
              <div className="card-fields">{n.fields}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-4">
        <div className="main-heading">Our Core Values</div>
        <div className="sub-heading">
          The principles that guide everything we do
        </div>
        <div className="card-container">
          {section4CoreValuesContent.map((n) => (
            <div className="card">
              <div className="card-logo">{n.logo}</div>
              <div className="card-heading">{n.heading}</div>
              <div className="card-content">{n.content}</div>
          
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
