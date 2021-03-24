import { useState } from 'react';

const Home = () => {
  // let name = 'dingiooo';
  const [name, setName] = useState('dingiooo')

  const handleClick = () => {
    setName('dingini');
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me, Dingo</button>
    </div>
  );
}

export default Home;