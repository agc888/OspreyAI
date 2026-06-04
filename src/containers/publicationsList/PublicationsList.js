import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./PublicationsList.scss";
import {publicationsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function PublicationsList() {
  const {isDark} = useContext(StyleContext);

  if (!publicationsSection.display) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="publications-section">
        <h2 className={isDark ? "dark-mode publications-title" : "publications-title"}>
          {publicationsSection.title}
        </h2>
        {publicationsSection.subtitle && (
          <p className="publications-subtitle">{publicationsSection.subtitle}</p>
        )}

        <div className="publications-list">
          {publicationsSection.publications.map((pub, i) => (
            <div
              key={i}
              className={isDark ? "publication-item publication-item--dark" : "publication-item"}
            >
              <div className="publication-item__number">{i + 1}</div>
              <div className="publication-item__body">
                <p className="publication-item__authors">{pub.authors}</p>
                <p className={isDark ? "dark-mode publication-item__title" : "publication-item__title"}>
                  {pub.title}
                </p>
                <div className="publication-item__meta">
                  <span className="publication-item__journal">{pub.journal}</span>
                  <span className="publication-item__separator">·</span>
                  <span className="publication-item__year">{pub.year}</span>
                  {pub.volume && (
                    <>
                      <span className="publication-item__separator">·</span>
                      <span className="publication-item__volume">{pub.volume}</span>
                    </>
                  )}
                </div>
                {pub.doi && (
                  <a
                    href={pub.doi.startsWith("http") ? pub.doi : `https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-item__doi"
                  >
                    DOI: {pub.doi.replace("https://doi.org/", "")}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}