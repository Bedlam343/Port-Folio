import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  tooltip?: string;
  nohover?: boolean;
};

const Card = ({ children, tooltip, nohover }: CardProps) => {
  const hover = nohover ? '' : 'hover:cursor-pointer hover:border-[#404040]';

  return (
    <div
      className={`group relative border-[1px] border-[#1B1B1B] flex justify-center
rounded-sm ${hover}`}
    >
      <div
        className={`${
          nohover ? '' : 'hover:opacity-25'
        } w-[100%] h-[100%] py-2 flex items-center justify-center`}
      >
        {children}
      </div>

      {tooltip && (
        <span
          className="pointer-events-none absolute w-max top-[25px]
          opacity-0 transition-opacity group-hover:opacity-100 text-[9.5px] 
          sm:text-[12px] text-sm"
        >
          {tooltip}
        </span>
      )}
    </div>
  );
};

export default Card;
