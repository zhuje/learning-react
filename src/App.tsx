import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import ListsSimple from "./describing-ui/ListsSimple";
import ListsAdvanced from "./describing-ui/ListsAdvanced";

import ConditionalRendering from "./describing-ui/ConditionalRendering";

const Home = () => {
  return <h1>Home</h1>;
};

const NoPage = () => {
  return <h1>404</h1>;
};

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/conditional">Conditional</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
            {/* Route doesn't exist will catch  <Route path="*" element={<NoPage />} /> */}
          </li>
          <li>
            <Link to="/lists-simple"> Lists Simple </Link>
          </li>
          <li>
            <Link to="/lists-advanced"> Lists Advanced</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Route index will default to the parent path "/" */}
          <Route path="conditional" element={<ConditionalRendering />} />
          <Route path="lists-simple" element={<ListsSimple />} />
          <Route path="lists-advanced" element={<ListsAdvanced />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
