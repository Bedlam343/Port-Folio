const Header = () => {
  return (
    <div className="flex justify-center">
      <div className="fixed top-0 bg-[#1B1B1B] w-[100%] sm:w-[100%] lg:w-[1024px] rounded-b-lg h-[50px] flex items-center justify-center">
        <ul className="flex justify-evenly w-[100%] text-sm text-[#9C9C9C]">
          <li className="hover:text-white hover:cursor-pointer">Home</li>
          <li className="hover:text-white hover:cursor-pointer">Experience</li>
          <li className="hover:text-white hover:cursor-pointer">Projects</li>
          <li className="hover:text-white hover:cursor-pointer">
            Get In Touch
          </li>
          <li className="hover:text-white hover:cursor-pointer">LinkedIn</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
