import React from "react";
import { Modal } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface ModalAddValues {
  open: boolean;
  onClose: () => void;
  onSubmit: any;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Nama kategori diperlukan"),
  description: Yup.string().required("Deskripsi diperlukan"),
});

const ModalAdd: React.FC<ModalAddValues> = ({ open, onClose, onSubmit }) => {
  const handleSubmit = (values: { name: string; description: string }) => {
    onSubmit(values);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Tambah Kategori Baru</h2>
          <Formik initialValues={{ name: "", description: "" }} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <Field name="name" placeholder="Nama Kategori" className="w-full border border-gray-300 rounded p-2" />
                  {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>
                <div className="mb-4">
                  <Field name="description" placeholder="Deskripsi" as="textarea" rows="4" className="w-full border border-gray-300 rounded p-2" />
                  {errors.description && touched.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                </div>
                <div className="flex justify-end space-x-4">
                  <button type="submit" onSubmit={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Tambah
                  </button>
                  <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                    Batal
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAdd;
