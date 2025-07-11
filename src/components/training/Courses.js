import React from 'react'

function Courses() {
  return (
    <section className="section" style={{backgroundColor: '#f8fafc'}}>
  <div className="container">
    <div className="section-title">
      <h2>Featured Courses</h2>
      <p>Hand-picked courses to help you develop the most in-demand skills</p>
    </div>
    <div className="courses-grid">
      <div className="course-card">
        <div className="course-img">
          <i className="fab fa-python" />
        </div>
        <div className="course-content">
          <h3>Python for Data Science</h3>
          <p>Master Python and data analysis for real-world applications</p>
          <div className="course-meta">
            <span><i className="far fa-clock" /> 32 hours</span>
            <span className="course-rating">
              <i className="fas fa-star" /> 4.8 (1,245)
            </span>
          </div>
          <div className="course-footer">
            <div className="instructor">
              <i className="fas fa-user" /> Dr. Sarah Johnson
            </div>
            <div className="price">$89.99</div>
          </div>
        </div>
      </div>
      <div className="course-card">
        <div className="course-img">
          <i className="fas fa-mobile-alt" />
        </div>
        <div className="course-content">
          <h3>UI/UX Design Masterclass</h3>
          <p>From wireframes to prototypes - design beautiful interfaces</p>
          <div className="course-meta">
            <span><i className="far fa-clock" /> 45 hours</span>
            <span className="course-rating">
              <i className="fas fa-star" /> 4.9 (980)
            </span>
          </div>
          <div className="course-footer">
            <div className="instructor">
              <i className="fas fa-user" /> Michael Chen
            </div>
            <div className="price">$99.99</div>
          </div>
        </div>
      </div>
      <div className="course-card">
        <div className="course-img">
          <i className="fas fa-cloud" />
        </div>
        <div className="course-content">
          <h3>AWS Certified Solutions Architect</h3>
          <p>Prepare for the AWS certification with hands-on labs</p>
          <div className="course-meta">
            <span><i className="far fa-clock" /> 60 hours</span>
            <span className="course-rating">
              <i className="fas fa-star" /> 4.7 (2,120)
            </span>
          </div>
          <div className="course-footer">
            <div className="instructor">
              <i className="fas fa-user" /> David Wilson
            </div>
            <div className="price">$119.99</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Courses
