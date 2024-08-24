import React from "react";

interface CategoryListValues {
  id: number;
  namaKategori: string;
  deskripsi: string;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const CategoryList: React.FC<CategoryListValues> = ({ id, namaKategori, deskripsi, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-300 p-4 mb-4">
      <h2 className="text-xl font-semibold">{namaKategori}</h2>
      <p className="text-gray-700">{deskripsi}</p>
      <div className="mt-2">
        <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2" onClick={() => onEdit(id)}>
          Edit
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => onDelete(id)}>
          Hapus
        </button>
      </div>
    </div>
  );
};

export default CategoryList;
