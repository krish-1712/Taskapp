import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Post.css';
import { url } from '../App';
import { Modal, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import { MdEdit, MdDelete } from 'react-icons/md';
import { BsPersonCircle }
    from 'react-icons/bs'
import { Link } from 'react-router-dom';


const Post = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editedBody, setEditedBody] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                let userId = window.sessionStorage.getItem("id");
                console.log("userId : ", userId);
                const response = await axios.get(`${url}/users/${userId}/posts`);
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        try {
            await axios.delete(`${url}/posts/${postId}`);
            const updatedPosts = posts.filter((post) => post.id !== postId);
            setPosts(updatedPosts);
        } catch (error) {
            console.error('Error deleting post: ', error);
        }
    };

    const handleGetPost = (post) => {
        setSelectedPost(post);
        setEditedBody(post.body);
        setShowModal(true);
    };

    const handleSave = () => {
        console.log('Edited Body:', editedBody);
        setShowModal(false);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const nextPage = () => {
        if (currentPage < Math.ceil(posts.length / postsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };




    const maxPage = Math.ceil(posts.length / postsPerPage);

    return (
        <div className='grid-container'>
            <Sidebar />
            <div>
                <Link to="/">
                    <BsPersonCircle className='icon' style={{ fontSize: "30px", marginLeft: "1080px", marginTop: "20px" }} />
                </Link>
                <h1 style={{ marginLeft: "20px", color: "black" }}>Posts</h1>
                <table className="posts-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPosts.map((post) => (
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>
                                    <div>
                                        <MdEdit
                                            className="edit-icon"
                                            onClick={() => handleGetPost(post)}
                                        />
                                        <MdDelete
                                            className="delete-icon"
                                            onClick={() => handleDelete(post.id)}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>


                <div className="pagination">

                    <button onClick={prevPage} disabled={currentPage === 1}>
                        Prev
                    </button>
                    <span>{currentPage}</span>
                    <button onClick={nextPage} disabled={currentPage === maxPage}>
                        Next
                    </button>
                </div>
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title className='title'>{selectedPost?.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='body'>
                        <textarea
                            value={editedBody}
                            onChange={(e) => setEditedBody(e.target.value)}
                            rows={6}
                            className="form-control"
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)} className='close_icon'  >
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSave} className='save_icon'>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Post;

