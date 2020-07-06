import React from 'react'


const PaginationLink = ({disabled, handleClick, children}) => {
    if(disabled) {
        return <a href="#" className="btn disabled">
            {children}
        </a>
    }
    
    return (
        <a href="#" onClick={handleClick}>
            {children}
        </a>
    )
}

export default PaginationLink
