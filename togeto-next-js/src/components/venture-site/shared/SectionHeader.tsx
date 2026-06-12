type SectionHeaderProps = {
  label?: string;
  title: string;
  intro?: string;
};

export function SectionHeader({ label, title, intro }: SectionHeaderProps) {
  return (
    <div className="section-header">
      {label ? <p className="section-header__label">{label}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-header__intro">{intro}</p> : null}
    </div>
  );
}
