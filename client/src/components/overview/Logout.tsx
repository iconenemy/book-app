import { useNavigate } from "react-router-dom";
import { DefaultButton } from "../inputs";
import { FiArrowRight } from "react-icons/fi";
import { persistor } from "../../app/store";
import { useLogoutMutation } from "../../features/auth/authApiSlice";

const Logout = () => {
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const handleLogout = async () => {
    await logoutUser()
      .unwrap()
      .then(() => {
        persistor.purge();
        navigate("/");
      });
  };
  return (
    <div className="w-full py-12 px-8 flex justify-center items-center border-b-[#ccc] border-[1px]">
      <DefaultButton className="py-4 px-16" onClick={handleLogout}>
        <FiArrowRight size={20} />
        <p className="text-sm gap-1">sign out</p>
      </DefaultButton>
    </div>
  );
};

export default Logout;
