'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import scrollTo from '@/utils/scrollToSection';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

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
      <About id="about" onLinkClick={scrollToSection} />
      <Experience id="experience" />
      <Projects id="projects" />

      <div id="get-in-touch" className="bg-white h-screen"></div>
    </div>
  );
};

export default Home;
