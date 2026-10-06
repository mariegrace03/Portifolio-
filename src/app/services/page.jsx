"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    icon: "fa-layer-group",
    title: "Software Developer",
    desc: "I specialize in web development, creating modern and responsive applications with clean, scalable code.",
  },
  {
    icon: "fa-mobile-screen-button",
    title: "Mobile Application Developer",
    desc: "I design and develop mobile applications with React Native and custom backend solutions tailored to specific requirements.",
  },
  {
    icon: "fa-pen-ruler",
    title: "UI/UX Designer",
    desc: "Passionate about creating modern, intuitive, and user-centered digital experiences that combine clean design with seamless functionality.",
  },
];

export default function Services() {
  return (
    <div>
      <Navbar />
      <section className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-emerald-600 to-emerald-800 text-transparent bg-clip-text mb-4">
              Our Services
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              What I can do for you — from full-stack web development to mobile apps and UI/UX design.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center flex flex-col items-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-600 text-3xl text-emerald-600">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                <a href="/contact" className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
