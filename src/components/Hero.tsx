import heroImage from "../assets/react.svg";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden py-28 md:py-40 app-bg-gradient"
    >
      <div className="pointer-events-none absolute inset-0 subtle-grid opacity-[0.35]" />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        <div className="relative w-56 h-56 md:w-64 md:h-64">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-white/70 to-white/30 shadow-lgx" />
          <img
            src={heroImage}
            alt="Symbolic avatar"
            className="relative w-full h-full rounded-full border border-base object-contain p-6 bg-white/70 backdrop-blur-xl shadow-mdx"
          />
        </div>
        <div className="max-w-xl">
          <p className="text-[32px] font-mono mb-6">Backend Developer</p>
          <h1 className="heading-hero mb-6">
            <div className="flex font-sans text-[24px] items-center gap-3">
              Hello there <span className="inline-block animate-wave">👋</span>
            </div>
            <span className="heading-hero-strong font-mono">Nhan Tran</span>
          </h1>
          <p className="text-soft leading-relaxed text-base md:text-lg mb-8">
            Backend developer focused on robust APIs using{" "}
            <span className="font-mono text-green-500 font-bold">
              Spring Boot
            </span>{" "}
            and Java Ecosystem, domain-driven design, and performance-aware
            services. I build predictable, testable, and maintainable systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="btn-ghost px-7 py-3 rounded-md text-sm tracking-wide font-medium border border-base shadow-smx focus-ring focus:outline-none transition relative overflow-hidden theme-switch-btn"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-primary px-7 py-3 rounded-md text-sm tracking-wide font-medium shadow-mdx focus-ring focus:outline-none transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
