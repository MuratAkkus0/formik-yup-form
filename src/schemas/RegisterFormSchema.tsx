import * as yup from "yup";
const req = "This field is required.";
export const RegisterFormSchema = yup.object().shape({
  name: yup.string().required(req),

  surname: yup.string().required(req),

  email: yup.string().email("Please enter a valid email.").required(req),

  pass: yup
    .string()
    .min(8, "Password should be min 8 character")
    .max(16, "Password should be max 16 character")
    .required(req),

  confirmPass: yup
    .string()
    .required(req)
    .oneOf([yup.ref("pass")], "Password Fields must match"),

  terms: yup.boolean().required(req),
});
