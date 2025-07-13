"use client";
import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(0);
  
  const categories = [
    {
      id: 0,
      title: "Technology & IT",
      icon: <FaLaptopCode />,
      description: "Programming, cybersecurity, cloud computing, and more",
      color: "#4299e1"
    },
    {
      id: 1,
      title: "Business & Management",
      icon: "fas fa-chart-line",
      description: "Leadership, project management, finance, and strategy",
      color: "#48bb78"
    },
    {
      id: 2,
      title: "Design & Creativity",
      icon: "fas fa-paint-brush",
      description: "UI/UX design, graphic design, animation, and video editing",
      color: "#ed64a6"
    },
    {
      id: 3,
      title: "Marketing",
      icon: "fas fa-bullhorn",
      description: "Digital marketing, SEO, social media, and content strategy",
      color: "#ecc94b"
    }
  ];

  return (
    <div className="category-tabs">
      <style>
        {`
          .category-tabs {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            background-color: #f8f9fa;
          }
          
          .section-title {
            text-align: center;
            margin-bottom: 50px;
          }
          
          .section-title h2 {
            font-size: 36px;
            margin-bottom: 15px;
            color: #2d3748;
          }
          
          .section-title p {
            font-size: 18px;
            color: #718096;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .tabs-container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            overflow: hidden;
            margin: 0 auto;
          }
          
          .tab-header {
            display: flex;
            background: #fff;
            border-bottom: 1px solid #e2e8f0;
          }
          
          .tab-button {
            flex: 1;
            padding: 20px 15px;
            text-align: center;
            background: transparent;
            border: none;
            font-size: 18px;
            font-weight: 600;
            color: #718096;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          
          .tab-button i {
            font-size: 24px;
            margin-bottom: 10px;
            transition: all 0.3s ease;
          }
          
          .tab-button:hover {
            color: #2d3748;
          }
          
          .tab-button.active {
            color: #2d3748;
          }
          
          .tab-button.active i {
            transform: translateY(-5px);
          }
          
          .tab-button.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 3px;
            border-radius: 3px 3px 0 0;
          }
          
          .tab-content {
            padding: 40px;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            background: linear-gradient(135deg, #f0f4f8 0%, #ffffff 100%);
          }
          
          .category-icon {
            margin-bottom: 25px;
            width: 100px;
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            font-size: 48px;
            transition: all 0.4s ease;
          }
          
          .category-content h3 {
            font-size: 32px;
            margin-bottom: 20px;
            color: #2d3748;
          }
          
          .category-content p {
            color: #718096;
            margin-bottom: 30px;
            font-size: 18px;
            line-height: 1.7;
            max-width: 700px;
          }
          
          .btn {
            display: inline-block;
            padding: 12px 35px;
            background: #4299e1;
            color: #fff;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            font-size: 16px;
            box-shadow: 0 4px 15px rgba(66, 153, 225, 0.3);
          }
          
          .btn:hover {
            background: #3182ce;
            transform: translateY(-3px);
            box-shadow: 0 7px 20px rgba(66, 153, 225, 0.4);
          }
          
          .tab-indicator {
            position: absolute;
            bottom: -1px;
            height: 3px;
            background: #4299e1;
            border-radius: 3px 3px 0 0;
            transition: all 0.3s ease;
          }
          
          /* Responsive Design */
          @media (max-width: 768px) {
            .tab-header {
              flex-wrap: wrap;
            }
            
            .tab-button {
              flex: 0 0 50%;
              padding: 15px 10px;
              font-size: 16px;
            }
            
            .tab-button i {
              font-size: 20px;
            }
            
            .tab-content {
              padding: 30px 20px;
            }
            
            .category-content h3 {
              font-size: 26px;
            }
            
            .section-title h2 {
              font-size: 30px;
            }
          }
          
          @media (max-width: 480px) {
            .tab-button {
              flex: 0 0 100%;
            }
            
            .section {
              padding: 40px 0;
            }
            
            .section-title h2 {
              font-size: 26px;
            }
            
            .section-title p {
              font-size: 16px;
            }
          }
        `}
      </style>
      
      <div className="section-title">
        <h2>Popular Training Categories</h2>
        <p>Explore our most popular learning categories to find the right training for your career goals</p>
      </div>
      
      <div className="tabs-container">
        <div className="tab-header">
          {categories.map((category, index) => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              style={{ color: activeTab === index ? categories[activeTab].color : '' }}
            >
              <i className={category.icon} style={{ color: activeTab === index ? categories[activeTab].color : '' }} />
              {category.title}
            </button>
          ))}
        </div>
        
        <div className="tab-content">
          <div className="category-icon" style={{ backgroundColor: `${categories[activeTab].color}20`, color: categories[activeTab].color }}>
            <i className={categories[activeTab].icon} />
          </div>
          <div className="category-content">
            <h3>{categories[activeTab].title}</h3>
            <p>{categories[activeTab].description}</p>
            <a href="#" className="btn">Explore Courses</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryTabs;