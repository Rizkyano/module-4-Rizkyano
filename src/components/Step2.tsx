import React from "react";
import { Field, ErrorMessage } from "formik";

const Step2: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2</h2>
      <div className="mb-4">
        <Field name="address" type="text" placeholder="Address" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <Field name="city" type="text" placeholder="City" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="city" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <Field name="state" type="text" placeholder="State" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="state" component="div" className="text-red-500 text-sm mt-1" />
      </div>
      <div className="mb-4">
        <Field name="zipCode" type="number" placeholder="Zip Code" className="w-full p-2 border border-gray-300 rounded" />
        <ErrorMessage name="zipCode" component="div" className="text-red-500 text-sm mt-1" />
      </div>
    </div>
  );
};

export default Step2;
