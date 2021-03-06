import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state : {
        profilePage : {
            postsData : [
                { id : 1, message : 'Hi, how are you?', likeCount : 12 },
                { id : 2, message : 'It is my first post', likeCount : 34 },
            ],
            newPostText : ''
        },
        messagesPage : {
            dialogsData : [
                { id : "1", name : "Jenya" },
                { id : "2", name : "Artem" },
                { id : "3", name : "Dima" },
                { id : "4", name : "Petya" },
                { id : "5", name : "Sasha" },
                { id : "6", name : "Kirill" },
            ],
            messagesData : [
                { id : 1, message : 'Hi' },
                { id : 2, message : 'How are you?' },
                { id : 3, message : 'I am fine' },
            ],
            newMessageText : 'пробное сообщение'
        },
        sidebar : {} 
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber=observer; // наблюдатель observer
    },
    dispatch(action) {
       this._state.profilePage = profileReducer(this._state.profilePage, action);
       this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
       this._state.sidebar = sidebarReducer(this._state.messagesPage, action);
       this._callSubscriber(this._state);
    }
}

export default store;
