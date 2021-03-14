import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';

const Dialogs = (props) => {

    let state = props.messagesPage;

    let dialogs = state.dialogsData.map(dialog => <DialogItem name = {dialog.name} key = {dialog.id} id = {dialog.id} />);
    let messages = state.messagesData.map(message => <Message message = {message.message} key = {message.id} id = {message.id} />);
    let newMessageText = state.newMessageText;

    let sendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogs }
            </div>
            <div className={s.messages}>
                { messages }
                <div>
                    <div><textarea value = {newMessageText} onChange = { onNewMessageChange }></textarea></div>
                    <div><button onClick={ sendMessageClick }>send message</button></div>
                </div>
                
            </div>
        </div>
    )
}

export default Dialogs;