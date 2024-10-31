import React from 'react';
import Image from 'next/image';
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import prod4 from "../images/prod4.png";

const VerticalBanner: React.FC = () => {
    return (
        <div className="vertical-banners">
            <div className="banner" style={{ backgroundColor: '#F9F9F9' }}>
                <div className="product-image">
                    <Image src={prod1} alt="iPad Pro" />
                </div>
                <div className="info">
                    <div className="title">I Pad Pro</div>
                    <div className="description">
                        iPad Pro combines a magnificent 10.2-inch Retina display, incredible performance, multitasking, and ease of use.
                    </div>
                </div>
                <button className="button-outline">Shop Now</button>
            </div>

            <div className="banner" style={{ backgroundColor: '#EAEAEA' }}>
                <div className="product-image">
                    <Image src={prod2} alt="Samsung Galaxy" />
                </div>
                <div className="info">
                    <div className="title">Samsung Galaxy</div>
                    <div className="description">
                        Galaxy Fold 5 combines a stunning foldable display, impressive performance, multitasking features, and premium design.
                    </div>
                </div>
                <button className="button-outline">Shop Now</button>
            </div>

            <div className="banner" style={{ backgroundColor: '#2C2C2C' }}>
                <div className="product-image">
                    <Image src={prod3} alt="Macbook Pro" />
                </div>
                <div className="info" style={{ color: 'white' }}>
                    <div className="title">Macbook Pro</div>
                    <div className="description">
                        MacBook Pro combines a brilliant Retina display, powerful performance, advanced graphics, and long-lasting battery life.
                    </div>
                </div>
                <button className="button-outline" style={{ borderColor: 'white', color: 'white' }}>Shop Now</button>
            </div>

            <div className="banner" style={{ backgroundColor: 'black' }}>
                <div className="product-image">
                    <Image src={prod4} alt="Vision Pro" style={{ marginTop: 50 }} />
                </div>
                <div className="info" style={{ color: 'white', marginTop: 93 }}>
                    <div className="title">Vision Pro</div>
                    <div className="description">
                        Vision Pro offers a stunning immersive display, powerful performance, advanced controls, and effortless usability.
                    </div>
                </div>
                <button className="button-outline" style={{ borderColor: 'white', color: 'white' }}>Shop Now</button>
            </div>
        </div>
    );
};

export default VerticalBanner;
