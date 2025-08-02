import "./ServicesSection.scss";

const services = [
  {
    icon: "📈",
    title: "IPO Advisory & Execution",
    subtitle: "Complete IPO Journey Management",
    description:
      "End-to-end IPO advisory services from initial planning to successful listing on stock exchanges.",
  },
  {
    icon: "👥",
    title: "Fundraising & Investment Strategy",
    subtitle: "Strategic Capital Solutions",
    description:
      "Comprehensive fundraising solutions including private equity, venture capital, and debt financing.",
  },
  {
    icon: "🛡️",
    title: "Regulatory & Legal Compliance",
    subtitle: "Comprehensive Compliance Management",
    description:
      "Expert guidance on regulatory requirements, corporate governance, and legal compliance.",
  },
  {
    icon: "📄",
    title: "Investor Pitch & Story Building",
    subtitle: "Compelling Investment Narratives",
    description:
      "Crafting compelling investment stories and pitch presentations that resonate with investors.",
  },
  {
    icon: "🏢",
    title: "Post-IPO Corporate Governance",
    subtitle: "Sustainable Growth Management",
    description:
      "Ongoing support for listed companies to maintain compliance and drive sustainable growth.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((n, i) => (
          <div key={i} className={`service-card`}>
            <div className="service-icon">{n.icon}</div>
            <div className="service-title">{n.title}</div>
            <div className="service-subtitle">{n.subtitle}</div>
            <p>{n.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
