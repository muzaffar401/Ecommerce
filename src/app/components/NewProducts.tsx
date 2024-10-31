import React from 'react';
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p9 from "../images/p9.png";
import p10 from "../images/p10.png";
import Image from 'next/image';

const products = [
    {
        id: 1,
        title: "Apple iPhone 14 Pro Max",
        description: "128GB Golden",
        price: 900,
        image: p2,
        alt: "Apple iPhone 14 Pro Max",
    },
    {
        id: 2,
        title: "Apple AirPods Max",
        description: "Wireless Over-Ear Headphones",
        price: 549,
        image: p3,
        alt: "Apple AirPods Max",
    },
    {
        id: 3,
        title: "Apple iPad 9th Generation",
        description: "64GB - Space Gray",
        price: 329,
        image: p4,
        alt: "Apple iPad 9th Generation",
    },
    {
        id: 4,
        title: "Blackmagic Pocket Cinema Camera 6K",
        description: "Super 35 HDR Sensor",
        price: 1995,
        image: p9,  // Updated image for Blackmagic Pocket Cinema Camera 6K
        alt: "Blackmagic Pocket Cinema Camera 6K",
    },
    {
        id: 5,
        title: "I Phone 14 Pro",
        description: "128GB Titanium",
        price: 549,
        image: p10,
        alt: "I Phone 14 Pro",
    },
];

const DiscountedProducts = () => {
    return (
        <div className="DiscountedProducts_discounted__xGhMR">
            <div className="DiscountedProducts_heading__y93e9">Discounts up to -50%</div>
            <div className="DiscountedProducts_products__yTW3U">
                {products.map((product) => (
                    <div key={product.id} className="Card_card__tXzEY">
                        <div className="Card_top__K2wdy">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="red" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z" stroke="none" strokeOpacity="0.77" strokeWidth="1.4"></path>
                            </svg>
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} className="imagewrapper">
                            <Image className="Card_productimage__wZbhh" src={product.image} alt={product.alt} />
                        </div>
                        <div style={{ width: '100%' }} className="Card_productdetails__GKYcP">
                            <h5 style={{ fontWeight: 300 }} className="Card_producttitle__lZiJi">
                                {product.title}
                                <br />
                                <span>{product.description}</span>
                            </h5>
                            <div className="Card_price__hW8RM">${product.price}</div>
                            <button style={{ position: 'absolute', bottom: '25px' }} className="button-filled">Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscountedProducts;
