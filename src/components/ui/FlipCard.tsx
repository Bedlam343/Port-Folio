import { ReactNode } from 'react';

type FlipCardProps = {
  children: ReactNode;
  flipDuration?: number;
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  shadowColor?: string;
};

const FlipCard = ({ children }: FlipCardProps) => {
  return (
    <div className="group h-full w-full [perspective:1000px] hover:cursor-pointer">
      <div
        className="relative h-full w-full transition-all duration-500
  [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
      >
        {children}
      </div>
    </div>
  );
};

type FrontProps = {
  children: ReactNode;
};
const Front = ({ children }: FrontProps) => {
  return <div className="absolute inset-0">{children}</div>;
};

type BackProps = {
  children: ReactNode;
  opaqueBackground?: boolean;
};
const Back = ({ children }: BackProps) => {
  return (
    <div
      className="absolute inset-0 h-full w-full bg-black/75 [transform:rotateY(180deg)]
      [backface-visibility:hidden]"
    >
      {children}
    </div>
  );
};

FlipCard.Front = Front;
FlipCard.Back = Back;

export default FlipCard;
