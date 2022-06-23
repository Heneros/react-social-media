import React from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);


import { createRoot } from 'react-dom/client';

function App() {
    const people = ["John", "Victor", "Michael"];
    return people.map((person, id) => (
        <List key={id} person={person} />
    ));
}

function List(props) {
    return <li>{props.person}</li>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />);