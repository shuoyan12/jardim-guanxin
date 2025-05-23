'use client';
import ContactForm from "./components/ContactForm";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import About from './components/About';
import HeroVideo from './components/HeroVideo';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-100 mt-[-110px]">
      <HeroVideo/>
      {/* 主要內容 */}
      <div className="container mx-auto p-4">
        <About/> 
        <Services/>
        <Gallery/>
        <ContactForm />
      </div>
    </main>
  );
}
