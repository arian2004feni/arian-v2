import React from "react";
import me from "../assets/me.png";

const AboutSection = () => {
  return (
    <section className="custom-container md:py-16 sm:py-8 py-4" id="about">
      <h2 class="section-heading">About Me</h2>

      <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-0">
        {/* Left side - Picture */}
        <div className="">
          <div className="sm:w-sm max-[450px]:max-w-72 lg:mr-20">
            <img
              src={me}
              alt="My portrait"
              className="object-cover border-6 border-primary rounded-2xl ring-primary"
            />
          </div>
        </div>

        {/* Right side - Text content */}
        <div className="flex-1 space-y-6">
          {/* Introduction (approx 100 words) */}
          <p className="text-gray-500 dark:text-gray-500 max-[450px]:text-sm text-base sm:text-lg leading-relaxed">
            I’m a Full-Stack JavaScript Developer skilled in MERN and Next.js, passionate about creating dynamic, user-friendly web apps. I enjoy blending creative design with powerful backend logic. Outside coding, I love football, cricket, and PUBG. Curious, determined, and team-oriented, I’m always eager to learn, solve challenges, and build impactful solutions.
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside space-y-1 max-[450px]:text-sm text-base sm:text-lg text-gray-600 dark:text-gray-400">
            <li>MERN stack and Next.js enthusiast.</li>
            <li>Frontend design meets robust backend logic.</li>
            <li>Passionate about building efficient, scalable applications.</li>
            <li>Curious, determined, collaborative, and solution-oriented personality.</li>
          </ul>

          {/* Cards: Tools, Projects, Experience */}
          <div className="grid grid-cols-3 sm:grid-cols-[repeat(auto-fit,minmax(130px,1fr))] gap-3 sm:gap-6 mt-4">
            <div className="card bg-base-200 shadow-md flex-1 sm:p-6 py-6 text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="mt-2 max-[450px]:text-xs text-sm font-semibold text-gray-600 dark:text-gray-50">
                Tools
              </div>
            </div>

            <div className="card bg-base-200 shadow-md flex-1 sm:p-6 py-6 text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="mt-2 max-[450px]:text-xs text-sm font-semibold text-gray-600 dark:text-gray-50">
                Projects
              </div>
            </div>

            <div className="card bg-base-200 shadow-md flex-1 sm:p-6 py-6 text-center">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="mt-2 max-[450px]:text-xs text-sm font-semibold text-gray-600 dark:text-gray-50">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
