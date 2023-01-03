import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
/* Local imports */
import Header from "./Components/Header"
import ProductDetail from "./Components/ProductDetail"
import ProductListing from "./Components/ProductListing"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import NotFound from "./Components/NotFound"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route eaxct path="/" element={<ProductListing />} />
        <Route exact path="/product/:productId" element={<ProductDetail />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
