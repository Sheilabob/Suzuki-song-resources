import "./App.css";
import Home from "./Home";
import Musette from "./Musette";
import GoodbyeToWinter from "./Level1/GoodbyeToWinter";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Allegretto2 from "./Level1/Allegretto2";

function App() {
  return (
    <div className="App">
      <Router>
        <div class="pages">
          <nav>
            <div class="menu mobile">
              <Link to="/">
                <img
                  class="pianologo"
                  src={"pianoclipart.png"}
                  alt={"Image of Piano"}
                />
              </Link>
              <button class="menu-three-line">☰</button>
            </div>
            <div class="menu row desktop">
              <div class="menu-item column home">
                <img
                  class="pianologo"
                  src={"pianoclipart.png"}
                  alt={"Image of Piano"}
                />
                <Link to="/">
                  <h1>Home</h1>
                </Link>
              </div>
              {/* <div class="song-list"> */}
              <div class="menu-item column songs">
                <div class="song gtw">
                  <Link to="/goodbyetowinter">
                    <h1>Goodbye To Winter</h1>
                  </Link>
                </div>
                <div class="song all2">
                  {/* </div>
            <div class="menu-item"> */}
                  <Link to="/allegretto2">
                    <h1>Allegretto 2</h1>
                  </Link>
                </div>

                <div class="song musette">
                  {/* </div>
            <div class="menu-item"> */}
                  <Link to="/musette">
                    <h1>Musette</h1>
                  </Link>
                </div>
              </div>
              {/* </div> */}
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <div class="pages">
            <Routes>
              <Route
                path="/goodbyetowinter"
                element={<GoodbyeToWinter />}
              ></Route>
              <Route path="/allegretto2" element={<Allegretto2 />}></Route>

              <Route path="/musette" element={<Musette />}></Route>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
