import React from "react";
import'./Prelaunching.css';
const projectList = [
  {
    image: "image/magnolia.png",
    title: "Magnolia Apartment",
    description:"Live in 2.5 Acres of Independent Compound facing Lush Green View in heart of South Delhi .",
    price: "2 BHK | ₹50 Lacs ",
    price1: "3 BHK | ₹70-₹75 Lacs ",
    price2: "4 BHK | ₹95 Lacs ",
    size: "810-1170 Sq. Ft.",
  },
  ];

export default function Prelaunching() {
    return (
      <div>
        <div className="row">
          {projectList.map((item) => {
            return (
              <div>
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
      <div className="parentContentprelaunch">
        <img src={item.image} />
        <div className="parentContent childContentprelaunch">
        <div style={{width:"100%"}}>
        <h3>{item.title}</h3>
        <div className="content1">
        <h4>{item.description}</h4>   
        <div className="content">
        <h4>{item.price}<br></br>
        {item.price1}<br></br>
        {item.price2}<br></br>
      </h4>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  };
  