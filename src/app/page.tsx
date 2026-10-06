import Navbar from "./components/Navbar";
import ProgressAnimator from "./components/ProgressAnimator";
import Footer from "./components/Footer";

const stacks = [
  {
    icon: "fa-code",
    title: "Frontend Engineering",
    summary:
      "React.js, Next.js, TypeScript, JavaScript, HTML, and CSS for responsive, accessible user interfaces.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Mobile Development",
    summary:
      "Cross-platform mobile applications with React Native, focused on usability and performance.",
  },
  {
    icon: "fa-server",
    title: "Backend Development",
    summary:
      "Node.js, Express.js, Django, and Python for RESTful APIs, business logic, and scalable backend services.",
  },
  {
    icon: "fa-database",
    title: "Data & Storage",
    summary:
      "MongoDB, PostgreSQL, and Supabase for structured data management, authentication, and app scalability.",
  },
  {
    icon: "fa-screwdriver-wrench",
    title: "Tools & Collaboration",
    summary:
      "Git, GitHub, Figma, Adobe Express, Canva, and Agile workflows for collaborative software delivery.",
  },
];

const services = [
  {
    icon: "fa-layer-group",
    title: "Software Developer",
    summary:
      "I specialize in web development, creating modern and responsive applications with clean, scalable code.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Mobile Application Developer",
    summary:
      "I design and develop mobile applications with React Native and custom backend solutions tailored to specific requirements.",
  },
  {
    icon: "fa-pen-ruler",
    title: "UI/UX Designer",
    summary:
      "Passionate about creating modern, intuitive, and user-centered digital experiences that combine clean design with seamless functionality.",
  },
];

const projects = [
  {
    title: "ECOTRACK Waste Collection Management System",
    description:
      "Full-stack web and mobile waste collection platform with scheduling, real-time tracking, and service request workflows. Web and mobile apps connected.",
    stack: ["Next.js", "TypeScript", "React Native", "REST APIs"],
    link: "https://waste-collection-management-system.vercel.app/",
  },
  {
    title: "Event Konnect",
    description:
      "Event platform that connects vendors and clients, where the client is an event planner who books vendors for events.",
    stack: ["React", "Node.js", "Vendor Booking", "Event Planner"],
  },
  {
    title: "Enjoy Rwanda",
    description:
      "Tourism platform where visitors can book shops and restaurants, reserve tables, and pay online.",
    stack: ["Next.js", "Node.js", "Online Payments", "Table Reservation"],
  },
  {
    title: "Banking Mobile App",
    description:
      "Mobile banking application where users can send money to the bank, withdraw funds, and chat with bank support — built as a cross-platform mobile app.",
    stack: ["React Native", "Expo", "Mobile UI", "Chat Support"],
  },
];

