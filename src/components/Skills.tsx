/* eslint-disable @next/next/no-img-element */
import Card from '@/components/ui/Card';

const Skills = () => {
  return (
    <div className="w-[100%] sm:w-[100%] lg:w-[1024px] px-10 sm:px-20 bg-[#080808]">
      <p className="font-mono mb-2">Loves:</p>

      <div
        className="w-[100%] px-4 grid grid-cols-4 sm:grid-cols-6  
      gap-1 sm:gap-2 md:gap-4"
      >
        <Card tooltip="React">
          <img
            className="w-[50px]"
            src="/react-logo-colored.png"
            alt="React Logo"
          />
        </Card>

        <Card tooltip="Node.js">
          <img
            className="w-[50px]"
            src="/nodejs-logo-colored.png"
            alt="Node.js Logo"
          />
        </Card>

        <Card tooltip="Express.js">
          <img
            className="w-[50px]"
            src="/express-logo-colored.png"
            alt="Express Logo"
          />
        </Card>

        <Card tooltip="JavaScript">
          <img
            className="w-[40px]"
            src="/javascript-logo-colored.png"
            alt="JavaScript Logo"
          />
        </Card>

        <Card tooltip="TypeScript">
          <img
            className="w-[40px]"
            src="/typescript-logo-colored.png"
            alt="TypeScript Logo"
          />
        </Card>

        <Card tooltip="HTML">
          <img
            className="w-[45px]"
            src="/html5-logo-colored.png"
            alt="HTML5 Logo"
          />
        </Card>

        <Card tooltip="CSS">
          <img
            className="w-[45px]"
            src="/css3-logo-colored.png"
            alt="CSS3 Logo"
          />
        </Card>

        <Card tooltip="TailwindCSS">
          <img
            className="w-[45px]"
            src="/tailwind-logo-colored.png"
            alt="TailwindCSS Logo"
          />
        </Card>

        <Card tooltip="Material-UI">
          <img
            className="w-[45px]"
            src="/materialui-logo-colored.png"
            alt="Material-UI Logo"
          />
        </Card>

        <Card tooltip="MongoDB">
          <img
            className="w-[50px]"
            src="/mongodb-logo-colored.png"
            alt="MongoDB Logo"
          />
        </Card>

        <Card tooltip="Redux">
          <img
            className="w-[50px]"
            src="/redux-logo-colored.png"
            alt="Redux Logo"
          />
        </Card>

        <Card tooltip="Jest">
          <img
            className="w-[50px]"
            src="/jest-logo-colored.png"
            alt="Jest Logo"
          />
        </Card>

        {/* Spinner - Loading more skills */}
        <Card tooltip="Brewing More...">
          <div className="h-[50px] flex items-center justify-center">
            <div className="animate-spin h-5 w-5">
              <div
                className="h-[100%] w-[100%] border-4 border-t-white border-b-[#9C9C9C]
               border-x-[#9C9C9C] rounded-full"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
