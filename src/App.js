
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
     <Hero />
     <Main />
     <Blogs />
     <Footer />
    </div>
  );
}

export default App;
