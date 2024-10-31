"use client";
import React from 'react';
import Image from 'next/image';
import playstation from '../images/playstation.png';
import airpods from '../images/airpodsmax.png';
import visionpro from '../images/visionpro.png';
import macbook from '../images/macbook.png';

const SmallBanner = () => {
    return (
        <div className="mini_banner_section">
            {/* Left Banners Section */}
            <div className="left_banner_section">
                {/* PlayStation Banner */}
                <div className="playstation_banner">
                    <Image src={playstation} alt="PlayStation 5" className="responsive-image" />
                    <div>
                        <h1 className="text-[2rem] font-bold">PlayStation <span>5</span></h1>
                        <p className="mini_banner_desc">
                            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.
                        </p>
                    </div>
                </div>

                {/* Smaller Banners (AirPods Max & Vision Pro) */}
                <div className="smaller_banner">
                    {/* AirPods Max Banner */}
                    <div style={{ backgroundColor: '#EDEDED' }} className="smaller_banner_main">
                        <Image src={airpods} alt="Apple AirPods Max" className="responsive-image pb-5" />
                        <div className="mini_banner_info">
                            <h1>Apple Airpods<span> MAX</span></h1>
                            <p className="smaller_banner_desc">
                                Computational audio. Listen, it&rsquo;s powerful.
                            </p>
                        </div>
                    </div>

                    {/* Vision Pro Banner */}
                    <div style={{ backgroundColor: '#353535', color: 'white' }} className="vision_banner">
                        <Image src={visionpro} alt="Apple Vision Pro" className="responsive-image" />
                        <div className="mini_banner_info">
                            <h1>Apple Vision <span>Pro</span></h1>
                            <p className="smaller_banner_desc">
                                An immersive way to experience entertainment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* MacBook Air Banner */}
            <div style={{ backgroundColor: '#EDEDED' }} className="macbook_banner">
                <div className="mini_banner_info">
                    <h1>Macbook <span>Air</span></h1>
                    <p className="smaller_banner_desc">
                        The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.
                    </p>
                    <button className="button-outline">Shop now</button>
                </div>
                <Image src={macbook} className='w-auto h-auto responsive-image' alt="Macbook Air" />
            </div>
        </div>
    );
}

export default SmallBanner;
