import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/ui/ProjectCard';
import { projectsData } from '@/data/projects';
import { Sparkles, Info } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Work"
          title="Projects & Case Studies"
          subtitle="Explore the applications I am actively building, featuring responsive frontend design, modern JavaScript architectures, and clean component structures."
        />

        {/* Informational Callout */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-violet-950/40 border border-violet-800/40 flex items-start gap-3 text-xs text-zinc-300">
          <Info className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
          <p className="leading-relaxed">
            Click on <strong className="text-white">View Details</strong> on any project to read its dedicated case study page, including current technology stacks, main feature sets, development challenges, and planned future improvements.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
