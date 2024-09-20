import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Input from "../wrapperTags/Input";
import Heading from "../wrapperTags/Heading";
import { signUpValidations } from "../utils/Formvalidations";
import FormError from "../wrapperTags/FormError";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(signUpValidations),
    onSubmit: (values) => {
      console.log("Form Data", values);
    },
  });

  return (
    <div className="flex  rounded-xl	 justify-center items-center w-[35%] m-auto bg-gradient-to-b from-blue-600 to-purple-600 p-3">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        <Heading data="Sign Up" type="heading" />

        <Input
          name="name"
          placeholder="Enter Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <FormError error={formik.errors.name} touched={formik.touched.name} />

        <Input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <FormError error={formik.errors.email} touched={formik.touched.email} />

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
            className="absolute top-3 right-4"
          >
            {showPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        <FormError
          error={formik.errors.password}
          touched={formik.touched.password}
        />

        <div className="relative">
          <Input
            type={showCPassword ? "text" : "password"}
            name="cpassword"
            placeholder="Enter Confirm Password"
            value={formik.values.cpassword}
            onChange={formik.handleChange}
          />
          <button
            type="button"
            onClick={() => setShowCPassword((prev) => !prev)}
            className="absolute top-3 right-4"
          >
            {showCPassword ? <IoEyeOff /> : <IoEye />}
          </button>
        </div>
        <FormError
          error={formik.errors.cpassword}
          touched={formik.touched.cpassword}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
