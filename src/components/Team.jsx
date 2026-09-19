import SectionHeader from "./SectionHeader";
import PlayerCard from "./PlayerCard";
import team from "../data/team";

export default function Team() {
  return <section className="section section--white team" id="team"><div className="container reveal"><div className="section-row"><SectionHeader eyebrow="The squad" title="FEATURED PLAYERS" /><a className="text-link" href="/team">Meet the team <span aria-hidden="true">↗</span></a></div><div className="player-grid">{team.map((player) => <PlayerCard key={player.number} {...player} />)}</div></div></section>;
}