/* eslint-disable @next/next/no-img-element */
import Chips from './ui/Chips';

type ExperienceProps = {
  id: string;
};

const Experience = ({ id }: ExperienceProps) => {
  return (
    <div
      id={id}
      className="bg-white py-[40px] sm:py-[60px] flex flex-col items-center"
    >
      <p className="text-[#080808] text-center text-4xl font-extrabold mb-[5px] sm:mb-[45px]">
        Experience
      </p>
      {/* <p className="text-[#9C9C9C] mb-[5px] sm:mb-[45px] font-mono">
        (Done With Dedication)
      </p> */}

      <div className="pointer-events-none flex flex-col gap-[15px] sm:gap-[45px] w-[100%] sm:px-8 md:px-6 lg:px-4 sm:max-w-[908px]">
        <div className="min-h-[300px] flex flex-col-reverse sm:flex-row">
          <div className="w-[100%] px-6 sm:px-0 sm:w-[50%] sm:pt-[25px]">
            {/* <div className="bg-[#FFF6E9] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#FFA217]"
                href="https://www.sri.com/"
                target="_blank"
              >
                SRI
              </a>
            </div> */}

            <p className="text-[#3A97ED] font-extrabold text-xl sm:text-2xl">
              AI Engineer Intern
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Jun 2025 - Aug 2025
            </p>
            <p className="text-[#080808] mt-[10px]">
              {/* Collaborated with a multi-national and cross-functional team of 10
              students from San Jose State University and Technische Hochschule
              Ingolstadt to create a small suite of software, named{' '}
              <span className="text-[#eea33b] font-bold hover:underline">
                <a
                  href="https://github.com/orgs/thi-sjsu-project/repositories"
                  target="_blank"
                >
                  Theia
                </a>
              </span>
              , that makes custom Multi-Modal Adpative User Interfaces.
              <br />
              <br />
              Theia was then demonstrated via a Multi-Modal Adaptive UI that
              allowed a fighter jet pilot to control many fighter drones while
              also piloting their ownship. The UI adapts to the pilot{"'"}s
              changing stress level, as well as to world events, to aid the
              pilot in critical decision making during high-stress conditions. */}
              Created a{' '}
              <span className="text-[#3A97ED] font-semibold">
                fully-autonomous
              </span>
              , LLM-powered{' '}
              <span className="text-[#3A97ED] font-semibold">
                meeting scheduling solution
              </span>{' '}
              that makes remote collaboration effortless. Resolved critical
              performance bottlenecks and application failures on EC2 instances
              by analyzing system logs. Engineered RESTful APIs using
              CodeIgniter 4 that seamlessly powered dynamic front-end UIs and
              applications.
            </p>

            <Chips
              className="bg-[#3A97ED] text-white"
              items={[
                'CodeIgniter 4',
                'JavaScript',
                'AWS',
                'AgentQL',
                'Playwright',
                'Adobe XD',
              ]}
            />
          </div>

          <div
            id="teamcalai-picture"
            className="w-[100%] sm:w-[50%] flex items-center justify-center relative"
          >
            <img
              className="w-[50%] sm:w-[80%] rounded-sm"
              src="teamcalai-logo.png"
              alt="TEAMCALAI Logo"
            />

            {/* <a
              href="https://www.sri.com/"
              className="absolute h-[100%] w-[50%]"
              target="_blank"
            /> */}
          </div>
        </div>

        <div className="min-h-[300px] flex flex-col sm:flex-row">
          <div
            id="acmsjsu-picture"
            className="w-[100%] sm:w-[50%] flex items-center justify-center relative pr-auto sm:pr-8"
          >
            <img
              className="w-[80%] sm:w-[75%] rounded-sm"
              src="acmsjsu_logo.png"
              alt="ACM@SJSU Logo"
            />

            {/* <a
              href="https://promaxo.com/"
              className="absolute h-[100%] w-[50%]"
              target="_blank"
            /> */}
          </div>

          <div className="w-[100%] px-6 sm:px-0 sm:w-[50%] sm:pt-[25px]">
            {/* <div className="bg-[#D0E6FF] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#000AFF]"
                href="https://promaxo.com/"
                target="_blank"
              >
                Promaxo
              </a>
            </div> */}

            <p className="text-[#176095] font-extrabold text-xl sm:text-2xl">
              Web Developer
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Jan 2025 - May 2025
            </p>
            <p className="text-[#080808] mt-[10px]">
              Implemented responsive and{' '}
              <span className="text-[#176095] font-semibold">
                pixel-perfect user interfaces
              </span>{' '}
              using React, TypeScript, and TailwindCSS. Used Drizzle ORM with
              PostgreSQL to perform type-safe database queries and streamline
              backend development. Integrated TanStack React Router with React
              Query to enable route-aware data fetching and caching, improving
              performance and user experience.
            </p>

            <Chips
              className="bg-[#176095] text-[#ffffff]"
              items={[
                'React',
                'Express.js',
                'TypeScript',
                'PostgreSQL',
                'Drizzle ORM',
                'React Query',
                'TanStack React Router',
              ]}
            />
          </div>
        </div>

        <div className="min-h-[300px] flex flex-col-reverse sm:flex-row">
          <div className="w-[100%] px-6 sm:px-0 sm:w-[50%] sm:pt-[25px]">
            {/* <div className="bg-[#FFF6E9] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#FFA217]"
                href="https://www.sri.com/"
                target="_blank"
              >
                SRI
              </a>
            </div> */}

            <p className="text-black font-extrabold text-xl sm:text-2xl">
              Software Engineer
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Feb 2024 - Jun 2024
            </p>
            <p className="text-[#080808] mt-[10px]">
              {/* Collaborated with a multi-national and cross-functional team of 10
              students from San Jose State University and Technische Hochschule
              Ingolstadt to create a small suite of software, named{' '}
              <span className="text-[#eea33b] font-bold hover:underline">
                <a
                  href="https://github.com/orgs/thi-sjsu-project/repositories"
                  target="_blank"
                >
                  Theia
                </a>
              </span>
              , that makes custom Multi-Modal Adpative User Interfaces.
              <br />
              <br />
              Theia was then demonstrated via a Multi-Modal Adaptive UI that
              allowed a fighter jet pilot to control many fighter drones while
              also piloting their ownship. The UI adapts to the pilot{"'"}s
              changing stress level, as well as to world events, to aid the
              pilot in critical decision making during high-stress conditions. */}
              Collaborated with an international, cross-functional team of 10
              students from San Jose State University and Technische Hochschule
              Ingolstadt to create a situationally-aware interface (
              <span className="font-bold hover:underline pointer-events-auto">
                <a
                  href="https://github.com/orgs/thi-sjsu-project/repositories"
                  target="_blank"
                >
                  Theia
                </a>
              </span>
              ) which responds to external events and adapts its visual
              complexity to help minimize the pilot{"'"}s cognitive load and
              assist in critical decision making during high-stress conditions.
              <br /> <br />
              Awarded the &quot;
              <span className="underline font-bold">
                Most Outstanding Student Project 2024
              </span>
              &quot; at the 2024 THI Academic Celebration Ceremony.
            </p>

            <Chips
              className="bg-black text-white"
              items={['React', 'Redux', 'TypeScript', 'TailwindCSS', 'Figma']}
            />
          </div>

          <div
            id="sri-picture"
            className="w-[100%] sm:w-[50%] flex items-center justify-center relative"
          >
            <img
              className="w-[50%] sm:w-[70%] rounded-sm"
              src="sri-logo.png"
              alt="SRI Logo"
            />

            {/* <a
              href="https://www.sri.com/"
              className="absolute h-[100%] w-[50%]"
              target="_blank"
            /> */}
          </div>
        </div>

        <div className="min-h-[300px] flex flex-col sm:flex-row">
          <div
            id="promaxo-picture"
            className="w-[100%] sm:w-[50%] flex items-center justify-center relative pr-auto sm:pr-8"
          >
            <img
              className="w-[80%] sm:w-[100%] rounded-sm"
              src="promaxo-logo.webp"
              alt="Promaxo Logo"
            />

            {/* <a
              href="https://promaxo.com/"
              className="absolute h-[100%] w-[50%]"
              target="_blank"
            /> */}
          </div>

          <div className="w-[100%] px-6 sm:px-0 sm:w-[50%] sm:pt-[25px]">
            {/* <div className="bg-[#D0E6FF] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#000AFF]"
                href="https://promaxo.com/"
                target="_blank"
              >
                Promaxo
              </a>
            </div> */}

            <p className="text-[#1F9BEB] font-extrabold text-xl sm:text-2xl">
              Full-Stack Engineering Intern
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Jun 2023 - May 2024
            </p>
            <p className="text-[#080808] mt-[10px]">
              Took charge of and{' '}
              <span className="text-[#1F9BEB] font-semibold">
                shipped high-quality production code
              </span>{' '}
              for 2 complex, customer-facing web-applications. Worked closely
              with cross-functional teams, including developers and product
              managers, to bring innovative ideas to life. Conducted code
              reviews and performed unit and integration testing to ensure code
              integrity and quality.
            </p>

            <Chips
              className="bg-[#1F9BEB] text-white"
              items={[
                'React',
                'Node.js',
                'JavaScript',
                'MongoDB',
                'Redux',
                'GCP',
                'MUI',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
