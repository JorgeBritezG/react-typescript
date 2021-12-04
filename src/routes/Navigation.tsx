import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

import { LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => (

  <BrowserRouter>
    <div className="main-layout">
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping Page</NavLink>
          </li>
          <li>
            <NavLink to="/lazy2" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 2</NavLink>
          </li>
          <li>
            <NavLink to="/lazy3" className={({ isActive }) => isActive ? 'nav-active' : ''}>Lazy 3</NavLink>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={ <ShoppingPage /> } />
        <Route path="lazy2" element={ <LazyPage2 /> } />
        <Route path="lazy3" element={ <LazyPage3 /> } />

      </Routes>

    </div>
  </BrowserRouter>
)