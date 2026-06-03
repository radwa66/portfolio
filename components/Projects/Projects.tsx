
import ProjectCard from "./ProjectsCard";

const projects = [
  {
    title: "Masari landing page",
    description:
      "AI-powered expense tracking platform focused on financial insights and automation.",

    image: "/images/masari.png",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Firebase",
      "Gemini API",
    ],

    liveUrl:
      "https://masari.salahslab.com",
  },

  {
    title: "Quiz App",
    description:
      "Interactive quiz application with real-time scoring and detailed results.",

    image: "/images/quiz.png",

    technologies: [
      "JavaScript",
      "Html",
      "CSS",
    ],

    githubUrl:
      "https://github.com/radwa66/Quiz",

    liveUrl:
      "https://quizz333.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <span className="mb-4 block text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
          -- Selected Work
        </span>

        <h2
          id="projects-heading"
          className="text-4xl font-bold text-white md:text-5xl"
        >
          Things I&apos;ve Built
        </h2>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

