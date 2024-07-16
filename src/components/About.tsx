import Loves from '@/components/Loves';

type AboutProps = {
  id: string;
  onLinkClick: (id: string) => void;
};

const About = ({ id, onLinkClick }: AboutProps) => {
  return (
    <div
      id={id}
      className="bg-[#080808] h-screen flex flex-col items-center justify-center sm:gap-10"
    >
      <div
        className="w-[100%] lg:w-[1024px] px-20 gap-10 
        flex flex-col-reverse sm:flex-row justify-between"
      >
        <div className="w-[100%] sm:max-w-[60%] sm:py-20">
          <p className="text-4xl md:text-[45px] font-bold mb-1 sm:mb-3 text-center sm:text-start">
            JAGJIT SINGH
          </p>
          <p className="text-xl lg:text-2xl mb-2 sm:mb-6 text-center sm:text-start">
            Full-Stack Software Engineer
          </p>
          <p className="text-[#9C9C9C] font-mono mb-6 sm:mb-0 text-center sm:text-start">
            I build what I like and I like what I build. And others seem to like
            it too, so I keep building. Life is better when kept simple.
          </p>
        </div>

        <div className="flex items-center justify-center sm:mt-0">
          <img
            className="rounded-full w-[200px] sm:w-[350px]"
            src="/profile-picture.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>

      <Loves />

      {/* Bouncing arrow */}
      <div className="absolute bottom-8 animate-bounce">
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
