import { useState } from "react";
import "../../src/index.css";
import profilePhoto from "../../images/FOTO_ID.jpg";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
