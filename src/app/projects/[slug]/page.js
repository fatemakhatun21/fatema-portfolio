import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  Lightbulb, 
  ImageIcon, 
  Sparkles,
  Info,
  Calendar,
  Code2
} from 'lucide-react';
import { projectsData, getProjectBySlug } from '@/data/projects';

// Statically generate routes for all 3 projects
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} - Project Case Study | Mst. Fatema Khatun`,
    description: project.description,
  };
}

export default function ProjectDetailsPage({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Find other projects for bottom navigation
  const otherProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <article className="py-12 sm:py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-violet-400 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="pb-8 border-b border-zinc-800/80">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-violet-300 bg-violet-950/70 border border-violet-800/60 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-violet-400" />
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            {project.title}
          </h1>

          <p className="mt-3 text-lg sm:text-xl text-zinc-300 font-medium">
            {project.tagline}
          </p>

          {/* Action Links Bar */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Live Website Link / Disabled state */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold shadow-violet-subtle transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Website</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 border border-zinc-800 text-sm font-medium cursor-not-allowed select-none"
                title="Verified live URL has not been provided yet"
              >
                <ExternalLink className="w-4 h-4 opacity-40" />
                <span>Live Demo (Link Pending)</span>
              </button>
            )}

            {/* GitHub Repo Link / Disabled state */}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-violet-500 text-zinc-200 hover:text-white text-sm font-medium transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            ) : (
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-zinc-400 border border-zinc-800 text-sm font-medium cursor-not-allowed select-none"
                title="Verified repository URL has not been provided yet"
              >
                <Github className="w-4 h-4 opacity-40" />
                <span>GitHub Repository (Link Pending)</span>
              </button>
            )}
          </div>
        </header>

        {/* Project Screenshot Area */}
        <section className="mt-10">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 overflow-hidden backdrop-blur-xl shadow-card">
            {/* Browser / Window Header */}
            <div className="px-4 py-3 bg-zinc-950/80 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[11px] font-mono text-zinc-400 truncate max-w-xs">
                https://projects.fatema.dev/{project.slug}
              </div>
              <div className="w-10" />
            </div>

            {/* Screenshot Display or Explicit Placeholder */}
            {project.screenshot ? (
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[260px] sm:min-h-[460px] bg-zinc-950">
                <Image
                  src={project.screenshot}
                  alt={`${project.title} high-resolution application screenshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="py-16 sm:py-24 px-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-zinc-950/40 to-zinc-900/40">
                <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-violet-400 mb-4 shadow-violet-subtle">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
                  Project Screenshot Placeholder
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 max-w-md mb-4">
                  Visual asset slot reserved for {project.title}. When ready, place your screenshot in <code className="text-violet-300 font-mono text-xs">public/projects/{project.slug}.png</code> and reference it in <code className="text-violet-300 font-mono text-xs">src/data/projects.js</code>.
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-violet-950/60 text-violet-300 border border-violet-800/60">
                  <Info className="w-3.5 h-3.5" />
                  <span>No fabricated screenshots used</span>
                </span>
              </div>
            )}
          </div>
        </section>

        {/* Project Description & Overview */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-400" />
            <span>Project Overview</span>
          </h2>
          <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl">
            <p className="text-base text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-violet-400" />
            <span>Technology Stack</span>
          </h2>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl">
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/80 border border-zinc-700/70 text-sm font-medium text-zinc-200"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-violet-400" />
            <span>Main Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl hover:border-violet-500/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>
                  {feature.isDraft && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/60 text-amber-300 border border-amber-800/60 shrink-0">
                      Draft Item
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Challenges */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Development Challenges</span>
          </h2>
          <div className="space-y-4">
            {project.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-base font-semibold text-zinc-200">
                    {ch.title}
                  </h3>
                  {ch.isDraft && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/60 text-amber-300 border border-amber-800/60 shrink-0">
                      Draft Item
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {ch.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Potential Future Improvements */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-violet-400" />
            <span>Potential Future Improvements</span>
          </h2>
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl">
            <ul className="space-y-4">
              {project.futureImprovements.map((imp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-violet-600/20 text-violet-400 mt-1 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-zinc-200">
                        {imp.title}
                      </span>
                      {imp.isDraft && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-amber-950/60 text-amber-300 border border-amber-800/60">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1 leading-relaxed">
                      {imp.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bottom Navigation to other projects */}
        <nav className="mt-16 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs text-zinc-400">Other Projects:</span>
            {otherProjects.map((op) => (
              <Link
                key={op.slug}
                href={`/projects/${op.slug}`}
                className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 hover:text-white hover:border-violet-500/50 transition-colors"
              >
                {op.title}
              </Link>
            ))}
          </div>
        </nav>

      </div>
    </article>
  );
}
