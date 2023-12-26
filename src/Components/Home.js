// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { BsFileEarmarkPost, BsPeopleFill }
//   from 'react-icons/bs'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
//   from 'recharts';
// import { url } from '../App';
// import './Home.css';
// import Header from './Header';
// import { LiaComments } from "react-icons/lia";







// const Home = () => {
//   const [userPosts, setUserPosts] = useState([]);
//   const [userComments, setUserComments] = useState([]);
//   const [userTodos, setUserTodos] = useState([]);


//   const [posts, setPosts] = useState([]);
//   const [comments, setComments] = useState([]);
//   const [todos, setTodos] = useState([]);

  
 
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let userId=window.sessionStorage.getItem("id");
//         console.log("userId : ",userId);
//         const postsResponse = await axios.get(`${url}/users/${userId}/posts`);
//         const commentsResponse = await axios.get(`${url}/comments`);
//         const todosResponse = await axios.get(`${url}/todos`);
//         console.log("post response", postsResponse.data);
//         setPosts(postsResponse.data);
//         setComments(commentsResponse.data);
//         setTodos(todosResponse.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);


//   const postsCount = posts.length;
//   const commentsCount = userComments.length;
//   const todosCount = userTodos.length;
//   console.log("post",postsCount)






//   // useEffect(() => {
//   //   const fetchUserData = async () => {
//   //     try {
       
//   //       let userId=window.sessionStorage.getItem("id");
//   //       console.log(userId);
//   //       const postsResponse = await axios.get(`${url}/posts/${userId}`);
//   //       const commentsResponse = await axios.get(`${url}/comments/${userId}`);
//   //       const todosResponse = await axios.get(`${url}/todos/${userId}`);

//   //       console.log(postsResponse)

//   //       setUserPosts(postsResponse.data);
//   //       setUserComments(commentsResponse.data);
//   //       setUserTodos(todosResponse.data);
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };

//   //   fetchUserData();
//   // });

 




//   return (




//     <div className='grid-container'>

//       <div>
//         <main className='main-container'>
//           <Header />

//           <div className='main-title'>
//             <h3 style={{ marginTop: "20px" }}>DASHBOARD</h3>
//           </div>


//           <div className='carded'>
//             <div className='carded-inner'>
//               <h3>POST</h3>
//               <BsFileEarmarkPost className='carded_icon' />
//             </div>
//             <p>Total Posts: {postsCount}</p>
//           </div>
//           <div className='carded'>
//             <div className='carded-inner'>
//               <h3>COMMENTS</h3>
//               <LiaComments className='carded_icon' />
//             </div>
//             <p>Total Comments: {commentsCount}</p>
//           </div>
//           <div className='carded'>
//             <div className='carded-inner'>
//               <h3>TO DOS</h3>
//               <BsPeopleFill className='carded_icon' />
//             </div>
//             <p>Total To Dos: {todosCount}</p>
//           </div>

      


//           <div className="charts">
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={posts}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="id" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="POST" fill="#8884d8" />
//                 <Bar dataKey="id" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height={300}>
//               <LineChart
//                 width={500}
//                 height={300}
//                 data={comments}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="id" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="COMMENTS" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="id" stroke="#82ca9d" />
//               </LineChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart
//                 width={500}
//                 height={300}
//                 data={todos}
//                 margin={{
//                   top: 5,
//                   right: 30,
//                   left: 20,
//                   bottom: 5,
//                 }}
//               >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="id" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="TODOS" fill="#8884d8" />
//                 <Bar dataKey="id" fill="#82ca9d" />
//               </BarChart>
//             </ResponsiveContainer>

//           </div>
//         </main>
//       </div>


//     </div>



//   )
// }

// export default Home





