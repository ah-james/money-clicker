import React from 'react'

const TellerButton = props => {

    const buttonClick = () => {
        console.log('clicked!')
    }

    return (
        <button onClick={() => buttonClick()}>{props.name}</button>
    )
}

export default TellerButton