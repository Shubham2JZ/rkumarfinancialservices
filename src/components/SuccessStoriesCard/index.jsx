import "./SuccessStoriesCard.scss";

const SuccessStoriesCard = ({ data }) => {
  const { serviceType, industryType, title, content, parameters } = data;
  return (
    <div className="SuccessStoriesCard">
      <div className="tags">
        <div className="tag type-2">{industryType}</div>
        <div className="tag type-3">{serviceType}</div>
      </div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="parameters">
        {parameters?.map((n) => (
          <div className="parameter">
            <div className="parameter-title">{n.title}</div>
            <div
              className={`parameter-value ${n.bold ? "bold" : ""} ${
                n.color ? "color" : ""
              }`}
            >
              {n.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStoriesCard;
