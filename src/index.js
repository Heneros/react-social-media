import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);


import { createRoot } from 'react-dom/client';



function App() {
    const [language, setLanguage] = React.useState("java");
    const [yearsExpirience, setYearsExpience] = React.useState(0);


    return (
        <div>
            <button onClick={() => setLanguage('javascript')}>Change Language</button>

            <input type="number"
                onChange={event => setYearsExpience(event.target.value)}
            />
            <p>I'm learning {language} </p>
            <p>Years of experience {yearsExpirience} </p>
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