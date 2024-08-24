import React from "react";

interface DeleteCategoryModalProps {
  open: boolean;
  handleClose: () => void;
  handleConfirmDelete: () => void;
  categoryName: string;
}

const ModalDelete: React.FC<DeleteCategoryModalProps> = ({ open, handleClose, handleConfirmDelete, categoryName }) => {
  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Konfirmasi Penghapusan</h2>
            <p className="mb-6">
              Apakah Anda yakin ingin menghapus kategori <strong>{categoryName}</strong>?
            </p>
            <div className="flex justify-end space-x-4">
              <button onClick={handleClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">
                Batal
              </button>
              <button onClick={handleConfirmDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDelete;
