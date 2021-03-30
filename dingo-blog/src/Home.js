import { useState } from 'react';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Dingo 1', body: 'lorem ipsum', author: 'dingiooo', id: 1 },
    { title: 'Dingo 2', body: 'lorem ipsum', author: 'doskus', id: 2 },
    { title: 'Dingo 3', body: 'lorem ipsum', author: 'dungo', id: 3 }
  ])
  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;