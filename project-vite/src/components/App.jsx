import {useEffect, useState} from "react";
import "../../src/index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Card from "../components/Card/Card";
import {api} from "../utils/api.js";
import {CurrentUserContext} from "../contexts/CurrentUserContext.js"
function App() {
    const [currentUser, setCurrentUser] = useState("");
    const [popup, setPopup] = useState(null);
    //const [cards2, setCards2] = useState([]);
    useEffect(() => {
    api.getUserInfo().then(data=>{
            setCurrentUser(data);
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });
    }, []);
    useEffect(() => {
        //handleLoading(true);
        api.getCardInfo().then(data=>{
          setTimeout(()=>{
            //handleCloseLoading();
            //setCards2(data);
            console.log(data);
          },3000)
        }).catch((err) => {
          console.log(`Error: ${err} - ${err.status}`);
          return [];
        })
    
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
    const handleUpdateAvatar = (data) => {
        api.setNewAvatar(data).then(newData=>{
            setCurrentUser(newData);
            handleClosePopup();}).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });

    }
    const handleNewCard = (data) => {console.log(data)}
    function handleOpenPopup(popup) {
        setPopup(popup);
    }
    function handleClosePopup() {
        setPopup(null);
    }
  return (
    <>
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleNewCard }}>
            <div className="page">
                <Header />
                <Main onOpenPopup={handleOpenPopup}
                      onClosePopup={handleClosePopup}
                      popup={popup}
                      cards={cards2}/>
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    </>
  );
}

export default App;
