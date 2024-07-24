import { useState } from 'react';
import FlipCard from '@/components/ui/FlipCard';
import Arrow from '@/components/ui/Arrow';

type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps) => {
  return (
    <div id={id} className="bg-[#080808] py-[60px] flex flex-col items-center">
      <p className="text-white text-center text-4xl font-extrabold mb-[25px] sm:mb-[45px]">
        Projects
      </p>
      {/* <p className="text-[#9C9C9C] font-mono mb-[25px] sm:mb-[45px]">
        (Crafted With Love)
      </p> */}

      <div className="grid grid-cols-2 py-8 sm:py-0 sm:w-[908px] gap-x-10 gap-y-14">
        <div className="h-[300px]">
          <FlipCard>
            <FlipCard.Front>
              <img
                className="h-full w-full object-cover"
                src="/projects/fighter-jets.jpg"
              />
              {/* <p className="text-white text-3xl w-[100%] absolute bottom-4 object-right-bottom text-right px-4">
                THEIA
              </p> */}
            </FlipCard.Front>

            <FlipCard.Back>
              <div className="py-4 px-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-center text-2xl mb-2 text-red-200">
                    THEIA
                  </p>
                  <p>
                    <span className="text-red-100">Theia</span> is the name of a
                    software suite that makes custom{' '}
                    <span className="text-red-100">
                      Multi-Modal Adaptive User Interfaces
                    </span>
                    , demonstrated via an adapative UI that allowed a fighter
                    jet pilot to control many fighter drones while also piloting
                    their own ship. The{' '}
                    <span className="text-red-100">
                      UI adapted to changes in pilot&apos;s stress level as well
                      as to external world events.
                    </span>
                  </p>
                </div>

                <div className="flex justify-end w-[100%]">
                  <a
                    href="https://github.com/orgs/thi-sjsu-project/repositories"
                    target="_blank"
                    className="bg-white/80 hover:bg-red-100 px-4 py-2 rounded-xl"
                  >
                    <p className="text-[#080808]">Code</p>
                  </a>
                </div>
              </div>
            </FlipCard.Back>
          </FlipCard>
        </div>

        <div className="h-[300px]">
          <FlipCard>
            <FlipCard.Front>
              <img
                className="h-full w-full object-cover"
                src="/projects/bootcamper-logo.png"
              />
            </FlipCard.Front>

            <FlipCard.Back>
              <div className="py-4 px-6 flex flex-col justify-between h-full">
                <div>
                  <p className="text-center text-2xl mb-2 text-amber-200">
                    BOOTCAMPER
                  </p>
                  <p>
                    A bootcamp website made with{' '}
                    <span className="text-amber-100">React</span>,{' '}
                    <span className="text-amber-100">Node.js</span>,{' '}
                    <span className="text-amber-100">Express</span>, and{' '}
                    <span className="text-amber-100">Material-UI</span> that
                    allows users to{' '}
                    <span className="text-amber-100">create</span>,{' '}
                    <span className="text-amber-100">delete</span>, and{' '}
                    <span className="text-amber-100">update</span> bootcamps.
                  </p>
                </div>

                <div className="flex justify-end w-[100%] gap-4">
                  <a
                    href="https://bootcamper-h6l8.onrender.com"
                    target="_blank"
                    className="bg-white/80 hover:bg-amber-100 px-4 py-2 rounded-xl"
                  >
                    <p className="text-[#080808]">Visit</p>
                  </a>

                  <a
                    href="https://github.com/Bedlam343/Bootcamper"
                    target="_blank"
                    className="bg-white/80 hover:bg-amber-100 px-4 py-2 rounded-xl"
                  >
                    <p className="text-[#080808]">Code</p>
                  </a>
                </div>
              </div>
            </FlipCard.Back>
          </FlipCard>
        </div>

        <div className="bg-white h-[300px]"></div>
        <div className="bg-white h-[300px]"></div>
      </div>
    </div>
  );
};

export default Projects;
