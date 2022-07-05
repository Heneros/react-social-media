import React, { useEffect } from 'react';


import { createRoot } from 'react-dom/client';

const baseUrl = 'https://api.github.com/users/';

function App() {
    const [username, setUsername] = React.useState("Heneros");

    const [user, setUser] = React.useState(null);
    const searchInput = React.useRef();

    React.useEffect(() => {
        getUser()
    }, []);
    function handleClearInput() {
        searchInput.current.value = "";
        searchInput.current.focus();
    }
    async function getUser(route) {
        const response = await fetch(`${baseUrl}${username}`)
        const data = await response.json()
        setUser(data);
    }

    return <div>
        <input
            type="text"
            placeholder='Input username'
            onChange={event => setUsername(event.target.value)}
            ref={searchInput}
        />
        <button onClick={getUser}>Search</button>
        <button onClick={handleClearInput}>Clear</button>
        {user ? (
            <div>
                <h1> {user.name} </h1>
                <p> {user.bio} </p>
                <p> {user.location} </p>
                <img src={user.avatar_url} />
            </div>
        ) : <p>loading</p>}
    </div>
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />);

// setTimeout(() => root.render(<NewPage />, container), 2000)