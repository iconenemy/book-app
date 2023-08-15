import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Register = ({ children }: Props) => {
  return (
    <section className="max-w-[610] w-5/12 flex flex-col">
      <div className="flex justify-center">
        <p className="mb-6 uppercase font-medium items-center tracking-tight">
          new to Library.com?
        </p>
      </div>
      {children}
    </section>
  );
};

export default Register;
