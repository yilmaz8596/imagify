import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required!")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string()
    .min(6, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match!")
    .required("Required!"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email!").required("Required!"),
  password: Yup.string().required("Required!"),
});
