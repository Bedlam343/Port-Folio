type ExperienceProps = {
  id: string;
};

const Experience = ({ id }: ExperienceProps) => {
  return (
    <div id={id} className="bg-white py-[60px] flex flex-col items-center">
      <p className="text-[#080808] text-center text-4xl font-extrabold mb-[8px]">
        Experience
      </p>
      <p className="text-[#9C9C9C] font-mono mb-[50px]">
        To whom it may concern...
      </p>

      <div className="flex flex-col gap-[50px] w-[100%] sm:max-w-[892px]">
        <div className="min-h-[300px] flex">
          <div className="w-[50%] pt-[25px] ">
            {/* <div className="bg-[#FFF6E9] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#FFA217]"
                href="https://www.sri.com/"
                target="_blank"
              >
                SRI
              </a>
            </div> */}

            <p className="text-[#080808] font-extrabold text-2xl">
              Student Software Engineer
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Feb 2024 - Jun 2024
            </p>
            <p className="text-[#080808] mt-[10px]">
              Collaborated with a multi-national and cross-functional team of 10
              students from San Jose State University and Technische Hochschule
              Ingolstadt to create a small suite of software, named{' '}
              <span className="text-[#FFA217] font-bold hover:underline">
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
              also piloting their ownship. The UI adapts to the pilot's changing
              stress level, as well as to world events, to aid the pilot in
              critical decision making during high-stress conditions.
            </p>
          </div>

          <div className="w-[50%] flex items-center justify-center relative">
            <img
              className="w-[60%] rounded-sm"
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

        <div className="min-h-[300px] flex">
          <div className="w-[50%] pt-[25px]">
            {/* <div className="bg-[#D0E6FF] ml-[10px] w-fit px-4 py-1 font-bold rounded-full mb-[15px]">
              <a
                className="text-[#000AFF]"
                href="https://promaxo.com/"
                target="_blank"
              >
                Promaxo
              </a>
            </div> */}

            <p className="text-[#080808] font-extrabold text-2xl">
              Full-Stack Engineering Intern
            </p>
            <p className="text-[#9C9C9C] font-sans text-sm">
              Jun 2023 - May 2024
            </p>
            <p className="text-[#080808] mt-[10px]">
              Developed, maintained, and shipped production code for 2
              high-quality medical web-applications. Worked closely with
              cross-functional teams, including developers and product managers,
              to bring innovative ideas to life. Conducted code reviews and
              performed unit and integration testing to ensure code integrity
              and quality.
            </p>
          </div>

          <div className="w-[50%] flex items-center justify-center relative">
            <img
              className="w-[100%] rounded-sm"
              src="promaxo-logo.webp"
              alt="Promaxo Logo"
            />

            {/* <a
              href="https://promaxo.com/"
              className="absolute h-[100%] w-[50%]"
              target="_blank"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
