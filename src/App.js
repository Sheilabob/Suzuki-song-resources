import './App.css';
import Home from './Home';
import Musette from './Musette';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/musette">Musette</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/musette" element={ <Musette />}>
           
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
