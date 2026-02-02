import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import ModelConfig from './pages/ModelConfig';
import Prediction from './pages/Prediction';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/model" element={<ModelConfig />} />
          <Route path="/predict" element={<Prediction />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
