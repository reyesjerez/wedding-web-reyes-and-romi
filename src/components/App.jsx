import "../scss/App.scss";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";
import MainLanding from "./MainLanding";
import Where from "./Where";
import Hotels from "./Hotels";
import Gifts from "./Gifts";
import Info from "./Info";
import Contact from "./Contact";

import Footer from "./Footer";
import Confirm from "./Confirm";

function App() {
  //pendiente

  // const [dataConfirm, setDataConfirm] = useState({
  //   name: "",
  //   phone: "",
  //   people: "",
  // });

  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      {showModal && <Confirm setShowModal={setShowModal} />}

      {showContact && <Contact setShowContact={setShowContact} />}

      <Routes>
        <Route
          path="/"
          element={
            <MainLanding
              setShowModal={setShowModal}
              setShowContact={setShowContact}
            />
          }
        />
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
