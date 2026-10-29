export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
}) {
  const alignmentClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center';

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 sm:mb-16`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-violet-950/60 text-violet-300 border border-violet-800/60 mb-3 shadow-violet-subtle">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
