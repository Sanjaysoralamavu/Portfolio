export default function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-[#173138] sm:text-4xl">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 text-base leading-7 text-[#52656a]">{copy}</p>
      )}
    </div>
  );
}
