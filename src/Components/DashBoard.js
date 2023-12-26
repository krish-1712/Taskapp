import './DashBoard.css';
import Sidebar from './Sidebar';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { url } from '../App';


const DashBoard = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let userId = window.sessionStorage.getItem("id");
        console.log("userId : ", userId);
        const postsResponse = await axios.get(`${url}/users/${userId}/posts`);
        const commentsResponse = await axios.get(`${url}/users/${userId}/comments`);
        const todosResponse = await axios.get(`${url}/users/${userId}/todos`);
        console.log("post response", postsResponse.data);
        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setTodos(todosResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const postsCount = posts.length;
  const commentsCount = comments.length;
  const todosCount = todos.length;
  console.log("post", postsCount)


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
    <div className='grid-container'>
      <Sidebar />
      <div>
        <main className='main-container'>
          <div className='main-title'>
            <h3 style={{ marginTop: "20px", color: "black" }}>DASHBOARD</h3>
            <Link to='/'>
              <BsPersonCircle className='icon' style={{ fontSize: "25px" }} />
            </Link>
          </div>
          <div className='carded'>
            <div className='carded-inner'>
              <h3>POST</h3>
            </div>
            <p> {postsCount}</p>
          </div>
          <div className='carded'>
            <div className='carded-inner'>
              <h3>COMMENTS</h3>
            </div>
            <p> {commentsCount}</p>
          </div>
          <div className='carded'>
            <div className='carded-inner'>
              <h3>TO DOS</h3>

            </div>
            <p>{todosCount}</p>
          </div>

          <ResponsiveContainer width="90%" height={300} style={{ marginTop: "40px" }}>
            <BarChart
              data={[
                { name: 'Posts', value: posts.length },
                { name: 'Comments', value: comments.length },
                { name: 'Todos', value: todos.length }
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <div className='square-modal'>
            <h2>User Details</h2>
            <div className='table-container'>
              <table className="styled-table">
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td>{user?.id}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{user?.name}</td>
                  </tr>
                  <tr>
                    <td>Username:</td>
                    <td>{user?.username}</td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>{user?.email}</td>
                  </tr>

                  {user?.address && (
                    <>
                      <tr>
                        <td>Address:</td>
                        <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                      </tr>
                    </>
                  )}
                  <tr>
                    <td>Phone:</td>
                    <td>{user?.phone}</td>
                  </tr>
                  <tr>
                    <td>Website:</td>
                    <td>{user?.website}</td>
                  </tr>
                  {user?.company && (
                    <>
                      <tr>
                        <td>Company:</td>
                        <td>{`${user.company.name} - ${user.company.catchPhrase}`}</td>
                      </tr>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>


    </div>




  )
}

export default DashBoard