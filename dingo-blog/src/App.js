import Navbar from './Navbar'
import Home from './Home'

function App() {
  const title = 'Welcome to the dingo blog, mate';
  const likes = 50
  const link = "http://www.dingo.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <p>{Math.random() * 10}</p>
        <a href={link}>Dingo Link</a>
      </div>
    </div>
  );
}

export default App;
