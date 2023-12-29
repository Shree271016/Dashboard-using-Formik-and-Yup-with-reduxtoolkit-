import React from "react";
// import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export const USER_URL =
  "https://6582ca9502f747c8367a3a53.mockapi.io/profie/profile";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  number: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  number: "",
};

const validationSchemaSignUp = Yup.object({
  name: Yup.string().min(5).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Password doesn't match"),
  number: Yup.string()
    .max(10)
    .min(10)
    .required("Please enter 10 Digit  Contact number"),
});

const Registration: React.FC = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchemaSignUp,
      onSubmit: async (values, { resetForm }) => {
        console.log(
          "🚀 ~ file: Registration.jsx:37 ~ onSubmit: ~ values:",
          values
        );
        try {
          const response = await fetch(USER_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            resetForm();
          } else {
            const errorData = await response.json();
            console.error("Registration failed", errorData);
          }
        } catch (error) {
          console.error("Network error", error);
        }
      },
    });
  console.log(errors);
  return (
    <div className="container">
      <div
        className="form-details"
        style={{
          // backgroundColor: "green",
          padding: "10px",
          borderRadius: "15px",
          border: "3px solid rgb(28, 89, 28)",
        }}
      >
        <h1
          style={{
            backgroundColor: "green",
            padding: "10px",
            borderRadius: "15px",
            color: "white",
          }}
        >
          Registration :
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label>Username: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? (
              <p className="form-errors">{errors.name}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="form-errors">{errors.email}</p>
            ) : null}
            <br />
          </div>
          <div className="input-block">
            <label>ContactNumber: </label>
            <input
              type="number"
              name="number"
              id="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.number && touched.number ? (
              <p className="form-errors">{errors.number}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="form-errors">{errors.password}</p>
            ) : null}
            <br />
          </div>

          <div className="input-block">
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="form-errors">{errors.confirmPassword}</p>
            ) : null}
            <br />
          </div>

          <button
            type="submit"
            style={{
              // backgroundColor: "green",

              marginLeft: "280px",
              // padding: "20px",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
