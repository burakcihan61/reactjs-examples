import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const App = () => {
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    passwordCofirm: yup
      .string()
      .oneOf([yup.ref("password")])
      .required(),
  });

  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordCofirm: "",
      },
      

      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: schema,
    });

    

  return (
    <div className="App">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>

        <br />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <br />
        <hr />
        <label htmlFor="email">Password</label>
        <input
          id="password"
          name="password"
          placeholder="password"
          type="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br />
        <hr />
        <label htmlFor="email">Confirm Password</label>
        <input
          id="passwordCofirm"
          name="passwordCofirm"
          placeholder="password"
          type="password"
          value={values.passwordCofirm}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.passwordCofirm && touched.passwordCofirm && (
          <div>{errors.passwordCofirm}</div>
        )}
        <br />
        <hr />
        <button type="submit">Submit</button>
        <hr />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
};

export default App;
