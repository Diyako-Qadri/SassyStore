'use client';

import { useEffect, useState } from 'react';
import { ProductTypes } from '@/utils/types';
import renderStars from '../Rating';
import { FcLike } from 'react-icons/fc';
import { useCard } from '@/context/StateContext';

type ProductCategoryProps = {
  productCategory: string;
};

const Product = ({ productCategory }: ProductCategoryProps) => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
  const { addToCard } = useCard();

  const handleAddToCart = (product: ProductTypes) => {
    console.log('Product being added:', product);
    addToCard(product);
  };

  const fetchProducts = async (): Promise<void> => {
    const url = 'https://fakestoreapi.com/products';
    try {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log('Something went wrong: ' + error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(
    item => item.category === productCategory
  );

  const generateClassName = (category: string): string => {
    if (category.includes('women')) {
      return 'product__women';
    } else if (category.includes('men')) {
      return 'product__men';
    }
    return `product__${category}`;
  };

  return (
    <div className={generateClassName(productCategory) + ` product`}>
      {filteredProducts.map(product => (
        <div key={product.id} className="product__container">
          <div className="product__container--img">
            <img src={product.image} alt={product.title} width={100} />
          </div>
          <div>
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 150) + '...'}</p>
            <p>Price: ${product.price}</p>
            <p>
              {renderStars(product.rating.rate)} ({product.rating.count}{' '}
              reviews)
            </p>
          </div>
          <div className="product__container--btns">
            <button
              className="product__container--btns-add"
              onClick={() => handleAddToCart(product)}
            >
              Add to card
            </button>
            <button className="product__container--btns-like">
              <FcLike />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
