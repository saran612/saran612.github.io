import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Skills from '@/components/skills';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import ScrollFadeIn from '@/components/scroll-fade-in';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <ScrollFadeIn>
          <Hero />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <About />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Portfolio />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Skills />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <Contact />
        </ScrollFadeIn>
      </main>
      <Footer />
    </div>
  );
}
