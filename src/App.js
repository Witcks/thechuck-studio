import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Agency from './Components/Agency/Agency';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="wapper">
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
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
