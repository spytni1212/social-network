import Dialogs from "./Dialogs";
import {
  updateNewMessageTextActionCreator,
  sendMessageActionCreator,
} from "../../redux/messages-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (newMessage) => {
      dispatch(updateNewMessageTextActionCreator(newMessage));
    },
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
