'use client';

type HeaderProps = {
  onLinkClick: (id: string) => void;
};

const Header = ({ onLinkClick }: HeaderProps) => {
  return (
    <div className="flex justify-center">
      <div
        className="absolute top-0 bg-[#1B1B1B] w-[100%] sm:w-[100%] lg:w-[1024px] 
        rounded-b-lg h-[45px] sm:h-[50px] flex items-center justify-center"
      >
        <ul className="flex justify-evenly w-[100%] text-[12px] sm:text-sm text-[#9C9C9C] h-full">
          <li
            onClick={() => onLinkClick('about')}
            className="hover:text-white hover:cursor-pointer flex items-center"
          >
            Home
          </li>
          <li
            onClick={() => onLinkClick('experience')}
            className="hover:text-white hover:cursor-pointer flex items-center"
          >
            Experience
          </li>
          <li
            onClick={() => onLinkClick('projects')}
            className="hover:text-white hover:cursor-pointer flex items-center"
          >
            Projects
          </li>
          {/* <li
            onClick={() => onLinkClick('get-in-touch')}
            className="hover:text-white hover:cursor-pointer flex items-center"
          >
            Get In Touch
          </li> */}
          <li className="flex gap-1 sm:gap-2">
            <a
              href="https://www.linkedin.com/in/singhjagjit01/"
              target="_blank"
              className="hover:cursor-pointer flex items-center"
            >
              <img src="linkedin-logo.png" className=" w-[25px] sm:w-[35px]" />
            </a>

            <a
              href="https://github.com/Bedlam343?tab=repositories"
              target="_blank"
              className="flex items-center hover:cursor-pointer"
            >
              <img src="github-logo.png" className="w-[20px] sm:w-[27px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
