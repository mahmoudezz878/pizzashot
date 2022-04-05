import Footer from "./component/Footer/Footer";
import Home from "./pages/Home";
import Header from "./component/Header/Header";
import OrderNow from "./component/OrderNow/OrderNow";
import OrderPlaced from "./component/OrderPlaced/OrderPlaced";
import DashBoard from "./component/DashBoard/DashBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="ordernow" element={<OrderNow />} />
          <Route path="orderplaced" element={<OrderPlaced />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
