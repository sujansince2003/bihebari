import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import {
  Register,
  Login,
  Landing,
  Blogs,
  BlogDetail,
  Contactus,
} from "./Pages";
import Preloader from "./Components/PreLoader";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (e.g. API or asset load)
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
            <Route
              path="/blogs/:blogId"
              element={
                <Layout>
                  <BlogDetail />
                </Layout>
              }
            />

            <Route
              path="/register"
              element={
                <Layout>
                  <Register />
                </Layout>
              }
            />
            <Route
              path="/contactus"
              element={
                <Layout>
                  <Contactus />
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
      )}
    </>
  );
}

export default App;
