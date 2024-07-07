const Home = () => {
  return (
    <div className="h-screen">
      {/* header */}
      <div className="flex justify-center w-screen">
        <div className="bg-[#1B1B1B] w-[100%] sm:w-[100%] xl:w-[1280px] rounded-b-lg h-[80px] flex items-center justify-center">
          <ul className="flex gap-x-12 md:gap-x-16 lg:gap-x-24 xl:gap-x-32 text-xl text-[#9C9C9C]">
            <li className="hover:text-white hover:cursor-pointer">Home</li>
            <li className="hover:text-white hover:cursor-pointer">
              Experience
            </li>
            <li className="hover:text-white hover:cursor-pointer">Projects</li>
            <li className="hover:text-white hover:cursor-pointer">
              Get In Touch
            </li>
            <li className="hover:text-white hover:cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      <main>
        <div>BODY</div>
      </main>
    </div>
  );
};

export default Home;
