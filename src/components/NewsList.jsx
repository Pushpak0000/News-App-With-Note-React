import React, { useContext} from 'react'
import News from './News'
import { NewsAppContext } from '../store/news-app-store'
import {nanoid} from '@reduxjs/toolkit'
import WelcomeMessage from './WelcomeMessage'
import Loading from './Loading'
import NewsSlider from './NewsSlider'
const NewsList = () => {
    const {articles} = useContext(NewsAppContext);
    const {loading} = useContext(NewsAppContext);
    return (
        <>  
        <NewsSlider/>
            <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded body-container">
                <div className='container text-center'>
                <div className="row row-gap-3">
                    {loading && <Loading/>}
                    {!loading && articles.length === 0 && <WelcomeMessage/>}
                    {!loading && articles.map((news)=> (
                        <div key={nanoid()} className="col">
                            {news.urlToImage ?<News news={news}/> :null}
                        
                        </div> 
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-between" style={{marginTop:'3rem'}}>
            {/* <button onClick={handlePrevious} type="button" className="btn btn-dark">Previous</button>
            <button onClick={handleNext} type="button" className="btn btn-dark">Next</button> */}
            </div>
            </div>
        </>
    )
}

export default NewsList
