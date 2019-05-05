import React from 'react';


const Episode = (props) => {
    return (
        <div>
            <h3>{props.name} : S{props.season} : E{props.number}</h3>
                  <img src= {props.image} />
            <p>{props.summary}</p>
            <p><b>Air date:</b> {props.airdate}</p> 

        </div>
    )
}

export default Episode