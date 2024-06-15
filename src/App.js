import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';

// pages

import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import About from './pages/About';
import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Admin from "./pages/Admin/Admin";
// import AdminBlock from './pages/Admin/pages/Blocks/AdminBlock';
// import BlockCerate from './pages/Admin/pages/Blocks/BlockCreate';
import BlockList from './pages/blocks/BlockList/BlockList';
import BlockDetails from "./pages/blocks/BlockDetails/BlockDetails";

// layouts
import RootLayout from './layouts/RootLayout/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact/>}/>
      {/* <Route path="login" element={<Login/>} /> */}
      {/* <Route path="admin" element={<Admin/>}>
        <Route path="blocks" element={<AdminBlock/>}>
          <Route path="create" element={<BlockCerate/>} />
        </Route>
      </Route> */}
      <Route path="blocks">
        <Route index element={<BlockList/>} />
        <Route path=":id" element={<BlockDetails/>} />
      </Route>
      <Route path="*" element={<ErrorPage code={'404'} redirectLink="/" />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
