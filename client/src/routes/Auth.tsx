import { useState } from "react";

import {
  Login,
  RegisterInfo,
  Register,
  RegisterForm,
} from "../components/auth";

const Auth = () => {
  const [active, setActive] = useState<boolean>(false);
  
  return (
    <div className="w-full pt-12 px-28 pb-28 flex justify-between flex-wrap">
      <Login />
      <div className="w-[1px] bg-[#ccc]"></div>
      <Register>
        {active ? (
          <RegisterForm />
        ) : (
          <RegisterInfo setActive={() => setActive(true)} />
        )}
      </Register>
    </div>
  );
};

export default Auth;
