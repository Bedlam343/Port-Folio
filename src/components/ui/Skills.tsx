/* eslint-disable @next/next/no-img-element */
import Card from '@/components/ui/Card';

const Skills = () => {
  return (
    <div className="h-[100px] w-[100%] sm:w-[100%] lg:w-[1024px] px-20">
      <p className="font-mono mb-2">Primary Skills:</p>

      <div className="w-[100%] px-4 grid grid-cols-7 gap-4">
        <Card>
          <img
            className="w-[50px]"
            src="/react-logo-colored.png"
            alt="React Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[50px]"
            src="/nodejs-logo-colored.png"
            alt="Node.js Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[50px]"
            src="/express-logo-colored.png"
            alt="Express Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[40px]"
            src="/javascript-logo-colored.png"
            alt="JavaScript Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[40px]"
            src="/typescript-logo-colored.png"
            alt="TypeScript Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[45px]"
            src="/html5-logo-colored.png"
            alt="HTML5 Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[45px]"
            src="/css3-logo-colored.png"
            alt="CSS3 Logo"
          />
        </Card>

        <Card>
          <img
            className="w-[45px]"
            src="/mongodb-logo-colored.png"
            alt="MongoDB Logo"
          />
        </Card>
      </div>
    </div>
  );
};

export default Skills;
