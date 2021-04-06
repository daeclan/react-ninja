import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Dingo 1', body: 'lorem ipsum', author: 'dingiooo', id: 1 },
    { title: 'Dingo 2', body: 'lorem ipsum', author: 'doskus', id: 2 },
    { title: 'Dingo 3', body: 'lorem ipsum', author: 'dingiooo', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('ive run')
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blog Posts" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;