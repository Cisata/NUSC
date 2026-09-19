export default function SectionHeader({ eyebrow, title, light = false, children }) {
  return (
    <div className={`section-header ${light ? "section-header--light" : ""}`}>
      <p className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</p>
      <h2>{title}</h2>
      {children}
    </div>
  );
}