const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogsData: [
    { id: "1", name: "Jenya" },
    { id: "2", name: "Artem" },
    { id: "3", name: "Dima" },
    { id: "4", name: "Petya" },
    { id: "5", name: "Sasha" },
    { id: "6", name: "Kirill" },
  ],
  messagesData: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "I am fine" },
  ],
  newMessageText: "пробное сообщение",
};

const messagesReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      };
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.message
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({
  type: SEND_MESSAGE,
});

export const updateNewMessageTextActionCreator = (newMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  message: newMessage,
});

export default messagesReducer;
