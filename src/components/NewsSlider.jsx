import React from 'react'
import img1 from '../assets/news1.jpg'
import img2 from '../assets/news2.jpg'
import img3 from '../assets/news3.jpg'
const NewsSlider = () => {
    return (
        <div style={{marginTop:'3rem'}} id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img style={{width: '20rem', height: '20rem'}} src={img1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{width: '20rem', height: '20rem'}} src={img2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{width: '20rem', height: '20rem'}} src={img3} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default NewsSlider
