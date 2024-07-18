'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
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
      <About id="about" onLinkClick={scrollToSection} />

      {/* Experience */}
      <div
        id="experience"
        className="bg-white py-[60px] flex flex-col items-center"
      >
        <p className="text-[#080808] text-center text-4xl font-extrabold mb-[8px]">
          Experience
        </p>
        <p className="text-[#9C9C9C] font-mono mb-[60px]">
          Quality over Quantity
        </p>

        <div className="flex flex-col gap-[80px] w-[100%] sm:max-w-[892px]">
          <div className="h-[300px] border-2 border-red-500 flex">
            <div className="w-[50%] pt-[25px]">
              <div className="bg-[#D0E6FF] ml-[10px] w-fit px-4 py-1 font-bold rounded-full">
                <p className="text-[#000AFF]">SRI</p>
              </div>
            </div>

            <div className="w-[50%] flex items-center justify-center hover:cursor-pointer"></div>
          </div>

          <div className="h-[300px] border-2 border-red-500 flex">
            <div className="w-[50%] pt-[25px]">
              <div className="bg-[#FFF6E9] ml-[10px] w-fit px-4 py-1 font-bold rounded-full">
                <p className="text-[#FFA217]">Promaxo</p>
              </div>
            </div>

            <div className="w-[50%] flex items-center justify-center hover:cursor-pointer">
              <img
                className="w-[100%] rounded-sm"
                src="promaxo-logo.webp"
                alt="Promaxo Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="bg-[#080808] h-screen"></div>
      {/* Get In Touch */}
      <div id="get-in-touch" className="bg-white h-screen"></div>
    </div>
  );
};

export default Home;
