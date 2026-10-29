'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  FileText, 
  Download, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  MapPin,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-700/60 text-xs font-medium text-violet-300 shadow-violet-subtle mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-white via-zinc-100 to-violet-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            {/* Exact Designation */}
            <div className="mt-3.5 inline-block">
              <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
                {personalInfo.designation}
              </p>
            </div>

            {/* Concise Bio / Academic Hook */}
            <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              Computer Science & Engineering student at{' '}
              <span className="text-white font-medium">Uttara University, Bangladesh</span>. 
              Dedicated to designing fast, responsive user interfaces and turning ideas into clean, functional full-stack applications.
            </p>

            {/* Key Meta Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>B.Sc. CSE (2nd Year)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm shadow-violet-glow hover:from-violet-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Dual Actions */}
              <div className="w-full sm:w-auto flex items-center gap-2">
                <a
                  href={personalInfo.resume.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-zinc-900/90 text-zinc-200 border border-zinc-700/80 hover:text-white hover:border-violet-500/60 hover:bg-zinc-850 font-medium text-sm transition-all"
                  title="View Resume in Browser"
                >
                  <FileText className="w-4 h-4 text-violet-400" />
                  <span>View Resume</span>
                </a>

                <a
                  href={personalInfo.resume.downloadUrl}
                  download={personalInfo.resume.downloadFilename}
                  className="inline-flex items-center justify-center p-3.5 rounded-xl bg-violet-600/20 text-violet-300 border border-violet-500/40 hover:bg-violet-600/30 hover:border-violet-500/70 font-medium text-sm transition-all shadow-violet-subtle"
                  title="Download Resume PDF"
                  aria-label="Download Resume PDF"
                >
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-3 pt-6 border-t border-zinc-800/80 w-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mr-2">
                Profiles:
              </span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/30 transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[420px]">
              {/* Violet Ambient Aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/40 via-purple-600/30 to-indigo-600/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

              {/* Glass Frame Container */}
              <div className="relative w-full h-full rounded-3xl p-2.5 bg-gradient-to-b from-zinc-800/80 via-zinc-900/90 to-obsidian-950 border border-zinc-700/60 shadow-2xl overflow-hidden group">
                
                {/* Photo with Face Preservation (`object-cover object-top`) */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-950">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Tech Tag Badge */}
                <div className="absolute bottom-5 left-5 right-5 p-3 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-700/70 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                    <div>
                      <p className="text-xs font-semibold text-white">Full-Stack Passion</p>
                      <p className="text-[10px] text-zinc-400">Next.js • React • Tailwind</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-950/80 text-violet-300 border border-violet-800/60">
                    2025–Present
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
