import SectionHeader from "./SectionHeader";
import { lastResult, nextMatch } from "../data/matches";
import nuscLogo from "../assets/images/NUSC-logo.png";

export default function MatchSection() {
  return (
    <section className="section section--navy matchday" id="matches">
      <div className="container reveal">
        <div className="matchday__heading"><SectionHeader light eyebrow="Current football" title="MATCHDAY" /><span className="matchday__tag">Static preview</span></div>
        <div className="match-card">
          <div className="match-card__top"><span>Next match</span><strong>{nextMatch.date} <i>•</i> {nextMatch.time}</strong></div>
          <div className="match-card__teams"><div><span className="team-mark"><img src={nuscLogo} alt="NUSC logo" /></span><strong>NUSC</strong><small>Home</small></div><p>VS</p><div><span className="team-mark team-mark--away">?</span><strong>{nextMatch.opponent}</strong><small>Away</small></div></div>
          <div className="match-card__details"><span>{nextMatch.competition}</span><span>{nextMatch.venue}</span></div>
          <a className="button button--red" href="#join">View match <span aria-hidden="true">↗</span></a>
        </div>
        <div className="last-result"><div><small>Last result · development placeholder</small><strong>NUSC <em>{lastResult.nuscScore} — {lastResult.opponentScore}</em> {lastResult.opponent}</strong></div><span>—</span></div>
      </div>
    </section>
  );
}