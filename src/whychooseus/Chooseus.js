import React from "react";
import'./chooseus.css';
const projectList = [
  {
    image: "image/water.png",
    title: "Hassle-Free Documentation",
  },
  {
    image: "image/Nobrokerage.jpg",
    title: "No Brokerage",
  },
  {
    image: "image/Nobrokerage.jpg",
    title: "15 Days Refund Policy",
  },
  {
    image: "image/Homeloan.jpg",
    title: "Home Loan",
  },
  {
    image: "image/Registeredproperty.jpg",
    title: "Registery Property",
  },
  {
    image: "image/Transparency.png",
    title: "Transparency",
  },

  ];

  export default function Chooseus() {
    return (
      <div>
        <div className="row">
          {projectList.map((item, i) => {
            return (
              <div className="col-sm-4">
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
      <div className="ChooseContent1">
       <div className="Chooseus">
        <img src={item.image} />
        <h3>{item.title}</h3>
      
        
        
        </div> 
      </div>
    );
  };
  