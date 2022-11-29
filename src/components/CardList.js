import React from 'react';
import Card from './Card.js'

const CardList = (props) => {
    const cardComponent = props.robots.map((robot, index) => {
        return <Card
                    key={index} 
                    id={props.robots[index].id} 
                    name={props.robots[index].name} 
                    email={props.robots[index].email}
                    />
    })
    return (
    <div>
        {cardComponent}
    </div>
    )
}
export default CardList