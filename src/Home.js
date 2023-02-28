import { useState } from 'react'
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ispum...", author: "The Nerd", id: 1 },
        { title: "Why back-end is better", body: "lorem ispum...", author: "The Nerd", id: 2 },
        { title: "Why i love DevOps", body: "lorem ispum...", author: "The Nerd", id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs= {blogs}  title = "All blogs"/>
        </div>
    );
}

export default Home;