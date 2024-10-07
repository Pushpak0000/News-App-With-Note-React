import React from 'react'
import {Link} from 'react-router-dom'
const News = ({news}) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
            <img src={!news.urlToImage ?'https://media.istockphoto.com/id/1334419989/photo/3d-red-question-mark.jpg?s=612x612&w=0&k=20&c=bpaGVuyt_ACui3xK8CvkeoVQC-jczxANZTMXGKAE11E=' : news.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.description}</p>
              <Link to={news.url} target='_blank'  className="btn btn-dark">Read News</Link>
            </div>
            
        </div>   

                         
        </>


    )
}

export default News
