import React from 'react'
import { Palette } from '../../assets/palette/Palette'

const userInput = (props) => {
    const inputStyle = {
        border: '2px solid',
        borderColor: Palette.veryDark,
        margin: '1.5em'
    }

    return (
        <div>
            <input 
            type='number' 
            style={inputStyle}
            onChange={props.onChange}
            value={props.value} />
        </div>
    )
}

export default userInput