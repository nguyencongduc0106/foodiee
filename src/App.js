import './App.css';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Review from './Components/Review/Review.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Menu/>
      <Review/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
