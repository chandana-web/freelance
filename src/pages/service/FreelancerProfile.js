import React, { useEffect, useRef, useState } from 'react'
import "./FreelancerProfile.css"
import heroleft from "../../assets/frproheroleft.png"
import heroright from "../../assets/frproheroright.png"
import heroava from "../../assets/freproheroava.webp"
import calender from "../../assets/freherocal.png"
import location from "../../assets/freheroloc.png"
import star from "../../assets/freherostar.png"
import success from "../../assets/freegoal.png"
import growth from "../../assets/freegrowth.png"
import hours from "../../assets/freehours.png"
import filetime from "../../assets/freefiletime.png"
import delivery from "../../assets/freedelivery.png"
import gender from "../../assets/freegender.png"
import languages from "../../assets/cattr.png"
import level from "../../assets/freelevel.png"


const FreelancerProfile = () => {

    const [activeTab, setActiveTab] = useState("services");
  const [tabWidth, setTabWidth] = useState(0);

  const [shrinkHero, setShrinkHero] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setShrinkHero(true);
    } else {
      setShrinkHero(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const reviewsRef = useRef(null);
  const recommendationsRef = useRef(null);
  const tabsRef = useRef([]);

  const tabs = [
    { id: "about", label: "About Me", ref: aboutRef },
    { id: "education", label: "Education", ref: educationRef },
    { id: "experience", label: "Work Experience", ref: experienceRef },
    { id: "portfolio", label: "Portfolio", ref: portfolioRef },
    
    { id: "reviews", label: "Reviews", ref: reviewsRef },
    { id: "recommendations", label: "Recommendations", ref: recommendationsRef },
  ];

  const handleScrollTo = (ref, id) => {
    setActiveTab(id);
    window.scrollTo({
      top: ref.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // update dynamic tab width
    if (tabsRef.current[0]) {
      setTabWidth(tabsRef.current[0].offsetWidth);
    }

    const handleScroll = () => {
      tabs.forEach((tab) => {
        if (!tab.ref.current) return;
        const secTop = tab.ref.current.offsetTop - 120;
        if (window.scrollY >= secTop) {
          setActiveTab(tab.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, [tabs]);

  return (
    <div>
        <section  className={`freelancer-hero ${shrinkHero ? "shrink" : ""}`}>
        <img src={heroleft} className="hero-left-img" alt="" />
        <img src={heroright} className="hero-right-img" alt="" />

        <div className="freelancer-hero-content">
          <h1 className={`hero-title ${shrinkHero ? "hide-title" : ""}`}>I will design website UI UX in Adobe XD or Figma</h1>

          <div className="profile-row">
            <img src={heroava} className="profile-img" alt="" />

            <div className="info">
              <h3>Leslie Alexander</h3>
              <p className="role">UI/UX Designer</p>

              <div className="meta">
                <span>
                  <img src={star} alt="" /> 4.82 (94 reviews)
                </span>
                <span>
                  <img src={location} alt="" /> London, UK
                </span>
                <span>
                  <img src={calender} alt="" /> Member since April 1, 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Tab Navigation */}
        <div className="sticky-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={(el) => (tabsRef.current[index] = el)}
              onClick={() => handleScrollTo(tab.ref, tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}

          {/* Animated Indicator */}
          <div
            className="tab-indicator"
            style={{
              transform: `translateX(${
                tabs.findIndex((t) => t.id === activeTab) * tabWidth
              }px)`,
              width: tabWidth,
            }}
          />
        </div>
      </section>

       <div className="profile-layout">
  {/* MAIN CONTENT – 75% (LEFT) */}
  <main className="profile-main">
    <section ref={aboutRef} className="section" id='about'>
        <div className="stats-row">
    <div className="stat-box">
      <img src={success} alt="" />
      <div>
        <p className="stat-title">Job Success</p>
        <h4>98%</h4>
      </div>
    </div>

    <div className="stat-box">
      <img src={growth} alt="" />
      <div>
        <p className="stat-title">Total Jobs</p>
        <h4>921</h4>
      </div>
    </div>

    <div className="stat-box">
      <img src={hours} alt="" />
      <div>
        <p className="stat-title">Total Hours</p>
        <h4>1,499</h4>
      </div>
    </div>

    <div className="stat-box">
      <img src={filetime} alt="" />
      <div>
        <p className="stat-title">In Queue Service</p>
        <h4>20</h4>
      </div>
    </div>
  </div>

  <h3 className="about-title">Description</h3>

  <p className="about-text">
    It is a long established fact that a reader will be distracted by the readable content of a page 
    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
    distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
  </p>

  <p className="about-text">
    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a 
    search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved 
    over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  </p>
  <hr className="divider" />

    </section>

    <section ref={educationRef} id="education" className="section">
        <h3 className="section-heading">Education</h3>

  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-marker">M</div>
        <div className="timeline-line" />
      </div>

      <div className="timeline-content">
        
        <h4 className="timeline-title">Bachlors in Fine Arts</h4>
        
        <p className="timeline-subtitle">Modern College</p>
        <span className="timeline-badge">2012 – 2014</span>
        <p className="timeline-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-marker">M</div>
        <div className="timeline-line" />
      </div>

      <div className="timeline-content">
        
        <h4 className="timeline-title">Computer Science</h4>
        <p className="timeline-subtitle">Harvatrd University</p>
        <span className="timeline-badge">2008 – 2012</span>
        <p className="timeline-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  </div>

  <hr className="divider" />
    </section>
    
    <section ref={experienceRef} className="section">
        <h3 className="section-heading">Work & Experience</h3>

  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-marker">M</div>
        <div className="timeline-line" />
      </div>

      <div className="timeline-content">
        
        <h4 className="timeline-title">UX Designer</h4>
        <p className="timeline-subtitle">Dropbox</p>
        <span className="timeline-badge">2012 – 2014</span>
        <p className="timeline-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-left">
        <div className="timeline-marker">M</div>
        <div className="timeline-line" />
      </div>

      <div className="timeline-content">
        
        <h4 className="timeline-title">Art Director</h4>
        <p className="timeline-subtitle">amazon</p>
        <span className="timeline-badge">2008 – 2012</span>
        <p className="timeline-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum
          tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
      </div>
    </div>
  </div>

  <hr className="divider" />
    </section>
    <section ref={portfolioRef} className="section">Portfolio Section</section>
    <section ref={reviewsRef} className="section">Reviews Section</section>
    <section ref={recommendationsRef} className="section">Recommendations Section</section>
  </main>

  {/* SIDEBAR – 25% (RIGHT) */}
  <aside className="profile-sidebar">
    <div className="pricing-box">
    <h2 className="pricing-price">
      $29<span>/per hour</span>
    </h2>

    <ul className="pricing-list">
      <li>
        <div className="pricing-left">
          <img src={location} alt="" />
          <span>Location</span>
        </div>
        <span className="pricing-value">London, UK</span>
      </li>

      <li>
        <div className="pricing-left">
          <img src={calender} alt="" />
          <span>Member since</span>
        </div>
        <span className="pricing-value">April 2022</span>
      </li>

      <li>
        <div className="pricing-left">
          <img src={delivery} alt="" />
          <span>Last Delivery</span>
        </div>
        <span className="pricing-value">5 days</span>
      </li>

      <li>
        <div className="pricing-left">
          <img src={gender} alt="" />
          <span>Gender</span>
        </div>
        <span className="pricing-value">Male</span>
      </li>

      <li>
        <div className="pricing-left">
          <img src={languages} alt="" />
          <span>Languages</span>
        </div>
        <span className="pricing-value">English</span>
      </li>

      <li>
        <div className="pricing-left">
          <img src={level} alt="" />
          <span>English Level</span>
        </div>
        <span className="pricing-value">Fluent</span>
      </li>
    </ul>

    <button className="contact-btn">
      Contact Me ↗
    </button>
  </div>

    <div className="skills-box">
      <h3>My Skills</h3>
      <div className="skills-tags">
        <span>Figma</span>
        <span>Sketch</span>
        <span>HTML5</span>
        <span>UI/UX</span>
        <span>Prototyping</span>
      </div>
    </div>
  </aside>
</div>




    </div>
  )
}

export default FreelancerProfile