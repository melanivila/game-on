import React, { useEffect, useState } from "react";
import { Formik, Form, Field, useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import "./login-form.css";
import { useNavigate } from "react-router-dom";
import useUser from "../navbar/Profile Menu/context/useUser";

const LoginForm = () => {
  let navigate = useNavigate();

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { login, isLogged } = useUser();
  const { values, setValues } = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isLogged) navigate("/Home");
  }, [isLogged, navigate]);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Ingrese un email válido")
      .required("Introduzca un mail por favor"),
    password: yup
      .string()
      .required("Introduzca una contraseña por favor")
      .min(5, "No puede tener menos de 5 caracteres"),
  });

  const onChange = async (e) => {
    await setValues((values[e.target.name] = e.target.value));
  };

  const onSubmit = async (values) => {
    const response = await axios
      .post("https://game-on-server.herokuapp.com/login", values)
      .catch((err) => {
        console.log(values);
        if (err && err.response) setError(err.response.data.message);
      });

    if (response && response.data) {
      setSuccess(response.data.message);
      formik.resetForm();
      login(values.email);
    }
  };

  const formik = useFormik({
    initialValues: values,
    validateOnBlur: true,
    onChange,
    onSubmit,
    validationSchema: validationSchema,
  });

  return (
    <Formik>
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        {!error && (
          <span className="success-message">{success ? success : ""}</span>
        )}
        {!success && (
          <span className="error-message">{error ? error : ""}</span>
        )}

        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <span className="error-message">{formik.errors.email}</span>
        ) : (
          ""
        )}

        <label htmlFor="password">Contraseña</label>
        <Field
          name="password"
          type="password"
          value={formik.values.password || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <span className="error-message">{formik.errors.password}</span>
        ) : (
          ""
        )}

        <button className="form-btn" type="submit">
          Iniciar Sesión
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
