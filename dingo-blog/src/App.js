import './App.css';
import Navbar from './Navbar'

function App() {
  const title = 'Welcome to the dingo blog, mate';
  const likes = 50
  const link = "http://www.dingo.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>
          {title}
          <p>Liked {likes} different variations of dingo</p>
        </h1>
        <p>{"Big Dingos"}</p>
        <p>{Math.random() * 10}</p>
        <a href={link}>Dingo Link</a>
      </div>
    </div>
  );
}

export default App;
