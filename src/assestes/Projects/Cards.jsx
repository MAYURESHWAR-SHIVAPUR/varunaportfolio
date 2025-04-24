import React from 'react'
import ProjectsCss from './ProjectsCss.module.css'


const Cards = (props) => {
    const { title, first, second, third, Basic_info, ul, moreData, host, git } = props;

    return (
        <div className={ProjectsCss.child_1}>
            <h1>{title}</h1>

            <ul>
                <li>{first}</li>
                <li>{second}</li>
                <li>{third}</li>
            </ul>

            <p>{Basic_info}</p>

            <br />
            <details className={ProjectsCss.moreDetails}>
                <summary className="color">More Details</summary>

                <br />

                <h3 className="color font">Visit Website</h3>
                {git && <a href={git}>GitHub <span>Click Me!</span></a>}
                {host && <a href={host}>Hosted <span>Click Me!</span></a>}

                <br /><br /><br />

                <h3 className="color font">Languages Used</h3>
                {ul}
                <p>{moreData}</p>
            </details>
        </div>
    );
};

export default Cards;
