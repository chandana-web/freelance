import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

import hero2 from "../../assets/hero111.jpg";
import hero1 from "../../assets/hero222.jpg";

import catwb from "../../assets/catwb.png";
import catvi from "../../assets/catvi.png";
import cattr from "../../assets/cattr.png";
import catmi from "../../assets/catmi.png";
import catfa from "../../assets/catfa.png";
import catdm from "../../assets/catdm.png";
import catcd from "../../assets/catcd.png";
import catar from "../../assets/catar.png";
import secimg1 from "../../assets/sectionimg1.webp";
import secimg2 from "../../assets/sectionimg2.webp";
import secimg3 from "../../assets/sectionimg3.webp";
import secimg4 from "../../assets/sectionimg4.webp";
import icon1 from "../../assets/secicon1.png"
import icon2 from "../../assets/secicon2.png"
import icon3 from "../../assets/secicon3.png";
import ts1 from "../../assets/ts1.webp"
import ts2 from "../../assets/ts2.webp"
import ts3 from "../../assets/ts3.webp"
import ts4 from "../../assets/ts4.webp"
import ts5 from "../../assets/ts5.webp"
import ts6 from "../../assets/ts6.webp"
import ts7 from "../../assets/ts7.webp"
import avatar1 from "../../assets/avatar1.webp"
import avatar2 from "../../assets/avatar2.webp"
import heartIcon from "../../assets/hearticon.png"
import client1 from "../../assets/client1.webp"
import client2 from "../../assets/client2.webp"
import postIcon from "../../assets/post.png"
import freelancerIcon from "../../assets/freelancer.png"
import payIcon from "../../assets/pay.png"
import supportIcon from "../../assets/assistant.png"
import blog1 from "../../assets/blog1.webp"
import blog2 from "../../assets/blog2.webp"
import blog3 from "../../assets/blog3.webp"
import blog4 from "../../assets/blog4.webp"
import ava1 from "../../assets/ava1.webp"
import ava2 from "../../assets/ava2.webp"
import ava3 from "../../assets/ava3.webp"
import ava4 from "../../assets/ava4.webp"
import ava5 from "../../assets/ava5.webp"
import tests from "../../assets/testimonials1.png"



const categories = [
  {
    title: "Development & IT",
    skills: "1,853 skills",
    desc: "Software Engineer, Web / Mobile Developer & More",
    icon: catwb,
    link: "/category/development",
  },
  {
    title: "Design & Creative",
    skills: "1,853 skills",
    desc: "Graphic Designer, UI/UX & More",
    icon: catcd,
    link: "/category/design",
  },
  {
    title: "Digital Marketing",
    skills: "1,853 skills",
    desc: "SEO, Social Media & More",
    icon: catdm,
    link: "/category/marketing",
  },
  {
    title: "Writing & Translation",
    skills: "1,853 skills",
    desc: "Content Writer, Translator & More",
    icon: cattr,
    link: "/category/writing",
  },
  {
    title: "Music & Audio",
    skills: "1,853 skills",
    desc: "Software Engineer, Web / Mobile Developer & More",
    icon: catmi,
    link: "/category/music",
  },
  {
    title: "Video & Animation",
    skills: "1,853 skills",
    desc: "Graphic Designer, UI/UX & More",
    icon: catvi,
    link: "/category/video",
  },
  {
    title: "Engineering & Architecture",
    skills: "1,853 skills",
    desc: "Architect, Civil Engineer & More",
    icon: catar,
    link: "/category/engineering",
  },
  {
    title: "Finance & Accounting",
    skills: "1,853 skills",
    desc: "Accountant, Bookkeeper & More",
    icon: catfa,
    link: "/category/finance",
  },
  {
    title: "Development & IT",
    skills: "1,853 skills",
    desc: "Software Engineer, Web / Mobile Developer & More",
    icon: catwb,
    link: "/category/development",
  },
  {
    title: "Design & Creative",
    skills: "1,853 skills",
    desc: "Graphic Designer, UI/UX & More",
    icon: catcd,
    link: "/category/design",
  },
  {
    title: "Digital Marketing",
    skills: "1,853 skills",
    desc: "SEO, Social Media & More",
    icon: catdm,
    link: "/category/marketing",
  },
  {
    title: "Writing & Translation",
    skills: "1,853 skills",
    desc: "Content Writer, Translator & More",
    icon: cattr,
    link: "/category/writing",
  },
];


const TRENDING_PER_SLIDE = 4;

