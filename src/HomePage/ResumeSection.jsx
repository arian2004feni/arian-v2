import { PiGraduationCap } from "react-icons/pi";

export default function ResumeSection() {

  return (
    <section id="resume" className="py-8 sm:py-16 text-base-content">
      <div className="custom-container max-w-6xl">
        <h2 class="section-heading">Resume</h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Education Column */}
          <div className="bg-base-200 p-6 rounded-lg flex-1">
            <h3 className="max-[450px]:text-2xl text-3xl font-semibold mb-6 flex items-center max-[450px]:gap-2 gap-4"><span><PiGraduationCap className="max-[450px]:text-4xl text-5xl bg-primary p-1 rounded-md text-[#fffff1]"/></span>Education</h3>
            <ul className="">
                <li>
                  <div className="mb-0">
                    <div className="card max-[450px]:space-y-1">
                      <h4 className="max-[450px]:text-base text-lg font-semibold">Tejgaon College, Dhaka</h4>
                      <p className="max-[450px]:text-xs text-sm text-primary">Bachelor of Science in Computer Science & Engineering</p>
                      <p className="max-[450px]:text-xs text-sm italic mb-2 text-base-content/60">
                        2022 - Present
                      </p>
                    </div>
                  </div>
                </li>
                <div className="divider m-0"/>
                <li>
                  <div className="mb-0">
                    <div className="card">
                      <h4 className="max-[450px]:text-base text-lg font-semibold">Al Jamiatul Falahia Kamil Madrasha, Feni</h4>
                      <p className="max-[450px]:text-xs text-sm text-primary">Higher Secondary Certificate (HSC)</p>
                      <p className="max-[450px]:text-xs text-sm italic mb-2 text-base-content/60">
                        2020 - 2022
                      </p>
                    </div>
                  </div>
                </li>
                <div className="divider m-0"/>
                <li>
                  <div className="mb-0">
                    <div className="card">
                      <h4 className="max-[450px]:text-base text-lg font-semibold">Al Jamiatul Falahia Kamil Madrasha, Feni</h4>
                      <p className="max-[450px]:text-xs text-sm text-primary">Secondary School Certificate (SSC)</p>
                      <p className="max-[450px]:text-xs text-sm italic mb-2 text-base-content/60">
                        2018 - 2020
                      </p>
                    </div>
                  </div>
                </li>
            </ul>
          </div>

          {/* Experience Column */}
          <div className="flex-1">
            <div className="card bg-base-200 shadow-lg p-6 rounded-lg flex items-center justify-center h-full">
              <p className="text-center max-[450px]:text-sm text-lg leading-relaxed">
                I’m currently <span className="text-primary font-semibold">seeking my first professional opportunity</span>. I’m eager to contribute my skills and grow as part of a great team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
