import { Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import ProductDetail from "./components/ProductDetail"
import ProductListing from "./components/ProductListing"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route eaxct path="/" element={<ProductListing />} />
        <Route exact path="/product/productId" element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App
