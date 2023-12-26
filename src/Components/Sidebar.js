import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Sidebar.css';
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { url } from '../App';




function Sidebar() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let userId = window.sessionStorage.getItem("id");
        console.log("userId : ", userId);
        const response = await axios.get(`${url}/users/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <aside id="sidebar" >
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <p>ARBAAN</p>
        </div>


      </div>
      <hr></hr>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard">
            <span className="icon">
            </span>
            Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/post">
            <span className="icon">
            </span>
            Post
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/comments">
            <span className="icon">
            </span>
            Comments
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/todos">
            <span className="icon">
            </span>
            ToDos
          </Link>
        </li>
      </ul>

      <div className='header-right'>
        <Link to="/">
          <BsPersonCircle className='icon' />
          <h2 style={{ fontSize: "20px"}} className='text no-underline'>{user?.name}</h2>
        </Link>
      </div>

    </aside>

  )
}

export default Sidebar