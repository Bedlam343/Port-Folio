import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="border-[1px] border-[#1B1B1B] flex justify-center 
      items-center rounded-sm py-2 hover:cursor-pointer hover:border-[#404040]"
    >
      {children}
    </div>
  );
};

export default Card;
