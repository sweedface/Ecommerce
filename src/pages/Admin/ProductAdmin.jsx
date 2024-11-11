import React, { useState, useEffect } from 'react';
import './ProductAdmin.css'; // CSS para la vista de administración
import EditIcon from '../../assets/icons/edit.png'; // Asegúrate de tener un ícono para editar
import DeleteIcon from '../../assets/icons/delete.png'; // Ícono para borrar

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products') // Reemplaza con tu API
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleEdit = (id) => {
    console.log(`Editar producto con ID: ${id}`);
    // Implementa la lógica de edición
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
        console.log(`Producto con ID ${id} eliminado.`);
      })
      .catch((error) => console.error('Error eliminando el producto:', error));
  };

  return (
    <div className="product-admin-list">
      {products.map((product) => (
        <div key={product.id} className="product-card-admin">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.price}€</p>
          <div className="admin-buttons">
            <button onClick={() => handleEdit(product.id)}>
              <img src={EditIcon} alt="Edit" />
            </button>
            <button onClick={() => handleDelete(product.id)}>
              <img src={DeleteIcon} alt="Delete" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductAdmin;
