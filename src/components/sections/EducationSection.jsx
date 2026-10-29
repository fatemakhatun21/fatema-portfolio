import SectionHeading from '@/components/ui/SectionHeading';
import { educationData } from '@/data/education';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, BookMarked } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education & Foundations"
          subtitle="My formal academic training in Computer Science and Engineering at Uttara University, shaping my software engineering fundamentals."
        />

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative p-7 sm:p-9 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-card hover:border-violet-500/40 transition-all duration-300 group overflow-hidden"
            >
              {/* Violet background accent */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-violet-600/10 via-purple-600/5 to-transparent rounded-full blur-2xl -z-0" />

              <div className="relative z-10">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center shadow-violet-subtle group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-medium text-violet-400 mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-950/70 text-violet-300 border border-violet-800/60 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{edu.status}</span>
                    </span>
                  </div>
                </div>

                {/* Location & Context */}
                <div className="mt-6 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <MapPin className="w-4 h-4 text-violet-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Academic Focus Items */}
                <div className="mt-6 pt-6 border-t border-zinc-800/80">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                    <BookMarked className="w-4 h-4 text-violet-400" />
                    <span>Key Academic Areas & Focus</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {edu.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
