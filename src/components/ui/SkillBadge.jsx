import {
  Code2,
  Palette,
  FileCode,
  Layers,
  Globe,
  Sparkles,
  Server,
  Cpu,
  Database,
  GitBranch,
  Github,
  Terminal,
  CheckCircle2,
} from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Palette: Palette,
  FileCode: FileCode,
  Layers: Layers,
  Globe: Globe,
  Sparkles: Sparkles,
  Server: Server,
  Cpu: Cpu,
  Database: Database,
  GitBranch: GitBranch,
  Github: Github,
  Terminal: Terminal,
};

export default function SkillBadge({ skill }) {
  const IconComponent = iconMap[skill.icon] || Code2;

  return (
    <div className="group relative flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-violet-500/50 hover:bg-zinc-850/80 transition-all duration-300 shadow-sm hover:shadow-violet-subtle">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-zinc-800/90 flex items-center justify-center text-violet-400 group-hover:bg-violet-600/20 group-hover:text-violet-300 group-hover:scale-105 transition-all">
          <IconComponent className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
            {skill.name}
          </h4>
          <span className="text-xs text-zinc-400">{skill.category}</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-[11px] font-medium text-violet-300">
        <CheckCircle2 className="w-3 h-3 text-violet-400" />
        <span>{skill.level}</span>
      </div>
    </div>
  );
}
