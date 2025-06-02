import ProjectCard from './ui/ProjectCard';

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
        <ProjectCard className="hover:border-red-200">
          <ProjectCard.Image
            imgSrc="/projects/music_muse.png"
            projectLink="https://spotify-music-muse.netlify.app/"
            className="opacity-25"
          />
          <ProjectCard.Text
            title={<p className="text-red-200">Music Muse</p>}
            body={
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
            }
            footnote={
              <p>
                Powered by <span className="text-red-100">React</span>,{' '}
                <span className="text-red-100">Spotify Web API</span>, and,{' '}
                <span className="text-red-100">OpenAI API</span>.
              </p>
            }
          />
        </ProjectCard>

        <ProjectCard className="hover:border-orange-200">
          <ProjectCard.Image
            imgSrc="/projects/codemasons.png"
            projectLink="https://bootcamper-h6l8.onrender.com"
            className="opacity-10"
          />
          <ProjectCard.Text
            title={<p className="text-orange-200">Codemasons</p>}
            body={
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
            }
            footnote={
              <p>
                Made with <span className="text-orange-100">React</span> and{' '}
                <span className="text-orange-100">Node.js</span>.
              </p>
            }
          />
        </ProjectCard>

        <ProjectCard className="hover:border-purple-300">
          <ProjectCard.Image
            imgSrc="/projects/calendly_extractor.png"
            projectLink="https://calendly-availability-extractor.netlify.app/"
            className="opacity-25"
          />
          <ProjectCard.Text
            title={<p className="text-purple-300">Calendly Extractor</p>}
            body={
              <p>
                An innovative, easy-to-use utility app that{' '}
                <span className="text-purple-100">extracts availability</span>{' '}
                from a{' '}
                <span className="text-purple-100">
                  Calendly scheduling page
                </span>{' '}
                for up to the next 4 upcoming weeks.
              </p>
            }
            footnote={
              <p>
                Crafted using <span className="text-purple-100">Puppeteer</span>
                , <span className="text-purple-100">AWS Lambda</span>, and{' '}
                <span className="text-purple-100">Browserless API</span>.
              </p>
            }
          />
        </ProjectCard>

        <ProjectCard className="hover:border-green-300">
          <ProjectCard.Image
            imgSrc="/projects/fighter-jets.jpg"
            projectLink="https://github.com/orgs/thi-sjsu-project/repositories"
            className="opacity-25"
          />
          <ProjectCard.Text
            title={<p className="text-green-200">Theia</p>}
            body={
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
            }
            footnote={
              <p>
                Built with <span className="text-green-100">React</span>,{' '}
                <span className="text-green-100">Redux</span>, and{' '}
                <span className="text-green-100">TypeScript</span>.
              </p>
            }
          />
        </ProjectCard>

        <ProjectCard className="hover:border-amber-300">
          <ProjectCard.Image
            imgSrc="/projects/typeshooter.png"
            projectLink="https://type-shooter.netlify.app"
            className="opacity-30"
          />
          <ProjectCard.Text
            title={<p className="text-amber-200">Type Shooter</p>}
            body={
              <p>
                An <span className="text-amber-100">ingenious blend</span> of a{' '}
                <span className="text-amber-100">2D shooter</span> game and a{' '}
                <span className="text-amber-100">typing game</span>. With{' '}
                <span className="text-amber-100">100 levels</span> of increasing
                difficulty, Type Shooter is a{' '}
                <span className="text-amber-100">formidable challenge</span> for
                even the mightest of the keyboard masters.
              </p>
            }
            footnote={
              <p>
                Made with <span className="text-amber-100">React</span>,{' '}
                <span className="text-amber-100">TypeScript</span>, and{' '}
                <span className="text-amber-100">Three.js</span>.
              </p>
            }
          />
        </ProjectCard>

        <ProjectCard className="hover:border-blue-300">
          <ProjectCard.Image
            imgSrc="/projects/tic-tac-toe.png"
            projectLink="https://tic-tac-toe343.netlify.app"
            className="opacity-30"
          />
          <ProjectCard.Text
            title={<p className="text-blue-200">Tic-Tac-Toe</p>}
            body={
              <p>
                A <span className="text-blue-100">stylish</span> and{' '}
                <span className="text-blue-100">minimal</span> tic-tac-toe game.
                A perfect way to spend a chill sunday afternoon with friends or
                family. Includes{' '}
                <span className="text-blue-100">turn-tracking</span> and{' '}
                <span className="text-blue-100">score-tracking</span> to make
                sure your opponent does not cheat.
              </p>
            }
            footnote={
              <p>
                Built with <span className="text-blue-100">React</span>,{' '}
                <span className="text-blue-100">TypeScript</span>, and{' '}
                <span className="text-blue-100">TailwindCSS</span>.
              </p>
            }
          />
        </ProjectCard>
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
