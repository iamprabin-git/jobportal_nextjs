import React from 'react'

function Category() {
  return (
    <section className="section">
  <div className="container">
    <div className="section-title">
      <h2>Popular Training Categories</h2>
      <p>Explore our most popular learning categories to find the right training for your career goals</p>
    </div>
    <div className="categories-grid">
      <div className="category-card">
        <div className="category-icon">
          <i className="fas fa-laptop-code" />
        </div>
        <div className="category-content">
          <h3>Technology &amp; IT</h3>
          <p>Programming, cybersecurity, cloud computing, and more</p>
          <a href="#" className="btn">Explore</a>
        </div>
      </div>
      <div className="category-card">
        <div className="category-icon">
          <i className="fas fa-chart-line" />
        </div>
        <div className="category-content">
          <h3>Business &amp; Management</h3>
          <p>Leadership, project management, finance, and strategy</p>
          <a href="#" className="btn">Explore</a>
        </div>
      </div>
      <div className="category-card">
        <div className="category-icon">
          <i className="fas fa-paint-brush" />
        </div>
        <div className="category-content">
          <h3>Design &amp; Creativity</h3>
          <p>UI/UX design, graphic design, animation, and video editing</p>
          <a href="#" className="btn">Explore</a>
        </div>
      </div>
      <div className="category-card">
        <div className="category-icon">
          <i className="fas fa-bullhorn" />
        </div>
        <div className="category-content">
          <h3>Marketing</h3>
          <p>Digital marketing, SEO, social media, and content strategy</p>
          <a href="#" className="btn">Explore</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Category
