import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../pages/Header';
import Footer from '../pages/Footer';

const RequestForm = () => {
  const validationSchema = Yup.object({
    requester: Yup.string().required('Requester is required'),
    subject: Yup.string().required('Subject is required'),
    status: Yup.string().required('Status is required'),
    priority: Yup.string().required('Priority is required'),
    group: Yup.string().required('Group is required'),
    department: Yup.string().required('Department is required'),
    description: Yup.string().required('Description is required'),
  });

  const initialValues = {
    requester: '',
    subject: '',
    status: 'Being Processed',
    priority: 'Low',
    group: '',
    department: '',
    description: '',
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
    <div className='p-4'>
      <Header/>
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <label htmlFor="requester" className="block text-gray-700">Requester *</label>
          <Field
            name="requester"
            type="text"
            placeholder="Email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ErrorMessage name="requester" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700">Subject *</label>
          <Field
            name="subject"
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ErrorMessage name="subject" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700">Status *</label>
          <Field
            as="select"
            name="status"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Being Processed">Being Processed</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </Field>
          <ErrorMessage name="status" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="block text-gray-700">Priority *</label>
          <Field
            as="select"
            name="priority"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Field>
          <ErrorMessage name="priority" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="group" className="block text-gray-700">Group *</label>
          <Field
            as="select"
            name="group"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Group</option>
            <option value="Group A">Group A</option>
            <option value="Group B">Group B</option>
          </Field>
          <ErrorMessage name="group" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700">Department *</label>
          <Field
            as="select"
            name="department"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select Department</option>
            <option value="HR">HR</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
          </Field>
          <ErrorMessage name="department" className="text-red-500 text-sm" component="div" />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Description *</label>
          <Field
            as="textarea"
            name="description"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <ErrorMessage name="description" className="text-red-500 text-sm" component="div" />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Submit
        </button>
      </Form>
    </Formik>
    <div>
      <Footer/>
    </div>
    </>
  );
};

export default RequestForm;
