'use client';

type HeaderProps = {
  onLinkClick: (id: string) => void;
};

const Header = ({ onLinkClick }: HeaderProps) => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-0 bg-[#1B1B1B] w-[100%] sm:w-[100%] lg:w-[1024px] rounded-b-lg h-[50px] flex items-center justify-center">
        <ul className="flex justify-evenly w-[100%] text-sm text-[#9C9C9C]">
          <li
            onClick={() => onLinkClick('home')}
            className="hover:text-white hover:cursor-pointer"
          >
            Home
          </li>
          <li
            onClick={() => onLinkClick('experience')}
            className="hover:text-white hover:cursor-pointer"
          >
            Experience
          </li>
          <li
            onClick={() => onLinkClick('projects')}
            className="hover:text-white hover:cursor-pointer"
          >
            Projects
          </li>
          <li
            onClick={() => onLinkClick('get-in-touch')}
            className="hover:text-white hover:cursor-pointer"
          >
            Get In Touch
          </li>
          <li className="hover:text-white hover:cursor-pointer">LinkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
