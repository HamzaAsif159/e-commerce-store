import { Routes, Route } from "react-router-dom"
/* Local imports */
import Header from "./components/Header"
import ProductDetail from "./components/ProductDetail"
import ProductListing from "./components/ProductListing"
import Cart from "./components/Cart"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route eaxct path="/" element={<ProductListing />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route>404 not found</Route>
      </Routes>
    </div>
  )
}

export default App
