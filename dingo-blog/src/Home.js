const Home = () => {

  const handleClick = (e) => {
    console.log("DINGO", e)
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me, Dingo</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me a second time, dingo</button>
    </div>
  );
}

export default Home;