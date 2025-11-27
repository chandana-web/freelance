import React, { useState } from 'react'
import "./Services.css"
import rightHero from "../../assets/serviceHero.webp"
import leftHero from "../../assets/serviceHeroleft.png"
import dropdownIcon from "../../assets/dropDown.png"
import filterIcon from "../../assets/filterIcon.png"
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'

const websiteGigsData = [
  {
    images: [
      "https://picsum.photos/seed/wp1/600/400",
      "https://picsum.photos/seed/wp2/600/400",
      "https://picsum.photos/seed/wp3/600/400",
    ],
    seller: {
      name: "Prince Mahmud",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    title: "I will build a responsive wordpress website with custom theme",
    rating: 5.0,
    reviews: 328,
    price: 7493,
    level: "Level 2 ★★",
  },
   {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp4/600/400",
      "https://picsum.photos/seed/wp5/600/400",
    ],
    seller: {
      name: "Tohidul I.",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    title: "I will redesign a premium wordpress website with elementor pro",
    rating: 5.0,
    reviews: 40,
    price: 7961,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp6/600/400",
      "https://picsum.photos/seed/wp7/600/400",
    ],
    seller: {
      name: "Atikur Rahman",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    title: "I will design or develop a custom webflow or figma to webflow website",
    rating: 4.9,
    reviews: 568,
    price: 11239,
    level: "Level 2 ★★",
  },
   {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp8/600/400",
      "https://picsum.photos/seed/wp9/600/400",
    ],
    seller: {
      name: "Saiful",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    title: "I will develop a custom website using react node or full stack development",
    rating: 4.9,
    reviews: 741,
    price: 9366,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp10/600/400",
      "https://picsum.photos/seed/wp11/600/400",
    ],
    seller: {
      name: "WebMatrix Dev",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    title: "I will create an ecommerce website with payment gateway and admin panel",
    rating: 4.8,
    reviews: 189,
    price: 15299,
    level: "Top Rated ★★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp12/600/400",
      "https://picsum.photos/seed/wp13/600/400",
    ],
    seller: {
      name: "CodeSmith",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    title: "I will convert figma or XD design into pixel perfect next.js website",
    rating: 5.0,
    reviews: 201,
    price: 18350,
    level: "Top Rated ★★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },
  {
    images: [
      "https://picsum.photos/seed/wp1/600/400",
      "https://picsum.photos/seed/wp2/600/400",
      "https://picsum.photos/seed/wp3/600/400",
    ],
    seller: {
      name: "Prince Mahmud",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    title: "I will build a responsive wordpress website with custom theme",
    rating: 5.0,
    reviews: 328,
    price: 7493,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp4/600/400",
      "https://picsum.photos/seed/wp5/600/400",
    ],
    seller: {
      name: "Tohidul I.",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    title: "I will redesign a premium wordpress website with elementor pro",
    rating: 5.0,
    reviews: 40,
    price: 7961,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp6/600/400",
      "https://picsum.photos/seed/wp7/600/400",
    ],
    seller: {
      name: "Atikur Rahman",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    title: "I will design or develop a custom webflow or figma to webflow website",
    rating: 4.9,
    reviews: 568,
    price: 11239,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp8/600/400",
      "https://picsum.photos/seed/wp9/600/400",
    ],
    seller: {
      name: "Saiful",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    title: "I will develop a custom website using react node or full stack development",
    rating: 4.9,
    reviews: 741,
    price: 9366,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp10/600/400",
      "https://picsum.photos/seed/wp11/600/400",
    ],
    seller: {
      name: "WebMatrix Dev",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    title: "I will create an ecommerce website with payment gateway and admin panel",
    rating: 4.8,
    reviews: 189,
    price: 15299,
    level: "Top Rated ★★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp12/600/400",
      "https://picsum.photos/seed/wp13/600/400",
    ],
    seller: {
      name: "CodeSmith",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    title: "I will convert figma or XD design into pixel perfect next.js website",
    rating: 5.0,
    reviews: 201,
    price: 18350,
    level: "Top Rated ★★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },
  {
    images: [
      "https://picsum.photos/seed/wp1/600/400",
      "https://picsum.photos/seed/wp2/600/400",
      "https://picsum.photos/seed/wp3/600/400",
    ],
    seller: {
      name: "Prince Mahmud",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    title: "I will build a responsive wordpress website with custom theme",
    rating: 5.0,
    reviews: 328,
    price: 7493,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp4/600/400",
      "https://picsum.photos/seed/wp5/600/400",
    ],
    seller: {
      name: "Tohidul I.",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    title: "I will redesign a premium wordpress website with elementor pro",
    rating: 5.0,
    reviews: 40,
    price: 7961,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp6/600/400",
      "https://picsum.photos/seed/wp7/600/400",
    ],
    seller: {
      name: "Atikur Rahman",
      avatar: "https://i.pravatar.cc/150?img=20",
    },
    title: "I will design or develop a custom webflow or figma to webflow website",
    rating: 4.9,
    reviews: 568,
    price: 11239,
    level: "Level 2 ★★",
  },
  

  {
    images: [
      "https://picsum.photos/seed/wp8/600/400",
      "https://picsum.photos/seed/wp9/600/400",
    ],
    seller: {
      name: "Saiful",
      avatar: "https://i.pravatar.cc/150?img=29",
    },
    title: "I will develop a custom website using react node or full stack development",
    rating: 4.9,
    reviews: 741,
    price: 9366,
    level: "Level 2 ★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp10/600/400",
      "https://picsum.photos/seed/wp11/600/400",
    ],
    seller: {
      name: "WebMatrix Dev",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    title: "I will create an ecommerce website with payment gateway and admin panel",
    rating: 4.8,
    reviews: 189,
    price: 15299,
    level: "Top Rated ★★★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp12/600/400",
      "https://picsum.photos/seed/wp13/600/400",
    ],
    seller: {
      name: "CodeSmith",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    title: "I will convert figma or XD design into pixel perfect next.js website",
    rating: 5.0,
    reviews: 201,
    price: 18350,
    level: "Top Rated ★★★",
  },
  

  {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },
  {
    images: [
      "https://picsum.photos/seed/wp14/600/400",
      "https://picsum.photos/seed/wp15/600/400",
    ],
    seller: {
      name: "Nishant UI",
      avatar: "https://i.pravatar.cc/150?img=52",
    },
    title: "I will build landing page using react, tailwind and framer motion",
    rating: 4.9,
    reviews: 132,
    price: 6220,
    level: "Level 1 ★",
  },

  {
    images: [
      "https://picsum.photos/seed/wp16/600/400",
      "https://picsum.photos/seed/wp17/600/400",
    ],
    seller: {
      name: "PixelCraft Studio",
      avatar: "https://i.pravatar.cc/150?img=66",
    },
    title: "I will create fast SEO optimized portfolio or business website",
    rating: 4.8,
    reviews: 441,
    price: 5299,
    level: "Level 1 ★",
  },
 
];

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 8; // since 4 per row, this means 1 row = 4 items
const totalPages = Math.ceil(websiteGigsData.length / itemsPerPage);
const currentData = websiteGigsData.slice(
  (currentPage - 1) * itemsPerPage,
  currentPage * itemsPerPage
);


  const GigCard = ({ gig }) => {
    const [activeImage, setActiveImage] = useState(0);
    const { images, seller, title, rating, reviews, price, level } = gig;


    return (
      <div className="gig-card">

        {/* Image Carousel */}
        <div className="gig-img-wrapper">
          <img src={images[activeImage]} alt="" className="gig-img" />
          <FiHeart className="fav-icon" />

          <div className="s-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`s-dot ${activeImage === idx ? "active" : ""}`}
                onClick={() => setActiveImage(idx)}
              />
            ))}
          </div>
        </div>

        {/* Seller */}
        <div className="seller-row">
          <div >
          <img src={seller.avatar} alt="" className="seller-img" />
          <span className="seller-name">{seller.name}</span>
          </div>
          <div>
          {level && <span className="badge">{level}</span>}
          </div>
        </div>

        {/* Title */}
        <p className="gig-title">{title}</p>

        {/* Rating */}
        <div className="rating-row">
          <AiFillStar className="star" />
          <span>{rating}</span>
          <span className="reviews">({reviews})</span>
        </div>

        {/* Price */}
        <div className="price-row">
          <span className="from">From</span>
          <span className="price">₹{price}</span>
        </div>

      </div>
    );
  };
  return (

    <div>
      <section className="services-hero">
      <div className="hero-left">
        <img src={leftHero} alt="shape" className="hero-shape" />

        <h1>Design & Creative</h1>
        <p>Give your visitor a smooth online experience with a solid UX design</p>
      </div>

      <div className="hero-right">
        <img src={rightHero} alt="hero" className="hero-img float-animate" />
      </div>
    </section>

    <div className="filters-container">

      {/* Left filter buttons */}
      <div className="filters-left">

        {/* All Filters Button */}
        <button className="filter-btn">
          <img src={filterIcon} alt="filter icon" height="14" />
          All Filters
        </button>

        {/* Dropdown Filters */}
        <button className="filter-dropdown">
          Delivery Time <img src={dropdownIcon} className="filter-arrow" alt="" />
        </button>

        <button className="filter-dropdown">
          Budget <img src={dropdownIcon} className="filter-arrow" alt="" />
        </button>

        <button className="filter-dropdown">
          Level <img src={dropdownIcon} className="filter-arrow" alt="" />
        </button>

        <button className="filter-dropdown">
          Location <img src={dropdownIcon} className="filter-arrow" alt="" />
        </button>
      </div>

      {/* Right Sort Menu */}
      <div className="filters-right">
        <span className="sort-text">Sort by</span>
        <button className="filter-dropdown">
          New Arrivals <img src={dropdownIcon} className="filter-arrow" alt="" />
        </button>
      </div>

    </div>
    <div className='gig-wrapper'>
    <div className="gigs-grid">
        {currentData.map((gig, index) => (
          <GigCard key={index} gig={gig} />
        ))}
      </div>
      </div>
      {/* Pagination */}
<div className="pagination">
  
  {/* Previous Button */}
  <button 
    className="page-btn"
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
  >
    ‹
  </button>

  {/* Page Numbers */}
  {[...Array(totalPages)].map((_, idx) => {
    const page = idx + 1;
    return (
      <button 
        key={page}
        className={`page-number ${currentPage === page ? "active" : ""}`}
        onClick={() => setCurrentPage(page)}
      >
        {page}
      </button>
    );
  })}

  {/* Next Button */}
  <button 
    className="page-btn"
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
  >
    ›
  </button>
</div>

<p className="pagination-info">
  Showing {(currentPage - 1) * itemsPerPage + 1} – 
  {Math.min(currentPage * itemsPerPage, websiteGigsData.length)} of {websiteGigsData.length}+ results
</p>

    </div>
  )
}

export default Services