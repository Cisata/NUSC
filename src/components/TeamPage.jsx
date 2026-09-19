import Navbar from "./Navbar";
import PlayerCard from "./PlayerCard";
import players from "../data/players";
import coaches from "../data/coaches";
import Footer from "./Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="team-page">
        <section className="team-page__hero" aria-labelledby="team-page-title">
          <div className="container reveal">
            <a className="team-page__back" href="/#team">← Back to home</a>
            <p className="eyebrow eyebrow--light"><span className="eyebrow-mark" /> The squad</p>
            <h1 id="team-page-title">MEET THE<br /><em>TEAM</em></h1>
            <p>Discover the players representing NUSC. Official player profiles will be added as verified club information becomes available.</p>
          </div>
        </section>
        <section className="section section--white team-page__roster" aria-labelledby="roster-title">
          <div className="container reveal">
            <div className="section-row">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark" /> Full roster</p>
                <h2 id="roster-title">THE PLAYERS</h2>
              </div>
              <span className="team-page__count">{players.length} players profiles</span>
            </div>
            <div className="player-grid">{players.map((player) => <PlayerCard key={player.number} {...player} />)}</div>
          </div>
        </section>
        <section className="section section--white team-page__roster" aria-labelledby="coaches-title">
          <div className="container reveal">
            <div className="section-row">
              <div>
                <p className="eyebrow"><span className="eyebrow-mark" /> Coaching staff</p>
                <h2 id="coaches-title">THE COACHES</h2>
              </div>
              <span className="team-page__count">{coaches.length} staff profiles</span>
            </div>
            <div className="player-grid">{coaches.map((coach) => <PlayerCard key={coach.name} {...coach} />)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}