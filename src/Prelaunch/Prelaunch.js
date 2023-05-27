import React from "react";
import "./Prelaunch.css";
const projectList = [
  {
    image: "image/daisy.png",
    title: "Daisy Apartment T1",
    price: "2 BHK | ₹45 Lacs ",
    price1:"3 BHK | ₹65 Lacs ",
  },
  
  ];

export default function Prelaunch() {
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
        <div className="content">
        <h4>{item.price}<br></br>
        {item.price1}</h4>
        </div>
        </div>
        </div>
      </div>
    );
  };
  