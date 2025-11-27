import React, { useState } from 'react'
import "./Projects.css"
import { FiSearch } from 'react-icons/fi'
import leftHeroShape from "../../assets/projectheroleft.png"
import rightHero from "../../assets/projectheroright1.webp"
import curveLine from "../../assets/projectheroright2.webp"
import dropdownIcon from "../../assets/dropDown.png"


const projectList = [
  {
    title: "Food Delivery Mobile App",
    country: "United States",
    time: "2 hours ago",
    proposals: "1 Received",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    skills: ["Figma", "Sketch", "HTML5"],
    price: "$100 - $150",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Food Delivery Mobile App",
    country: "United States",
    time: "2 hours ago",
    proposals: "1 Received",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    skills: ["Figma", "Sketch", "HTML5"],
    price: "$100 - $150",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Food Delivery Mobile App",
    country: "United States",
    time: "2 hours ago",
    proposals: "1 Received",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    skills: ["Figma", "Sketch", "HTML5"],
    price: "$100 - $150",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Food Delivery Mobile App",
    country: "United States",
    time: "2 hours ago",
    proposals: "1 Received",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    skills: ["Figma", "Sketch", "HTML5"],
    price: "$100 - $150",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Food Delivery Mobile App",
    country: "United States",
    time: "2 hours ago",
    proposals: "1 Received",
    description:
      "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    skills: ["Figma", "Sketch", "HTML5"],
    price: "$100 - $150",
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  {
    title: "Real Estate Website Redesign",
    country: "Canada",
    time: "5 hours ago",
    proposals: "3 Received",
    description:
      "Looking for a designer to redesign an existing real estate platform with a clean minimal UI.",
    skills: ["Webflow", "React", "Figma"],
    price: "$200 - $350",
    image: "https://i.pravatar.cc/100?img=20"
  },
  // add 8 more to test pagination
];

const Projects = () => {

    const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;

const totalPages = Math.ceil(projectList.length / itemsPerPage);

const currentProjects = projectList.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);

    const ProjectCard = ({ item }) => {
  return (
    <div className="project-card">

      {/* Left Side */}
      <div className="project-left">
        <div className="project-header">
          <img src={item.image} alt={item.title} className="project-img" />
          <h3 className='project-title'>{item.title}</h3>
        </div>
        <div className='project-content'>
        <div className="project-meta">
          <span>📍 {item.country}</span>
          <span>⏱ {item.time}</span>
          <span>📄 {item.proposals}</span>
        </div>

        <p className="project-desc">{item.description}</p>

        <div className="project-tags">
          {item.skills.map((skill, idx) => (
            <span key={idx}>{skill}</span>
          ))}
        </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="project-right">
        <strong className="price">{item.price}</strong>
        <small className="hourly">Hourly Rate</small>

        <button className="proposal-btn">
          Send Proposal →
        </button>
      </div>

    </div>
  );
};



  return (
    <div className='projects'>
        <section className="projects-hero">

  <img src={leftHeroShape} alt="" className="hero-left-shape" />

  <div className="projects-content">
    <h1>Projects List</h1>
    <p>All the Lorem Ipsum generators on the Internet tend to repeat.</p>

    <div className="projects-search">
      <FiSearch className="search-icon" />
      <input type="text" placeholder="Keyword or freelancer name" />
      <button className="search-btn">Search</button>
    </div>
  </div>

  {/* Right Image */}
  <img src={rightHero} alt="hero" className="projects-hero-img" />

  {/* The animated curve line */}
  <img src={curveLine} alt="curve" className="curve-line float-line" />

</section>

<div className="projects-filters">

  <div className="filters-left">

    <button className="filter-dropdown">
      Category <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Project Type <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Price <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Skills <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Location <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Languages <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

    <button className="filter-dropdown">
      Language Level <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>

  </div>

  <div className="filters-right">
    <span className="sort-text">Sort by</span>
    <button className="filter-dropdown">
      Best Seller <img src={dropdownIcon} className="filter-arrow" alt="" />
    </button>
  </div>

</div>

{/* PROJECT LISTING */}
<div className='project-wrapper'>
<div className="project-grid">
  {currentProjects.map((item, i) => (
    <ProjectCard key={i} item={item} />
  ))}
</div>
</div>

{/* PAGINATION */}
<div className="pagination">
  <button 
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="page-btn"
  >‹</button>

  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      className={`page-number ${currentPage === i + 1 ? "active" : ""}`}
      onClick={() => setCurrentPage(i + 1)}
    >
      {i + 1}
    </button>
  ))}

  <button 
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="page-btn"
  >›</button>
</div>

    </div>
  )
}

export default Projects