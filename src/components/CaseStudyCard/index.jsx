import React from "react";
import "./CaseStudyCard.scss";

const CaseStudyCard = ({ data }) => {
  return (
    <div className="case-study-card">
      <div className="left">
        <div className="title">{data.title}</div>
        <div className="tags">
          <div className="tag type-2">{data.industryType}</div>
          <div className="tag type-3">{data.serviceType}</div>
          {data.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="description">
          <div className="description-title">🎯 The Challenge</div>
          <div className="description-content">{data.challenge}</div>
        </div>
        <div className="description">
          <div className="description-title">📈 Our Solution</div>
          <div className="description-content">{data.solution}</div>
        </div>
        <div className="testimonial">
          <div className="avatar">{data.testimonial.initials}</div>
          <div className="quote">
            <div className="quote-text">" {data.testimonial.quote}"</div>
            <div className="user-name">{data.testimonial.name}</div>
            <div className="user-role">{data.testimonial.role}</div>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="right-title">💰 Results Achieved</div>
        {data.results.map((n) => (
          <div className="result">
            <div className="result-value">{n.value}</div>
            <div className="result-title">{n.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCard;
