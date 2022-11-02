import React from 'react'
import './Notours.css';

const Notours = (props) => {
    const{handleRefresh}=props
    return (
        <div>
             <h1>No Tours</h1>
        <button
          className='refresh-button'
          onClick={handleRefresh}
        >
          Refresh
        </button>
        </div>
    )
}

export default Notours
