import { useFormik } from "formik";
import { RegisterFormSchema } from "../schemas/RegisterFormSchema";
import type { FormikHelpers } from "formik";
import type { RegisterFormType } from "../types/types";
function RegisterForm() {
  const formik = useFormik<RegisterFormType>({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      pass: "",
      confirmPass: "",
      terms: "",
    },
    validationSchema: RegisterFormSchema,
    onSubmit: onHandleSubmit,
  });
  function onHandleSubmit(
    values: RegisterFormType,
    action: FormikHelpers<RegisterFormType>
  ) {
    action.resetForm();
  }
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form__container">
        <div className="form__part">
          <label htmlFor="name" className="form__input--label">
            Name:
          </label>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            type="text"
            id="name"
            className="form__input"
            placeholder="Please enter your name"
          />
          <p className="error">{formik.errors.name && formik.errors.name}</p>
        </div>
        <div className="form__part">
          <label htmlFor="surname" className="form__input--label">
            Surname:
          </label>
          <input
            value={formik.values.surname}
            onChange={formik.handleChange}
            type="text"
            id="surname"
            className="form__input"
            placeholder="Please enter your surname"
          />
          <p className="error">
            {formik.errors.surname && formik.errors.surname}
          </p>
        </div>
        <div className="form__part">
          <label htmlFor="email" className="form__input--label">
            Email:
          </label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            type="text"
            className="form__input"
            placeholder="Please enter your email"
          />
          <p className="error">{formik.errors.email && formik.errors.email}</p>
        </div>
        <div className="form__part">
          <label htmlFor="pass" className="form__input--label">
            Password:
          </label>
          <input
            value={formik.values.pass}
            onChange={formik.handleChange}
            type="password"
            id="pass"
            className="form__input"
            placeholder="Please enter your password"
          />
          <p className="error">{formik.errors.pass && formik.errors.pass}</p>
        </div>
        <div className="form__part">
          <label htmlFor="confirmPass" className="form__input--label">
            Confirm Password:
          </label>
          <input
            value={formik.values.confirmPass}
            onChange={formik.handleChange}
            type="password"
            id="confirmPass"
            className="form__input"
            placeholder="Please confirm your password"
          />
          <p className="error">
            {formik.errors.confirmPass && formik.errors.confirmPass}
          </p>
        </div>
        <div className="form__part checkbox__part">
          <input
            value={formik.values.terms}
            onChange={formik.handleChange}
            type="checkbox"
            id="terms"
            className="form__input"
          />
          <label htmlFor="terms" className="form__input--label">
            I accept the terms.
          </label>
          <p className="error">{formik.errors.terms && formik.errors.terms}</p>
        </div>
        <div className="form__part">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
