import React from 'react';
import image from '../../assets/images/image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt,faCircle ,faCircleNotch,faEllipsisV} from '@fortawesome/free-solid-svg-icons'

function Appbar() {
    return (
        <div className='appbar'>
            <img className='user-dp' src={image} alt='user-dp'/>
            <span className='appbar-title'>Whatsapp</span>
            <ul className='appbar-list'>
                <li><FontAwesomeIcon icon={faCircleNotch}/></li>
                <li><FontAwesomeIcon icon={faCommentAlt}/></li>
                <li><FontAwesomeIcon icon={faEllipsisV}/></li>
            </ul>
        </div>
    )
}

export default Appbar
