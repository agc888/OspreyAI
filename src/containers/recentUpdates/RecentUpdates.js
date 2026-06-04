import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./RecentUpdates.scss";
import { recentUpdates } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function RecentUpdates() {
  const { isDark } = useContext(StyleContext);

  if (!recentUpdates.display) return null;

  const getTagClass = (type) => {
    switch (type) {
      case "publication": return "tag tag--publication";
      case "news": return "tag tag--news";
      case "talk": return "tag tag--talk";
      default: return "tag tag--news";
    }
  };

  return (
    <Fade right duration={1000} distance="40px">
      <div className={isDark ? "updates-panel updates-panel--dark" : "updates-panel"}>
        <div className="updates-panel__header">
          <span className="updates-panel__indicator" />
          <h2 className="updates-panel__title">Recent Updates</h2>
        </div>

        <div className="updates-panel__list">
          {recentUpdates.updates.map((update, i) => (
            <div
              key={i}
              className={isDark ? "update-item update-item--dark" : "update-item"}
            >
              <div className="update-item__meta">
                <span className="update-item__date">{update.date}</span>
                <span className={getTagClass(update.type)}>{update.type}</span>
              </div>
              <p className="update-item__text">{update.description}</p>
              {update.url && (
                <a
                  href={update.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isDark ? "update-item__link update-item__link--dark" : "update-item__link"}
                >
                  {update.urlLabel || "Read more"} →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}