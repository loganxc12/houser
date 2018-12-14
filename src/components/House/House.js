import React from "react";

export default function House(props) {
    const { house, deleteHouse } = props;
    return (
        <div>
            <p>Property Name: {house.name} </p>
            <p>Address: {house.address} </p>
            <p>City: {house.city} </p>
            <p>State: {house.state} </p>
            <p>Zip: {house.zip} </p>
            <button onClick={ () => deleteHouse(house.id) }>Delete</button>
        </div>
    )
}