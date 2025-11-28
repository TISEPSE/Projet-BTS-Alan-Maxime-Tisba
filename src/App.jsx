import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import "./static/App.css";

function App() {

  return (
    <BrowserRouter>
    {/* Navigation temporaire, vers la page racine "/" et La page "./pages/Page_Teste.jsx" */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/Login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;