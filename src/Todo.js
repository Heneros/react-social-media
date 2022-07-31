import React from 'react'
import { ACTIONS } from './App';


export default function Todo({ box, dispatch }) {
    return (
        <div>
            <span style={{ color: box.complete ? '#AAA' : '#000' }}>
                {box.name}
            </span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE_BOX, payload: { id: box.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.DELETE_BOX, payload: { id: box.id } })}>Delete</button>
        </div>
    )
}
