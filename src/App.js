import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="wapper">
        <Header></Header>
        <main className="main">
          <Routes>
            <Route
              path="/"
              exact
              element={<Home />}
            />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
