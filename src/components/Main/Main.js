import './main.css'
import React from 'react'
import logo from '../../logos/quiz.png'
import Netflix from '../../logos/Netflix.png'
import todo from '../../logos/todo.png'

const Main = () => {
  return (
    <div className='main'>
        <div className='single-app'>
            <img className='logo-1' src={logo} alt="logo" />
            <h4>Quiz</h4>
            <a href=''></a>
        </div>
        <div className='single-app'>
            <img className='logo-1' src={todo} alt="logo" />
            
            <a href='https://react-todo01.netlify.app'><h4>Notes</h4></a>
        </div>
        <br/>
        <div className='single-app'>
            <img className='logo-1' src={Netflix} alt="logo" />
            <a href='https://react-netflix01.netlify.app'><h4>Netflix</h4></a>
            
        </div>
    </div>
  )
}

export default Main