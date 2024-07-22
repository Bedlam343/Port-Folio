type ProjectsProps = {
  id: string;
};

const Projects = ({ id }: ProjectsProps) => {
  return (
    <div id={id} className="bg-[#080808] py-[60px] flex flex-col items-center">
      <p className="text-white text-center text-4xl font-extrabold mb-[6px]">
        Projects
      </p>
      <p className="text-[#9C9C9C] font-mono mb-[45px]">The Good and The Bad</p>

      <div></div>
      {/* Images with text. Once hovered, images flips like a notecard and shows more info on the back */}
    </div>
  );
};

export default Projects;
