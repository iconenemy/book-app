import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { IAuthState } from "../../features/auth/authType";
import { ROUTE } from "../../consts";

const ProfileDetails = () => {
  const { user } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  return (
    <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
      <div className="w-4/12 flex flex-col">
        <h4 className="uppercase font-medium text-[14px]">profile details</h4>
        <Link to={`/${ROUTE.PROFILE_ABSOLUTE}`} className="mt-2 underline">
          Edit profile
        </Link>
      </div>
      <ul className="w-5/12 flex flex-col gap-4 text-[14px]">
        <li className="flex justify-between flex-row">
          <div className="w-1/2">Email</div>
          <div className="w-1/2">{user?.email}</div>
        </li>
        <li className="flex justify-between flex-row">
          <div className="w-1/2">Password</div>
          <div className="w-1/2">**********</div>
        </li>
      </ul>
      <div className="w-3/12 flex justify-center"></div>
    </div>
  );
};

export default ProfileDetails;
