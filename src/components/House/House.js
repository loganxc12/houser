import React from "react";

export default function House(props) {
    const { house, deleteHouse } = props;
    return (
        <div className="house">
            <div className="house-img-column">
                <div className="house-img"></div>
            </div>
            <div className="house-column">
                <p><strong>Property Name:</strong> {house.name} </p>
                <p><strong>Address:</strong> {house.address} </p>
                <p><strong>City:</strong> {house.city} </p>
                <p><strong>State:</strong> {house.state} </p>
            </div>
            <div className="house-column">
                <p><strong>Zipcode:</strong> {house.zip} </p>
                <p><strong>Image:</strong> {house.imageUrl} </p>
                <p><strong>Mortgage:</strong> {house.mortgage} </p>
                <p><strong>Rent:</strong> {house.rent} </p>
            </div>
            <a onClick={ () => deleteHouse(house.id) }>X</a>
        </div>
    )
}