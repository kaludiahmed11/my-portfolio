import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Creative Head</h4>
                <h5>The Reach Crafter · Surat</h5>
              </div>
              <h3>2025 — NOW</h3>
            </div>
            <p>
              Founded The Reach Crafter in 2025 — a creative content agency
              offering Social Media Management, Graphic Design, Video Editing,
              Brand Identity, Photography, and Scripting. Currently serving
              local businesses, startups, restaurants and cafes across Surat.
              Clients include Yes Academy, Yasin Janoo Realty, and Well Academy.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & Content Manager</h4>
                <h5>Well Academy · Surat</h5>
              </div>
              <h3>2023 — NOW</h3>
            </div>
            <p>
              Currently handling end-to-end video editing, video shoots, and
              all types of content management for Well Academy. Producing
              educational content, managing social media presence, and creating
              promotional videos and creatives for the organization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA Student</h4>
                <h5>C.B. Patel Computer College · Surat</h5>
              </div>
              <h3>PURSUING</h3>
            </div>
            <p>
              Currently pursuing Bachelor of Computer Applications (BCA) from
              C.B. Patel Computer College, Surat. Combining academics with
              real-world creative agency work at The Reach Crafter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;