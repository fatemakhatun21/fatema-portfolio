import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800/80 bg-obsidian-950/90 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm">
                F
              </div>
              <span className="font-semibold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              {personalInfo.designation}
            </p>
            <p className="text-xs text-zinc-400 max-w-sm">
              Computer Science and Engineering undergraduate at Uttara University, Bangladesh. Passionate about crafting responsive, accessible, and high-performance digital products.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#about" className="hover:text-violet-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-violet-400 transition-colors">
                  Categorized Skills
                </Link>
              </li>
              <li>
                <Link href="/#education" className="hover:text-violet-400 transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-violet-400 transition-colors">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-violet-400 transition-colors">
                  Contact Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect / Socials */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
              Connect
            </h4>
            <div className="space-y-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/50">
                  <Github className="w-4 h-4 text-violet-400" />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/50">
                  <Linkedin className="w-4 h-4 text-violet-400" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-sm hover:text-white transition-colors group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-violet-500/50">
                  <Mail className="w-4 h-4 text-violet-400" />
                </div>
                <span className="truncate">{personalInfo.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Built with Next.js & Tailwind CSS
            </span>
            <a
              href="#"
              aria-label="Back to top"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-violet-500/40 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
