import React from "react";
import "./Amenities.css";

const projectList = [
  {
    image: "image/Modular.jpg",
    title: "Modular Kitchen",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/Terrace.jpg",
    title: "Terrace Garden ",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/car.jpg",
    title: "Car Parking",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/gated.jpg",
    title: "Gated Compound",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/lift.jpg",
    title: "Branded Lift",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/Safety.jpg",
    title: "Fire Safety",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image:  "image/water.jpg",
    title: "2 Source Of Water 24*7",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  },
  {
    image: "image/Registeredproperty.jpg",
    title: "Registry & Loan Available",
    description: "We have taken care of the aesthetics and design of the kitchen will fully modular facilities.",
    
  }
  
];

export default function Amenities() {
  return (
    <div>
      <div className="row">
        {projectList.map((item, i) => {
          return (
            <div className="col-sm-6">
              <ListProject item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const ListProject = ({ item }) => {
  return (
    <div className="Amenities">
      <img src={item.image} />
      <div className=" Amenities childContent">
      <div style={{width:"100%"}}>
        <div className=" Amenitiesall">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      </div>
      </div>
      </div>
      </div>
    
  );
};
