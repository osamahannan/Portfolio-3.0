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
                <h4>Frontend Developer</h4>
                <h5>Brimo Software Solutions</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Worked as a Frontend Developer building scalable React and Next.js based eCommerce platforms and dashboards. Contributed to developing high-performance UI features, including a voucher engine with bundle discounts, and optimized frontend performance using advanced JavaScript techniques. Collaborated closely with backend teams to integrate APIs, improve SEO through server-side rendering, and enhance user experience while mentoring junior developers and maintaining high code quality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Websultanate Software Technologies</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on multiple web and mobile applications using React, React Native, and modern JavaScript frameworks. Contributed to a multi-tenant eCommerce analytics platform that provides competitive intelligence for brands. Developed interactive gaming interfaces and helped build scalable frontend architectures while integrating backend APIs. Also worked on a React Native social meetup application enabling users to create events, connect with others, and manage meeting points.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
