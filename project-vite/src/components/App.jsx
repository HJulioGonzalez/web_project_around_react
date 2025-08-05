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
    const [cards2, setCards2] = useState([]);
    const [loadingState2, setLoadingState2] = useState(null);
    useEffect(() => {
        handleLoading2(true);
    api.getUserInfo().then(data=>{
            setTimeout(()=>{
                handleCloseLoading2();
                setCurrentUser(data);
            },3000)
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        });
    api.getCardInfo().then(data=>{
            setTimeout(()=>{
                setCards2(data);
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
    function handleLoading2(loadingState){
        setLoadingState2(loadingState)
    }
    function handleCloseLoading2(){
        setLoadingState2(null)
    }
    async function handleCardLike2(card){
        await api.changeLikeStatus(card._id, !card.isLiked).then((newCard) => {
            setCards2((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
        }).catch((err) => {
            console.log(`Error: ${err} - ${err.status}`);
            return [];
        })
    }
    async function handleCardDelete2(card){
        await api.deleteCard(card._id).then(() => setCards2((state)=> state.filter((currentCard)=>currentCard._id !== card._id))).catch((err) => {
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
                      cards={cards2}
                      onLikeCard={handleCardLike2}
                      onDeleteCard={handleCardDelete2}
                      loadingState2={loadingState2}
                      />
                <Footer />
            </div>
        </CurrentUserContext.Provider>
    </>
  );
}

export default App;
