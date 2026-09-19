import SectionHeader from "./SectionHeader";

const milestones = [["2024", "Club founded"], ["2025", "Nagaland Super League"], ["2025", "NSF Martyrs' Memorial Trophy"], ["2026", "IFL journey"]];

export default function Journey() {
  return <section className="section section--offwhite journey" id="journey"><div className="container reveal"><SectionHeader eyebrow="The road ahead" title="FROM VISION TO THE PITCH" /><div className="timeline">{milestones.map(([year, title], index) => <article className="timeline__item" key={`${year}-${title}`}><span className="timeline__dot">0{index + 1}</span><small>{year}</small><h3>{title}</h3><p>Milestone details will be confirmed with official club information.</p></article>)}</div></div></section>;
}