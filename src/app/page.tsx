'use client';
import { useEffect } from 'react';
import Header from '@/components/ui/Header';
import About from '@/components/ui/About';
import scrollTo from '@/utils/scrollToSection';

const Home = () => {
  const scrollToSection = (id: string) => {
    scrollTo(id);
  };

  useEffect(() => {
    scrollTo('about');
  }, []);

  return (
    <div className="h-screen bg-white">
      <Header onLinkClick={scrollToSection} />
      <About id="about" />

      {/* Experience */}
      <div id="experience" className="bg-white h-screen"></div>
      {/* Projects */}
      <div id="projects" className="bg-[#080808] h-screen"></div>
      {/* Get In Touch */}
      <div id="get-in-touch" className="bg-white h-screen"></div>
    </div>
  );
};

export default Home;
