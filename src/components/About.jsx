import SectionHeader from "./SectionHeader";

const facts = [
  ["2024", "Founded"],
  ["CHÜMOUKEDIMA", "Home"],
  ["FOOTBALL", "Our passion"],
  ["EXCELLENCE", "Our standard"],
  ["RISE TOGETHER", "Motto"],
  ["UNITY • PROGRESS", "Our value"]
];

export default function About() {
  return (
    <section className="section section--white about" id="about">
      <div className="container about__grid reveal">
        <div>
          <SectionHeader eyebrow="Club identity" title="WHO WE ARE" />
          <p className="lead">Nagaland United Sports Club is a football club built around ambition, development, unity and the belief that football can create opportunities for athletes and communities across the Northeast.</p>
          <a className="text-link" href="#journey">Discover our story <span aria-hidden="true">↗</span></a>
        </div>
        <div className="facts" aria-label="Club facts">
          {facts.map(([value, label], index) => <div className="fact" key={label}><span className="fact__index">0{index + 1}</span><strong>{value}</strong><small>{label}</small></div>)}
        </div>
      </div>
    </section>
  );
}