import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function handleLinkAction(v) {
    // If not downloadable and external URL, open in new tab
    if (!v.isDownloadable && v.url.startsWith('http')) {
      const win = window.open(v.url, "_blank");
      win.focus();
    } else if (!v.isDownloadable) {
      // For non-downloadable internal links
      window.open(v.url, "_blank");
    }
    // For downloadable links, the <a> tag with download attribute handles it
  }

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Image"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return v.isDownloadable ? (
            <a
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              href={v.url}
              download={v.downloadName || "certificate"}
            >
              {v.name}
            </a>
          ) : (
            <span
              key={i}
              className={isDark ? "dark-mode certificate-tag" : "certificate-tag"}
              onClick={() => handleLinkAction(v)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}