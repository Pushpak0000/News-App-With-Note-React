import React from 'react'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img-5.png'
import img6 from '../assets/img6.png'
import img7 from '../assets/img7.jpg'
const NewsTodoSlider = () => {
    return (
        <div style={{ marginTop: '3rem', marginBottom:'4rem'}} id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img style={{ width: '20rem', height: '20rem' }} src={img4} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{ width: '20rem', height: '20rem' }} src={img5} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{ width: '20rem', height: '20rem' }} src={img6} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{ width: '20rem', height: '20rem' }} src={img7} className="d-block w-100" alt="..." />
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

export default NewsTodoSlider
