import { ReactNode } from 'react'

type Props = {
  type?: "submit";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const WhiteButton = ({ type, className, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className ? className : ""}
        flex justify-center items-center font-medium text-[10px] border-solid border-2 uppercase gap-1 border-black hover:text-white hover:bg-black`}
    >
      {children} 
    </button>
  );
};

export default WhiteButton;
