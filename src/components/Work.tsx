import "./styles/Work.css";
import { useState } from "react";

const reels = [
  { link: "https://www.instagram.com/p/DTxdiUjD1hd/", embed: "https://www.instagram.com/p/DTxdiUjD1hd/embed" },
  { link: "https://www.instagram.com/p/DRM1AC-jBbT/", embed: "https://www.instagram.com/p/DRM1AC-jBbT/embed" },
  { link: "https://www.instagram.com/p/DWW40QMiKSA/", embed: "https://www.instagram.com/p/DWW40QMiKSA/embed" },
  { link: "https://www.instagram.com/p/DUddUKljFLW/", embed: "https://www.instagram.com/p/DUddUKljFLW/embed" },
  { link: "https://www.instagram.com/p/DS-jtVPjLed/", embed: "https://www.instagram.com/p/DS-jtVPjLed/embed" },
  { link: "https://www.instagram.com/p/DT5R-I_glW6/", embed: "https://www.instagram.com/p/DT5R-I_glW6/embed" },
  { link: "https://www.instagram.com/p/DRSDeV4kxRb/", embed: "https://www.instagram.com/p/DRSDeV4kxRb/embed" },
  { link: "https://www.instagram.com/p/DR2NSpuCGKS/", embed: "https://www.instagram.com/p/DR2NSpuCGKS/embed" },
];

const Work = () => {
  const [current, setCurrent] = useState(0);
  const visible = 3;

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(reels.length - visible, c + 1));

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>My <span>Work</span></h2>

        {/* Short Form */}
        <div className="work-category">
          <div className="work-category-header">
            <h3>Short Form</h3>
            <p>Reels & Social Media Content</p>
          </div>

          <div className="reels-slideshow">
            <button className="reel-nav reel-nav-left" onClick={prev} disabled={current === 0} data-cursor="disable">‹</button>

            <div className="reels-track-wrapper">
              <div
                className="reels-track"
                style={{ transform: `translateX(-${current * (100 / visible)}%)` }}
              >
                {reels.map((reel, i) => (
                  <div className="reel-slide" key={i}>
                    <a href={reel.link} target="_blank" rel="noreferrer" className="reel-iframe-link" data-cursor="disable">
                      <iframe
                        src={reel.embed}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowTransparency={true}
                        title={`Reel ${i + 1}`}
                      />
                      <div className="reel-click-overlay">
                        <span>View on Instagram ↗</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <button className="reel-nav reel-nav-right" onClick={next} disabled={current >= reels.length - visible} data-cursor="disable">›</button>
          </div>

          <div className="reel-dots">
            {Array.from({ length: reels.length - visible + 1 }).map((_, i) => (
              <button
                key={i}
                className={`reel-dot ${current === i ? "reel-dot-active" : ""}`}
                onClick={() => setCurrent(i)}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>

        {/* Long Form */}
        <div className="work-category" style={{ marginTop: "6rem" }}>
          <div className="work-category-header">
            <h3>Long Form</h3>
            <p>YouTube Videos & Long Format Content</p>
          </div>
          <div className="work-longform">
            <div className="yt-embed-wrapper">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PnOx7OZU79M"
                title="Mindifyy YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="yt-info">
              <span className="reel-cat">YouTube · Mindifyy</span>
              <h4>Educational & Competitive Exam Content</h4>
              <a href="https://www.youtube.com/@Mindifyy" target="_blank" rel="noreferrer" className="yt-channel-link" data-cursor="disable">
                Visit Channel ↗
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
