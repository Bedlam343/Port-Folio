import Header from '@/components/ui/Header';

const Home = () => {
  return (
    <div className="h-screen bg-white">
      <Header />

      {/* Home */}
      <div id="home" className=" bg-[#080808] h-screen"></div>
      {/* Experience */}
      <div id="experience" className=" bg-white h-screen"></div>
      {/* Projects */}
      <div id="projects" className=" bg-[#080808] h-screen"></div>
      {/* Get In Touch */}
      <div id="get-in-touch" className=" bg-white h-screen"></div>
    </div>
  );
};

export default Home;
