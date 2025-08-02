import "./FeaturedResourcesCard.scss";

const FeaturedResourcesCard = ({ data }) => {
  const {
    title,
    description,
    downloads,
    readTime,
    labels,
    buttonText = "Download Free",
  } = data;

  return (
    <div className="featured-resources-card">
      <div className="featured-resources-card-labels">
        {labels.map((label, i) => (
          <span key={i} className={`label ${label.type}`}>
            {label.text}
          </span>
        ))}
      </div>

      <div className="featured-resources-card-icon">
      </div>

      <h3 className="featured-resources-card-title">{title}</h3>
      <p className="featured-resources-card-description">{description}</p>

      <div className="featured-resources-card-meta">
        <span>{downloads}</span>
        <span>{readTime}</span>
      </div>

      <button className="featured-resources-card-button">
        <span>{buttonText}</span>
        <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default FeaturedResourcesCard;
