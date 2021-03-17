import './App.css';

function App() {
  const title = 'Welcome to the dingo blog, mate';
  const likes = 50
  // const dingo = { name: 'dingo', age: '5' }

  return (
    <div className="App">
      <div className="content">
        <h1>
          {title}
          <p>Liked {likes} different variations of dingo</p>
          {/* <p>{dingo}</p> */}
        </h1>
      </div>
    </div>
  );
}

export default App;
