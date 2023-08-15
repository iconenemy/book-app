import { useFormik } from "formik";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

import { WhiteButton } from "../../inputs";
import { useAppDispatch } from "../../../app/hooks";
import { signIn } from "../../../features/auth/authSlice";
import { LoginForm, loginSchema } from "../../../utils/validates/login.schema";
import { ROUTE } from "../../../consts";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string>('')

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as LoginForm,
    validationSchema: loginSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values) => {
      setError("")
      await dispatch(signIn(values))
        .unwrap()
        .then(({ user: { role } }) =>
          role === 'manager' ?
            navigate(ROUTE.MANAGER_ABSOLUTE) :
            role === 'admin' ?
              navigate(ROUTE.ADMIN_ABSOLUTE) :
              navigate(ROUTE.ABSOLUTE))
        .catch(({ error }) => setError(error));
    },
  });

  return (
    <section className="max-w-[610] w-[47%] flex flex-col items-center">
      <p className="mb-6 uppercase font-medium text-[14px] tracking-tight">sign in</p>
      <p className="mb-2 text-[13px] font-medium tracking-tight">
        Sign in to acccess your account
      </p>
      <form className="w-full mb-3" onSubmit={formik.handleSubmit}>
        <div className="my-8 h-16">
          <TextField
            fullWidth
            variant="standard"
            error={!!formik.touched.email && !!formik.errors.email}
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Your email*"
            helperText={formik.errors.email}
          />
        </div>
        <div className="mt-8 mb-4 h-16">
          <TextField
            fullWidth
            variant="standard"
            error={!!formik.touched.password && !!formik.errors.password}
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Create password*"
            helperText={formik.errors.password}
          />
        </div>
        <div className="h-16">
          <FormHelperText error>{error}</FormHelperText>
        </div>
        <WhiteButton type="submit" className="w-full py-3 text-xs">
          sign in
        </WhiteButton>
      </form>
    </section >
  );
};

export default Login;
