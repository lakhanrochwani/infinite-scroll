import { useState } from 'react';
import Product from "./Product";
import mockProducts from "../Resources/mockProducts";

const VirtualizedProductList = () => {
    const [scrollTop, setScrollTop] = useState(0)
    const containerHeight = 500;
    const itemHeight = 100;
    const totalHeight = mockProducts.length * itemHeight;
    const firstVisibleIndex = Math.floor(scrollTop/itemHeight);
    const visibleCount = Math.ceil(containerHeight/itemHeight);
    const startIndex = firstVisibleIndex;
    const endIndex = Math.min(startIndex + visibleCount,mockProducts.length);
    const visibleProducts = mockProducts.slice(startIndex, endIndex); 
    const topSpacerHeight = startIndex * itemHeight;
    const bottomSpacerHeight = (mockProducts.length - endIndex) * itemHeight;
   
    

    const handleScroll = (event) => {
        setScrollTop(event.currentTarget.scrollTop)
    }
     
    return (
        <>
        <p>Scroll position : {scrollTop}px</p>
        <p>First visible index : {firstVisibleIndex}</p>
        <p>Last visible index : {endIndex}</p>
        <p>Product number : {firstVisibleIndex + 1}</p>
        <p>Visible count : {visibleCount}</p>

        <div onScroll={handleScroll} className="virtualized-container">
            <div style={{height: `${topSpacerHeight}px`}}></div>
            {visibleProducts.map(product => (
                <Product 
                key={product.id}
                index={product.id}
                name={product.productName}
                price={product.productPrice}
                quantity={product.quantity}
            />))}
            <div style={{height: `${bottomSpacerHeight}px`}}></div>
        </div>
        </>                    
    );
};

export default VirtualizedProductList;