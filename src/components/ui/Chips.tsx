type ChipsProps = {
  items: string[];
  className?: string;
};

const Chips = ({ items, className }: ChipsProps) => {
  return (
    <div className="flex mt-4 flex-wrap gap-3">
      {items.map((item) => (
        <div
          key={item}
          className={`rounded-full flex items-center justify-center
                  w-fit px-4 py-1 font-bold pointer-events-none ${className}`}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

export default Chips;
