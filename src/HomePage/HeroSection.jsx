import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import hero from "../assets/hero.png"; // Update the path to your hero image
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <header className="custom-container md:py-0" id="home">
      <div className="flex flex-col-reverse md:flex-row md:h-screen min-h-[700px] md:max-h-[750px] h-full items-center justify-center max-md:pt-28 max-md:pb-12 max-md:gap-12">
        {/* Left Section */}
        <div className="flex-1 lg:flex-1/3 md:flex-1/6 text-center md:text-left">
          <h3 className="lg:text-xl text-base-100/20 invert tracking-tighter mb-1">
            Hello world. this is<span className="animate-ping">_</span>
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-2">
            Asraful Hoque <br />
            Arian
          </h1>
          <p className="sm:text-xl text-secondary mb-6 font-black">
            MERN Stack Developer
          </p>
          <p className="max-w-xl text-base-content mb-6 max-[450px]:text-xs">
            I am a Full-Stack JavaScript Developer specializing in the MERN
            stack and Next.js, skilled in building responsive, clean, dynamic,
            and secure web applications from frontend to backend with modern
            tools and deployment platforms.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-4">
            {/* <a href="#work" className="btn btn-primary max-[450px]:btn-sm">
              
            </a> */}
            <Link
              activeClass="text-primary"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="btn btn-primary max-[450px]:btn-sm"
            >
              My Work
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn btn-outline btn-secondary max-[450px]:btn-sm"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center md:justify-start pt-4 text-2xl">
            <a
              href="https://github.com/arian2004feni"
              target="_blank"
              className="hover:text-accent"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/arian2004feni"
              target="_blank"
              className="hover:text-accent"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/arian2004feni"
              target="_blank"
              className="hover:text-accent"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com/arian2004feni"
              target="_blank"
              className="hover:text-accent"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end lg:mr-6 md:mt-0">
          <img src={hero} alt="Arian" className="w-s object-cover" />
        </div>
      </div>
    </header>
  );
}
