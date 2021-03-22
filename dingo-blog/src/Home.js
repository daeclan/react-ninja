const Home = () => {

  const handleClick = () => {
    console.log("DINGO")
  }

  const handleClickAgain = (name) => {
    console.log('hello ' + name)
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me, Dingo</button>
      <button onClick={() => handleClickAgain('mario')}>Click me a second time, dingo</button>
    </div>
  );
}

export default Home;