import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import DashBoard from './Components/DashBoard';
import Post from './Components/Post';
import Sidebar from './Components/Sidebar';
import Comments from './Components/Comments';
import ToDos from './Components/ToDos';


export const url = 'https://jsonplaceholder.typicode.com'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/post" element={<Post />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/todos" element={<ToDos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;






