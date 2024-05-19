import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import NewsImage from './components/NewsImage';
import NewsText from './components/NewsText';
import PreOrder from './components/PreOrder';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <NewsImage />
      <NewsText />
      <Product />
      <PreOrder />
      <Contact />
    </div>
  );
}

export default App;