import React, { useEffect } from 'react';


import { createRoot } from 'react-dom/client';

const endPoint = 'https://api.github.com/users/heneros';

function App() {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        async function getUser() {
            const response = await fetch(endPoint)
            const data = await response.json()
            setUser(data);
        }
        getUser()


        // fetch(endPoint)
        //     .then(response => response.json())
        //     // .then(data => console.log(data))
        //     .then(data => setUser(data));


    }, []);

    return user ? (
        <div>
            <h1> {user.name} </h1>
            <p> {user.bio} </p>
            <p> {user.location} </p>
            <img src={user.avatar_url} />
        </div>
    ) : <p>loading</p>;
}


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />);

// setTimeout(() => root.render(<NewPage />, container), 2000)