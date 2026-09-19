import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import MatchSection from "./components/MatchSection";
import Team from "./components/Team";
import Journey from "./components/Journey";
import Community from "./components/Community";
import News from "./components/News";
import Sponsors from "./components/Sponsors";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import TeamPage from "./components/TeamPage";
import useScrollFade from "./hooks/useScrollFade";

function App() {
  useScrollFade();

  if (window.location.pathname === "/team") {
    return <TeamPage />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <MatchSection />
        <Team />
        <Journey />
        <Community />
        <News />
        <Sponsors />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default App;