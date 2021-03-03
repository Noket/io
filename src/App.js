import logo from './logo.svg';
import './App.css';
import { Circle } from "./components/Shapes/Circle"
import { Square } from "./components/Shapes/Square"
import { Rectangle } from "./components/Shapes/Rectangle"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" 
          style={{
            zIndex:2000
          }}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
      <main>
        <div style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: "1000",
          width: "100%",
          height: "100%",
          display:"inline-flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap"
        }}>
          <Square size="80">Working now finally?</Square>
          <Square size="90">Working now finally?</Square>
          <Circle size="300">Added a circle!</Circle>
          <Square size="20">Working now finally?</Square>
          <Square size="50">Working now finally?</Square>
          <Rectangle height="700" width="200">Oh wow a rectangle too!</Rectangle>
          <Square size="120">Working now finally?</Square>
          <Square size="180">Working now finally?</Square>

        </div>
      </main>
    </div>
  );
}

export default App;
