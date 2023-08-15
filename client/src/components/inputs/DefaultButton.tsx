import { ReactNode } from 'react'

type Props = {
  type?: "submit";
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

const DefaultButton = ({ type, className, onClick, children }: Props) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className ? className : ""}
        flex justify-center items-center font-medium text-sm uppercase gap-1 hover:bg-#ccc`}
    >
      {children} 
    </button>
  );
};

export default DefaultButton;
