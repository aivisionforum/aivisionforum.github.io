import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import WorkingGroups from '@/components/WorkingGroups';
import Events from '@/components/Events';
import Resources from '@/components/Resources';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <WorkingGroups />
      <Events />
      <Resources />
      <About />
      <Footer />
    </main>
  );
}