import React from 'react';
import flag from '../../assets/images/flag.jpg'

function Chat() {
    return (
        <div className='chat-section'>
            <img src={flag} className='profile-dp'/>
            <div className='chat-content'>
                <span>Fahad</span>
                <span>hi</span>
            </div>
        </div>
    )
}

export default Chat
