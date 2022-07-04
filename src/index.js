import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
// const container = document.getElementById('app');
// const root = createRoot(container);


import { createRoot } from 'react-dom/client';



function App() {
    const [mousePosition, setMousePosition] = React.useState({ x: 9, y: 5 })

    React.useEffect(() => {
        document.addEventListener('mousemove', handleMouseMode);

        return () => {
            document.removeEventListener('mousemove', handleMouseMode)
        }
    }, []);

    function handleMouseMode(event) {
        setMousePosition({ x: event.pageX, y: event.pageY });
    }
    return (
        <div>
            <p>
                X: {mousePosition.x},
                Y: {mousePosition.y},
            </p>
        </div>
    )


}

function NewPage(props) {
    return <div> New Page</div>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);
// root.render(<App />);

setTimeout(() => root.render(<NewPage />, container), 2000)