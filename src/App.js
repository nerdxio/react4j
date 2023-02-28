import Navbar from './Navbar'
import Home from './Home';

function App() {
  const title = 'welcome in the new blog';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

//to show it for other comp
export default App;
