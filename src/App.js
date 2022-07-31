import React, { useState, createContext, useReducer } from "react";


import Todo from "./Todo";


export const ACTIONS = {
    ADD_BOX: 'add-box',
    TOGGLE_BOX: 'toggle-box',
    DELETE_BOX: 'delete-box'
}
function reducer(boxes, action) {
    switch (action.type) {
        case ACTIONS.ADD_BOX:
            return [...boxes, newBox(action.payload.name)]
        case ACTIONS.TOGGLE_BOX:
            return boxes.map(box => {
                if (box.id === action.payload.id) {
                    return { ...box, complete: !box.complete }
                }
                return box;
            })
        case ACTIONS.DELETE_BOX:
            return boxes.filter(box => box.id !== action.payload.id)
            return boxes;
        default:
            return boxes;
    }
}
function newBox(name) {
    return { id: Date.now(), name: name, complete: false }
}


export default function App() {

    const [boxes, dispatch] = useReducer(reducer, []);
    const [name, setName] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_BOX, payload: { name: name } })
        setName('');
    }

    return (
        <>
  
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />

            </form>
            {boxes.map(box => {
                return <Todo key={box.id} box={box} dispatch={dispatch} />
            })}

        </>

    )
}

