import React, { Component } from 'react';
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
     constructor(props) {
          super(props);
          this.state = {
               houses: []
          }
          this.getHousesFromServer = this.getHousesFromServer.bind(this);
          this.deleteHouseFromServer = this.deleteHouseFromServer.bind(this);
     }

     componentDidMount() {
          console.log('cdm');
          this.getHousesFromServer();
     }

     getHousesFromServer() {
          axios.get("/api/houses").then(response => {
               this.setState({ houses: response.data })
          })
     }

     deleteHouseFromServer(id) {
          axios.delete(`/api/houses/${id}`).then(response => {
               this.getHousesFromServer();
          })
     }

     render() {
          const { houses } = this.state;
          const housesToDisplay = houses.map(house => 
               <House key={house.id} house={house} deleteHouse={this.deleteHouseFromServer} /> 
          )
     return (
          <div className="app-background">
               <div className="dash-container">
                    <div className="dash-header">
                         <h1>Dashboard</h1>
                         <Link to="/wizard/step1"><button>Add New Property</button></Link>
                    </div>
                    <div className="houses-container">
                         <h3>Home Listings</h3>
                         { housesToDisplay }
                    </div>
               </div>
          </div>
     );
     }
}

export default Dashboard;
