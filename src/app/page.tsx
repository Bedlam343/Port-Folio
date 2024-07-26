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

      <div className="bg-white py-10">
        <p className="text-[#9C9C9C] text-center">
          Made with <span className="text-[#3d3d3d]">Next.js</span> and{' '}
          <span className="text-[#3d3d3d]">TailwindCSS</span> by yours truly.{' '}
          <br />
          Coded in <span className="text-[#3d3d3d]">
            Visual Studio Code
          </span>. <br /> Deployed with{' '}
          <span className="text-[#3d3d3d]">Vercel</span>.
        </p>
      </div>
    </div>
  );
};

export default Home;
