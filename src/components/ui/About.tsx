const About = ({ id }: { id: string }) => {
  return (
    <div
      id={id}
      className="bg-[#080808] h-screen flex items-center justify-center"
    >
      <div className="w-[100%] sm:w-[100%] lg:w-[1024px] px-20 gap-10 flex justify-between">
        <div className="w-[500px] py-20">
          <p className="text-5xl font-bold mb-4">JAGJIT SINGH</p>
          <p className="text-[#9C9C9C] font-mono">
            Passionate Software Engineer with a year of experience designing
            seamless user interfaces, implementing backend services, and
            transalating innovative ideas into functional applications.
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
    </div>
  );
};

export default About;
