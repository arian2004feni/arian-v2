import { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logoo.png";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_96y6nss", // from EmailJS
        "template_z4m27hd", // from EmailJS
        formData,
        "EOwI_17BRKqyNi8Jw" // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setLoading(false);
          // Reset form data
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <footer className="bg-base-200 py-10" id="contact">
      <div className="custom-container grid md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10 max-[450px]:size-8" />
            <span className="max-[450px]:text-2xl text-3xl font-bold">Arian</span>
          </div>
          <p className="mb-2 max-[450px]:text-sm">
            Thanks for visiting! This portfolio showcases my work, passion, and
            growth. Let’s stay connected and create something incredible
            together. I’m currently seeking my first professional opportunity.
            I’m eager to contribute my skills and grow as part of a great team.
          </p>
          <p className="mb-4 max-[450px]:mb-1 text-xl max-[450px]:text-base">
            Email:{" "}
            <a href="mailto:arian2004feni@gmail.com" className="link text-primary">
              arian2004feni@gmail.com
            </a>
          </p>
          <p className="mb-4 text-xl max-[450px]:text-base">
            Phone:{" "}
            <a href="tel:+8801638666280" className="link text-primary">
              +8801638666280
            </a>
          </p>
          <div className="flex gap-4 justify-center md:justify-start pt-4 text-2xl">
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

        {/* Right Side (Contact Form) */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Me</h2>
          <form onSubmit={sendEmail} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            />
            <button type="submit" className="btn btn-primary w-full">
              {loading && <span className="loading loading-spinner loading-sm"></span>}
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
