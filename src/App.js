import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product_detail/:productSlug"
          element={<ProductDetailPage />}
        />
      </Routes>
    </>
  );
}

export default App;
