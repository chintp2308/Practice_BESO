import "./App.css";
import Header from "./controllers/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./controllers/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
