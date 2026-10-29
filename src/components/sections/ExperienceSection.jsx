import SectionHeading from '@/components/ui/SectionHeading';
import { showExperience, experienceData } from '@/data/experience';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  // If showExperience is disabled, this section remains hidden
  if (!showExperience) {
    return null;
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Career Journey"
          title="Professional Experience"
          subtitle="My industry experience, roles, and technical contributions."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-card"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-sm text-violet-400 font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 mt-4 leading-relaxed">
                {exp.description}
              </p>

              {exp.technologies && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800 text-zinc-300 border border-zinc-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
