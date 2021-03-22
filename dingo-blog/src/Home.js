const Home = () => {

  const handleClick = () => {
    console.log("DINGO")
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click Me, Dingo</button>
    </div>
  );
}

export default Home;