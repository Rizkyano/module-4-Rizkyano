import React from "react";
import { Field, ErrorMessage } from "formik";

const Step3: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3</h2>
      <div className="mb-4">
        <Field name="username" type="text" placeholder="Username" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <Field name="password" type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
};

export default Step3;
