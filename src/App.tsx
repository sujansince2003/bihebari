import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import { Register, Login, Landing, Blogs } from "./Pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Landing />
            </Layout>
          }
        />
        <Route
          path="/blogs"
          element={
            <Layout>
              <Blogs />
            </Layout>
          }
        />
        <Route path="/about" element={<Layout>About</Layout>} />
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
