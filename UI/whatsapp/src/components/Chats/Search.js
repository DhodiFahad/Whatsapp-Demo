import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';

function Search() {
    return (
        <div className='search-section'>
            <div className='search-section-inner'>
                <FontAwesomeIcon icon={faSearch} style={{height:'15px',color:'gray',margin:'10px 10px 10px 10px'}}/>
                <input placeholder='Search or start new chat' className='search-input'/>
            </div>
            
        </div>
    )
}

export default Search
