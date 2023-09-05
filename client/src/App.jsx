import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Scrollprogressbar } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Scrollprogressbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
