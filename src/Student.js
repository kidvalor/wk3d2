import React from 'react';
import Score from "./Score"

function Student(props) {
        return (
            <div className="student-info">
            <h2>{props.student.name}</h2>  
           <p>{props.student.bio}</p>
           {
  props.student.scores.map((item, index) => (
    <Score key={index} score={item.score} date={item.date} />
  ))
}
            </div>
        );
}

export default Student;