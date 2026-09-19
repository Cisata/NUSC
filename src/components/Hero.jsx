export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__image" role="img" aria-label="Football players on a pitch" />
      <div className="hero__overlay" />
      <div className="hero__content container reveal">
        <p className="hero__kicker"><span /> Official club portal <span className="hero__season">2026 / 27 season</span></p>
        <p className="hero__location">NAGALAND UNITED SPORTS CLUB <span>•</span> CHÜMOUKEDIMA</p>
        <h1 id="hero-title">RISE<br /><em>TOGETHER</em></h1>
        <p className="hero__summary">Representing Nagaland through football, developing local talent and bringing communities together through sport.</p>
        <div className="hero__actions">
          <a className="button" href="#about">Explore NUSC <span aria-hidden="true">↗</span></a>
          <a className="button button--ghost" href="#matches">View matches <span aria-hidden="true">↓</span></a>
        </div>
      </div>
      <div className="hero__edge container"><span>01</span><i /><span>03</span></div>
    </section>
  );
}