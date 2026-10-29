import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight, FolderGit2, AlertCircle } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-violet-500/40 p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 shadow-card hover:shadow-violet-subtle hover:-translate-y-1">
      <div>
        {/* Project Screenshot Banner */}
        {project.screenshot && (
          <Link
            href={`/projects/${project.slug}`}
            className="relative block w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-zinc-950 border border-zinc-800/80 group-hover:border-violet-500/50 transition-colors shadow-md"
            aria-label={`View ${project.title} case study`}
          >
            <Image
              src={project.screenshot}
              alt={`${project.title} preview screenshot`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />
          </Link>
        )}

        {/* Header: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 bg-violet-950/60 border border-violet-800/50 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2">
          <Link href={`/projects/${project.slug}`} className="hover:underline focus:outline-none">
            {project.title}
          </Link>
        </h3>

        {/* Tagline / Hook */}
        <p className="text-sm font-medium text-zinc-300 mb-3">
          {project.tagline}
        </p>

        {/* Description */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-5 border-t border-zinc-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Primary Case Study Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 hover:border-violet-500/60 transition-all group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>

        {/* External Links / Disabled Placeholders */}
        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-800/80 text-zinc-200 border border-zinc-700 hover:text-white hover:border-violet-500/50 transition-colors"
              title="Live Website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          ) : (
            <button
              disabled
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-800/30 text-zinc-400 border border-zinc-800/60 cursor-not-allowed select-none"
              title="Verified live URL has not been provided yet"
            >
              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              <span>Demo Pending</span>
            </button>
          )}

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-800/80 text-zinc-200 border border-zinc-700 hover:text-white hover:border-violet-500/50 transition-colors"
              title="GitHub Repository"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          ) : (
            <button
              disabled
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-xl bg-zinc-800/30 text-zinc-400 border border-zinc-800/60 cursor-not-allowed select-none"
              title="Verified repository URL has not been provided yet"
            >
              <Github className="w-3.5 h-3.5 opacity-50" />
              <span>Repo Pending</span>
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
