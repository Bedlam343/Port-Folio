import { ReactNode } from 'react';

type PropsType = {
  children: ReactNode;
  className?: string;
};

const ProjectCard = ({ children, className }: PropsType) => {
  return (
    <div
      className={`h-[300px] border-[1px] border-white/20 rounded-lg bg relative 
          overflow-hidden hover:cursor-pointer group ${className}`}
    >
      {children}
    </div>
  );
};

type ImgProps = {
  imgSrc: string;
  projectLink: string;
  className?: string;
};
const CardImage = ({ imgSrc, className, projectLink }: ImgProps) => {
  return (
    <>
      <a
        className="h-full w-full absolute z-50"
        href={projectLink}
        target="_blank"
      />

      <img
        className={`w-full h-full object-cover group-hover:animate-to-opacity-100 ${className}`}
        src={imgSrc}
      />
    </>
  );
};

type CardTextProps = {
  title: ReactNode;
  body: ReactNode;
  footnote: ReactNode;
};
const CardText = ({ title, body, footnote }: CardTextProps) => {
  return (
    <div className="group-hover:animate-to-opacity-0 absolute top-0 h-full py-4 px-6 flex flex-col justify-between">
      <div>
        <div className="text-center uppercase text-xl font-semibold mb-3">
          {title}
        </div>
        {body}
      </div>
      <div>{footnote}</div>
    </div>
  );
};

ProjectCard.Image = CardImage;
ProjectCard.Text = CardText;

export default ProjectCard;
