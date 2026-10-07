import React from "react";

export default function App() {
  const skills = [
    "React JS",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "SQL",
    "REST API",
    "Git & GitHub",
    "Software Support",
    "IT Support",
    "Networking",
    "Troubleshooting",
  ];

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Modern, responsive and user-friendly websites and web applications using React and JavaScript.",
    },
    {
      icon: "🐍",
      title: "Python Development",
      description:
        "Python applications, automation scripts, data processing and business process automation.",
    },
    {
      icon: "🖥️",
      title: "Software Support",
      description:
        "Application support, software troubleshooting, installation, configuration and user assistance.",
    },
    {
      icon: "🛠️",
      title: "IT Support",
      description:
        "Desktop support, networking, system troubleshooting, hardware and software maintenance.",
    },
  ];

  const projects = [
    {
      number: "01",
      title: "Business Management System",
      category: "React • Python • SQL",
      description:
        "A complete business application for managing operations, users, reports and daily activities.",
    },
    {
      number: "02",
      title: "Python Automation",
      category: "Python • Automation",
      description:
        "Automation tools designed to reduce repetitive work and improve operational efficiency.",
    },
    {
      number: "03",
      title: "Support Management Portal",
      category: "React • REST API",
      description:
        "A modern support portal for managing technical issues, users and service requests.",
    },
  ];

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: Inter, Arial, Helvetica, sans-serif;
          background: #070b14;
          color: #ffffff;
          overflow-x: hidden;
        }
        a { text-decoration: none; color: inherit; }
        .app {
          min-height: 100vh;
          background:
            radial-gradient(circle at 80% 10%, rgba(73, 104, 255, 0.16), transparent 30%),
            radial-gradient(circle at 10% 50%, rgba(0, 218, 180, 0.08), transparent 25%),
            #070b14;
        }
        .container { width: min(1180px, 90%); margin: auto; }
        nav {
          position: sticky; top: 0; z-index: 100;
          background: rgba(7, 11, 20, 0.82);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .navbar { height: 78px; display: flex; align-items: center; justify-content: space-between; }
        .logo { font-size: 23px; font-weight: 900; letter-spacing: -1px; }
        .logo span { color: #6c7cff; }
        .nav-links { display: flex; gap: 30px; color: #aeb6c9; font-size: 14px; font-weight: 600; }
        .nav-links a:hover { color: white; }
        .contact-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, #6271ff, #7f51ff);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          transition: 0.3s;
        }
        .contact-btn:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(98, 113, 255, 0.3); }
        .hero { min-height: 88vh; display: flex; align-items: center; padding: 80px 0; }
        .hero-grid { width: 100%; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 70px; align-items: center; }
        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 8px 14px;
          border: 1px solid rgba(111, 125, 255, 0.35);
          background: rgba(101, 116, 255, 0.08);
          border-radius: 30px;
          color: #a8b1ff;
          font-size: 13px;
          margin-bottom: 25px;
        }
        .badge-dot { width: 8px; height: 8px; background: #65e6a8; border-radius: 50%; box-shadow: 0 0 12px #65e6a8; }
        .hero h1 { font-size: clamp(54px, 7vw, 92px); line-height: 0.95; letter-spacing: -5px; margin-bottom: 25px; }
        .hero h1 span { background: linear-gradient(90deg, #6b7cff, #b16cff); -webkit-background-clip: text; color: transparent; }
        .hero-role { font-size: clamp(19px, 2vw, 27px); color: #d5daea; font-weight: 600; line-height: 1.5; margin-bottom: 25px; }
        .hero-role span { color: #7988ff; }
        .hero-description { max-width: 670px; color: #9099ad; font-size: 17px; line-height: 1.8; margin-bottom: 35px; }
        .hero-buttons { display: flex; gap: 15px; flex-wrap: wrap; }
        .btn-primary, .btn-secondary { padding: 15px 24px; border-radius: 11px; font-weight: 700; font-size: 14px; transition: 0.3s; display: inline-block; }
        .btn-primary { background: linear-gradient(135deg, #6473ff, #8157ff); box-shadow: 0 12px 35px rgba(94, 106, 255, 0.25); }
        .btn-secondary { border: 1px solid rgba(255, 255, 255, 0.14); color: #d7dced; background: rgba(255,255,255,0.03); }
        .btn-primary:hover, .btn-secondary:hover { transform: translateY(-3px); }
        .hero-card { position: relative; min-height: 480px; display: flex; justify-content: center; align-items: center; }
        .profile-circle {
          width: 330px; height: 330px; border-radius: 50%; display: flex; align-items: center; justify-content: center; position: relative;
          background: linear-gradient(145deg, #101728, #0b101d);
          border: 1px solid rgba(119, 133, 255, 0.22);
          box-shadow: 0 0 70px rgba(92, 104, 255, 0.18), inset 0 0 40px rgba(255,255,255,0.02);
        }
        .profile-circle::before {
          content: ""; width: 360px; height: 360px; border-radius: 50%;
          border: 1px dashed rgba(113, 126, 255, 0.25);
          position: absolute; animation: rotate 25s linear infinite;
        }
        @keyframes rotate { to { transform: rotate(360deg); } }
        .initials { font-size: 100px; font-weight: 900; letter-spacing: -10px; background: linear-gradient(145deg, #ffffff, #7483ff); -webkit-background-clip: text; color: transparent; }
        .floating-card {
          position: absolute; padding: 13px 18px; border-radius: 13px;
          background: rgba(16, 22, 38, 0.88);
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(14px);
          color: #dce1ef; font-size: 13px; font-weight: 700;
          box-shadow: 0 15px 45px rgba(0,0,0,0.3);
        }
        .card-1 { top: 50px; left: 0; }
        .card-2 { right: 0; bottom: 85px; }
        section { padding: 100px 0; }
        .section-tag { color: #7988ff; font-size: 13px; letter-spacing: 3px; font-weight: 800; text-transform: uppercase; margin-bottom: 13px; }
        .section-title { font-size: clamp(36px, 4vw, 50px); letter-spacing: -2px; margin-bottom: 18px; }
        .section-subtitle { color: #8993a7; line-height: 1.8; max-width: 700px; margin-bottom: 50px; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
        .about-text { color: #9ba4b9; line-height: 1.9; font-size: 16px; }
        .about-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
        .stat-card { padding: 28px; border-radius: 18px; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); }
        .stat-card h3 { font-size: 28px; color: #7c8aff; margin-bottom: 7px; }
        .stat-card p { color: #8992a6; font-size: 13px; }
        .skills { display: flex; flex-wrap: wrap; gap: 12px; }
        .skill { padding: 12px 18px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.025); color: #c6ccda; font-size: 14px; transition: 0.3s; }
        .skill:hover { transform: translateY(-4px); border-color: #6374ff; color: white; background: rgba(99,116,255,0.08); }
        .service-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .service-card { padding: 30px; border-radius: 18px; border: 1px solid rgba(255,255,255,0.07); background: linear-gradient(145deg, rgba(255,255,255,0.035), rgba(255,255,255,0.015)); transition: 0.3s; }
        .service-card:hover { transform: translateY(-7px); border-color: rgba(110,126,255,0.45); }
        .service-icon { width: 50px; height: 50px; border-radius: 13px; display: flex; align-items: center; justify-content: center; background: rgba(105, 120, 255, 0.1); font-size: 24px; margin-bottom: 22px; }
        .service-card h3 { font-size: 19px; margin-bottom: 12px; }
        .service-card p { color: #8993a8; line-height: 1.7; font-size: 14px; }
        .projects { display: grid; gap: 18px; }
        .project-card { padding: 32px; display: grid; grid-template-columns: 90px 1fr 70px; align-items: center; gap: 20px; border: 1px solid rgba(255,255,255,0.07); border-radius: 18px; background: rgba(255,255,255,0.025); transition: 0.3s; }
        .project-card:hover { border-color: rgba(105,121,255,0.4); transform: translateX(5px); }
        .project-number { font-size: 32px; font-weight: 900; color: #3d4760; }
        .project-card h3 { font-size: 22px; margin-bottom: 8px; }
        .project-category { color: #7d8bff; font-size: 13px; font-weight: 700; margin-bottom: 10px; }
        .project-card p { color: #8f98ac; line-height: 1.7; font-size: 14px; }
        .project-arrow { width: 45px; height: 45px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); color: #8c98ff; font-size: 20px; }
        .contact-box { padding: 60px; border-radius: 25px; text-align: center; background: radial-gradient(circle at 50% 0%, rgba(104, 119, 255, 0.16), transparent 50%), rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.08); }
        .contact-box h2 { font-size: clamp(34px, 5vw, 55px); margin-bottom: 20px; letter-spacing: -2px; }
        .contact-box p { max-width: 600px; margin: 0 auto 30px; color: #929baf; line-height: 1.8; }
        footer { padding: 30px 0; border-top: 1px solid rgba(255,255,255,0.06); color: #717b90; font-size: 13px; }
        .footer-content { display: flex; justify-content: space-between; align-items: center; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .hero-grid, .about-grid { grid-template-columns: 1fr; }
          .hero-card { min-height: 420px; }
          .service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .hero { padding-top: 50px; }
          .hero h1 { letter-spacing: -3px; }
          .contact-btn { display: none; }
          .profile-circle { width: 260px; height: 260px; }
          .profile-circle::before { width: 285px; height: 285px; }
          .initials { font-size: 75px; }
          .service-grid { grid-template-columns: 1fr; }
          .about-stats { grid-template-columns: 1fr; }
          .project-card { grid-template-columns: 55px 1fr; }
          .project-arrow { display: none; }
          .contact-box { padding: 40px 20px; }
          .footer-content { flex-direction: column; gap: 10px; }
        }
      `}</style>

      <div className="app">
        <nav>
          <div className="container navbar">
            <div className="logo">MR<span>.</span></div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
            </div>
            <a href="#contact" className="contact-btn">Contact Me</a>
          </div>
        </nav>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div>
                <div className="badge"><span className="badge-dot"></span>Available for opportunities</div>
                <h1>Mohammed<br /><span>Rizan.</span></h1>
                <div className="hero-role">
                  Web Developer <span>•</span> Python Developer <span>•</span><br />
                  Software Support <span>•</span> IT Support
                </div>
                <p className="hero-description">
                  I build modern web applications, create Python solutions and provide reliable software and IT support. I enjoy transforming business requirements into simple, efficient and practical technology solutions.
                </p>
                <div className="hero-buttons">
                  <a href="#projects" className="btn-primary">View My Work →</a>
                  <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>
              </div>

              <div className="hero-card">
                <div className="floating-card card-1">⚡ Web Development</div>
                <div className="profile-circle"><div className="initials">MR</div></div>
                <div className="floating-card card-2">🐍 Python Developer</div>
              </div>
            </div>
          </section>

          <section id="about">
            <div className="container">
              <div className="about-grid">
                <div>
                  <div className="section-tag">About Me</div>
                  <h2 className="section-title">Developer, Support Specialist & Problem Solver.</h2>
                  <p className="about-text">
                    I'm Mohammed Rizan, a technology professional with experience in web development, Python development, software support and IT support.
                    <br /><br />
                    I focus on creating reliable applications, automating repetitive tasks and solving technical problems that help businesses work more efficiently.
                  </p>
                </div>

                <div className="about-stats">
                  <div className="stat-card"><h3>React</h3><p>Modern Web Development</p></div>
                  <div className="stat-card"><h3>Python</h3><p>Automation & Development</p></div>
                  <div className="stat-card"><h3>IT</h3><p>Technical Support</p></div>
                  <div className="stat-card"><h3>SQL</h3><p>Database Management</p></div>
                </div>
              </div>
            </div>
          </section>

          <section id="skills">
            <div className="container">
              <div className="section-tag">Technical Skills</div>
              <h2 className="section-title">Tools & Technologies</h2>
              <p className="section-subtitle">Technologies and tools I use for development, automation and technical support.</p>
              <div className="skills">
                {skills.map((skill) => <div className="skill" key={skill}>{skill}</div>)}
              </div>
            </div>
          </section>

          <section id="services">
            <div className="container">
              <div className="section-tag">What I Do</div>
              <h2 className="section-title">My Services</h2>
              <p className="section-subtitle">Development and technical support services focused on building reliable solutions and solving real business problems.</p>
              <div className="service-grid">
                {services.map((service) => (
                  <div className="service-card" key={service.title}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects">
            <div className="container">
              <div className="section-tag">Portfolio</div>
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-subtitle">Some examples of applications and solutions I can build.</p>
              <div className="projects">
                {projects.map((project) => (
                  <div className="project-card" key={project.number}>
                    <div className="project-number">{project.number}</div>
                    <div>
                      <h3>{project.title}</h3>
                      <div className="project-category">{project.category}</div>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-arrow">↗</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact">
            <div className="container">
              <div className="contact-box">
                <div className="section-tag">Let's Connect</div>
                <h2>Have a project or opportunity?</h2>
                <p>I'm interested in web development, Python development, software support and IT support opportunities. Feel free to contact me to discuss your requirements.</p>
                <a href="mailto:your@email.com" className="btn-primary">Get In Touch →</a>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container footer-content">
            <div>© 2026 Mohammed Rizan</div>
            <div>Web Developer • Python Developer • IT Support</div>
          </div>
        </footer>
      </div>
    </>
  );
}
