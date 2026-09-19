import nuscLogo from "../assets/images/NUSC-logo.png";
import socialLinks from "../data/contact";

function SocialIcon({ name }) {
  if (name === "instagram") {
    return <svg className="footer__social-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>;
  }

  if (name === "facebook") {
    return <svg className="footer__social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.75l.5-3H14V8.1c0-.87.29-1.6 1.65-1.6h1.75V3.82c-.31-.04-1.38-.12-2.62-.12-2.59 0-4.36 1.58-4.36 4.48V10H7.5v3h2.92v8H14Z" /></svg>;
  }

  return <svg className="footer__social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 4h4.18l3.25 4.34L16.45 4h2.35l-5.1 5.92L19.5 20h-4.18l-3.55-4.74L7.55 20H5.2l5.35-6.32L5.2 4Zm3.36 1.85 7.7 12.3h.98L9.54 5.85h-.98Z" /></svg>;
}

export default function Footer() {
  return <footer className="footer" id="footer">
    <div className="container">
      <div className="footer__top">
        <a className="brand brand--footer" href="#home">
          <img className="brand__crest" src={nuscLogo} alt="NUSC logo" />
          <span>
            <strong>NUSC</strong>
            <small>RISE TOGETHER</small>
          </span>
        </a>
        <p>Official club information, stories and community updates will live here.</p>
      </div>
      <div className="footer__grid">
        <div>
          <small>Explore</small>
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#matches">Matches</a>
        </div>
        <div>
          <small>Connect</small>
          <a href="#news">News</a>
          <a href="#community">Community</a>
          <a href="#join">Join NUSC</a>
        </div>
        <div>
          <small>Contact</small>
          {socialLinks.map(({ name, url }) => <a className="footer__social" href={url} key={name} target="_blank" rel="noreferrer"><SocialIcon name={name.toLowerCase()} /><span>{name[0].toUpperCase() + name.slice(1)}</span></a>)}
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Nagaland United Sports Club. All Rights Reserved.</span>
        <span>Built to rise together.</span>
      </div>
    </div>
  </footer>;
}