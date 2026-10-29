import SectionHeading from '@/components/ui/SectionHeading';
import SkillBadge from '@/components/ui/SkillBadge';
import { skillCategories } from '@/data/skills';
import { Layout, Server, Database, Wrench } from 'lucide-react';

const categoryIcons = {
  frontend: Layout,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Expertise"
          title="Categorized Skills & Tools"
          subtitle="A comprehensive overview of my current technical stack across frontend, backend, database systems, and development workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat) => {
            const CategoryIcon = categoryIcons[cat.id] || Layout;

            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-card hover:border-violet-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.skills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>

                {/* Footer Count Pill */}
                <div className="mt-6 pt-4 border-t border-zinc-800/70 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Category Stack</span>
                  <span className="text-violet-400 font-semibold">
                    {cat.skills.length} Technologies
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
