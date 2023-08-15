import { useAppSelector } from "../../app/hooks";
import { IAuthState } from "../../features/auth/authType";

const Title = () => {
  const { user } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  return (
    <div className="py-20 px-8 flex flex-col items-center ">
      <h1 className=" mb-2 text-2xl font-medium uppercase">
        hi {user?.first_name}
      </h1>
      <h3 className="font-medium">{user?.email}</h3>
    </div>
  );
};

export default Title;
