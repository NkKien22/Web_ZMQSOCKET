import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProductDetail } from './pages/productDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/home';
import { Header } from './components/header';
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import { TOKEN_KEY } from './utils/common';

function App() {
  const [loginInfo, setLoginInfo] = useState();
  const [isLogined, setIsLogined] = useState();

  useEffect(() => {
    const tokenLogin = Cookies.get(TOKEN_KEY);
    if (!tokenLogin) {
      setIsLogined(false);
    } else {
      const parseToken = jwt_decode(tokenLogin);
      setLoginInfo(parseToken);
      setIsLogined(true);
    }
  }, []);
  return (
    <div>
      <Header loginInfo={loginInfo} isLogined={isLogined} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:1" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
