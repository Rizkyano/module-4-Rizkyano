import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryList from "../components/CategoryList";
import ModalAdd from "../components/ModalAdd";
import ModalEdit from "../components/ModalEdit";
import ModalDelete from "../components/ModalDelete";

interface CategoryValues {
  id: number;
  name: string;
  description: string;
  onEdit: () => void;
  onDelete: () => void;
  onSubmit: any;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryValues[]>([]);
  const [selectCategory, setSelectCategory] = useState<CategoryValues | null>(null);
  const [isAddModal, setIsAddModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleCreateNew = (category: CategoryValues) => {
    axios
      .post("http://localhost:8080/categories", category)
      .then((response) => {
        setCategories([...categories, response.data]);
        setIsAddModal(false);
      })
      .catch((error) => {
        console.error("Error adding category:", error);
      });
  };

  const handleEdit = (category: CategoryValues) => {
    axios
      .put(`http://localhost:8080/categories/${category.id}`, category)
      .then(() => {
        setCategories(categories.map((cat) => (cat.id === category.id ? category : cat)));
        setIsEditModal(false);
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  const handleOpenDeleteModal = (category: CategoryValues) => {
    setSelectCategory(category);
    setIsDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModal(false);
    setSelectCategory(null);
  };

  const handleConfirmDelete = () => {
    if (selectCategory) {
      const { id } = selectCategory;
      axios
        .delete(`http://localhost:8080/categories/${id}`)
        .then(() => {
          setCategories(categories.filter((category) => category.id !== id));
          handleCloseDeleteModal();
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Daftar Kategori</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-6" onClick={() => setIsAddModal(true)}>
        Buat Baru
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <CategoryList
            key={category.id}
            id={category.id}
            namaKategori={category.name}
            deskripsi={category.description}
            onEdit={() => {
              setSelectCategory(category);
              setIsEditModal(true);
            }}
            onDelete={() => handleOpenDeleteModal(category)}
          />
        ))}
      </div>
      <ModalAdd open={isAddModal} onClose={() => setIsAddModal(false)} onSubmit={handleCreateNew} />
      <ModalDelete open={isDeleteModal} handleClose={handleCloseDeleteModal} handleConfirmDelete={handleConfirmDelete} categoryName={selectCategory?.name || ""} />
      {selectCategory && <ModalEdit open={isEditModal} onClose={() => setIsEditModal(false)} initialValues={selectCategory} onSubmit={handleEdit} />}
    </div>
  );
};

export default Category;
