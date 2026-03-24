import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import CriarConta from './pages/CriarConta';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/CriarConta" element={<CriarConta />} />
         <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;