import { NavLink } from "react-router-dom";
import { ROUTE } from '../../consts'
import { useAppSelector } from "../../app/hooks";

type Props = {
  small: boolean;
  pathname: string;
  hoverName: string
};

const NavbarSection = ({ small, pathname, hoverName }: Props) => {
  const { is_auth, user: { role } } = useAppSelector(state => state.persistedReducer.auth)
  return (
    <nav className="flex justify-start flex-row gap-6 uppercase cursor-pointer font-medium">
      <li className="list-none">
        <NavLink
          to={ROUTE.LIBRARY_ABSOLUTE}
          className={
            `${pathname === "/" && !small && hoverName === '' && "text-white"
            } text-xs hover:underline underline-offset-2 decoration-2`
          }
        >
          all books
        </NavLink>
      </li>
      {is_auth &&
        <li className="list-none">
          <NavLink
            to={ROUTE.COLLECTION_ABSOLUTE}
            className={
              `${pathname === "/" && !small && hoverName === '' && "text-white"
              } text-xs hover:underline underline-offset-2 decoration-2`
            }
          >
            my collection
          </NavLink>
        </li>
      }
      {is_auth && role === 'manager' && 
        <li className="list-none">
          <NavLink
            to={ROUTE.MANAGER_ABSOLUTE}
            className={
              `${pathname === "/" && !small && hoverName === '' && "text-white"
              } text-xs hover:underline underline-offset-2 decoration-2`
            }
          >
            MAGER SRM
          </NavLink>
        </li>
      }
      {is_auth && role === 'admin' &&
        <li className="list-none">
          <NavLink
            to={ROUTE.ADMIN_ABSOLUTE}
            className={
              `${pathname === "/" && !small && hoverName === '' && "text-white"
              } text-xs hover:underline underline-offset-2 decoration-2`
            }
          >
            ADMIN SRM
          </NavLink>
        </li>
      }
    </nav>
  );
};

export default NavbarSection;
