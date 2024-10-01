import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RequiredStarField from "./RequiredStarField";
import Heading from "../wrapperTags/Heading";

const RequestForm = () => {
  const [response, setResponse] = useState(null);

  const validationSchema = Yup.object({
    requester: Yup.string().required("Requester is required"),
    subject: Yup.string().required("Subject is required"),
    status: Yup.string().required("Status is required"),
    priority: Yup.string().required("Priority is required"),
  });

  const initialValues = {
    requester: "",
    subject: "",
    status: parseInt("0", 10),
    priority: parseInt("0", 10),
    description: "",
    createdBy: null,
    assignedTo: null,
    dueDate: new Date().toISOString().split("T")[0],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);

    try {
      const res = await fetch("https://localhost:7084/api/Report/AddTask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-content flex justify-center items-center h-screen flex-col">
        <Heading data="Report an Issue" type="heading" />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-2xl p-2 bg-white shadow-lg rounded-lg">
              {/* Requester */}
              <div className="mb-4 ">
                <label htmlFor="requester" className="block text-gray-700">
                  Requester <RequiredStarField />
                </label>
                <Field
                  name="requester"
                  type="text"
                  placeholder="Requester"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="requester"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject <RequiredStarField />
                </label>
                <Field
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Status */}
              <div className="mb-4">
                <label htmlFor="status" className="block text-gray-700">
                  Status <RequiredStarField />
                </label>
                <Field
                  as="select"
                  name="status"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="0">Pending</option>
                  <option value="1">Completed</option>
                  <option value="2">Being Processed</option>
                </Field>
                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Priority */}
              <div className="mb-4">
                <label htmlFor="priority" className="block text-gray-700">
                  Priority <RequiredStarField />
                </label>
                <Field
                  as="select"
                  name="priority"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="0">Low</option>
                  <option value="1">Medium</option>
                  <option value="2">High</option>
                </Field>
                <ErrorMessage
                  name="priority"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700">
                  Description <RequiredStarField />
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RequestForm;
