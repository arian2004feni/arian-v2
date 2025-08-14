const skillsData = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 70 },
  { name: "Tailwind CSS", img: "https://raw.githubusercontent.com/arian2004feni/arian2004feni/refs/heads/main/icons%20file/tailwindcss.svg", level: 85 },
  { name: "DaisyUI", img: "https://raw.githubusercontent.com/arian2004feni/arian2004feni/refs/heads/main/icons%20file/daisyui.svg", level: 80 },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 70 },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", level: 30 },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 70 },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75 },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 60 },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 80 },
  { name: "JWT", img: "https://jwt.io/img/pic_logo.svg", level: 60 },
  { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", level: 90 },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 80 },
];

function getProgressColor(level) {
  if (level >= 91) return "bg-success"; // green
  if (level >= 76) return "bg-info";    // blue
  if (level >= 51) return "bg-warning"; // yellow
  return "bg-error";                    // red
}

export default function SkillsSection() {
  return (
    <section className="custom-container sm:py-16 py-12" id="skills">
        <h2 class="section-heading">My Skills</h2>
      <div className="grid max-[450px]:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 max-[450px]:gap-4">
        {skillsData.map(({ name, img, level }) => (
          <div
            key={name}
            className="card bg-base-200 max-[450px]:p-3 p-4 flex flex-col items-center gap-3 max-[450px]:gap-2 shadow rounded-lg"
          >
            <img
              src={img}
              alt={name}
              className="size-12 max-[450px]:size-10"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <h3 className="font-semibold min-[450px]:text-lg">{name}</h3>

            {/* Progress bar with dynamic color */}
            <div className="w-full bg-gray-300 rounded-full h-3">
              <div
                className={`${getProgressColor(level)} h-3 rounded-full`}
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
