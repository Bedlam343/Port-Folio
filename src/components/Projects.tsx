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

      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 px-5 sm:py-0 sm:px-6 lg:px-0 sm:max-w-[908px] gap-x-10 gap-y-10 sm:gap-y-14">
        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-red-300"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://github.com/orgs/thi-sjsu-project/repositories"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-25"
            src="/projects/fighter-jets.jpg"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-red-200 mb-1">THEIA</p>
              <p>
                <span className="text-red-100">Theia</span> is the name of a
                software suite that makes custom{' '}
                <span className="text-red-100">
                  Multi-Modal Adaptive User Interfaces
                </span>
                , demonstrated via an adapative UI that allowed a fighter jet
                pilot to control many fighter drones while also piloting their
                own ship. The{' '}
                <span className="text-red-100">
                  UI adapted to changes in the pilot&apos;s stress level as well
                  as to external world events.
                </span>
              </p>
            </div>

            {/* <div className="flex justify-end w-[100%]">
              <a
                href="https://github.com/orgs/thi-sjsu-project/repositories"
                target="_blank"
                className="bg-white/80 hover:bg-red-100 px-3 py-1 rounded-xl"
              >
                <p className="text-[#080808]">Code</p>
              </a>
            </div> */}
          </div>
        </div>

        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-orange-200"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://bootcamper-h6l8.onrender.com"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-10"
            src="/projects/skilled-coders.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-orange-200 mb-1">
                SKILLED CODERS
              </p>
              <p>
                A bootcamp website made with{' '}
                <span className="text-orange-100">React</span>,{' '}
                <span className="text-orange-100">Node.js</span>,{' '}
                <span className="text-orange-100">Express</span>, and{' '}
                <span className="text-orange-100">Material-UI</span> that allows
                users to <span className="text-orange-100">sign up</span> for an
                account and allows them to{' '}
                <span className="text-orange-100">publish</span>,{' '}
                <span className="text-orange-100">delete</span>, and{' '}
                <span className="text-orange-100">update</span> bootcamps, as
                well as{' '}
                <span className="text-orange-100">
                  browse through bootcamps
                </span>{' '}
                created by other users.
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-pink-300"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://tic-tac-toe343.netlify.app"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-40"
            src="/projects/tic-tac-toe.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-pink-200 mb-1">
                TIC-TAC-TOE
              </p>
              <p>
                A <span className="text-pink-100">stylish</span> and{' '}
                <span className="text-pink-100">minimal</span> tic-tac-toe game
                built with <span className="text-pink-100">React</span>,{' '}
                <span className="text-pink-100">TypeScript</span>, and{' '}
                <span className="text-pink-100">TailwindCSS</span>. A perfect
                way to spend a chill sunday afternoon with friends or family.
                Includes <span className="text-pink-100">turn-tracking</span>{' '}
                and <span className="text-pink-100">score-tracking</span> to
                make sure your opponent does not cheat.
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-blue-300"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://earnest-paprenjak-eae3b3.netlify.app"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-10"
            src="/projects/calculator.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-blue-200 mb-1">
                CALCULATOR
              </p>
              <p>
                An <span className="text-blue-100">intuitive</span> and{' '}
                <span className="text-blue-100">easy-to-use</span> calculator
                built using <span className="text-blue-100">React</span>,{' '}
                <span className="text-blue-100">TypeScript</span>, and{' '}
                <span className="text-blue-100">Material-UI</span>. Now, you can
                safely ditch all other calculators you have (at your own risk).
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-green-300"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://labyrinthus.netlify.app/"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-10"
            src="/projects/maze.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-green-200 mb-1">
                A-MAZE-ING
              </p>
              <p>
                A fun <span className="text-green-100">maze game</span> with{' '}
                <span className="text-green-100">React</span> and{' '}
                <span className="text-green-100">TypeScript</span>. With a{' '}
                <span className="text-green-100">customizable ball</span>,{' '}
                <span className="text-green-100">endless different mazes</span>,{' '}
                and <span className="text-green-100">various maze sizes</span>{' '}
                available, this maze game is a good choice for anyone who is
                looking for a challenging and fun time.
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-amber-300"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://github.com/Bedlam343/Unjumbler"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-15"
            src="/projects/unjumbler.jpg"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-amber-200 mb-1">
                UNJUMBLER
              </p>
              <p>
                <span className="text-amber-100">
                  Why waste brain power unjumbling words
                </span>{' '}
                when you have the power of the mighty{' '}
                <span className="text-amber-100">Unjumbler</span> to fall back
                upon? Made with a little bit of{' '}
                <span className="text-amber-100">C++</span> and a whole lot of
                love.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="mt-14 border-2 border-white/20 rounded-lg px-4 py-2 hover:border-white"
        href="https://github.com/Bedlam343?tab=repositories"
        target="_blank"
      >
        Checkout GitHub For More
      </a>
    </div>
  );
};

export default Projects;
