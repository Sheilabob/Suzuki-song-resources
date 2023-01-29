import './App.css';
import Home from './Home';
import Musette from './Musette';
import GoodbyeToWinter from './GoodbyeToWinter';
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
      <div class="pages">
        <nav>
          <ul class="menu">
            <li class="menu-item">
              <Link to="/"><h1>Home</h1></Link>
            </li>
            <li class="menu-item">
              <Link to="/goodbyetowinter"><h1>Goodbye To Winter</h1></Link>
            </li>
            <li class="menu-item">
              <Link to="/musette"><h1>Musette</h1></Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <div class="pages">
        <Routes>
          <Route path="/goodbyetowinter" element={ <GoodbyeToWinter />}>
          </Route>


          <Route path="/musette" element={ <Musette />}>
           
          </Route>
          <Route path="/" element={<Home />}>
            
          </Route>
        </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
