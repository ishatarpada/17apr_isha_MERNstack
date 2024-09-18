import React, { useState } from 'react';
import useHttp from '../useHttp/useHttp';
import Card from './Reusable/Card';
import Modal from './Reusable/Modal';

export default function Layout() {
  const { data, loading, error } = useHttp('https://api.escuelajs.co/api/v1/products');
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  if (loading) {
    return <div className="text-white text-center text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center text-2xl">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen min-w-screen bg-gray-800 font-serif">
      <h1 className="text-center font-bold font-serif p-5 text-white text-5xl">Products</h1>
      <div className="flex flex-wrap justify-center items-center gap-8 container mx-auto">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.images[0]}
            category={item.category.name}
            onViewDetails={() => handleViewDetails({
              title: item.title,
              price: item.price,
              description: item.description,
              image: item.images[0],
              category: item.category.name,
            })} 
          />
        ))}
      </div>

      {/* Modal component to show product details */}
      <Modal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        product={selectedProduct} 
      />
    </div>
  );
}
