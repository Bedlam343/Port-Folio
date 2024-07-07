'use client';
import Header from '@/components/ui/Header';

const Home = () => {
  const scrollToSection = (id: string) => {
    const div = document.getElementById(id);
    if (div) {
      div.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen bg-white">
      <Header onLinkClick={scrollToSection} />

      {/* Home */}
      <div id="home" className=" bg-[#080808] h-screen"></div>
      {/* Experience */}
      <div id="experience" className=" bg-white h-screen"></div>
      {/* Projects */}
      <div id="projects" className=" bg-[#080808] h-screen"></div>
      {/* Get In Touch */}
      <div id="get-in-touch" className=" bg-white h-screen"></div>
    </div>
  );
};

export default Home;
