import React from 'react'
import ProjectsCss from './ProjectsCss.module.css'


const Cards = (props) => {
    const { title, first, second, third, Basic_info } = props;

    return (
        <div className={ProjectsCss.child_1}>
            <h1>{title}</h1>

            <ul>
                <li>{first}</li>
                <li>{second}</li>
            </ul>

            <p>{Basic_info}</p>

            <br />
        </div>
    );
};

export default Cards;
