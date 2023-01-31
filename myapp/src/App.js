import { Link, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="{#}">Tienda on line</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink className='nav-link' to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/register">Registro</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link' to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container mt-4">
        <Routes>
          <Route index element={<Home />} />
          <Route path="product/:productId" element={<ProductDetail />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>No encontrado!</h2>
      <p>
        <Link to="/">Volver al Home</Link>
      </p>
    </div>
  );
}
