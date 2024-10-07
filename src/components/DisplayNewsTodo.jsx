import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { newsNotesAction } from '../store/news-todo-store';
const DisplayNewsTodo = () => {
    const {notes} = useSelector(state => state.notes);
    const dispatch = useDispatch();
    return (
        <div className='container text-center' style={{margin: '41px 48px'}}>
            <div className="row row-gap-3">
                {notes.map((item) => (              
                <div key={item.id} className="col">
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h2 style={{color:'#1c1c1c',textWrap:'balance'}} className="card-title">{item.title}</h2>
                        <h5 style={{color:'#bf0603'}} >{item.date}</h5>
                        <p style={{color:'#012a4a', textWrap:'balance'}} className="card-text">{item.note}</p>
                        <button onClick={()=> dispatch(newsNotesAction.deleteNote(item.id))} type="button" className="btn btn-warning">Delete</button>
                    </div>
                </div>   
                </div>
                 ))}
            </div>
        </div>
    )
}

export default DisplayNewsTodo
