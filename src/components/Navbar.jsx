import { useEffect, useState } from "react";
import nuscLogo from "../assets/images/NUSC-logo.png";

const links = [
  ["About", "about"],
  ["Team", "team"],
  ["Matches", "matches"],
  ["News", "news"],
  ["Community", "community"],
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isTeamPage = window.location.pathname === "/team";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="NUSC home">
          <img className="brand__crest" src={nuscLogo} alt="NUSC logo" />
          <span><strong>Nagaland United</strong><small>Sports club</small></span>
        </a>
        <nav className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`} aria-label="Primary navigation">
          <a href={isTeamPage ? "/" : "#home"} onClick={closeMenu}>Home</a>
          {links.map(([label, id, path]) => <a href={path || (isTeamPage ? `/#${id}` : `#${id}`)} key={id} onClick={closeMenu}>{label}</a>)}
          <a className="button button--small" href={isTeamPage ? "/#join" : "#join"} onClick={closeMenu}>Join NUSC <span aria-hidden="true">↗</span></a>
        </nav>
        <button className="menu-toggle" type="button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}