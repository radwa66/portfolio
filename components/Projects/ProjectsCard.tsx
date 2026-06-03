
import Image from "next/image";
import Link from "next/link";
import {  ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-500 hover:scale-[1.02] hover:border-emerald-400/20"
      aria-label={title}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={image}
          alt={`${title} project preview`}
          width={800}
          height={500}
          className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay Icons */}
        <div className="absolute right-4 top-4 flex gap-3">
           {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub repository`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:border-emerald-400 hover:text-emerald-400"
          >
            <FaGithub size={18} />
          </Link>) }

          <Link
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live website`}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:border-emerald-400 hover:text-emerald-400"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-700 px-4 py-2 text-sm text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
