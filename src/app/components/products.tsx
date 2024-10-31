import React from 'react';
import Image from 'next/image';
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";
import p5 from "../images/p5.png";
import p6 from "../images/p6.png";
import p7 from "../images/p7.png";
import p8 from "../images/p8.png";

// Define an array of products
const products = [
  {
    id: 1,
    title: "Apple iPhone 14 Pro Max",
    description: "128GB Deep Purple",
    price: "$900",
    image: p1,
  },
  {
    id: 2,
    title: "Apple AirPods Max",
    description: "Wireless Over-Ear Headphones",
    price: "$850",
    image: p2,
  },
  {
    id: 3,
    title: "Apple iPad 9th Generation",
    description: "64GB Wi-Fi - Space Gray",
    price: "$1750",
    image: p3,
  },
  {
    id: 4,
    title: "Blackmagic Pocket Cinema",
    description: "Super 35 HDR Sensor",
    price: "$700",
    image: p4,
  },
  {
    id: 5,
    title: "Samsung Galaxy Buds FE",
    description: "True Wireless Earbuds - Graphite",
    price: "$1200",
    image: p5,
  },
  {
    id: 6,
    title: "Samsung Galaxy Watch 6",
    description: "44mm Bluetooth Smartwatch - Silver",
    price: "$650",
    image: p6,
  },
  {
    id: 7,
    title: "Samsung Galaxy Z Fold 5",
    description: "512GB Phantom Black",
    price: "$1900",
    image: p7,
  },
  {
    id: 8,
    title: "Apple iPhone 14 Pro Max",
    description: "128GB Deep Purple",
    price: "$2100",
    image: p8,
  },
];

const Products: React.FC = () => {
  return (
    <div className="Products_products__WZIsE">
      <div className="Products_productsnavigation___vuSE">
        <a href="#" className="Products_selected__KvSt9">New Arrival</a>
        <a href="#">Bestseller</a>
        <a href="#">Featured Products</a>
      </div>
      <div className="Products_productscards__WSkus">
        {products.map((product) => (
          <div key={product.id} className="Cards_card__qz_VZ">
            <div className="Cards_top__Ep88X">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.93415 18.5443L15.3152 27.3569C15.6397 27.6616 15.8019 27.814 15.9999 27.814C16.1979 27.814 16.3602 27.6616 16.6846 27.3569L26.0657 18.5443C28.6739 16.0942 28.9907 12.0622 26.797 9.2348L26.3845 8.70316C23.7603 5.32081 18.4928 5.88806 16.6488 9.75157C16.3883 10.2973 15.6115 10.2973 15.351 9.75157C13.5071 5.88806 8.23955 5.32081 5.61531 8.70316L5.20284 9.2348C3.00918 12.0622 3.32592 16.0942 5.93415 18.5443Z" stroke="none" strokeOpacity="0.77" strokeWidth="1.4"></path>
              </svg>
            </div>
            <div className="imagewrapper" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Image className="Cards_productimage__tH3SN" alt={product.title} src={product.image} />
            </div>
            <div className="Cards_productdetails__qE4Nb" style={{ width: '100%' }}>
              <h5 className="Cards_producttitle__hkzsp" style={{ fontWeight: 300 }}>
                {product.title}
                <br />
                <span>{product.description}</span>
              </h5>
              <div className="Cards_price__DfQVI">{product.price}</div>
              <button className="button-filled" style={{ position: 'absolute', bottom: '25px' }}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