const trendingServices = [
  {
    id: 1,
    image: ts1,
    category: "Web & App Design",
    title: "I will design modern websites in figma or...",
    rating: 4.82,
    reviews: 94,
    seller: "Wanda Runo",
    avatar: avatar1,
    price: "$983",
  },
  {
    id: 2,
    image: ts2,
    category: "Art & Illustration",
    title: "I will create modern flat design illustr...",
    rating: 4.82,
    reviews: 94,
    seller: "Ali Tufan",
    avatar: avatar2,
    price: "$983",
  },
  {
    id: 3,
    image: ts3,
    category: "Design & Creative",
    title: "I will build a fully responsive design i...",
    rating: 4.82,
    reviews: 94,
    seller: "Wanda Runo",
    avatar: avatar1,
    price: "$983",
  },
  {
    id: 4,
    image: ts4,
    category: "Web & App Design",
    title: "I will do mobile app development for ios...",
    rating: 4.82,
    reviews: 94,
    seller: "Wanda Runo",
    avatar: avatar1,
    price: "$983",
  },
  {
    id: 5,
    image: ts5,
    category: "Web & App Design",
    title: "Another trending service example...",
    rating: 4.82,
    reviews: 94,
    seller: "Ali Tufan",
    avatar: avatar2,
    price: "$983",
  },
  {
    id: 6,
    image: ts6,
    category: "Design & Creative",
    title: "Another service card here...",
    rating: 4.82,
    reviews: 94,
    seller: "Wanda Runo",
    avatar: avatar1,
    price: "$983",
  },
  {
    id: 7,
    image: ts7,
    category: "Web & App Design",
    title: "Some other cool service...",
    rating: 4.82,
    reviews: 94,
    seller: "Ali Tufan",
    avatar: avatar2,
    price: "$983",
  },
  {
    id: 8,
    image: ts5,
    category: "Design & Creative",
    title: "Last dummy card placeholder...",
    rating: 4.82,
    reviews: 94,
    seller: "Wanda Runo",
    avatar: avatar1,
    price: "$983",
  },
];

const testimonials = [
  {
    img: ava1, // replace with your actual avatar images
    name: "Sophia Ramirez",
    role: "Software Engineer",
    desc:
      "Unforgettable Japan Journey: Our family traveled by bullet train, and the hotel's strategic location enhanced our experience. Agoda's pricing was a pleasant surprise."
  },
  {
    img: ava2,
    name: "Olivia Smith",
    role: "Travel Blogger",
    desc:
      "A Memorable Bullet Train Adventure: Our family's Japan travel experience made easy by this hotel. Agoda's pricing exceeded our expectations."
  },
  {
    img: ava3,
    name: "Emma Johnson",
    role: "Marketing Specialist",
    desc:
      "Unforgettable Japan Journey: Our family embarked on a remarkable bullet train journey in Japan - this hotel's convenient location made it a breeze. Agoda's pricing was fantastic."
  },
  {
    img: ava4,
    name: "Isabella Johnson",
    role: "Graphic Designer",
    desc:
      "A Wonderful Bullet Train Voyage: Our family explored Japan with ease from this hotel's ideal spot. Agoda's pricing made our trip even better."
  },
  {
    img: ava5,
    name: "Ava Lee",
    role: "Marketing Manager",
    desc:
      "An Amazing Japan Journey: Bullet train travel with family was made effortless by the hotel's location. Agoda's pricing added tremendous value."
  }
];

const Home = () => {
  const images = [hero1, hero2];
  const [index, setIndex] = useState(0);
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  const [trustedVisible, setTrustedVisible] = useState(false);
  const [trendingSlide, setTrendingSlide] = useState(0);
  const [liked, setLiked] = useState(
  Array(trendingServices.length).fill(false)
  );
  const [trendingVisible, setTrendingVisible] = useState(false);
  const [active, setActive] = useState(2);
  const [showAll, setShowAll] = useState(false);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  // Category Slider
  
  const CARDS_PER_SLIDE = 4;
const totalSlides = Math.ceil(categories.length / CARDS_PER_SLIDE);

  // Scroll Animation
  const sectionRef = useRef(null);
  
  const goNext = () => {
  setSlide((prev) => (prev + 1) % totalSlides);
};

const goPrev = () => {
  setSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
};

 useEffect(() => {
  const element = sectionRef.current;
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.disconnect(); // stop observing after first reveal
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
}, []);

  const trustedRef = useRef(null);
  useEffect(() => {
  const element = trustedRef.current;
  if (!element) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setTrustedVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(element);
}, []);


const trendingTotalSlides = Math.ceil(trendingServices.length / TRENDING_PER_SLIDE);
const trendingRef = useRef(null);

useEffect(() => {
  const el = trendingRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setTrendingVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.15 }
  );

  observer.observe(el);
}, []);

