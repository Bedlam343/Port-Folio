import Skills from '@/components/ui/Skills';

type AboutProps = {
  id: string;
  onLinkClick: (id: string) => void;
};

const About = ({ id, onLinkClick }: AboutProps) => {
  return (
    <div
      id={id}
      className="bg-[#080808] h-screen flex flex-col items-center justify-center gap-10"
    >
      <div className="w-[100%] sm:w-[100%] lg:w-[1024px] px-20 gap-10 flex justify-between">
        <div className="w-[500px] py-20">
          <p className="text-6xl font-bold mb-3">JAGJIT SINGH</p>
          <p className="text-2xl  mb-6">Full-Stack Software Engineer</p>
          <p className="text-[#9C9C9C] font-mono">
            I build what I like and I like what I build. And others seem to like
            it too, so I keep building. Life is better when kept simple.
          </p>
        </div>

        <div>
          <img
            className="rounded-full w-[350px]"
            src="/profile-picture.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>

      <Skills />

      {/* Bouncing arrow */}
      <div className="absolute bottom-10 animate-bounce ">
        <div
          onClick={() => onLinkClick('experience')}
          className="w-[25px] h-[25px] border-r-2 border-b-2 
        border-white hover:cursor-pointer rotate-45"
        />
      </div>
    </div>
  );
};

export default About;
