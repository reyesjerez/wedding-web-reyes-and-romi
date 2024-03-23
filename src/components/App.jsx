import "../scss/App.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import MainLanding from "./MainLanding";
import Where from "./Where";
import Hotels from "./Hotels";
import Gifts from "./Gifts";
import Info from "./Info";

import Footer from "./Footer";
import Confirm from "./Confirm";

function App() {
  const [dataConfirm, setDataConfirm] = useState({
    name: "",
    phone: "",
    people: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleConfirm = () => {};

  return (
    <div>
      <Header />
      {showModal && <Confirm setShowModal={setShowModal} />}
      <Routes>
        <Route path="/" element={<MainLanding setShowModal={setShowModal} />} />
        <Route path="/alojamiento" element={<Hotels />} />
        <Route path="/como-llegar" element={<Where />} />
        <Route path="/regalos" element={<Gifts />} />
        <Route path="/informacion-extra" element={<Info />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
