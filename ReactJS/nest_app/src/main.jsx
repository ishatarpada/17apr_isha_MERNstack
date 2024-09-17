import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';

// Customer Panel
import Layout from './Layout';
import Blog from './Component/Customer/Blog'
import About from './Component/Customer/About'
import Menu from './Component/Customer/Menu';
import Shop from './Component/Customer/Shop';
import Vendor from './Component/Customer/Vendor';
import Contact from './Component/Customer/Contact';


// Admin panel
import AdminLayout from './AdminLayout';
import AddBlog from './Component/admin/AddBlog';
import ManageBlog from './Component/admin/ManageBlog';
import EditBlog from './Component/admin/EditBlog';
import DeleteBlog from './Component/admin/DeleteBlog'
import AddCategory from './Component/admin/AddCategory';
import Category from './Component/admin/Category';
import EditCategory from './Component/admin/EditCategory'
import DeleteCategory from './Component/admin/DeleteCategory';
import SubCategory from './Component/admin/SubCategory';
import AddSubCategory from './Component/admin/AddSubCategory';
import EditSubCategory from './Component/admin/EditSubCategory';
import DeleteSubCategory from './Component/admin/DeleteSubCategory';
import AddProduct from './Component/admin/AddProduct';
import Product from './Component/admin/Product';
import EditProduct from './Component/admin/EditProduct';
import DeleteProduct from './Component/admin/DeleteProduct';
import Order from './Component/admin/Order';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>

        {/* Customer panel */}
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />


        {/* Admin Panel */}
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path='/manage-blog' element={<ManageBlog />} />
        <Route path="/delete-blog/:id" element={<DeleteBlog/>}/>
        <Route path="/edit-blog/:id" element={<EditBlog/>}/>
        <Route path='/add-category' element={<AddCategory />} />
        <Route path='/category' element={<Category />} />
        <Route path="/delete-category/:id" element={<DeleteCategory/>}/>
        <Route path="/edit-category/:id" element={<EditCategory/>}/>
        <Route path='/add-sub-category' element={<AddSubCategory />} />
        <Route path='/subcategory' element={<SubCategory />} />
        <Route path="/delete-subcategory/:id" element={<DeleteSubCategory/>}/>
        <Route path="/edit-subcategory/:id" element={<EditSubCategory/>}/>
        <Route path="/add-Products" element={<AddProduct />} />
        <Route path="/manage-Products" element={<Product />} />
        <Route path="/delete-product/:id" element={<DeleteProduct/>}/>
        <Route path="/edit-product/:id" element={<EditProduct/>}/>
        <Route path="/order" element={<Order />} />

      </Routes>
    </Router>
  </React.StrictMode>
);