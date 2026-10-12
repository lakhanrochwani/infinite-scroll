import { useState, useRef, useEffect } from 'react';
import mockProducts from '../Resources/mockProducts.json';
import Product from './Product';

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(
    mockProducts.slice(0, 5)
  );
  const sentinelRef = useRef(null);
  // let count = visibleProducts.length;

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        console.log('entries', entries);

        if (entry.isIntersecting) {
          console.log('Sentinel is visible');
          handleLoadMore();
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((currentProducts) => {
      // Have we already displayed every product?
      if (currentProducts.length >= mockProducts.length) {
        return currentProducts;
      }
  
      // Find the next batch of 5 products
      const nextProducts = mockProducts.slice(
        currentProducts.length,
        currentProducts.length + 5
      );
  
      // Keep the existing products and append the new ones
      return [...currentProducts, ...nextProducts];
    });
  };

  return (
    <div className="product-list">
      {visibleProducts.length &&
        visibleProducts.map((product) => (
          <Product
            key={product.id}
            name={product.productName}
            price={product.productPrice}
            quantity={product.quantity}
          />
        ))}
      <div className="sentinel" ref={sentinelRef}></div>
      {/* {count < mockProducts.length && (
        <button onClick={handleLoadMore}>Load More...</button>
      )} */}
    </div>
  );
};

export default ProductList;
