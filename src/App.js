import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import RecipeNavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <RecipeNavBar></RecipeNavBar>
      <Home></Home>
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
