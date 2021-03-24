const Home = () => {
  let name = 'dingiooo';

  const handleClick = () => {
    name = 'dingigi'
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