const goNextTrending = () => {
  setTrendingSlide((prev) => (prev + 1) % trendingTotalSlides);
};

const goPrevTrending = () => {
  setTrendingSlide((prev) => (prev - 1 + trendingTotalSlides) % trendingTotalSlides);
};

const toggleLike = (index) => {
  setLiked((prev) => {
    const copy = [...prev];
    copy[index] = !copy[index];
    return copy;
  });
};


const clientRef = useRef(null);
const [clientVisible, setClientVisible] = useState(false);

useEffect(() => {
  const el = clientRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setClientVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(el);
}, []);

const needRef = useRef(null);
const [needVisible, setNeedVisible] = useState(false);

useEffect(() => {
  const el = needRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        setNeedVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(el);
}, []);

const blogRef = useRef(null);
const [blogVisible, setBlogVisible] = useState(false);

useEffect(() => {
  const el = blogRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setBlogVisible(true);
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  observer.observe(el);
}, []);


const isMobile = window.innerWidth <= 768; // optional: change breakpoint if needed

const visibleCategories = isMobile
  ? showAll
    ? categories // show all
    : categories.slice(0, 3) // show first 3
  : categories; // full slider on desktop




  return (
    <div>
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${images[index]})` }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <h1 className="fw-bold text-white display-5">
            Hire the best freelancers for any job, online.
          </h1>
          <p className="text-white-50">
            Millions of people use our platform to turn their ideas into
            reality.
          </p>

          {/* Search Bar */}
          <div className="hero-search d-flex bg-white rounded shadow-sm mt-4">
            <div className="p-2 border-end flex-grow-1">
              <input
                type="text"
                className="form-control border-0"
                placeholder="What are you looking for?"
              />
            </div>

            <div className="p-2 border-end">
              <select className="form-select border-0">
                <option>Select Role</option>
                <option>Designer</option>
                <option>Developer</option>
                <option>Writer</option>
              </select>
            </div>

            <button className="btn btn-success px-3 m-2">Search</button>
          </div>

          <p className="text-white-50 mt-3 small">
            Popular Searches: Designer, Developer, Web, iOS, PHP, Engineer
          </p>
        </div>

        <div className="hero-buttons d-flex justify-content-end gap-3 mt-6  position-relative pe-5">
          <Link
            to="/projects"
            className="btn btn-outline-light px-4 py-2 fw-semibold rounded-pill"
          >
            Find Work
          </Link>

          <Link
            to="/services"
            className="btn btn-success px-4 py-2 fw-semibold rounded-pill"
          >
            Find Talent
          </Link>
        </div>

        {/* Arrows */}
        <button className="hero-arrow left-arrow" onClick={prev}>
          ❮
        </button>
        <button className="hero-arrow right-arrow" onClick={next}>
          ❯
        </button>
      </section>

      {/* BROWSE CATEGORIES */}
      <section
        ref={sectionRef}
        className={`browse-section container ${visible ? "visible" : ""}`}
      >
        <div className="d-flex justify-content-between align-items-start">
          <div className="browse-left">
            <h2 className="fw-bold display-8 fade-item">
              Browse talent by category
            </h2>
            <p className="text-muted fade-item">
              Get some inspirations from 1800+ skills
            </p>
          </div>

          <div className="browse-nav fade-item">
            <button
              className="cat-arrow"
              onClick={goPrev}
            >
              ‹
            </button>

            <div className="dots">
              {[...Array(totalSlides)].map((_, i) => (
                <span
                key={i}
                onClick={() => setSlide(i)}
                 className={`dot ${slide === i ? "active" : ""}`}
                ></span>
              ))}
            </div>

            <button
              className="cat-arrow"
              onClick={goNext}
            >
              ›
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="category-slider fade-item">
          <div
            className={`category-wrapper ${isMobile ? "mobile-layout" : ""}`}
    style={
      isMobile
        ? {}
        : {
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${slide * (100 / totalSlides)}%)`,
          }
    }

          >
            {visibleCategories.map((cat, i) => (
      <Link to={cat.link} className="category-card" key={i}>
        <img src={cat.icon} alt="icon" className="category-icon" />
        <p className="text-muted small card-skill">{cat.skills}</p>
        <h6 className="fw-semibold card-title">{cat.title}</h6>
        <p className="text-muted small card-desc">{cat.desc}</p>
      </Link>
    ))}
          </div>
        </div>
        {isMobile && (
  <div className="text-center mt-4">
    <button className="show-toggle-btn" onClick={() => setShowAll(!showAll)}>
      {showAll ? "Show Less ↑" : "Show More ↓"}
    </button>
  </div>
)}

      </section>


      {/* TRUSTED SECTION */}
