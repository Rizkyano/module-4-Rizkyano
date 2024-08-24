import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import RegisterForm from "./pages/RegisterForm";
import Header from "./components/Navbar";
import LoginForm from "./pages/LoginForm";
import Category from "./pages/Category";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/categories" element={<Category />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
