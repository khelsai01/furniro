import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../ProductRedux/action';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [productsData, setProdutsData] = useState({
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const value = e.target.name === 'image' ? e.target.files[0] : e.target.value;
    const productObj = { ...productsData, [e.target.name]: value };
    setProdutsData(productObj);
  };

  console.log(productsData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', productsData.name);
    formData.append('category', productsData.category);
    formData.append('price', productsData.price);
    formData.append('description', productsData.description);
    formData.append('image', productsData.image);
    dispatch(addProduct(formData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" placeholder='name of product' name='name' value={productsData.name} onChange={handleChange}/>
        <br/>
        <input type="file" placeholder='image of product' name='image' onChange={handleChange}/>
        <br/>
        <input type="text" placeholder='category of product' name='category' value={productsData.category} onChange={handleChange}/>
        <br/>
        <input type="number" placeholder='Price of product' name='price' value={productsData.price} onChange={handleChange}/>
        <br/>
        <textarea placeholder='Description of product' name='description' value={productsData.description} onChange={handleChange}/>
        <br/>
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
