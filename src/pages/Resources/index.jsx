import FeaturedResourcesCard from "../../components/FeaturedResourcesCard";
import "./Resources.scss";

const Resources = () => {
  const featuredResourcesData = [
    {
      title: "IPO Readiness Checklist",
      description:
        "Essential checklist covering every key aspect for going public in India.",
      downloads: "1,200+ downloads",
      readTime: "30 min read",
      labels: [
        { text: "Whitepaper", type: "blue" },
        { text: "Checklist", type: "light" },
      ],
      buttonText: "Get it Now",
    },
    {
      title: "IPO Readiness Checklist",
      description:
        "Essential checklist covering every key aspect for going public in India.",
      downloads: "1,200+ downloads",
      readTime: "30 min read",
      labels: [
        { text: "Whitepaper", type: "blue" },
        { text: "Checklist", type: "light" },
      ],
      buttonText: "Get it Now",
    },
    {
      title: "IPO Readiness Checklist",
      description:
        "Essential checklist covering every key aspect for going public in India.",
      downloads: "1,200+ downloads",
      readTime: "30 min read",
      labels: [
        { text: "Whitepaper", type: "blue" },
        { text: "Checklist", type: "light" },
      ],
      buttonText: "Get it Now",
    },
  ];

  return (
    <div className="Resources">
      <div className="section-1">
        <div className="main-heading">
          Resources and <span className="highlighted">Insights</span>
        </div>
        <div className="sub-heading">
          <div>
            Stay ahead with our expert insights, comprehensive guides, and
            industry reports. Access valuable resources to support your growth
            journey and capital market success.
          </div>
        </div>
      </div>
      <div className="section">
        <div className="main-heading">Featured Resources</div>
        <div className="sub-heading">Our most popular guides and reports</div>
        <div className="featured-resources-cards-container">
          {featuredResourcesData.map((n) => (
            <FeaturedResourcesCard key={n.title} data={n} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;
