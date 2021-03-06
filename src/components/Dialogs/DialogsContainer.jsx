import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/messages-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;