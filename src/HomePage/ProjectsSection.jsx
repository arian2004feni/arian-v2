import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    name: "Bongo Discovery - Tourism Management System",
    image: "https://i.ibb.co.com/6RFVS26P/Screenshot-2025-08-13-095615.png",
    tags: ["React", "Node JS", "MongoDB"],
    description:
      "The Tourist Guide site is an online platform that serves as a comprehensive resource for travelers. It provides detailed information on popular destinations in Bangladesh, helping users plan their trips effectively. The site features in-depth descriptions of various tourist attractions, ensuring visitors know what to expect. Additionally, it offers insights into local culture, cuisine, and activities, enriching the travel experience. Whether you're looking for famous landmarks or hidden gems, The Tourist Guide site has everything you need to make the most of your visit to Bangladesh.",
    liveLink: "https://bongo-discovery.web.app/",
    githubLink: "https://github.com/arian2004feni/bongo-discovery-v2",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT",
      "Tanstack Query",
      "Vercel",
    ],
    challenges:
      "Integrating payment gateway and role-based routing with Firebase Auth.",
    improvements: "Add multilingual support and offline booking mode.",
  },
  {
    id: 2,
    name: "Study Hive - Online Group-Study",
    image: "https://i.ibb.co.com/zhx93LTG/study.png",
    tags: ["React", "JWT", "Framer Motion"],
    description:
      "Study Hive — An interactive online group study platform where every registered user is connected as a friend. Collaborate in real-time by creating assignments, completing tasks, and grading each other’s work. Foster a supportive learning environment with peer-to-peer feedback and shared progress tracking.",
    liveLink: "https://study-hive-arian2004.web.app/",
    githubLink: "https://github.com/arian2004feni/study-hive-client",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT",
      "Tanstack Query",
      "Vercel",
    ],
    challenges: "Handling concurrent seat booking and database optimization.",
    improvements: "Introduce AI-based travel recommendations.",
  },
  {
    id: 3,
    name: "Spaceshare - Roommate Finder Website",
    image: "https://i.ibb.co.com/0jWTmnqL/Screenshot-2025-08-13-223917.png",
    tags: ["React", "DaisyUI", "Tailwind"],
    description:
      "A platform that helps individuals find compatible roommates based on location, budget, lifestyle preferences, and interests. Users can create profiles, search for roommates, and connect via chat.",
    liveLink: "https://arian2004-sharespace.netlify.app/",
    githubLink: "https://github.com/arian2004feni/bongo-discovery-v2",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Firebase",
      "Node JS",
      "Express JS",
      "MongoDB",
      "JWT",
      "Tanstack Query",
      "Vercel",
    ],
    challenges: "Implementing animated theme toggle and optimizing animations.",
    improvements: "Add a blog section and CMS integration.",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="custom-container py-8 sm:py-16" id="projects">
      <h2 className="section-heading">My Best Projects</h2>

      <div className="space-y-6">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col md:flex-row gap-6 bg-base-200 p-4 sm:p-6 md:h-96 rounded-xl ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="rounded-lg xl:w-xl lg:w-lg md:w-80 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="md:h-full shadow-lg w-full"
              />
            </div>

            {/* Content */}
            <div className="flex-1 my-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span key={i} className="badge badge-primary badge-soft outline badge-sm sm:badge-lg">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Name */}
              <h3 className="max-[450px]:text-lg text-3xl font-bold mb-3">{project.name}</h3>

              {/* Short Description */}
              <p className="max-[450px]:text-xs mb-4 text-gray-700 dark:text-gray-300 line-clamp-3">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-3">
                {/* Details Modal Trigger */}
                <button
                  className="btn btn-primary max-sm:btn-sm"
                  onClick={() => setSelectedProject(project)}
                >
                  Details
                </button>

                {/* Live Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn max-sm:btn-sm flex items-center gap-2"
                >
                  <FaExternalLinkAlt />
                </a>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn max-sm:btn-sm flex items-center gap-2"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DaisyUI Modal */}
      {selectedProject && (
        <dialog id="project_modal" className="modal modal-open">
          <div className="modal-box max-w-4xl max-h-11/12 rounded-xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setSelectedProject(null)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="rounded-lg mb-4 max-w-11/12 "
            />

            <h3 className="font-bold text-2xl mb-4">{selectedProject.name}</h3>
            <div className="mb-2">
              <strong>Main Technologies:</strong>{" "}
              <div className="flex flex-wrap gap-2 mt-2">
                {selectedProject.techStack.map((tech, i) => (
                  <span key={i} className="badge badge-primary badge-soft">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-4">
              <strong>Description:</strong> {selectedProject.description}
            </p>

            <p className="mb-2">
              <strong>Challenges:</strong> {selectedProject.challenges}
            </p>

            <p className="mb-4">
              <strong>Improvements:</strong> {selectedProject.improvements}
            </p>

            <div className="flex gap-3">
              {/* Live Link */}
              <a
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaExternalLinkAlt /> Live
              </a>
              {/* GitHub Link */}
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-outline"
              >
                <FaGithub />
              </a>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedProject(null)}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}
