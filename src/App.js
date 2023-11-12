import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import PageContainer from "./containers/PageContainer.jsx";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <PageContainer>
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element = { <Home />} />
              <Route path="/products/:id" element = {  <ProductDetail /> } />
              <Route path="/cart" element = { <Cart /> } />
            </Routes>
        </Router> 
    </PageContainer>
  );
}

export default App;
