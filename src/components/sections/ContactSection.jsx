'use client';

import { useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { personalInfo } from '@/data/personal';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get In Touch"
          title="Let's Connect & Collaborate"
          subtitle="I am actively open to discussing developer internships, collaborative projects, and frontend opportunities."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-xl shadow-card relative overflow-hidden">
            {/* Violet ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Mail Icon Avatar */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white shadow-violet-glow mb-6">
                <Mail className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Have a project or opportunity in mind?
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 max-w-lg mb-8 leading-relaxed">
                Feel free to reach out directly via email or connect with me on GitHub and LinkedIn. I respond promptly!
              </p>

              {/* Direct Email Action Bar */}
              <div className="w-full max-w-lg p-2.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
                <div className="flex items-center gap-3 px-3 py-1 text-sm font-mono text-zinc-200 truncate w-full sm:w-auto">
                  <Mail className="w-4 h-4 text-violet-400 shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Copy Email Button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:bg-zinc-800 text-xs font-medium text-zinc-200 transition-colors"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  {/* Mailto Functional Button */}
                  <a
                    href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20-%20Portfolio`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-violet-subtle transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Email</span>
                  </a>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                {/* GitHub Card */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-850/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800 text-violet-400 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-white">GitHub</h4>
                      <p className="text-xs text-zinc-400 font-mono">@fatemakhatun21</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                </a>

                {/* LinkedIn Card */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-violet-500/50 hover:bg-zinc-850/90 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-zinc-800 text-violet-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                      <p className="text-xs text-zinc-400 font-mono">fatema-khatun21</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-violet-400 transition-colors" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
