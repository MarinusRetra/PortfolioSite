import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>About</h1>} />
            <Route path="/Projects" element={<h1>Projects</h1>} />
            <Route path="/Resume" element={<h1>Resume</h1>} />
            <Route path="/Games" element={<h1>Browser games</h1>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
