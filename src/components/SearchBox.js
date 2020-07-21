import React from 'react';

const SearchBox = ({searchfiled, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--blue bg-light-blue'
            type='search'
            placeholder='search robots' 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;