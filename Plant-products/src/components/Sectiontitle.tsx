export default function SectionTitle({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "text-center" : "text-left"} mb-12`}>
      <h2
        className="text-4xl sm:text-5xl font-bold text-[#edf2d0]"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-[#b8c0a0] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}