import { ReactNode } from 'react';

type TextBubbleProps = {
  text: string;
  bgColor: string;
  textColor: string;
};

const TextBubble = ({ text, bgColor, textColor }: TextBubbleProps) => {
  return (
    <div
      className={`bg-[${bgColor}] text-[${textColor}] rounded-full flex items-center justify-center
  w-fit px-4 py-1 font-bold`}
    >
      <p>{text}</p>
    </div>
  );
};

export default TextBubble;
