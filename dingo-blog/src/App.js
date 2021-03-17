import './App.css';

function App() {
  const title = 'Welcome to the dingo blog, mate';
  const likes = 50
  // const dingo = { name: 'dingo', age: '5' }
  const link = "http://www.dingo.com"

  return (
    <div className="App">
      <div className="content">
        <h1>
          {title}
          <p>Liked {likes} different variations of dingo</p>
          {/* <p>{dingo}</p> */}
        </h1>
        <p>{10}</p>
        <p>{"Big Dingos"}</p>
        <p>{[2, 0, 7, 2, 4, 2, 5, 6, 4, 3]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Dingo Link</a>
      </div>
    </div>
  );
}

export default App;
