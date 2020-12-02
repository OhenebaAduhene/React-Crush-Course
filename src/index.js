// Importing React and React-DOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText(){
    return "Click on me"
}

const style = {backgroundColor:'blue',color:'white'}

// Creat a react component
const App = function(){
    const buttonText = {text: 'Click Me!'};
    return(
        <div>
            <label className="label" for="name">Enter name: </label>
            <input id="name" type="text"/>
            <button style={style}>{buttonText.text}</button>
        </div>
    ); 
}

// Using react-dom to display component
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);