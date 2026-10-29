import { 
  GraduationCap, 
  Code, 
  Target, 
  UtensilsCrossed, 
  Compass, 
  Sparkles,
  BookOpen,
  Coffee
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passion, Engineering & Creativity"
          subtitle="A deeper look into my academic journey, software development interests, and creative hobbies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-card relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Engineering Background</h3>
                  <p className="text-xs text-zinc-400">Uttara University • Department of CSE</p>
                </div>
              </div>

              {/* Exact About Content */}
              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {personalInfo.about}
              </p>
            </div>

            {/* Quick Principles */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-violet-400 mt-0.5">
                  <Code className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean Architecture</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Writing structured, maintainable, and readable code.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-zinc-800 text-violet-400 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full-Stack Vision</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">Bridging intuitive UI design with robust backend workflows.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats & Beyond Programming */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl hover:border-violet-500/40 transition-all group"
                >
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-violet-400/90 font-mono">
                    {stat.highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Interests / Hobbies Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/50 to-obsidian-950 border border-zinc-800/80 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  Beyond Programming
                </h4>
              </div>
              <p className="text-xs text-zinc-400 mb-4">
                Creative pursuits outside engineering that inspire balance and fresh perspectives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <div className="p-2 rounded-lg bg-violet-600/20 text-violet-300">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Cooking</h5>
                    <p className="text-[11px] text-zinc-400">Culinary creativity & flavors</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
                  <div className="p-2 rounded-lg bg-indigo-600/20 text-indigo-300">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Travelling</h5>
                    <p className="text-[11px] text-zinc-400">Scenic journeys & sights</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
