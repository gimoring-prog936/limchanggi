import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm/example';
import AdminPage from './Epage/AdminPage';
import ParkingMap from './ParkingMap';
import Home from './pages/home/Home'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route exact path="/home" element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

