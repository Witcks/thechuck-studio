import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Agency from './Components/Agency/Agency';
import Work from './Components/Work/Work';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';
import BlogDetail from './Components/BlogDetail/BlogDetail';
import Loading from './Components/Loading/Loading';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="wapper">
        <Loading />
        <main className="main">
          <Routes>
            <Route
              path="/"
              exact
              element={<Home />}
            />
            <Route
              path="/about"
              exact
              element={<Agency />}
            />
            <Route
              path="/work"
              exact
              element={<Work />}
            />
            <Route
              path="/blog"
              exact
              element={<Blog />}
            />
            <Route
              path="/contact"
              exact
              element={<Contact />}
            />
            <Route
              path="/2d-motion-graphic"
              exact
              element={<ServiceDetail />}
            />
            <Route
              path="/blog/1"
              exact
              element={<BlogDetail />}
            />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