const timeline = [
  {
    period: "Aug 2026 - Sep 2026",
    role: "Data Entry Specialist (Part-time, Remote)",
    place: "AZUL Tech",
    points: [
      "Worked remotely on a part-time basis handling data entry tasks.",
      "Entered, updated, and verified records with accuracy and attention to detail.",
      "Maintained organized and consistent data for the team.",
    ],
  },
  {
    period: "Jul 2026 - Sep 2026",
    role: "Software Engineer Intern",
    place: "Rwanda ICT Chamber",
    points: [
      "Worked as a Software Engineer Intern contributing to software projects.",
      "Developed and maintained features across frontend and backend.",
      "Collaborated with the team using Git and GitHub.",
    ],
  },
  {
    period: "Apr 2026 - Jun 2026",
    role: "Software Developer Intern",
    place: "RG Consult",
    points: [
      "Worked as a Full-Stack Developer on the Enjoy Rwanda platform.",
      "Improved business listing features and user interaction system.",
      "Contributed to both frontend and backend development.",
      "Collaborated using Git and GitHub for version control.",
    ],
  },
  {
    period: "Nov 2025 - Apr 2026",
    role: "Full-Stack Developer",
    place: "kLab Academy",
    points: [
      "Built Event Konnect, a full-stack event management system.",
      "Developed event creation, registration, and user interaction features.",
      "Worked in an Agile team environment using modern workflows.",
      "Integrated APIs and databases for dynamic functionality.",
    ],
  },
  {
    period: "Sep 2025 - Mar 2026",
    role: "Frontend Development Trainee",
    place: "SheCanCode Bootcamp, Kigali",
    points: [
      "Learned HTML, CSS, JavaScript, React, TypeScript, and Next.js.",
      "Built responsive UI components and frontend applications.",
      "Developed Greenex Waste Management System (Frontend).",
      "Applied UI/UX best practices in real-world projects.",
    ],
  },
  {
    period: "2022 - 2026",
    role: "Information Technology Student",
    place: "University of Rwanda, College of Science and Technology",
    points: [
      "Studied Information Technology at University of Rwanda, College of Science and Technology (2022 - 2026).",
      "Learned networking and software development through academic and practical projects.",
      "Developed web and mobile apps using React, Next.js, React Native, Django, and TypeScript.",
      "Built RESTful APIs using Node.js and Express.js.",
      "Managed MongoDB and PostgreSQL databases.",
      "Implemented authentication systems using Supabase.",
      "Worked collaboratively using Git and GitHub.",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <ProgressAnimator />

      <main className="overflow-hidden">
        <section id="home" className="hero-shell px-4 pt-28 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-28">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Full Stack Developer
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[1.02] tracking-tight text-slate-900">
                Marie Grace Niyigena
              </h1>

              <p className="mx-auto lg:mx-0 max-w-2xl text-lg sm:text-xl text-slate-700 leading-relaxed">
                Full-Stack and Mobile Developer building modern web and mobile applications with React, Next.js,
                React Native, Node.js, Django, and TypeScript. I focus on scalable systems, clear user experience,
                and practical solutions that connect frontend, backend, and data.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#projects"
                  className="rounded-xl bg-slate-900 px-7 py-3 text-white font-semibold hover:-translate-y-1 transition"
                >
                  Explore Projects
                </a>
              </div>

              <div className="flex items-center gap-5 justify-center lg:justify-start pt-2 text-2xl text-slate-700">
                <a href="https://github.com/graceniyigena34" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
                  <i className="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/marie-grace-niyigena-14000a285" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition">
                  <i className="fa-brands fa-linkedin" />
                </a>
                <a href="mailto:graceniyigena34@gmail.com" className="hover:text-emerald-600 transition">
                  <i className="fa-solid fa-envelope" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md flex justify-center">
              <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle_at_top,_#34d399_0,_transparent_60%)] opacity-80 blur-xl" />
              <div className="relative rounded-full border border-white/70 bg-white/80 p-4 shadow-2xl backdrop-blur">
                <img
                  src="/profile.jpg"
                  alt="Marie Grace Niyigena"
                  className="h-[360px] w-[360px] rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="flex-1 space-y-6">
                <p className="text-sm font-semibold uppercase tracking-widest text-green-600">Let Me Introduce Myself</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">About Me</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I am passionate about creating innovative web projects and mobile applications that combine
                  creativity with technology. As an Information Technology student at the University of Rwanda,
                  I thrive at the intersection of design and engineering, where problem-solving meets
                  user-centered development.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With a strong foundation in software engineering, I focus on building intuitive, efficient,
                  and immersive user interfaces and mobile solutions that seamlessly blend form and function.
                  I enjoy transforming ideas into practical digital products through clean code, thoughtful
                  design, and continuous learning. Driven by curiosity and a desire to make a positive impact,
                  I actively seek opportunities to challenge myself, explore new technologies, and push beyond
                  conventional boundaries. I am committed to growing as a developer while contributing
                  meaningful solutions that improve user experiences and address real-world needs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="/Grace%20cv.pdf"
                    download="Marie_Grace_CV.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium"
                  >
                    <i className="fas fa-download"></i> Download CV
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="/figma.jpg"
                      alt="Marie Grace Niyigena"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-green-600 text-white shadow-xl flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-bold leading-none">15+</span>
                    <span className="text-[11px] leading-tight mt-1">Projects<br />Complete</span>
                  </div>

                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white text-gray-900 shadow-xl flex flex-col items-center justify-center text-center border border-gray-100">
                    <span className="text-xl font-bold leading-none text-green-600">4+</span>
                    <span className="text-[11px] leading-tight mt-1">Years of<br />Experience</span>
                  </div>

                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-emerald-700 text-white shadow-xl flex flex-col items-center justify-center text-center">
                    <span className="text-xl font-bold leading-none">45+</span>
                    <span className="text-[11px] leading-tight mt-1">Happy<br />Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker section-kicker-dark">Core Expertise</p>
            <h2 className="section-title section-title-dark max-w-3xl">End-to-end full stack capabilities</h2>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {stacks.map((stack) => (
                <article key={stack.title} className="rounded-2xl border border-white/15 bg-white/5 p-6 hover:bg-white/10 transition">
                  <div className="mb-4 text-2xl text-emerald-300">
                    <i className={`fas ${stack.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold">{stack.title}</h3>
                  <p className="mt-2 text-slate-200 leading-relaxed">{stack.summary}</p>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="/skills"
                className="inline-block rounded-xl border border-white/30 px-7 py-3 font-semibold text-white hover:bg-white/10 transition"
              >
                View All Skills
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <p className="section-kicker section-kicker-dark">What I Will Do For You</p>
            <h2 className="section-title section-title-dark">Our Services</h2>

            <div className="mt-10 grid lg:grid-cols-3 gap-6 text-left">
              {services.map((service) => (
                <article key={service.title} className="rounded-2xl border border-white/15 bg-white/5 p-8 text-center hover:bg-white/10 transition flex flex-col items-center">
                  <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-400 text-3xl text-emerald-300">
                    <i className={`fas ${service.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-slate-200 leading-relaxed">{service.summary}</p>
                </article>
              ))}
            </div>

            <div className="mt-10">
              <a
                href="/services"
                className="inline-block rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker">Projects</p>
            <h2 className="section-title">Selected Work</h2>

            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition">
                  <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-slate-700 leading-relaxed">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition">
                      Live Demo →
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8 bg-[#f3f7f4]">
          <div className="max-w-7xl mx-auto">
            <p className="section-kicker">Experience</p>
            <h2 className="section-title">Career Timeline</h2>

            <div className="mt-10 space-y-6">
              {timeline.map((item) => (
                <article key={item.role} className="rounded-2xl border border-slate-200 bg-white p-6 lg:p-8 shadow-sm">
                  <p className="text-sm font-semibold text-emerald-700">{item.period}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900">{item.role}</h3>
                  <p className="text-slate-600 font-medium">{item.place}</p>
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto rounded-[2rem] bg-slate-900 px-6 py-14 sm:px-10 text-center text-white">
            <p className="section-kicker section-kicker-dark">Let&apos;s Build Together</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Need a full stack developer for your next product?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-200 text-lg">
              I am available for internships, freelance projects, and full-time opportunities where modern frontend,
              backend APIs, and scalable databases come together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:graceniyigena34@gmail.com" className="rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-900 hover:bg-emerald-400 transition">
                Email Me
              </a>
              <a href="/contact" className="rounded-xl border border-white/30 px-7 py-3 font-semibold hover:bg-white/10 transition">
                Contact Form
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
