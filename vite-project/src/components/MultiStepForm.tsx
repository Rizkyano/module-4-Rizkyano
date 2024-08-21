// src/components/MultiStepForm.tsx
import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Define the structure of form values
interface FormValues {
  fullname: string;
  email: string;
  date: Date;
  address: string;
  state: string;
  city: string;
  zipCode: number;
  username: string;
  password: string;
}

// Initial form values

const initialValues: FormValues = {
  fullname: "",
  email: "",
  date: new Date(),
  address: "",
  state: "",
  city: "",
  zipCode: 0,
  username: "",
  password: "",
};

// Validation schemas for each step
const validationSchema = [
  Yup.object({
    fullname: Yup.string().required("First Name is required").min(2, "Must be at least 2 characters"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    date: Yup.date().required("Date is required"),
  }),
  Yup.object({
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zipCode: Yup.number().required("Zip Code is required"),
  }),
  Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(8, "Must be at least 8 characters"),
  }),
];

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    if (step === 3) {
      alert("You have been regiestered!");
      setSubmitting(false);
    } else {
      handleNext();
      setSubmitting(false);
    }
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema[step - 1]} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg">
          <div>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
          </div>
          {step > 1 && (
            <button type="button" onClick={handleBack}>
              Back
            </button>
          )}
          <button type="submit" disabled={isSubmitting}>
            {step === 3 ? "Submit" : "Next"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
