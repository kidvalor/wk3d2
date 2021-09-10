import React from 'react';
import App from "./App"

function Score(props) {
   
        return (
            <div>
               <p>Their score was {props.score} on {props.date}</p>
            </div>
        );
    
}

export default Score