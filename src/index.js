import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);


import { createRoot } from 'react-dom/client';



function App() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    })


    const [developer, setDeveloper] = React.useState({
        language: "JavaScript",
        yearsExpirience: 0,
        isEmployed: true
    });


    function handleChangeLanguage() {
        setDeveloper({
            language: "java",
            yearsExpirience: 0,
        })
    }
    function handleYersExperience() {
        setDeveloper({
            language: "c#",
            yearsExpirience: 5
        })
    }
    function handleToggleEmployment() {
        setDeveloper(prevState => ({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }))
    }

    return (
        <div>
            <p>Rendered {count}</p>
        </div>
    )


}

// function List(props) {
//     return <li>{props.person}</li>
// }

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />);