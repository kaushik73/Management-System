import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Input from "../wrapperTags/Input";
import Heading from "../wrapperTags/Heading";
import { signInValidations } from "../utils/Formvalidations";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(signInValidations),
    onSubmit: (values) => {
    },
  });

  return (
    <div className="flex   rounded-xl	 justify-center items-center w-[35%] m-auto bg-gradient-to-b from-blue-600 to-purple-600 h-content">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        <Heading data="Sign In" type="heading" />
        <Input
          name="name"
          placeholder="Enter Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}

        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && formik.touched.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute top-4 right-4"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        {formik.errors.password && formik.touched.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
