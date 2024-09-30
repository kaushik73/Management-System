import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Input from "../wrapperTags/Input";
import Heading from "../wrapperTags/Heading";
import { signUpValidations } from "../utils/Formvalidations";
import FormError from "../wrapperTags/FormError";
import ClickableLink from "../wrapperTags/ClickableLink";
import { Link } from "react-router-dom";
import Button from "../wrapperTags/Button";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const res = await fetch("https://localhost:44329/api/Auth/AddUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // todo : add things here  which are need @gyani
    }
  };
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
      handleSubmit(values);
    },
  });

  return (
    <div className="flex bg-gradient-to-b from-blue-600 to-purple-600 h-content">
      <form
        onSubmit={formik.handleSubmit}
        className=" w-[45%] mx-auto bg-red-400 p-2 m-8 rounded-lg  flex flex-col justify-center items-center gap-4"
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
            placeholder="Confirm Password"
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

        <div className="w-full flex justify-center gap-2 items-center">
          <Button type="submit" size="medium">
            Sign Up
          </Button>
          <Link to={"/signin"}>
            <ClickableLink>Already a User? Sign In</ClickableLink>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
