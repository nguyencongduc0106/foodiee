import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Review from './Components/Review/Review.jsx';
import About from './Components/About/About.jsx';
import Blog from './Components/Blog/Blog.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Menu/>
      <Review/>
      {/* <About/> */}
      <Blog/>
    </div>
  );
}

export default App;
