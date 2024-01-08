import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

// Layout

import Layout from "./layout/Layout";

// Pages

import Home from "./pages/Home";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Search from "./pages/Search";
import Technology from "./pages/Technology";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="business" element={<Business />} />
      <Route path="entertainment" element={<Entertainment />} />
      <Route path="search" element={<Search />} />
      <Route path="health" element={<Health />} />
      <Route path="science" element={<Science />} />
      <Route path="sports" element={<Sports />} />
      <Route path="technology" element={<Technology />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
