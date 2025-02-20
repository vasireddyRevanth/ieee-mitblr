import Hero from "./components/sections/heroSection";
import Events from "./components/sections/eventsSection";
import Calendar from "./components/sections/calenderSection";
import Team from "./components/sections/teamSection";
import Achievements from "./components/sections/achievementsSection";
import Join from "./components/sections/joinSection";
import Contact from "./components/sections/contactSection";
import Footer from "./components/sections/footerSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      {/* <Events /> */}
      <Calendar />
      <Team />
      <Achievements />
      <Join />
      <Contact />
      <Footer />
    </main>
  );
}
