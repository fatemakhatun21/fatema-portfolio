'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, 
  X, 
  FileText, 
  Download, 
  ExternalLink, 
  ChevronDown,
  Sparkles 
} from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeDropdown, setResumeDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Education', href: '/#education' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-card py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-violet-subtle group-hover:scale-105 transition-transform">
              F
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-white group-hover:text-violet-300 transition-colors">
                {personalInfo.shortName}
                <span className="text-violet-400">.dev</span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-wider uppercase font-mono hidden sm:inline">
                Portfolio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/70 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-full transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTAs (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Resume Dropdown / Dual Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setResumeDropdown(!resumeDropdown)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 hover:bg-violet-600/30 hover:border-violet-500/50 transition-all shadow-violet-subtle focus:outline-none"
                aria-expanded={resumeDropdown}
              >
                <FileText className="w-4 h-4 text-violet-400" />
                <span>Resume</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resumeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {resumeDropdown && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-xl bg-zinc-900 border border-zinc-800 shadow-xl py-1.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2"
                  onMouseLeave={() => setResumeDropdown(false)}
                >
                  <a
                    href={personalInfo.resume.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-zinc-200 hover:text-white hover:bg-violet-600/20 transition-colors"
                    onClick={() => setResumeDropdown(false)}
                  >
                    <ExternalLink className="w-4 h-4 text-violet-400" />
                    <span>View Resume</span>
                  </a>
                  <a
                    href={personalInfo.resume.downloadUrl}
                    download={personalInfo.resume.downloadFilename}
                    className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-zinc-200 hover:text-white hover:bg-violet-600/20 transition-colors"
                    onClick={() => setResumeDropdown(false)}
                  >
                    <Download className="w-4 h-4 text-violet-400" />
                    <span>Download PDF</span>
                  </a>
                </div>
              )}
            </div>

            {/* Quick Contact CTA */}
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 shadow-violet-subtle hover:shadow-violet-glow transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={personalInfo.resume.viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-violet-600/20 text-violet-300 border border-violet-500/30 text-xs flex items-center gap-1.5"
              aria-label="View Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-5 h-5 text-violet-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-obsidian-950/95 border-b border-zinc-800/80 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 rounded-xl transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-zinc-800/80 flex flex-col gap-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={personalInfo.resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4 text-violet-400" />
                  <span>View PDF</span>
                </a>
                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.downloadFilename}
                  className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/30 text-sm font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </a>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium text-sm shadow-violet-subtle"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
