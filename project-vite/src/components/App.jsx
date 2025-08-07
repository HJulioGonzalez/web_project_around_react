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
    const [cards, setCards] = useState([]);
    const [loadingState, setLoadingState] = useState(null);
    useEffect(() => {
        handleLoading(true);
    api.getUserInfo().then(data=>{
            setTimeout(()=>{
                handleCloseLoading();
                setCurrentUser(data);
            },3000)
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });
    api.getCardInfo().then(data=>{
            setTimeout(()=>{
                setCards(data);
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
    const handleNewCard = (data) => {
      
      api.setNewCard(data).then(newCard=>{
            setCards([newCard, ...cards]);
            handleClosePopup();
            }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        })
    }
    function handleOpenPopup(popup) {
        setPopup(popup);
    }
    function handleClosePopup() {
        setPopup(null);
    }
    function handleLoading(loadingState){
        setLoadingState(loadingState)
    }
    function handleCloseLoading(){
        setLoadingState(null)
    }
    async function handleCardLike(card){
        await api.changeLikeStatus(card._id, !card.isLiked).then((newCard) => {
            setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        })
    }
    async function handleCardDelete(card){
        await api.deleteCard(card._id).then(() => setCards((state)=> state.filter((currentCard)=>currentCard._id !== card._id))).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        })
    }
  return (
    <>
        <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, handleUpdateAvatar, handleNewCard }}>
            <div className="page">
                <Header />
                <Main onOpenPopup={handleOpenPopup}
                      onClosePopup={handleClosePopup}
                      popup={popup}
                      cards={cards}
                      onLikeCard={handleCardLike}
                      onDeleteCard={handleCardDelete}
                      loadingState={loadingState}

                      />
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    </>
  );
}

export default App;
