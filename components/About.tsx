
import Button from "./Button";

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "MUI",
  "REST APIs",
  "Responsive Design",
];

const technicalSkills = [
  {
    name: "Next.js",
    percentage: 90,
  },
  {
    name: "React",
    percentage: 90,
  },
  {
    name: "TypeScript",
    percentage: 80,
  },
  {
    name: "Tailwind CSS",
    percentage: 95,
  },
  {
    name: "UI / UX",
    percentage: 85,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left Content */}
        <div>
          {/* Label */}
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
            -- About Me
          </span>

          {/* Heading */}
          <h2
            id="about-heading"
            className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Turning ideas into
            <br />
            beautiful web experiences
          </h2>

          {/* Description */}
          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-white">
              Radwa Mohamed
            </strong>
            , a frontend developer based in Tokyo,
            passionate about building responsive,
            accessible, and beautifully designed web
            applications.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base md:text-lg md:leading-8">
            I enjoy transforming ideas into seamless
            digital experiences using modern frontend
            technologies with performance,
            scalability, and usability in mind.
            Currently open to new opportunities.
          </p>

          {/* Skill Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CV Button */}
          <div className="mt-8">
            <Button
              href="/Radwa-Mohamed-CV.pdf"
              variant="secondary"
              ariaLabel="Download Radwa Mohamed CV"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Technical Skills */}
    
<div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
  <div className="mb-8">
    <h3 className="text-2xl font-semibold text-white">
      Technical Skills
    </h3>

    <p className="mt-2 text-gray-400">
      Technologies and tools I use to
      craft modern frontend experiences.
    </p>
  </div>

  <div className="space-y-7">
    {technicalSkills.map((skill) => (
      <div key={skill.name}>
        {/* Top row */}
        <div className="mb-3 flex items-center justify-between">
          <span className="font-medium text-white">
            {skill.name}
          </span>

          <span className="text-sm text-gray-400">
            {skill.percentage}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-emerald-400 transition-all duration-700"
            style={{
              width: `${skill.percentage}%`,
            }}
          />
        </div>
      </div>
    ))}
  </div>
</div>


      </div>
    </section>
  );
}

