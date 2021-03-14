import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, sendMessageActionCreator } from '../../redux/messages-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs)
    

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;