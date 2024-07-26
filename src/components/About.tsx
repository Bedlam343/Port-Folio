import Skills from '@/components/Skills';

type AboutProps = {
  id: string;
  onLinkClick: (id: string) => void;
};

const About = ({ id, onLinkClick }: AboutProps) => {
  return (
    <div className="bg-[#080808] h-auto pb-8 sm:pb-auto sm:h-screen pt-[50px]">
      <div className="h-[100%] flex flex-col items-center justify-center sm:gap-10">
        <div
          className="w-[100%] lg:w-[1024px] px-10 sm:px-20 gap-10 
        flex flex-col-reverse sm:flex-row justify-between pt-4"
        >
          <div className="w-[100%] sm:max-w-[60%] sm:py-20">
            <p className="text-4xl md:text-[45px] font-bold mb-1 sm:mb-3 text-center sm:text-start">
              JAGJIT SINGH
            </p>
            <p className="text-xl lg:text-2xl mb-2 sm:mb-6 text-center sm:text-start">
              Full-Stack Software Engineer
            </p>
            <p className="text-[#9C9C9C] font-mono mb-6 sm:mb-0 text-center sm:text-start">
              I like building things for the web. And others seem to like what I
              build. So I keep building. Life is better when kept simple.
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

        <Skills />

        {/* Bouncing arrow */}
        <div className="absolute bottom-6 animate-bounce hidden sm:block">
          <div
            onClick={() => onLinkClick('experience')}
            className="w-[25px] h-[25px] border-r-2 border-b-2 
        border-white hover:cursor-pointer rotate-45"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
