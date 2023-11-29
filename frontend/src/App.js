import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homepage/HomePage';

function App() {
  return (
    <div className="">
      <Navigation></Navigation>

      <div>
        <HomePage>Product Card</HomePage>
      </div>
    </div>
  );
}

export default App;
