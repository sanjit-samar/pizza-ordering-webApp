import React from "react";
import ReactDOM  from "react-dom";

function App(){
    return <h1>Hello There !</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

// React.render(<App/>)