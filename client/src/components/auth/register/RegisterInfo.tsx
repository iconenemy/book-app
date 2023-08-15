import { MdOutlineDone } from "react-icons/md";

import { WhiteButton } from "../../inputs";
import { registerBenefits } from '../../../consts'

type Props = {
  setActive: (active: boolean) => void;
};

const RegisterInfo = ({ setActive }: Props) => {
  return (
    <>
      <p className="font-medium text-[13px] tracking-tight">
        Creating an account is easy. By registering, you will be able to:
      </p>
      <ul className="my-6 flex flex-col items-start gap-2">
        {registerBenefits.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center gap-6 font-medium text-[13px] tracking-tight"
          >
            <MdOutlineDone size={"15px"} />
            {item}
          </li>
        ))}
      </ul>
      <WhiteButton
        className="w-full py-3 text-xs"
        onClick={() => setActive(true)}
      >
        {" "}
        create an account{" "}
      </WhiteButton>
    </>
  );
};

export default RegisterInfo;
