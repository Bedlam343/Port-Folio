/* eslint-disable @next/next/no-img-element */
import Card from '@/components/Card';

// TODO: Add more skills. Secondary skills?
// Make the skills responsive. Change number of columns based on screen size.

const Loves = () => {
  return (
    <div className="w-[100%] sm:w-[100%] lg:w-[1024px] px-20">
      <p className="font-mono mb-2">Great With:</p>

      <div
        className="w-[100%] px-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6  
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
      </div>
    </div>
  );
};

export default Loves;
