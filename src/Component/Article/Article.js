import React from 'react';
import './Article.css';

const Article = () => {
    return (
        <div className='main-article'>
            <div className='article-heading'>
                <h1>How Can We Help You?</h1>
                <p>Let's do great work together</p>
            </div>
            <div className='svg'>
                <div className='circle'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" stroke="#A2BDAA" />
                </svg></div>
                <div className='line'><svg xmlns="http://www.w3.org/2000/svg" width="192" height="2" viewBox="0 0 192 2" fill="none">
                    <path d="M1 1H191" stroke="#A2BDAA" stroke-linecap="square" stroke-dasharray="10 10" />
                </svg></div>
                <div className='circle'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" stroke="#A2BDAA" />
                </svg></div>
                <div className='line'><svg xmlns="http://www.w3.org/2000/svg" width="192" height="2" viewBox="0 0 192 2" fill="none">
                    <path d="M1 1H191" stroke="#A2BDAA" stroke-linecap="square" stroke-dasharray="10 10" />
                </svg></div>
                <div className='circle'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" stroke="#A2BDAA" />
                </svg></div>
                <div className='line'><svg xmlns="http://www.w3.org/2000/svg" width="192" height="2" viewBox="0 0 192 2" fill="none">
                    <path d="M1 1H191" stroke="#A2BDAA" stroke-linecap="square" stroke-dasharray="10 10" />
                </svg></div>
                <div className='circle'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="19.5" fill="white" stroke="#A2BDAA" />
                </svg></div>
            </div>
            <div className='main-detail'>
                <div className='detail'>Update content <br /> on Your Website</div>
                <div className='detail'>Improve User <br /> Experience</div>
                <div className='detail'>Request Free <br /> Website Review</div>
                <div className='detail'>Improve your <br /> SEO Rankings</div>
            </div>
            <div className='article'>
                <h1>Read More Articles From Our Blog</h1>
            </div>
            <div className='main-cart'>
                <div className="cart">
                    <img src="/images/cart1.png" alt="" />
                    <h3>10 Reasons to invest in SEO copywriting services</h3>
                    <button>Read More</button>
                </div>
                <div className="cart">
                    <img src="/images/cart2.png" alt="" />
                    <h3>How to get hired at a top Digital Marketing</h3>
                    <button>Read More</button>
                </div>
                <div className="cart">
                    <img src="/images/abcd.png" alt="" />
                    <h3>Copywriting guidelines during the coronavirus</h3>
                    <button>Read More</button>
                </div>
            </div>
            <div className='subscribe'>
                <div className='subscribe-contain'>
                    <div>
                    <h2>Subscribe to get information, latest news and other interesting offers about </h2>
                    </div>
                    <div>
                        <input placeholder='Your email' type="text" />
                        <button className='started-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;