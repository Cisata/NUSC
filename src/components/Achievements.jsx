import SectionHeader from "./SectionHeader";
import achievements from "../data/achievements";

export default function Achievements() {
  return (
    <section className="section section--offwhite achievements" id="achievements">
      <div className="container reveal">
        <SectionHeader eyebrow="Milestones" title="OUR ACHIEVEMENTS" />
        <div className="achievement-list">
          {achievements.map((item, index) => <article className="achievement" key={`${item.year}-${index}`}><span className="achievement__number">0{index + 1}</span><strong>{item.year}</strong><div><small>{item.competition}</small><h3>{item.achievement}</h3><p>{item.details}</p></div><span className="achievement__arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </div>
    </section>
  );
}