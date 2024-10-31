import React from 'react';
import arrow from "../images/Arrow.png";
import arrowRight from "../images/ArrowRight.png";
import Image from 'next/image';

const Category = () => {
    return (
        <div className="Category-section">
            <div className="Category_content">
                <div className="Category_toggler">
                    <h3>Browse By Category</h3>
                    <span className='flex'>
                        <Image src={arrow} alt="Arrow" width={20} height={20} />
                        <Image src={arrowRight} alt="Arrow Right" width={20} height={20} />
                    </span>
                </div>
                <div className="Categories">
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 2C10.4477 2 10 2.44772 10 3C10 3.55228 10.4477 4 11 4V2ZM13.3438 4C13.896 4 14.3438 3.55228 14.3438 3C14.3438 2.44772 13.896 2 13.3438 2V4ZM13 18.8594C13 18.3071 12.5523 17.8594 12 17.8594C11.4477 17.8594 11 18.3071 11 18.8594H13ZM11 18.8702C11 19.4225 11.4477 19.8702 12 19.8702C12.5523 19.8702 13 19.4225 13 18.8702H11ZM7.3125 3.625H16.6875V1.625H7.3125V3.625ZM16.6875 3.625C16.7824 3.625 16.8594 3.70195 16.8594 3.79688H18.8594C18.8594 2.59738 17.887 1.625 16.6875 1.625V3.625ZM16.8594 3.79688V20.2031H18.8594V3.79688H16.8594ZM16.8594 20.2031C16.8594 20.298 16.7824 20.375 16.6875 20.375V22.375C17.887 22.375 18.8594 21.4026 18.8594 20.2031H16.8594ZM16.6875 20.375H7.3125V22.375H16.6875V20.375ZM7.3125 20.375C7.21758 20.375 7.14062 20.298 7.14062 20.2031H5.14062C5.14062 21.4026 6.11301 22.375 7.3125 22.375V20.375ZM7.14062 20.2031V3.79688H5.14062V20.2031H7.14062ZM7.14062 3.79688C7.14062 3.70195 7.21758 3.625 7.3125 3.625V1.625C6.11301 1.625 5.14062 2.59738 5.14062 3.79688H7.14062ZM11 4H13.3438V2H11V4ZM11 18.8594V18.8702H13V18.8594H11ZM6.5 17.5H17.5V15.5H6.5V17.5Z" fill="black"></path>
                            </svg>
                            <p>Phones</p>
                        </div>
                    </div>
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7H9ZM5 9C5 6.79086 6.79086 5 9 5H15C17.2091 5 19 6.79086 19 9V15C19 17.2091 17.2091 19 15 19H9C6.79086 19 5 17.2091 5 15V9Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9 17C9.55228 17 10 17.4477 10 18V20H14V18C14 17.4477 14.4477 17 15 17C15.5523 17 16 17.4477 16 18V21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21V18C8 17.4477 8.44772 17 9 17Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.44772 8.44772 2 9 2H15C15.5523 2 16 2.44772 16 3V6C16 6.55228 15.5523 7 15 7C14.4477 7 14 6.55228 14 6V4H10V6C10 6.55228 9.55228 7 9 7C8.44772 7 8 6.55228 8 6V3Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10.3571 8.5C10.6332 8.5 10.8571 8.72386 10.8571 9V14.5C10.8571 14.7761 10.6332 15 10.3571 15C10.0809 15 9.85706 14.7761 9.85706 14.5V9C9.85706 8.72386 10.0809 8.5 10.3571 8.5Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3571 11C12.6332 11 12.8571 11.2239 12.8571 11.5V14.5C12.8571 14.7761 12.6332 15 12.3571 15C12.0809 15 11.8571 14.7761 11.8571 14.5V11.5C11.8571 11.2239 12.0809 11 12.3571 11Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M14.3571 10C14.6332 10 14.8571 10.2239 14.8571 10.5V14.5C14.8571 14.7761 14.6332 15 14.3571 15C14.0809 15 13.8571 14.7761 13.8571 14.5V10.5C13.8571 10.2239 14.0809 10 14.3571 10Z" fill="black"></path></svg>
                            <p>Smart Watches</p>
                        </div>
                    </div>
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 7H6C6.53043 7 7.03914 6.78929 7.41421 6.41421C7.78929 6.03914 8 5.53043 8 5C8 4.73478 8.10536 4.48043 8.29289 4.29289C8.48043 4.10536 8.73478 4 9 4H15C15.2652 4 15.5196 4.10536 15.7071 4.29289C15.8946 4.48043 16 4.73478 16 5C16 5.53043 16.2107 6.03914 16.5858 6.41421C16.9609 6.78929 17.4696 7 18 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <p>Cameras</p>
                        </div>
                    </div>
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V15C9 13.8954 8.10457 13 7 13H6C4.89543 13 4 13.8954 4 15ZM4 15V12C4 9.87827 4.84285 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L20 15M20 15C20 13.8954 19.1046 13 18 13H17C15.8954 13 15 13.8954 15 15V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <p>Headphones</p>
                        </div>
                    </div>
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 20H17M9 16V20M15 16V20M3.42857 13.7143H20.5714M4 4H20C20.5523 4 21 4.44772 21 5V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V5C3 4.44772 3.44772 4 4 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <p>Computers</p>
                        </div>
                    </div>
                    <div className="All_Categories">
                        <div className="icon">
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 7C3.44772 7 3 7.44772 3 8V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V8C21 7.44772 20.5523 7 20 7H4ZM1 8C1 6.34315 2.34315 5 4 5H20C21.6569 5 23 6.34315 23 8V16C23 17.6569 21.6569 19 20 19H4C2.34315 19 1 17.6569 1 16V8Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C8.55228 9 9 9.44771 9 10V11H10C10.5523 11 11 11.4477 11 12C11 12.5523 10.5523 13 10 13H9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H7V10C7 9.44771 7.44772 9 8 9Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.5C15.8284 9.5 16.5 10.1716 16.5 11V11.0104C16.5 11.8388 15.8284 12.5104 15 12.5104C14.1716 12.5104 13.5 11.8388 13.5 11.0104V11C13.5 10.1716 14.1716 9.5 15 9.5Z" fill="black"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18 11.5C18.8284 11.5 19.5 12.1715 19.5 13V13.0103C19.5 13.8387 18.8284 14.5103 18 14.5103C17.1716 14.5103 16.5 13.8387 16.5 13.0103V13C16.5 12.1715 17.1716 11.5 18 11.5Z" fill="black"></path></svg>
                            <p>Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
