import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Resgister from './pages/Register.jsx';
import Forgot_password from "./pages/Forgot_password.jsx"
import "./static/App.css";


function App() {

  return (
    <BrowserRouter>
    {/* Navigation temporaire, vers la page racine "/" et La page "./pages/Page_Teste.jsx" */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/register_form">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register_form" element={<Resgister/>}/>
        <Route path="/login_form" element={<Login/>}/>
        <Route path="/fogot_password" element={<Forgot_password/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;