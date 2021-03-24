import { useState } from 'react';

const Home = () => {
  // let name = 'dingiooo';
  const [name, setName] = useState('dingiooo')
  const [age, setAge] = useState(25)

  const handleClick = () => {
    setName('dingini');
    setAge('31')
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>Click Me, Dingo</button>
    </div>
  );
}

export default Home;