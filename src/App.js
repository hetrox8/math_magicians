import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import the Home component
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="q-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>

    </div>
  );
}

export default App;
