import { Dispatch, SetStateAction } from 'react'
import { NavLink } from "react-router-dom";
import { CiUser, CiSearch } from "react-icons/ci";
import { IAuthState } from "../../features/auth/authType";
import { useAppSelector } from "../../app/hooks";
import { ROUTE } from '../../consts';

type Props = {
  small: boolean;
  pathname: string;
  hoverName: string
  setHoverName: Dispatch<SetStateAction<string>>
};

const NavbarIcons = ({ small, pathname, hoverName, setHoverName }: Props) => {
  const { is_auth } = useAppSelector<IAuthState>(
    (state) => state.persistedReducer.auth
  );

  return (
    <div className="flex flex-row gap-6">
      <div>
        <button onMouseEnter={() => setHoverName('search')} className={`${!small && pathname === "/" && hoverName === '' && "text-white"}`}>
          <CiSearch size={"25px"} />
        </button>
      </div>
      <NavLink
        to={is_auth ? ROUTE.OVERVIEW_ABSOLUTE : ROUTE.AUTH_ABSOLUTE}
        className={`${!small && pathname === "/" && hoverName === '' && "text-white"}`}
      >
        <CiUser size={"25px"} />
      </NavLink>
    </div>
  );
};

export default NavbarIcons;
