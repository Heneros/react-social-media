import React, { useState, createContext } from "react";

import FunctionContextComponent from "./FunctionContextComponent";

import { ThemeProvider } from './ThemeContext';

export const ThemeContext = React.createContext();


export default function App() {
    // const [darkTheme, setDarkTheme] = useState(true);

    // function toggleTheme() {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

    return (
        <>
            <ThemeProvider>
                <FunctionContextComponent />
            </ThemeProvider>
        </>

    )
}

