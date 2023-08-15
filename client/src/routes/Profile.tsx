import {
  LinkBack,
  RadioButton,
  TextField,
  WhiteButton,
} from "../components/inputs";
import { useFormik } from "formik";

import { useAppSelector } from "../app/hooks";
import { IUser } from "../features/auth/authType";
import { UserUpdateBodyReq } from "../features/user/userType";
import { useUpdateUserMutation } from "../features/user/userApiSlice";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../consts";

const Profile = () => {
  const navigate = useNavigate();

  const { id, first_name, last_name } = useAppSelector<IUser>(
    (state) => state.persistedReducer.auth.user as IUser
  );

  const [updateUser] = useUpdateUserMutation();

  const formik = useFormik({
    initialValues: {
      first_name,
      last_name,
    } as UserUpdateBodyReq,
    onSubmit: async (values) => {
      await updateUser({ id, ...values })
        .unwrap()
        .then(() => navigate("../overview"));
    },
  });

  return (
    <>
      <div className="relative w-full py-20 px-8 flex items-center ">
        <LinkBack to={`../${ROUTE.OVERVIEW}`} className="font-normal text-sm">
          Overview
        </LinkBack>
        <div className="absolute w-max right-0 left-0 ml-auto mr-auto uppercase font-medium">
          edit profile
        </div>
      </div>
      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex justify-start text-sm font-medium uppercase">
          personal information
        </div>
        <div className="w-5/12 flex flex-col">
          <form className="w-full" onSubmit={formik.handleSubmit}>
            <label htmlFor="Title" className="text-[13px] text-[#3e3e3e]">
              Title*
            </label>
            <div className="w-full mb-4 flex flex-wrap">
              <RadioButton label="Mrs" name={"title"} className="w-1/2" />
              <RadioButton label="Mr" name={"title"} className="w-1/2" />
              <RadioButton label="Ms" name={"title"} className="w-1/2" />
              <RadioButton label="Miss" name={"title"} className="w-1/2" />
            </div>
            <div className="mb-6">
              <TextField
                id="first_name"
                name="first_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.first_name}
                placeholder="First name*"
              />
            </div>
            <div className="mb-6">
              <TextField
                id="last_name"
                name="last_name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.last_name}
                placeholder="Last name*"
              />
            </div>
            <div className="mb-6"></div>
            <WhiteButton
              className={"w-full py-3 text-xs uppercase"}
              type={"submit"}
            >
              save changes
            </WhiteButton>
          </form>{" "}
        </div>
        <div className="w-3/12 flex"> </div>
      </div>
      <div className="w-full py-12 px-8 flex flex-row border-b-[#ccc] border-[1px]">
        <div className="w-4/12 flex justify-start text-sm font-medium uppercase">
          password
        </div>
        <div className="w-5/12 flex flex-col"></div>
        <div className="w-3/12 flex"> </div>
      </div>
    </>
  );
};

export default Profile;
