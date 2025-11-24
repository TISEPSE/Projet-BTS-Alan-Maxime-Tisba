import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/api/time")
      .then(res => res.json())
      .then(data => setCurrentTime(data.time));
  }, []);

  return (
    <BrowserRouter>
    {/* Navigation temporaire, vers la page racine "/" et La page "./pages/Page_Teste.jsx" */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home currentTime={currentTime} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
