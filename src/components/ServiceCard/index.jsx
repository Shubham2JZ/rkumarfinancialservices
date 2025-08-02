import "./ServiceCard.scss";

const ServiceCard = ({ data }) => {
  const { icon, title, subtitle, description, features, process, details } =
    data;
  return (
    <div className="service-details-card">
      <div className="header">
        <div className="icon">{icon}</div>
        <div className="text">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
        </div>
      </div>
      <p className="description">{description}</p>

      <div className="content">
        <div className="section">
          <h4>✅ Key Features</h4>
          <ul>
            {features.map((item, i) => (
              <li key={i}>
                <div className="point"></div> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h4>🎯 Our Process</h4>
          <ul>
            {process.map((item, i) => (
              <li key={i}>
                <span className="step">{i + 1}</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h4>🕒 Service Details</h4>
          <div className="tags">
            <span className="tag">Timeline</span>
            <span className="tag-value">{details.timeline}</span>
            <span className="tag">Suitable For</span>
            <span className="tag-value">{details.suitable}</span>
            <span className="tag">Key Benefits</span>
            <ul className="key-benefit-list">
              {details.benefits.map((b, i) => (
                <li key={i}>
                  <div className="point"></div> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="cta">
        <button className="primary">Talk to an Expert</button>
        <button className="secondary">Download Service Guide</button>
      </div>
    </div>
  );
};

export default ServiceCard;
