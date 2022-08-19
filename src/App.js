import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navemenu from "./components/Navmenu";
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import { useState } from "react";
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthentiCate] = useState(false);

  return (
    <div>
      <Navemenu authenticate={authenticate} setAuthentiCate={setAuthentiCate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthentiCate={setAuthentiCate} />} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
