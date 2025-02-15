import React, { useContext, useRef } from 'react'
import { NewsAppContext } from '../store/news-app-store';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {

  const {getNews} = useContext(NewsAppContext)
  const inputValue = useRef('');

  function buttonClicked(e){
    e.preventDefault()
    const value = inputValue.current.value;
    inputValue.current.value = ''
    getNews(value)
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Pushpak</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink 
          to='/'
          className='nav-link' 
            aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' 
            to="news-todo">Notes</NavLink>
        </li>
      </ul>
      <form onSubmit={buttonClicked} className="d-flex" role="search">
        <input ref={inputValue} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
