import {useEffect, useState} from "react";
import "../../src/index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import {api} from "../utils/api.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js"
function App() {
    const [currentUser, setCurrentUser] = useState("");
    const [popup, setPopup] = useState(null);
    useEffect(() => {
    api.getUserInfo().then(data=>{
            setCurrentUser(data);
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });
    }, []);

    const handleUpdateUser = (data) =>{
        api.setUserInfo(data).then((newData) => {
        setCurrentUser(newData);
            handleClosePopup();
      }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });
    }

    function handleOpenPopup(popup) {
        setPopup(popup);
    }
    function handleClosePopup() {
        setPopup(null);
    }
  return (
    <>
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
            <div className="page">
                <Header />
                <Main onOpenPopup={handleOpenPopup}
                      onClosePopup={handleClosePopup}
                      popup={popup}/>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    </>
  );
}

export default App;
