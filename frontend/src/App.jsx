import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages";
import { Scrollprogressbar } from "./Components";

function App() {
  return (
    <BrowserRouter>
      <Scrollprogressbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
