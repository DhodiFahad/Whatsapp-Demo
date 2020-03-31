import React, { Component } from 'react';
import '../assets/styles/style.css';
import Appbar from './Appbar/Appbar';
import Chatssection from './Chats/Chatssection';
import Chatbar from './Chatbar/Chatbar';
import Chatarea from './Chatarea/Chatarea';
import Profilesection from './Profilesection/Profilesection'

export default class Main extends Component {
    

    render() {
        return (
            <div className='main'>
                <Appbar/>
                <Chatbar/>
                <Chatssection/>
                <Chatarea/>
                <Profilesection/>
            </div>
        )
    }
}
