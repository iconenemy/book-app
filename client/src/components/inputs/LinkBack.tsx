import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

const LinkBack = ({ to, className, children }: Props) => {
  return (
    <Link
      to={to}
      className={`${className ? className : ""}
          flex justify-center gap-2 text-[13px] items-center font-semibold`}
    >
      <AiOutlineArrowLeft size={'20px'} />
      {children}
    </Link>
  );
};

export default LinkBack;
