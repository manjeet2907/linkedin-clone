import React from 'react'

function InputOptions({Icon,title, color}) {
    return (
        <div className="inputoptions">
            <Icon className="feed__inputicon" style={{color:color}}/>
            <h4>{title}</h4>
        </div>
    )
}

export default InputOptions
