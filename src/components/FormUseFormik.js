import React from "react";
import { useFormik } from "formik";

const App = () => {
  const { handleSubmit, values, handleChange } = useFormik({
    initialValues: {
      firstName: "Burak",
      lastName: "Cihan",
      email: "burak@burak.com",
      date: "2023-01-07",
      gender: "male",
      hobiler: [],
      country: "Turkey",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          placeholder="Jane"
          value={values.firstName}
          onChange={handleChange}
        />
        <br />
        <hr />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Doe"
          value={values.lastName}
          onChange={handleChange}
        />
        <br />
        <hr />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        <br />
        <hr />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          name="date"
          type="date"
          value={values.date}
          onChange={handleChange}
        />
        <br />
        <hr />
        <label htmlFor="gender">Male</label>
        <input
          type="radio"
          id="gender"
          name="gender"
          value="male"
          checked={values.gender === "male"}
          onChange={handleChange}
        />

        <label htmlFor="gender">Female</label>
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={handleChange}
        />
        <br />
        <hr />
        <input
          type="checkbox"
          name="hobiler"
          value="futbol"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="hobiler"
          value="js"
          onChange={handleChange}
        />
        <input
          type="checkbox"
          name="hobiler"
          value="html"
          onChange={handleChange}
        />
        <br />
        <hr />
        <select name="country" onChange={handleChange} value={values.country}>
          <option value="Turkey">Turkey</option>
          <option value="England">England</option>
          <option value="USA">USA</option>
        </select>
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
