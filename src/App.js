import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

export const ThemeContext = React.createContext();


export default function App() {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        <ThemeContext value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext>
    )
}

