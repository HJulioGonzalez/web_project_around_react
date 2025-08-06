class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    async getCardInfo(){
        this._cardsInfoLink = `${this._baseUrl}/cards`;
        const res = await fetch(this._cardsInfoLink, {
            method: "GET",
            headers: {
                authorization: this._headers.authorization,
            },
        });
        return await res.json();
    }

    async getUserInfo(){
        this._userInfoLink = `${this._baseUrl}/users/me`;
        const res = await fetch(this._userInfoLink, {
            method: "GET",
            headers: {
                authorization: this._headers.authorization,
            },
        });
        return await res.json();
    }

   async changeLikeStatus(cardId, likeStatus){
        const method = likeStatus? 'PUT': 'DELETE';
        this._likeInfoLink = `${this._baseUrl}/cards/${cardId}/likes`;
        const res = await fetch(this._likeInfoLink, {
            method: method,
            headers: {
                authorization: this._headers.authorization,
            },
        });
       return await res.json()
    }

    async deleteCard(cardId){
        this._cardLink = `${this._baseUrl}/cards/${cardId}`;
        const res = await fetch(this._cardLink, {
            method: "DELETE",
            headers: {
                authorization: this._headers.authorization,
            },
        });
        return await res.json();
    }

    async setUserInfo(newInfo){
        this._userInfoLink = `${this._baseUrl}/users/me`;
        const res = await fetch(this._userInfoLink, {
            method: "PATCH",
            headers: {
                authorization: this._headers.authorization,
                 "Content-Type": "application/json",
            },
            body: JSON.stringify({
        name: newInfo.name,
        about: newInfo.about,
      })
        });
        return await res.json();
    }

    async setNewAvatar(newAvatar){
        this._newAvatarLink = `${this._baseUrl}/users/me/avatar`;
        const res = await fetch(this._newAvatarLink, {
            method: "PATCH",
            headers: {
                authorization: this._headers.authorization,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                avatar: newAvatar.avatar
            })
        });
        return await res.json();
    }

    async setNewCard(newCard){
        this._newPlaceLink = `${this._baseUrl}/cards`;
        const res = await fetch(this._newPlaceLink, {
            method: "POST",
            headers: {
                authorization: this._headers.authorization,
                 "Content-Type": "application/json",
            },
            body: JSON.stringify({
        name: newCard.newTown,
        link: newCard.newTownLink,
      })
        });
        return await res.json();
    }
}

export const api = new Api({
    baseUrl: "https://around-api.es.tripleten-services.com/v1",
    headers: {
        authorization: "d0312e08-7264-4abf-aaac-0ec85ede7320",
        "Content-Type": "application/json",
    },
});

