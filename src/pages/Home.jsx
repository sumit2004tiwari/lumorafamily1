import Hero from '../components/Hero';
import MarqueeTicker from '../components/MarqueeTicker';
import About from '../components/About';
import Services from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Technology from '../components/Technology';
import WhoUsesUs from '../components/WhoUsesUs';
import Plans from '../components/Plans';
import Testimonials from '../components/Testimonials';
import Cities from '../components/Cities';
import BookingCTA from '../components/BookingCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <MarqueeTicker />
      <About />
      <Services />
      <HowItWorks />
      <Technology />
      <WhoUsesUs />
      <Plans />
      <Testimonials />
      <Cities />
      <BookingCTA />
    </main>
  );
}
