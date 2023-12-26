import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Comments.css';
import { url } from '../App';
import Sidebar from './Sidebar';
import { BsPersonCircle }
  from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(3);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let userId = window.sessionStorage.getItem("id");
        console.log("userId : ", userId);
        const response = await axios.get(`${url}/users/${userId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchComments();
  }, []);

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComment, indexOfLastComment);

  const nextPage = () => {
    if (currentPage < Math.ceil(comments.length / commentsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const maxPage = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className='grid-container'>
      <Sidebar />
      <div>
        <Link to="/">
          <BsPersonCircle className='icon' style={{ fontSize: "30px", marginLeft: "1080px", marginTop: "20px" }} />
        </Link>
        <h1 style={{ marginLeft: "20px", color: "black" }}>Comments</h1>

        <div className="posts-container">
          {currentComments.map((comment) => (
            <div className="card" key={comment.id}>
              <h2> {comment.name}</h2>
              <p> {comment.email}</p>
              <p> {comment.body}</p>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          <span>{currentPage}</span>
          <button onClick={nextPage} disabled={currentPage === maxPage}>
            Next
          </button>

        </div>
      </div>
    </div>
  );
};

export default Comments;
