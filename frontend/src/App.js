import BulletinHeader from "./components/layout/BulletinHeader";
import Header from "./components/layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BulletinHeader />
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
