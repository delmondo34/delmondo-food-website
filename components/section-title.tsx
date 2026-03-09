type Props = {
  kicker?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ kicker, title, description }: Props) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-steel">{description}</p> : null}
    </div>
  );
}
