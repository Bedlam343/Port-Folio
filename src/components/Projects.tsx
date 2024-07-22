import { useState } from 'react';
import FlipCard from '@/components/ui/FlipCard';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps) => {
  const [hover, setHover] = useState<string>('');

  const clearHover = () => {
    setHover('');
  };

  return (
    <div id={id} className="bg-[#080808] py-[60px] flex flex-col items-center">
      <p className="text-white text-center text-4xl font-extrabold mb-[25px] sm:mb-[45px]">
        Projects
      </p>
      {/* <p className="text-[#9C9C9C] font-mono mb-[25px] sm:mb-[45px]">
        (Crafted With Love)
      </p> */}

      {/* Images with text. Once hovered, images flips like a notecard and shows more info on the back */}
      <div className="grid grid-cols-2 py-8 sm:py-0 sm:w-[908px] gap-x-10 gap-y-14">
        <div className="flex h-[300px] flex-col justify-center">
          <FlipCard>
            <FlipCard.Front>
              <img
                className="h-full w-full object-cover"
                src="/projects/fighter-jets.jpg"
              />
            </FlipCard.Front>

            <FlipCard.Back>Back</FlipCard.Back>
          </FlipCard>
        </div>

        <div className="bg-white h-[300px]"></div>
        <div className="bg-white h-[300px]"></div>
        <div className="bg-white h-[300px]"></div>
      </div>
    </div>
  );
};

export default Projects;