<section 
  ref={trustedRef}
  className={`trusted-section container ${trustedVisible ? "visible" : ""}`}
>
  <div className="trusted-left">
    <img src={secimg1} alt="person" className="trusted-img img1" />
    <img src={secimg2} alt="person" className="trusted-img img2" />
    <img src={secimg3} alt="person" className="trusted-img img3" />
    <img src={secimg4} alt="person" className="trusted-img img4" />
  </div>

  <div className="trusted-right">
  <h2 className="fw-bold trusted-heading">
    A whole world of freelance <br /> talent at your fingertips
  </h2>

  <div className="trusted-info mt-5">
  <div className="trusted-feature">
    <img src={icon1} alt="icon" className="feature-icon" />
    <div>
      <h5 className="fw-semibold feature-title">Proof of quality</h5>
      <p className="text-muted feature-desc">
        Check any pro's work samples, client reviews, and identity verification.
      </p>
    </div>
  </div>

  <div className="trusted-feature">
    <img src={icon2} alt="icon" className="feature-icon" />
    <div>
      <h5 className="fw-semibold feature-title">No cost until you hire</h5>
      <p className="text-muted feature-desc">
        Interview potential fits for your job, negotiate rates, and only pay for work you approve.
      </p>
    </div>
  </div>

  <div className="trusted-feature">
    <img src={icon3} alt="icon" className="feature-icon" />
    <div>
      <h5 className="fw-semibold feature-title">Safe and secure</h5>
      <p className="text-muted feature-desc">
        Focus on your work knowing we help protect your data and privacy. We’re here with 24/7 support if you need it.
      </p>
    </div>
  </div>

</div>
</div>

</section>

{/* TRENDING SERVICES */}
<section
  ref={trendingRef}
  className={`trending-section container ${trendingVisible ? "visible" : ""}`}
