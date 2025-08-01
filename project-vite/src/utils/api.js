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
        console.log(cardId, likeStatus)
        this._likeInfoLink = `${this._baseUrl}/cards/${cardId}/likes`;
        const res = await fetch(this._likeInfoLink, {
            method: 'PUT',
            headers: {
                authorization: this._headers.authorization,
            },
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

