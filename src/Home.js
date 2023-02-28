import { useState } from 'react'
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ispum...", author: "The Nerd", id: 1 },
        { title: "Why back-end is better", body: "lorem ispum...", author: "The Nerd", id: 2 },
        { title: "Why i love DevOps", body: "lorem ispum...", author: "The Nerd", id: 3 }
    ]);

    return (

        <div className="home">
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p >Written By {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;