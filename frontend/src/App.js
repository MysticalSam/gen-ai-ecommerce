import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';
import Login from './customer/pages/login/Login';
import Register from './customer/pages/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">


      <Navigation></Navigation>
      {/*Define Router for navigation in React JS */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <div>
        <HomePage>Product Card</HomePage>
        <Login></Login>
        <Register></Register>

      </div>
    </div>
  );
}

export default App;
