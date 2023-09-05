import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar>Most Views</Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/country/:id"
            element={<CountryDetails />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