>
  <div className="d-flex justify-content-between align-items-start">
    <div>
      <h2 className="fw-bold trending-heading">Trending Services</h2>
      <p className="text-muted trending-sub">
        Most viewed and all-time top-selling services
      </p>
    </div>

    <div className="browse-nav">
      <button className="cat-arrow" onClick={goPrevTrending}>‹</button>

      <div className="dots">
        {[...Array(trendingTotalSlides)].map((_, i) => (
          <span
            key={i}
            onClick={() => setTrendingSlide(i)}
            className={`dot ${trendingSlide === i ? "active" : ""}`}
          ></span>
        ))}
      </div>

      <button className="cat-arrow" onClick={goNextTrending}>›</button>
    </div>
  </div>

  {/* Slider */}
  <div className="trending-slider">
    <div
      className="trending-wrapper"
      style={{
        width: `${trendingTotalSlides * 100}%`,
        transform: `translateX(-${
          trendingSlide * (100 / trendingTotalSlides)
        }%)`,
      }}
    >
      {trendingServices.map((item, i) => (
        <div className="trending-card" key={item.id}>
          <div className="trending-img-wrap">
            <img src={item.image} alt={item.title} className="trending-img" />

            <button
              type="button"
              className={`heart-btn ${liked[i] ? "active" : ""}`}
              onClick={() => toggleLike(i)}
            >
              <img src={heartIcon} alt="favorite" />
            </button>
          </div>

          <div className="trending-body">
            <p className="trending-category">{item.category}</p>
            <Link to="/freelancerdashboard" className="trending-title-link">
  {item.title}
</Link>


            <div className="trending-rating">
              <span className="star">★</span>
              <span>{item.rating}</span>
              <span className="text-muted">
                &nbsp; {item.reviews} reviews
              </span>
            </div>

            <div className="trending-footer d-flex">
              <div className="seller">
                <img src={item.avatar} alt={item.seller} />
                <span>{item.seller}</span>
              </div>
              <div className="price">
                <span className="text-muted small">Starting at&nbsp;<br/></span>
                <span className="fw-semibold">{item.price}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="trending-bottom">
    <Link to="/services" className="trending-link">
      All Categories →
    </Link>
  </div>
</section>

{/* CLIENT FIND SECTION */}
<section ref={clientRef} className={`client-section container ${clientVisible ? "visible" : ""}`}>
  {/* Block 1 */}
  <div className="client-block">
    <img src={client1} alt="client working" className="client-img slide-left" />

    <div className="client-text slide-right">
      <p className="client-subtitle">For Clients</p>
      <h3 className="fw-bold">Find talent <br /> your way</h3>
      <p className="client-desc">
        Work with the largest network of independent professionals and get things done— 
        from quick turnarounds to big transformations.
      </p>

      <Link to="/freelancerdashboard" className="client-btn">
        All services →
      </Link>
    </div>
  </div>

  {/* Block 2 */}
  <div className="client-block reverse">
    <div className="client-text slide-left">
      <p className="client-subtitle">For Freelancers</p>
      <h3 className="fw-bold">Find great <br /> work</h3>
      <p className="client-desc">
        Work with the largest network of independent professionals and get things done—
        from quick turnarounds to big transformations.
      </p>

      <Link to="/contact" className="client-btn">
        Projects →
      </Link>
    </div>

    <img src={client2} alt="client working" className="client-img slide-right" />
  </div>
</section>


{/* NEED SOMETHING DONE SECTION */}
<section ref={needRef} className={`need-section ${needVisible ? "visible" : ""}`}>
  <h2 className="text-center fw-bold">How it works?</h2>
  <p className="text-center text-muted small">
    Most viewed and all-time top-selling services
  </p>

  <div className="need-grid container">
    {[
      {
        icon: postIcon,
        title: "Post a job",
        desc: "It’s free and easy to post a job. Simply fill in a title, description."
      },
      {
        icon: freelancerIcon,
        title: "Choose freelancers",
        desc: "Browse talent and pick the right freelancer for your needs."
      },
      {
        icon: payIcon,
        title: "Pay safely",
        desc: "Payment is released only after you approve the work."
      },
      {
        icon: supportIcon,
        title: "We’re here to help",
        desc: "Our support team is available 24/7 to assist you anytime."
      }
    ].map((item, i) => (
      <div key={i} className="need-card fade-up">
        <div className="need-icon">
          <img src={item.icon} alt="icon" />
        </div>
        <h6 className="fw-semibold">{item.title}</h6>
        <p className="small text-muted">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


{/* OUR BLOG SECTION */}
<section ref={blogRef} className={`blog-section ${blogVisible ? "visible" : ""}`}>
  <div className="container">
    <h2 className="fw-bold mb-2 text-start">Our Blog</h2>
    <p className="text-muted mb-5 text-start">Aliquam lacinia diam quis lacus euismod</p>

    <div className="blog-grid">
      {[
        {
          img: blog1, 
          date: "December 2, 2022",
          title: "Start an online business and work from home",
          desc: "A complete guide to starting a small business online"
        },
        {
          img: blog2,
          date: "December 2, 2022",
          title: "Front becomes an official Instagram Marketing Partner",
          desc: "A complete guide to starting a small business online"
        },
        {
          img: blog3,
          date: "December 2, 2022",
          title: "Start an online business and work from home right now",
          desc: "A complete guide to starting a small business online"
        },
        {
          img: blog4,
          date: "December 2, 2022",
          title: "Start an online business and work from home with complete guide.",
          desc: "A complete guide to starting a small business online"
        },
      ].map((item, i) => (
        <div className="blog-card fade-up" key={i}>
          <div className="blog-img">
            <img src={item.img} alt="blog" />
          </div>

          <p className="blog-date small text-muted mt-3">{item.date}</p>

          <h6 className="blog-title fw-semibold">{item.title}</h6>

          <p className="small text-muted">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="testimonials-section">
  <h2 className="fw-bold text-center">Testimonials</h2>
  <p className="text-center text-muted small">
    Interdum et malesuada fames ac ante ipsum
  </p>

  <div className="quote-icon"><img src={tests} alt=""/></div>

  <p className="testimonial-text text-center">
    {testimonials[active].desc}
  </p>

  <div className="text-center mt-5 mb-4">
    <h6 className="fw-semibold">{testimonials[active].name}</h6>
    <p className="text-muted small">{testimonials[active].role}</p>
  </div>

  {/* Avatars */}
  <div className="avatar-row">
    {testimonials.map((item, index) => (
      <img
        key={index}
        src={item.img}
        alt="avatar"
        className={`avatar ${active === index ? "active-avatar" : ""}`}
        onClick={() => setActive(index)}
      />
    ))}
  </div>
</section>



    </div>
  );
};

export default Home;