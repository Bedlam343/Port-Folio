type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps) => {
  return (
    <div
      id={id}
      className="bg-[#080808] py-[40px] sm:py-[60px] flex flex-col items-center"
    >
      <p className="text-white text-center text-4xl font-extrabold mb-[25px] sm:mb-[45px]">
        Projects
      </p>
      {/* <p className="text-[#9C9C9C] font-mono mb-[25px] sm:mb-[45px]">
        (Crafted With Love)
      </p> */}

      <div className="grid grid-cols-1 md:grid-cols-2 pt-4 px-5 sm:py-0 sm:px-6 lg:px-0 sm:max-w-[908px] gap-x-10 gap-y-10 sm:gap-y-14">
        <div
          className="h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer hover:border-red-200"
        >
          <a
            className="h-full w-full absolute z-50"
            href="https://spotify-music-muse.netlify.app/"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-25"
            src="/projects/music_muse.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-red-200 mb-3">
                MUSIC MUSE
              </p>
              <p>
                <span className="text-red-100">Music Muse</span> is a
                state-of-the-art{' '}
                <span className="text-red-100">music recommender</span>. Dive in
                and expand your music horizons. Connect your Spotify account and
                <span className="text-red-100">
                  {' '}
                  save tracks to your Spotify playlist
                </span>{' '}
                from right within the app!
              </p>
            </div>
            <div>
              Powered by <span className="text-red-100">React</span>,{' '}
              <span className="text-red-100">Spotify Web API</span>, and,{' '}
              <span className="text-red-100">OpenAI API</span>.
            </div>
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
            src="/projects/codemasons.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-orange-200 mb-3">
                CODEMASONS
              </p>
              <p>
                <span className="text-orange-100">Codemasons</span> creates the
                world&apos;s{' '}
                <span className="text-orange-100">best programmers</span>. With
                some of the{' '}
                <span className="text-orange-100">best teachers</span> from
                around the globe, including some highly renown{' '}
                <span className="text-orange-100">3rd Degree Codemasons</span>,
                this is the place to take your programming skills to the next
                level.
              </p>
            </div>
            <div>
              <p>
                Made with <span className="text-orange-100">React</span> and{' '}
                <span className="text-orange-100">Node.js</span>.
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
            href="https://github.com/orgs/thi-sjsu-project/repositories"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-25"
            src="/projects/fighter-jets.jpg"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-green-200 mb-3">THEIA</p>
              <p>
                A <span className="text-green-100">situationally-aware</span>,{' '}
                <span className="text-green-100">multi-modal</span>, and{' '}
                <span className="text-green-100">adaptive user interface</span>{' '}
                for fighter jets, which responds to external events, including
                pilot&apos;s stress level, and{' '}
                <span className="text-green-100">
                  adjusts its visual complexity
                </span>{' '}
                to minimize pilot&apos;s cognitive load.
              </p>
            </div>
            <div>
              <p>
                Built with <span className="text-green-100">React</span>,{' '}
                <span className="text-green-100">Redux</span>, and{' '}
                <span className="text-green-100">TypeScript</span>.
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
            href="https://type-shooter.netlify.app"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-25"
            src="/projects/typeshooter.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-pink-200 mb-3">
                TYPE SHOOTER
              </p>
              <p>
                An <span className="text-pink-100">ingenious blend</span> of a{' '}
                <span className="text-pink-100">2D shooter</span> game and a{' '}
                <span className="text-pink-100">typing game</span>. With{' '}
                <span className="text-pink-100">100 levels</span> of increasing
                difficulty, Type Shooter is a{' '}
                <span className="text-pink-100">formidable challenge</span> for
                even the mightest of the keyboard masters.
              </p>
            </div>
            <div>
              <p>
                {' '}
                Made with <span className="text-pink-100">React</span>,{' '}
                <span className="text-pink-100">TypeScript</span>, and{' '}
                <span className="text-pink-100">Three.js</span>.
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
            href="https://tic-tac-toe343.netlify.app"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-40"
            src="/projects/tic-tac-toe.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-blue-200 mb-3">
                TIC-TAC-TOE
              </p>
              <p>
                A <span className="text-blue-100">stylish</span> and{' '}
                <span className="text-blue-100">minimal</span> tic-tac-toe game.
                A perfect way to spend a chill sunday afternoon with friends or
                family. Includes{' '}
                <span className="text-blue-100">turn-tracking</span> and{' '}
                <span className="text-blue-100">score-tracking</span> to make
                sure your opponent does not cheat.
              </p>
            </div>
            <div>
              <p>
                Built with <span className="text-blue-100">React</span>,{' '}
                <span className="text-blue-100">TypeScript</span>, and{' '}
                <span className="text-blue-100">TailwindCSS</span>.
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
            href="https://earnest-paprenjak-eae3b3.netlify.app"
            target="_blank"
          />

          <img
            className="w-full h-full object-cover opacity-10"
            src="/projects/calculator.png"
          />

          <div className="absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
            <div>
              <p className="text-center text-xl text-amber-200 mb-3">
                CALCULATOR
              </p>
              <p>
                An <span className="text-amber-100">intuitive</span> and{' '}
                <span className="text-amber-100">easy-to-use</span> calculator.
                Now, you can safely ditch all other calculators you have (at
                your own risk).
              </p>
            </div>
            <div>
              <p>
                Crafted using <span className="text-amber-100">React</span>,{' '}
                <span className="text-amber-100">TypeScript</span>, and{' '}
                <span className="text-amber-100">Material-UI</span>.
              </p>
            </div>
          </div>
        </div>

        {/* <div
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
              <p className="text-center text-xl text-green-200 mb-3">
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
        </div> */}

        {/* <div
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
              <p className="text-center text-xl text-amber-200 mb-3">
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
        </div> */}
      </div>

      <a
        className="mt-14 border-2 border-white/20 rounded-lg px-4 py-2 hover:border-white"
        href="https://github.com/Bedlam343"
        target="_blank"
      >
        Checkout GitHub For More
      </a>
    </div>
  );
};

export default Projects;
