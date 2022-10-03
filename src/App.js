import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Header } from './components/header';
import { ProductDetail } from './pages/productDetail';
import { Banner } from './components/banner';
import { ProductList } from './components/productList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <ProductList />
      <BrowserRouter>
        <Routes>
          <Route path="/product/:1" element={<ProductDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
