import React from 'react';
import Image from 'next/image';
import twitter from '../images/Twitter.png'
import tiktok from '../images/Tiktok.png'
import facebook from '../images/Facebook.png'
import instagram from '../images/Instagram.png'

const Footer = () => {
  return (
      <footer className="Footer_footer__4vzqH">
        <div className="Footer_info__LJ5bJ">
          <div className="Footer_footerleft__t7qYv">
            <div className="logo">
            <svg width="67" height="24" viewBox="0 0 67 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.9829 16.5248C13.9269 17.7968 8.81629 17.9448 6.89629 17.9448C3.10429 17.9448 0.800293 15.4968 0.800293 11.9448C0.800293 8.41682 3.12829 5.96882 6.89629 5.96882C8.72029 5.96882 13.9749 7.16482 15.0309 8.43682L9.63229 9.92883C8.86429 9.08883 8.02429 8.75282 6.89629 8.75282C5.28829 8.75282 3.89629 10.0488 3.89629 11.9448C3.89629 14.0088 5.19229 15.1608 6.89629 15.1608C7.90429 15.1608 9.05629 14.7768 9.68029 13.9848L14.9829 16.5248Z" fill="white"></path><path d="M29.6038 6.75682L22.6198 23.3168H19.1878L21.4198 18.1568L16.5958 6.75682H20.0038L22.4038 12.8528L23.0998 15.0368L23.7718 12.8528L26.1718 6.75682H29.6038Z" fill="white"></path><path d="M37.4497 9.30083C35.7217 9.30083 34.4737 10.6208 34.4737 12.4208C34.4737 14.1968 35.7217 15.5168 37.4497 15.5168C39.1297 15.5168 40.2817 14.2688 40.2817 12.4208C40.2817 10.5488 39.1297 9.30083 37.4497 9.30083ZM31.4737 18.0368V0.444824H34.5217V6.70882L34.4737 7.52482C34.9777 6.85282 36.5137 6.46882 37.5697 6.46882C41.3377 6.46882 43.4498 9.22882 43.4498 12.4208C43.4498 16.0208 41.2897 18.3488 37.5697 18.3488C36.6577 18.3488 35.1937 17.9168 34.5937 17.1968L34.6177 17.8448V18.0368H31.4737Z" fill="white"></path><path d="M56.138 16.5968C55.25 17.7488 53.2101 18.4448 51.4581 18.4448C47.6421 18.4448 45.5061 15.8288 45.5061 12.4448C45.5061 8.98882 47.6181 6.46882 51.3381 6.46882C55.0341 6.46882 57.146 8.98882 57.146 12.4448C57.146 12.8288 57.146 13.0688 57.122 13.4048H48.6261C48.7941 14.8208 49.8501 15.7088 51.4581 15.7088C52.6101 15.7088 53.69 15.3248 54.362 14.5808L56.138 16.5968ZM48.6741 11.3408H53.954C53.81 10.0688 52.7541 9.20482 51.3381 9.20482C49.9221 9.20482 48.7941 10.0688 48.6741 11.3408Z" fill="white"></path><path d="M65.5518 9.58882C64.9278 9.37282 64.3759 9.30083 63.7279 9.30083C63.2959 9.30083 62.9358 9.32483 62.5998 9.46882V18.0368H59.5039V7.26082C60.4399 6.78082 62.0478 6.44483 63.6078 6.44483C64.2798 6.44483 65.4799 6.51682 66.1999 6.78082L65.5518 9.58882Z" fill="white"></path></svg>
            </div>
            <p className="tagline">
              We are a residential interior design firm located in Portland. Our boutique-studio
              offers more than
            </p>
          </div>

          <nav className="Footer_footernavigation__6ZWRt">
            <div>
              <h3 className="Footer_title__D7snR">Services</h3>
              <div className="Footer_links__LGHlK">
                <a href="#">Bonus program</a>
                <a href="#">Gift cards</a>
                <a href="#">Credit and payment</a>
                <a href="#">Service contract</a>
                <a href="#">Non-cash account</a>
                <a href="#">Payment</a>
              </div>
            </div>
            <div>
              <h3 className="Footer_title__D7snR">Assistance to the buyer</h3>
              <div className="Footer_links__LGHlK">
                <a href="#">Find an order</a>
                <a href="#">Terms of delivery</a>
                <a href="#">Exchange and return of goods</a>
                <a href="#">Guarantee</a>
                <a href="#">Frequently asked questions</a>
                <a href="#">Terms of use of the site</a>
              </div>
            </div>
          </nav>
        </div>

        <div className="Footer_socialicons__Czhpe">
          <Image className="Footer_img__DY4no" alt="Twitter" src={twitter} />
          <Image className="Footer_img__DY4no" alt="Facebook" src={facebook} />
          <Image className="Footer_img__DY4no" alt="TikTok" src={tiktok} />
          <Image className="Footer_img__DY4no" alt="Instagram" src={instagram} />
        </div>
      </footer>
  );
};

export default Footer;
