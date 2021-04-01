import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Dingo 1', body: 'lorem ipsum', author: 'dingiooo', id: 1 },
    { title: 'Dingo 2', body: 'lorem ipsum', author: 'doskus', id: 2 },
    { title: 'Dingo 3', body: 'lorem ipsum', author: 'dungo', id: 3 }
  ])
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
}

export default Home;