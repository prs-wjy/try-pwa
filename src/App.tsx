import "./App.css";

import { Route, Routes } from "react-router-dom";

import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="iframe" element={<Iframe />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a className="App-button" href="/iframe">
        OPEN WEB
      </a>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
    </header>
  );
}

function Iframe() {
  return (
    <iframe
      src="https://duadigital.com"
      frameBorder={0}
      style={{ position: "absolute", left: 0, height: "100%", width: "100%" }}
      height="100%"
      width="100%"
    />
  );
}

export default App;
