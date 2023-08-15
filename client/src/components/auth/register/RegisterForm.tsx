import { useFormik } from "formik";
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import FormHelperText from '@mui/material/FormHelperText'

import { WhiteButton } from "../../inputs";
import { ISignUpReq } from "../../../features/auth/authType";
import { useAppDispatch } from "../../../app/hooks";
import { signUp } from "../../../features/auth/authSlice";
import { RegistrerForm, registerSchema } from "../../../utils/validates/register.schema";


const RegisterForm = () => {
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    } as RegistrerForm,
    validationSchema: registerSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values: ISignUpReq) => {
      await dispatch(signUp(values))
        .unwrap()
        .then(() => setOpen(true))
        .catch(({ error }) => setError(error));
    },
  });

  return (
    <form className="w-full" onSubmit={formik.handleSubmit}>
      <div className="my-8 h-16">
        <TextField
          fullWidth
          variant="standard"
          error={!!formik.touched.first_name && !!formik.errors.first_name}
          id="first_name"
          name="first_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.first_name}
          placeholder="First name*"
          helperText={formik.errors.first_name}
        />
      </div>
      <div className="my-8 h-16">
        <TextField
          fullWidth
          variant="standard"
          error={!!formik.touched.last_name && !!formik.errors.last_name}
          id="last_name"
          name="last_name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.last_name}
          placeholder="Last name*"
          helperText={formik.errors.last_name}
        />
      </div>
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
      <div className="mb-8">
        <p className="text-xs">
          Your personal information will be managed by Library Limited, with
          its company address at Horseferry House, Horseferry Road, London SW1P
          2AW and may be stored outside your country of residence (including in
          the U.K., Europe and USA). Library uses your personal information to
          offer an enhanced customer service tailored to your preferences and
          may share your personal information with Library group companies and
          third parties who support Library in providing products and services
          to you on Library behalf. By continuing, you confirm you have read
          our Privacy Policy and, where consent is required under local laws,
          you agree to the use of your personal information as described in our
          Privacy Policy, including in relation to the transfer and storage of
          your personal information outside your country of residence.
        </p>
      </div>
      <WhiteButton className={"w-full py-3 text-xs"} type="submit">
        create an account
      </WhiteButton>
      <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
          Your account success registred!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default RegisterForm;
