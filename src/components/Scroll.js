import React from 'react';
//1.props
//2.state
//3.children
const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    ) 
};

export default Scroll;