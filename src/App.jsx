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
import Search from "./pages/Search";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="business" element={<Business/>}/>
<Route path="entertainment" element={<Entertainment/>}/>
<Route path="search" element={<Search/>}/>
<Route/>
<Route/>
<Route/>
    </Route>
  )
)

function App() {
  return  <RouterProvider router={router}/>;
}

export default App;
