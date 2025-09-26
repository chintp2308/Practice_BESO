import "./App.css";
import Header from "./controllers/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./controllers/Footer";
import Category from "./pages/Category";
import Introduction from "./pages/Introduction";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections/all" element={<Category />} />
        <Route path="/pages/about-us" element={<Introduction />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
