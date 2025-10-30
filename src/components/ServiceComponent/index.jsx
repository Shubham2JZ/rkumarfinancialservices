import React from "react";
import "./ServiceComponent.scss";

const ServiceComponent = ({ title, sections }) => {
  const handleTOCClick = (e, item) => {
    e.preventDefault();
    const el = document.getElementById(item.heading);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Optional: to reflect the clicked anchor in URL without jumping
    history.replaceState(null, "", `#${item.heading}`);
  };

  return (
    <div className="service-component">
      <div className="content">
        {sections && sections.length > 0 && (
          <nav className="toc">
            <div className="toc-heading">Table of Contents</div>
            <ul>
              {sections
                .filter((n) => n.heading)
                .map((item, i) => (
                  <li key={i}>
                    <a
                      // href={`#${item.heading}`}
                      onClick={(e) => handleTOCClick(e, item)}
                    >
                      &#10148; {item.heading}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        )}
        <div className="section-container">
          <header className="hero">
            <div className="hero-heading">{title}</div>
          </header>
          {sections &&
            sections.map((section, index) => (
              <section key={index} id={section.heading}>
                {section.heading && (
                  <div className="section-heading">{section.heading}</div>
                )}
                {section.content &&
                  section.content.map((c, i) => (
                    <React.Fragment key={i}>
                      {c.type === "content" ? (
                        <p dangerouslySetInnerHTML={{ __html: c.content }} />
                      ) : c.type === "list" ? (
                        <ul>
                          {c.list.map((li, i) => (
                            <li
                              key={i}
                              dangerouslySetInnerHTML={{ __html: li }}
                            />
                          ))}
                        </ul>
                      ) : null}
                    </React.Fragment>
                  ))}
              </section>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceComponent;
