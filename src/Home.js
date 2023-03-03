import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ispum...", author: "Nerd", id: 1 },
        { title: "Why back-end is better", body: "lorem ispum...", author: "Hassan", id: 2 },
        { title: "Why i love DevOps", body: "lorem ispum...", author: "Hassan", id: 3 }
    ]);
    
    const handelDelete = (id) => {
        const newBlogs = blogs.filter(blog=> blog.id !== id);
        setBlogs(newBlogs);
    } 


    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handelDelete={handelDelete} />
          
        </div>
    );
}

export default Home;