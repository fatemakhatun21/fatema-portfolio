import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Mst. Fatema Khatun | Frontend Developer | Full-Stack Development Enthusiast',
  description:
    'Portfolio of Mst. Fatema Khatun, Computer Science and Engineering student at Uttara University and Frontend Developer passionate about building modern web experiences with React, Next.js, and Tailwind CSS.',
  keywords: [
    'Mst. Fatema Khatun',
    'Fatema Khatun',
    'Frontend Developer',
    'Full-Stack Developer',
    'Uttara University',
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript Developer Portfolio',
  ],
  authors: [{ name: 'Mst. Fatema Khatun' }],
  creator: 'Mst. Fatema Khatun',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mst. Fatema Khatun | Frontend Developer Portfolio',
    description:
      'Frontend Developer & Full-Stack Development Enthusiast. B.Sc. CSE Student at Uttara University, Bangladesh.',
    siteName: 'Mst. Fatema Khatun Portfolio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-obsidian-950 text-zinc-100 min-h-screen flex flex-col relative antialiased selection:bg-violet-600/30">
        {/* Background ambient lighting */}
        <div className="ambient-glow w-[500px] h-[500px] bg-violet-600 top-[-100px] left-1/2 -translate-x-1/2" />
        <div className="ambient-glow w-[400px] h-[400px] bg-indigo-600 top-[600px] right-[-100px]" />
        <div className="ambient-glow w-[450px] h-[450px] bg-purple-700 top-[1600px] left-[-150px]" />

        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
