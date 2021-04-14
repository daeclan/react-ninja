import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Dingo 1', body: 'loren ipsum', author: 'dingiooo', id: 1 },
    { title: 'Dingo 2', body: 'loren ipsum', author: 'doskus', id: 2 },
    { title: 'Dingo 3', body: 'loren ipsum', author: 'dingiooo', id: 3 }
  ])

  const [name, setName] = useState('dingiooo')

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('ive done run')
    console.log(name)
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blog Posts" handleDelete={handleDelete} />
      <button onClick={() => setName('doskus')}>Change Name</button>
      <p>Name: {name}</p>
    </div>
  );
}

export default Home;