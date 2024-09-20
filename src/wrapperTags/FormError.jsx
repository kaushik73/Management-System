import React from "react";

const FormError = ({ error, touched }) => {
  return touched && error ? <div className="text-red-500">{error}</div> : null;
};

export default FormError;
